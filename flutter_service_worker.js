'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';

const RESOURCES = {"assets/AssetManifest.bin": "c712b420239ea29334d73daebccd3c36",
"assets/AssetManifest.json": "4f93a9006f13f2d08050881f74c4f732",
"assets/assets/imgs/lat/1.jpg": "611fb67aa5460aec6e76f97ecfa423b5",
"assets/assets/imgs/lat/2.jpg": "d78f833ef711ba2a06dc1783254092aa",
"assets/assets/imgs/lat/3.jpg": "7d29569e40572ea44124d43fee566c0b",
"assets/assets/imgs/lat/profile.jpg": "74c8f331472e98305487bffb695b2177",
"assets/assets/imgs/logo.png": "274897d389d7874dd636bb70e432b306",
"assets/assets/imgs/logo_.png": "29c8d3d13e6871c172d55cac3642d76e",
"assets/assets/imgs/logo__.png": "3b445246e1f01c99db3a035d134bff25",
"assets/assets/logo_play.jpg": "5fe96419ffa598dc5057ec6e7c63ff96",
"assets/assets/lotties/book.json": "0cebf56d68daa2e3893f41a7d98cfee3",
"assets/assets/lotties/book2.json": "7aa97258ea1e33b204d22d8b0e8aeefc",
"assets/assets/svgs/add_friends.svg": "8ef90046efe6a7a0e18d10f48a9ff452",
"assets/assets/svgs/businessman.svg": "bdf830803576a8cd32cbffce4910ad3b",
"assets/assets/svgs/children.svg": "fc5e8d2f4c69693e859a915e31598f8b",
"assets/assets/svgs/insert.svg": "f8db9f410ece46eba3aad5766f432141",
"assets/assets/svgs/login.svg": "aaa0661033f1840246972e28063577eb",
"assets/assets/svgs/male_avatar.svg": "21b1df37aca20c88b9310e32210f80a4",
"assets/assets/svgs/new_entries.svg": "2b869d328bb162cb57543c2573194c24",
"assets/assets/svgs/no_data.svg": "ad17058e0be79216b2a5ad2a66b2769c",
"assets/assets/svgs/teaching.svg": "27ba8917db01872da3d8a5c7d1a95c3e",
"assets/assets/svgs/time_management.svg": "30d4fb465bcdb0f0b6e45e349125c67b",
"assets/assets/svgs/update.svg": "462cf5988e0ae8ee01208e40997077d6",
"assets/FontManifest.json": "dc3d03800ccca4601324923c0b1d6d57",
"assets/fonts/MaterialIcons-Regular.otf": "cc4658e231c1422e013621a238c9ce92",
"assets/NOTICES": "f84c38836a32f8c81c826185a0dc31ef",
"assets/packages/awesome_notifications/test/assets/images/test_image.png": "c27a71ab4008c83eba9b554775aa12ca",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "e1c0d8a53098fc8e838aca4be765ccfc",
"assets/packages/fluttertoast/assets/toastify.css": "a85675050054f179444bc5ad70ffc635",
"assets/packages/fluttertoast/assets/toastify.js": "56e2c9cedd97f10e7e5f1cebd85d53e3",
"assets/shaders/ink_sparkle.frag": "f8b80e740d33eb157090be4e995febdf",
"canvaskit/canvaskit.js": "76f7d822f42397160c5dfc69cbc9b2de",
"canvaskit/canvaskit.wasm": "f48eaf57cada79163ec6dec7929486ea",
"canvaskit/chromium/canvaskit.js": "8c8392ce4a4364cbb240aa09b5652e05",
"canvaskit/chromium/canvaskit.wasm": "fc18c3010856029414b70cae1afc5cd9",
"canvaskit/skwasm.js": "1df4d741f441fa1a4d10530ced463ef8",
"canvaskit/skwasm.wasm": "6711032e17bf49924b2b001cef0d3ea3",
"canvaskit/skwasm.worker.js": "19659053a277272607529ef87acf9d8a",
"favicon.png": "5dcef449791fa27946b3d35ad8803796",
"flutter.js": "6b515e434cea20006b3ef1726d2c8894",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"icons/Icon-maskable-192.png": "c457ef57daa1d16f64b27b786ec2ea3c",
"icons/Icon-maskable-512.png": "301a7604d45b3e739efc881eb04896ea",
"index.html": "09aa12b9d2272b338c8eda8b9d864237",
"/": "09aa12b9d2272b338c8eda8b9d864237",
"main.dart.js": "d07b8bda0c38d7b1baabc8dedeb36598",
"manifest.json": "078ffa6eebb8050bef43b1447864b3ac",
"splash/img/dark-1x.png": "10fd6edccb6dfc914f2583b6f739d5e6",
"splash/img/dark-2x.png": "861b78cb4020e098d57cf0b7d94e8714",
"splash/img/dark-3x.png": "1fb88c2404c235ee669cbddfdd30fdc1",
"splash/img/dark-4x.png": "5b7704f7c363b9f1dc5038eb86eafc9b",
"splash/img/light-1x.png": "10fd6edccb6dfc914f2583b6f739d5e6",
"splash/img/light-2x.png": "861b78cb4020e098d57cf0b7d94e8714",
"splash/img/light-3x.png": "1fb88c2404c235ee669cbddfdd30fdc1",
"splash/img/light-4x.png": "5b7704f7c363b9f1dc5038eb86eafc9b",
"version.json": "40a7f25b6e71430d25fecad6540fde16"};
// The application shell files that are downloaded before a service worker can
// start.
const CORE = ["main.dart.js",
"index.html",
"assets/AssetManifest.json",
"assets/FontManifest.json"];

