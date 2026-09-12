const CACHE_NAME = 'tgt-cache-v1';
const ASSETS = [
  './index.html',
  './style.css',
  './logo.png',
  './branham.png',
  './pasteur.jpg'
];

self.addEventListener('install', (e) => {
  e.waitUntil(
    caches.open(CACHE_NAME).then((cache) => {
      return cache.addAll(ASSETS);
    })
  );
});

self.addEventListener('fetch', (e) => {
  e.respondWith(
    caches.match(e.request).then((response) => {
      return response || fetch(e.request);
    })
  );
});
