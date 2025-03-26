self.addEventListener('install', event => {
    console.log("Service Worker instalado");

    event.waitUntil(
        caches.open('vylnara-cache').then(cache => {
            return cache.addAll([
                './index.html',
                './historia.html',
                './proceso.html',
                './style.css',
                './manifest.json',
                './creacion.html',

                './IMG/logo-glitch-hunters.png',
                './IMG/logo-vylnara.png',
                './IMG/logo-vylnara-48.png',
                './IMG/logo-vylnara-72.png',
                './IMG/logo-vylnara-96.png',
                './IMG/logo-vylnara-144.png',
                './IMG/logo-vylnara-192.png',
                './IMG/logo-vylnara-512.png',

                './IMG/screenshot1.jpg',
                './IMG/screenshot2.jpg',
                './IMG/screenshot3.jpg',

                './IMG/desktop.jpg',
                './IMG/mobile.jpg'
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