// During install, the TEMP cache is populated with the application shell files.
self.addEventListener("install", (event) => {
  self.skipWaiting();
  return event.waitUntil(
    caches.open(TEMP).then((cache) => {
      return cache.addAll(
        CORE.map((value) => new Request(value, {'cache': 'reload'})));
    })
  );
});
// During activate, the cache is populated with the temp files downloaded in
// install. If this service worker is upgrading from one with a saved
// MANIFEST, then use this to retain unchanged resource files.
self.addEventListener("activate", function(event) {
  return event.waitUntil(async function() {
    try {
      var contentCache = await caches.open(CACHE_NAME);
      var tempCache = await caches.open(TEMP);
      var manifestCache = await caches.open(MANIFEST);
      var manifest = await manifestCache.match('manifest');
      // When there is no prior manifest, clear the entire cache.
      if (!manifest) {
        await caches.delete(CACHE_NAME);
        contentCache = await caches.open(CACHE_NAME);
        for (var request of await tempCache.keys()) {
          var response = await tempCache.match(request);
          await contentCache.put(request, response);
        }
        await caches.delete(TEMP);
        // Save the manifest to make future upgrades efficient.
        await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
        // Claim client to enable caching on first launch
        self.clients.claim();
        return;
      }
      var oldManifest = await manifest.json();
      var origin = self.location.origin;
      for (var request of await contentCache.keys()) {
        var key = request.url.substring(origin.length + 1);
        if (key == "") {
          key = "/";
        }
        // If a resource from the old manifest is not in the new cache, or if
        // the MD5 sum has changed, delete it. Otherwise the resource is left
        // in the cache and can be reused by the new service worker.
        if (!RESOURCES[key] || RESOURCES[key] != oldManifest[key]) {
          await contentCache.delete(request);
        }
      }
      // Populate the cache with the app shell TEMP files, potentially overwriting
      // cache files preserved above.
      for (var request of await tempCache.keys()) {
        var response = await tempCache.match(request);
        await contentCache.put(request, response);
      }
      await caches.delete(TEMP);
      // Save the manifest to make future upgrades efficient.
      await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
      // Claim client to enable caching on first launch
      self.clients.claim();
      return;
    } catch (err) {
      // On an unhandled exception the state of the cache cannot be guaranteed.
      console.error('Failed to upgrade service worker: ' + err);
      await caches.delete(CACHE_NAME);
      await caches.delete(TEMP);
      await caches.delete(MANIFEST);
    }
  }());
});
// The fetch handler redirects requests for RESOURCE files to the service
// worker cache.
self.addEventListener("fetch", (event) => {
  if (event.request.method !== 'GET') {
    return;
  }
  var origin = self.location.origin;
  var key = event.request.url.substring(origin.length + 1);
  // Redirect URLs to the index.html
  if (key.indexOf('?v=') != -1) {
    key = key.split('?v=')[0];
  }
  if (event.request.url == origin || event.request.url.startsWith(origin + '/#') || key == '') {
    key = '/';
  }
  // If the URL is not the RESOURCE list then return to signal that the
  // browser should take over.
  if (!RESOURCES[key]) {
    return;
  }
  // If the URL is the index.html, perform an online-first request.
  if (key == '/') {
    return onlineFirst(event);
  }
  event.respondWith(caches.open(CACHE_NAME)
    .then((cache) =>  {
      return cache.match(event.request).then((response) => {
        // Either respond with the cached resource, or perform a fetch and
        // lazily populate the cache only if the resource was successfully fetched.
        return response || fetch(event.request).then((response) => {
          if (response && Boolean(response.ok)) {
            cache.put(event.request, response.clone());
          }
          return response;
        });
      })
    })
  );
});
self.addEventListener('message', (event) => {
  // SkipWaiting can be used to immediately activate a waiting service worker.
  // This will also require a page refresh triggered by the main worker.
  if (event.data === 'skipWaiting') {
    self.skipWaiting();
    return;
  }
  if (event.data === 'downloadOffline') {
    downloadOffline();
    return;
  }
});
// Download offline will check the RESOURCES for all files not in the cache
// and populate them.
async function downloadOffline() {
  var resources = [];
  var contentCache = await caches.open(CACHE_NAME);
  var currentContent = {};
  for (var request of await contentCache.keys()) {
    var key = request.url.substring(origin.length + 1);
    if (key == "") {
      key = "/";
    }
    currentContent[key] = true;
  }
  for (var resourceKey of Object.keys(RESOURCES)) {
    if (!currentContent[resourceKey]) {
      resources.push(resourceKey);
    }
  }
  return contentCache.addAll(resources);
}
// Attempt to download the resource online before falling back to
// the offline cache.
function onlineFirst(event) {
  return event.respondWith(
    fetch(event.request).then((response) => {
      return caches.open(CACHE_NAME).then((cache) => {
        cache.put(event.request, response.clone());
        return response;
      });
    }).catch((error) => {
      return caches.open(CACHE_NAME).then((cache) => {
        return cache.match(event.request).then((response) => {
          if (response != null) {
            return response;
          }
          throw error;
        });
      });
    })
  );
}
