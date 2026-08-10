const CACHE_NAME = "team-sor-v43";

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
            .then(() => self.skipWaiting())

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

        caches.keys().then(keys => {

            return Promise.all(

                keys.map(key => {

                    if (key !== CACHE_NAME) {
                        return caches.delete(key);
                    }

                })

            );

        }).then(() => {

            console.log("SERVICE WORKER AKTIVERT");

            return self.clients.claim();

        })

    );

});