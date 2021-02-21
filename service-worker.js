var cacheName = ' petstore-v1';
var cacheFiles = [
    'index.html',
    'products.js',
    'petstore.webmanifest',
    'images/airJ.jpg',
    'images/among-us.png',
    'images/babyYoda.jpg',
    'images/catfood.jpg',
    'images/catH.jpg',
    'images/download.png',
    'images/icon.png'

];

self.addEventListener('install', (e) => {
    console.log('[Service Worker] Install');
    e.waitUntil(caches.open(cacheName).then((cache) => {
        console.log('[Service Worker] Caching all the files');
        return cache.addAll(cacheFiles);
    }));
});