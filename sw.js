const CACHE_NAME = "team-sor-v31";

const FILES = [
    "./",
    "./index.html",
    "./gerica.css",
    "./app.js",
    "./manifest.json",
    "./images/logo-192.png",
    "./images/logo-512.png"
];

self.addEventListener("install", event => {

    event.waitUntil(

        caches.open(CACHE_NAME)
            .then(cache => cache.addAll(FILES))

    );

});

self.addEventListener("fetch", event => {

    event.respondWith(

        caches.match(event.request)
            .then(response => response || fetch(event.request))

    );

});

self.addEventListener("activate", event => {

    event.waitUntil(

        Promise.all([

            // Slett gamle cacher
            caches.keys().then(keys => {

                return Promise.all(

                    keys.map(key => {

                        if (key !== CACHE_NAME) {
                            return caches.delete(key);
                        }

                    })

                );

            }),

            // La Service Worker ta kontroll over siden med en gang
            self.clients.claim()

        ])

    );

});