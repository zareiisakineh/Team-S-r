// ==================================================
// TEAM SØR SERVICE WORKER
// PWA CACHE + ONESIGNAL PUSH
// ==================================================

const CACHE_NAME = "team-sor-202";

const FILES = [
    "./",
    "./index.html",
    "./gerica.css",
    "./app.js",
    "./ansatteFirestore.js",
    "./manifest.json",
    "./images/logo-192.png",
    "./images/logo-512.png"
];


// ==================================================
// INSTALL
// ==================================================

self.addEventListener("install", event => {

    console.log("TEAM SØR SERVICE WORKER INSTALLERES");

    event.waitUntil(

        caches.open(CACHE_NAME)

            .then(cache => {

                return cache.addAll(FILES);

            })

            .then(() => {

                return self.skipWaiting();

            })

    );

});


// ==================================================
// ACTIVATE
// ==================================================

self.addEventListener("activate", event => {

    event.waitUntil(

        caches.keys()

            .then(keys => {

                return Promise.all(

                    keys.map(key => {

                        if (key !== CACHE_NAME) {

                            return caches.delete(key);

                        }

                    })

                );

            })

            .then(() => {

                console.log(
                    "TEAM SØR SERVICE WORKER AKTIVERT:",
                    CACHE_NAME
                );

                return self.clients.claim();

            })

    );

});


// ==================================================
// FETCH
// ==================================================

self.addEventListener("fetch", event => {

    const url = new URL(event.request.url);

    // --------------------------------------------------
    // IKKE LA SERVICE WORKER HÅNDTERE APPS SCRIPT
    // --------------------------------------------------

    if (
        url.hostname === "script.google.com" ||
        url.hostname === "script.googleusercontent.com"
    ) {

        return;

    }


    // --------------------------------------------------
    // IKKE CACHE POST / PUT / DELETE
    // --------------------------------------------------

    if (event.request.method !== "GET") {

        return;

    }


    // --------------------------------------------------
    // VANLIG PWA CACHE
    // --------------------------------------------------

    event.respondWith(

        caches.match(event.request)

            .then(response => {

                if (response) {

                    return response;

                }

                return fetch(event.request);

            })

    );

});