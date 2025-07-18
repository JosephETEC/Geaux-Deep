
self.addEventListener('install', function(event) {
  event.waitUntil(
    caches.open('geauxdeep-cache-v1').then(function(cache) {
      return cache.addAll([
        '/index.html',
        '/tracker.html',
        '/shop.html',
        '/about.html',
        '/contact.html',
        '/style.css',
        '/hero.jpg'
      ]);
    })
  );
});

self.addEventListener('fetch', function(event) {
  event.respondWith(
    caches.match(event.request).then(function(response) {
      return response || fetch(event.request);
    })
  );
});
