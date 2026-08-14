<script setup lang="ts">
import { computed, reactive, ref } from 'vue';
import type { ContactFormData, ContactFormErrors, ContactFormStatus } from '@/types/contact';

const form = reactive<ContactFormData>({
    firstName: '',
    lastName: '',
    email: '',
    subject: '',
    message: '',
    consent: false,
});

const errors = reactive<ContactFormErrors>({});
const status = ref<ContactFormStatus>('idle');
const hasSubmitted = ref(false);
const validatedPayload = ref<ContactFormData | null>(null);
const touchedFields = reactive<Record<keyof ContactFormData, boolean>>({
    firstName: false,
    lastName: false,
    email: false,
    subject: false,
    message: false,
    consent: false,
});

const isSubmitting = computed(() => status.value === 'submitting');
const hasStatusMessage = computed(
    () => (hasSubmitted.value && status.value === 'validation-error') || status.value === 'server-error',
);

function clearErrors() {
    (Object.keys(errors) as Array<keyof ContactFormErrors>).forEach((key) => {
        delete errors[key];
    });
}

function validateForm() {
    clearErrors();

    if (!form.firstName.trim()) {
        errors.firstName = 'Enter your first name.';
    }

    if (!form.lastName.trim()) {
        errors.lastName = 'Enter your last name.';
    }

    if (!form.email.trim()) {
        errors.email = 'Enter your email address.';
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email.trim())) {
        errors.email = 'Enter a valid email address.';
    }

    if (!form.subject.trim()) {
        errors.subject = 'Enter a subject.';
    }

    if (!form.message.trim()) {
        errors.message = 'Enter your message.';
    }

    if (!form.consent) {
        errors.consent = 'Confirm that the institution may contact you about this enquiry.';
    }

    return Object.keys(errors).length === 0;
}

function shouldShowError(field: keyof ContactFormData) {
    return Boolean(errors[field] && (touchedFields[field] || hasSubmitted.value));
}

function markTouched(field: keyof ContactFormData) {
    touchedFields[field] = true;

    if (validateForm() && status.value === 'validation-error') {
        status.value = 'idle';
    }
}

function submitForm() {
    hasSubmitted.value = true;

    if (!validateForm()) {
        status.value = 'validation-error';

        return;
    }

    validatedPayload.value = {
        firstName: form.firstName.trim(),
        lastName: form.lastName.trim(),
        email: form.email.trim(),
        subject: form.subject.trim(),
        message: form.message.trim(),
        consent: form.consent,
    };

    status.value = 'server-error';
}
</script>

<template>
    <form id="public-contact-enquiry-form" class="public-contact-form" novalidate @submit.prevent="submitForm">
        <div class="row g-5">
            <div class="col-md-6">
                <div class="rs-contact-input">
                    <label class="visually-hidden" for="contact-first-name">First name</label>
                    <input
                        id="contact-first-name"
                        v-model="form.firstName"
                        type="text"
                        name="firstName"
                        placeholder="First name *"
                        autocomplete="given-name"
                        :aria-invalid="shouldShowError('firstName')"
                        aria-describedby="contact-first-name-error"
                        @blur="markTouched('firstName')"
                    />
                    <p v-if="shouldShowError('firstName')" id="contact-first-name-error" class="public-contact-form-error">
                        {{ errors.firstName }}
                    </p>
                </div>
            </div>
            <div class="col-md-6">
                <div class="rs-contact-input">
                    <label class="visually-hidden" for="contact-last-name">Last name</label>
                    <input
                        id="contact-last-name"
                        v-model="form.lastName"
                        type="text"
                        name="lastName"
                        placeholder="Last name *"
                        autocomplete="family-name"
                        :aria-invalid="shouldShowError('lastName')"
                        aria-describedby="contact-last-name-error"
                        @blur="markTouched('lastName')"
                    />
                    <p v-if="shouldShowError('lastName')" id="contact-last-name-error" class="public-contact-form-error">
                        {{ errors.lastName }}
                    </p>
                </div>
            </div>
            <div class="col-md-6">
                <div class="rs-contact-input">
                    <label class="visually-hidden" for="contact-email">Email address</label>
                    <input
                        id="contact-email"
                        v-model="form.email"
                        type="email"
                        name="email"
                        placeholder="Email address *"
                        autocomplete="email"
                        :aria-invalid="shouldShowError('email')"
                        aria-describedby="contact-email-error"
                        @blur="markTouched('email')"
                    />
                    <p v-if="shouldShowError('email')" id="contact-email-error" class="public-contact-form-error">
                        {{ errors.email }}
                    </p>
                </div>
            </div>
            <div class="col-md-6">
                <div class="rs-contact-input">
                    <label class="visually-hidden" for="contact-subject">Subject</label>
                    <input
                        id="contact-subject"
                        v-model="form.subject"
                        type="text"
                        name="subject"
                        placeholder="Subject *"
                        :aria-invalid="shouldShowError('subject')"
                        aria-describedby="contact-subject-error"
                        @blur="markTouched('subject')"
                    />
                    <p v-if="shouldShowError('subject')" id="contact-subject-error" class="public-contact-form-error">
                        {{ errors.subject }}
                    </p>
                </div>
            </div>
            <div class="col-md-12">
                <div class="rs-contact-input">
                    <label class="visually-hidden" for="contact-message">Message</label>
                    <textarea
                        id="contact-message"
                        v-model="form.message"
                        name="message"
                        placeholder="Write your message *"
                        :aria-invalid="shouldShowError('message')"
                        aria-describedby="contact-message-error"
                        @blur="markTouched('message')"
                    />
                    <p v-if="shouldShowError('message')" id="contact-message-error" class="public-contact-form-error">
                        {{ errors.message }}
                    </p>
                </div>
            </div>
            <div class="col-md-12">
                <div class="rs-form-check">
                    <input
                        id="contact-consent"
                        v-model="form.consent"
                        name="consent"
                        type="checkbox"
                        :aria-invalid="shouldShowError('consent')"
                        aria-describedby="contact-consent-error"
                        @blur="markTouched('consent')"
                    />
                    <label for="contact-consent">I agree to be contacted about this enquiry.</label>
                </div>
                <p v-if="shouldShowError('consent')" id="contact-consent-error" class="public-contact-form-error">
                    {{ errors.consent }}
                </p>
            </div>
            <div class="col-md-12">
                <div v-if="hasStatusMessage" class="public-contact-form-status" role="status" aria-live="polite">
                    <span v-if="status === 'validation-error'">Please correct the highlighted fields.</span>
                    <span v-else>
                        Online enquiry submission is not currently available. Please use the contact channels listed on
                        this page.
                    </span>
                </div>
                <div class="rs-contact-btn">
                    <button class="rs-btn has-icon has-theme-red hover-black" type="submit" :disabled="isSubmitting">
                        <span class="btn-text-wrap">
                            <span class="text-default">{{ isSubmitting ? 'Sending...' : 'Send Message' }}</span>
                            <span class="text-hover">{{ isSubmitting ? 'Sending...' : 'Send Message' }}</span>
                        </span>
                        <span class="icon-box has-rotate">
                            <i class="ri-send-plane-line" aria-hidden="true" />
                        </span>
                    </button>
                </div>
            </div>
        </div>
    </form>
</template>
