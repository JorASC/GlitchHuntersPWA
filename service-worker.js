self.addEventListener('install', event => {
    console.log("Service Worker instalado");
    event.waitUntil(
        caches.open('vylnara-cache').then(cache => {
            return cache.addAll([
                '/',
                '/index.html',
                '/style.css',
                '/manifest.json',
                '/img/logo-glitch-hunters.png',
                '/img/logo-vylnara.png',
                '/img/screenshot1.jpg',
                '/img/screenshot2.jpg',
                '/img/screenshot3.jpg'
            ]);
        })
    );
});

self.addEventListener('fetch', event => {
    event.respondWith(
        caches.match(event.request).then(response => {
            return response || fetch(event.request);
        })
    );
});