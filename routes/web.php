<?php

use Illuminate\Support\Facades\Route;
use Inertia\Inertia;

Route::inertia('/', 'Public/Home')->name('home');
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
