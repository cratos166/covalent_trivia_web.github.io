'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';
const RESOURCES = {
  "version.json": "26b9157949380fefaa2b83e30e6b28b8",
"index.html": "051b3c84d4ba34563592431f38943d15",
"/": "051b3c84d4ba34563592431f38943d15",
"main.dart.js": "242bbbae5cc410c2dfe1b9d1f2cfa509",
"flutter.js": "0816e65a103ba8ba51b174eeeeb2cb67",
"favicon.png": "5dcef449791fa27946b3d35ad8803796",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"icons/Icon-maskable-192.png": "c457ef57daa1d16f64b27b786ec2ea3c",
"icons/Icon-maskable-512.png": "301a7604d45b3e739efc881eb04896ea",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"manifest.json": "ce5c9a105fd0c1c740ae51d28e4a2683",
"assets/AssetManifest.json": "4a58178d39dbb5114ccd0c66913cdd60",
"assets/NOTICES": "b9f83ef00253fd78844c65f08ebf0c01",
"assets/FontManifest.json": "5a32d4310a6f5d9a6b651e75ba0d7372",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "6d342eb68f170c97609e9da345464e5e",
"assets/packages/font_awesome_flutter/lib/fonts/fa-solid-900.ttf": "aa1ec80f1b30a51d64c72f669c1326a7",
"assets/packages/font_awesome_flutter/lib/fonts/fa-regular-400.ttf": "5178af1d278432bec8fc830d50996d6f",
"assets/packages/font_awesome_flutter/lib/fonts/fa-brands-400.ttf": "b37ae0f14cbc958316fac4635383b6e8",
"assets/shaders/ink_sparkle.frag": "38d4e007093baa2150fbf4fd0bc2d873",
"assets/fonts/MaterialIcons-Regular.otf": "95db9098c58fd6db106f1116bae85a0b",
"assets/assets/expert11male.png": "5b646ef5fb4b8ff2b49f829745215a77",
"assets/assets/sign_up.json": "fda8d7c4e9bf3d49df504bb4f3373fd7",
"assets/assets/sa.json": "a59bab9e3f7ceb201da75536724b1f7f",
"assets/assets/google_anim.gif": "bc04403d8e84d337b8e357b9a2a8bf7d",
"assets/assets/avataranim.json": "1436c55af76266a12bfac719d257af54",
"assets/assets/expert9female.png": "a28fea17a6d4d80ee0453f13579ea664",
"assets/assets/expert10male.png": "a004a853f4fe67897988fd548a5c9c5c",
"assets/assets/expert3male.png": "3106174a02d18cd324e45c74c2ddb23d",
"assets/assets/ava11.png": "50af588a0014ea99959ac8e47e6a62d4",
"assets/assets/ava8.png": "76f3534000101c114c55020316a81afe",
"assets/assets/on_boarding_1.gif": "d41d8cd98f00b204e9800998ecf8427e",
"assets/assets/covalent_dark_icon.png": "f520376ef12bf64fe2068924b8aa5ecf",
"assets/assets/ava9.png": "de43db2e9dcde302830f4f51bf3173da",
"assets/assets/ava10.png": "2d2c84a73a990f9c9592861b1caaeac0",
"assets/assets/ava12.png": "4b4decbd17985bb0efaaef6ebb4697a3",
"assets/assets/ava13.png": "4fe35c95c3a7d8cfb71bcc8acbe42f54",
"assets/assets/expert12male.png": "ab2f3463dd80bdd457162277cf0fe941",
"assets/assets/ava17.png": "ea93b0ae98d5922e67a8253c1711db24",
"assets/assets/tickanim.json": "1191a58ba9c2432b6373c461fb620ddc",
"assets/assets/notans.json": "762c5f7d94c67039da17a8339bb9e39f",
"assets/assets/lifeline_expert_advice.png": "6e43d677bf2191f7fe8576e5f9c64515",
"assets/assets/ava16.png": "a8e29188fed9e3aacec44ae99a49aeea",
"assets/assets/expert8female.png": "d61d962441e4a9a22ffa630de83feb37",
"assets/assets/ava14.png": "a15e86e4cbb57aafab031021f9668e48",
"assets/assets/expert2male.png": "06e217af27129cba1c3155db27ca7f95",
"assets/assets/ava15.png": "df5191ef84b730aa9af759abe3ddb760",
"assets/assets/ava24.png": "701c94dda7ffba06444d5574a3c13ed3",
"assets/assets/ava18.png": "2e773060dc736936a0d232214b9f5d32",
"assets/assets/ava1.png": "b1c7c0d8bc4b1b2c57ebd6fa87bf34a3",
"assets/assets/lifeline_flip.png": "4be7c5a94ed27ff0881a5192ffcff6c3",
"assets/assets/expert7male.png": "76384351f50feec392c0451c0ba6173f",
"assets/assets/ava19.png": "ec8056d4bf167869dd577628677bb9b5",
"assets/assets/ava25.png": "f2cc2b03125dcb10fea4f97bd3d702eb",
"assets/assets/ava2.png": "b3f79d84ad8b949c811be77e41cf43f5",
"assets/assets/lifeline_audience.png": "e5e02634f289ada66acd7fbd49f11f64",
"assets/assets/ava3.png": "ec0b1baa012d29d7d1a2fd74d5d52879",
"assets/assets/ava26.png": "98a05ab78310b40aa67a3a796c593dee",
"assets/assets/screen1.gif": "a19889528f7429cb1e56dfb495ccda88",
"assets/assets/ava22.png": "c76a8c924ea419db9019b2fce7c5c99c",
"assets/assets/ava7.png": "06ef46bfdc38d1b96468f7ecba83bdaf",
"assets/assets/logo_anim.gif": "4238a2c5f3667fff575c7ac1c158973c",
"assets/assets/expert6female.png": "d152459d9a9e40193e95f418d59e79ef",
"assets/assets/ava6.png": "f4f2a3e76e6338a6c01678e19768c00b",
"assets/assets/ava23.png": "fe23eddf2f1eaf467b130a09107483bd",
"assets/assets/screen2.gif": "2e11b940d0e400399f9f6a605ff8d329",
"assets/assets/ava21.png": "11261c183ed1b6223804c22818e52a7e",
"assets/assets/ava4.png": "985e2eebafd0a6920419a9ceec3d54ea",
"assets/assets/ava5.png": "c5809625dbfe530069e3a96de6aae780",
"assets/assets/ava20.png": "59975e71672bed4496078b9ead74edef",
"assets/assets/expert1female.png": "003ec9938edaaf468f09fd9c7dc2e103",
"assets/assets/wronganim.json": "f7e14b5556bdcc1911117ba2542eea59",
"assets/assets/expert4male.png": "6acc05c2ce05068c717959a77d0290cc",
"assets/assets/blockchain_anim.json": "d394e4e8885b0590c08e2a0754d4571c",
"assets/assets/expert5male.png": "f408cbed9c7b8612ebb218995bf6a525",
"assets/assets/default_pic.png": "425fb920f71bf7831292ef48729d9e8d",
"assets/assets/loading_anim.json": "c1a232743b5fc382ab8c0fcf5f816e64",
"canvaskit/canvaskit.js": "c2b4e5f3d7a3d82aed024e7249a78487",
"canvaskit/profiling/canvaskit.js": "ae2949af4efc61d28a4a80fffa1db900",
"canvaskit/profiling/canvaskit.wasm": "95e736ab31147d1b2c7b25f11d4c32cd",
"canvaskit/canvaskit.wasm": "4b83d89d9fecbea8ca46f2f760c5a9ba"
};

// The application shell files that are downloaded before a service worker can
// start.
const CORE = [
  "main.dart.js",
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
