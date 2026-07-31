<?php

use Illuminate\Support\Facades\Route;
use Inertia\Inertia;

Route::inertia('/', 'Public/Home')->name('home');
Route::inertia('/about', 'Public/About/Index')->name('about.index');
Route::inertia('/alumni', 'Public/Alumni/Index')->name('alumni.index');
Route::get('/alumni/{slug}', function (string $slug) {
    abort_unless(in_array($slug, [
        'esther-howard',
        'albert-flores',
        'kathryn-murphy',
        'leslie-alexander',
        'guy-hawkins',
        'floyd-miles',
    ], true), 404);

    return Inertia::render('Public/Alumni/Show', [
        'slug' => $slug,
    ]);
})->name('alumni.show');
Route::inertia('/events', 'Public/Events/Index')->name('events.index');
Route::get('/events/{slug}', function (string $slug) {
    abort_unless(in_array($slug, [
        'academic-excellence-intellectual-development',
        'research-innovation-showcase',
        'digital-transformation-technology-future',
        'career-readiness-workforce-transformation',
        'community-service-and-impact-day',
        'student-leadership-conference',
        'library-research-skills-workshop',
        'health-sciences-open-seminar',
        'entrepreneurship-innovation-clinic',
    ], true), 404);

    return Inertia::render('Public/Events/Show', [
        'slug' => $slug,
    ]);
})->name('events.show');
Route::inertia('/service-units', 'Public/ServiceUnits/Index')->name('service-units.index');
Route::inertia('/faculties', 'Public/Faculties/Index')->name('faculties.index');
Route::inertia('/departments', 'Public/Departments/Index')->name('departments.index');
Route::get('/departments/{slug}', function (string $slug) {
    abort_unless(in_array($slug, [
        'computer-science',
        'software-engineering',
        'cybersecurity',
        'electrical-and-electronic-engineering',
        'civil-engineering',
        'business-administration',
        'economics',
        'mass-communication',
        'public-health',
        'nursing-science',
    ], true), 404);

    return Inertia::render('Public/Departments/Show', [
        'slug' => $slug,
    ]);
})->name('departments.show');
Route::get('/faculties/{slug}', function (string $slug) {
    abort_unless(in_array($slug, [
        'computing-and-technology',
        'engineering',
        'management-and-social-sciences',
        'arts-and-humanities',
        'health-sciences',
    ], true), 404);

    return Inertia::render('Public/Faculties/Show', [
        'slug' => $slug,
    ]);
})->name('faculties.show');
Route::inertia('/news', 'Public/News/Index')->name('news.index');
Route::get('/news/{slug}', fn (string $slug) => Inertia::render('Public/News/Show', [
    'slug' => $slug,
]))->name('news.show');

Route::middleware(['auth', 'verified'])->group(function () {
    Route::inertia('dashboard', 'Dashboard')->name('dashboard');
});

require __DIR__.'/settings.php';
