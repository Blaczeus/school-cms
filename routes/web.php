<?php

use Illuminate\Support\Facades\Route;
use Inertia\Inertia;

Route::inertia('/', 'Public/Home')->name('home');
Route::inertia('/news', 'Public/News/Index')->name('news.index');
Route::get('/news/{slug}', fn (string $slug) => Inertia::render('Public/News/Show', [
    'slug' => $slug,
]))->name('news.show');

Route::middleware(['auth', 'verified'])->group(function () {
    Route::inertia('dashboard', 'Dashboard')->name('dashboard');
});

require __DIR__.'/settings.php';
