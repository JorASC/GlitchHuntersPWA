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
                './IMG/mapa-vynara',

                './IMG/screenshot1.jpg',
                './IMG/screenshot2.jpg',
                './IMG/screenshot3.jpg',

                './IMG/desktop.jpg',
                './IMG/mobile.jpg',

                './IMG/members/diego-castillo.jpg',
                './IMG/members/elias-orozco.png',
                './IMG/members/jorge-sanchez.jpg',
                './IMG/members/juan-castro.jpg',
                './IMG/members/alejandro-tarango.jpg',

                './IMG/story/criatura-cielo-rojo.jpg',
                './IMG/story/elarion-viejo.jpg',
                './IMG/story/storyboard.jpg',
                './IMG/story/storyboard2.jpg',
                './IMG/story/vynara-trabajand-carpinteria.jpg',
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