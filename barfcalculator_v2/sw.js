const CACHE = 'barf-cache-v1';
const ASSETS = [
  '/barfcalculator/',
  '/barfcalculator/index.html',
  '/barfcalculator/manifest.json',
  '/barfcalculator/icons/web-app-manifest-192x192.png',
  '/barfcalculator/icons/web-app-manifest-512x512.png'
];

navigator.serviceWorker.register('/barfcalculator/sw.js');

self.addEventListener('install', (e) => {
  e.waitUntil(caches.open(CACHE).then(c => c.addAll(ASSETS)));
});
self.addEventListener('activate', (e) => {
  e.waitUntil(
    caches.keys().then(keys => Promise.all(
      keys.filter(k => k !== CACHE).map(k => caches.delete(k))
    ))
  );
});
self.addEventListener('fetch', (e) => {
  e.respondWith(
    caches.match(e.request).then(res => res || fetch(e.request))
  );
});
