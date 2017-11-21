self.addEventListener('install', function(event) {
    console.log("install event")
});

self.addEventListener('fetch', function(event) {
    console.log("fetch event");
});
