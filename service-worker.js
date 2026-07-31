const CACHE_NAME = "team-sor-v10";

const filer = [
    "./",
    "./index.html",
    "./gerica.css",
    "./app.js"

];
self.addEventListener("install", event => {

    event.waitUntil(
        caches.open(CACHE_NAME)
        .then(cache => {
            return cache.addAll(filer);
        })
    );

});


self.addEventListener("fetch", event => {

    event.respondWith(
        caches.match(event.request)
        .then(response => {

            return response || fetch(event.request);

        })
    );

});