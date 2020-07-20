/**
 * Welcome to your Workbox-powered service worker!
 *
 * You'll need to register this file in your web app and you should
 * disable HTTP caching for this file too.
 * See https://goo.gl/nhQhGp
 *
 * The rest of the code is auto-generated. Please don't update this file
 * directly; instead, make changes to your Workbox build configuration
 * and re-run your build process.
 * See https://goo.gl/2aRDsh
 */

importScripts("https://storage.googleapis.com/workbox-cdn/releases/4.3.1/workbox-sw.js");

self.addEventListener('message', (event) => {
  if (event.data && event.data.type === 'SKIP_WAITING') {
    self.skipWaiting();
  }
});

/**
 * The workboxSW.precacheAndRoute() method efficiently caches and responds to
 * requests for URLs in the manifest.
 * See https://goo.gl/S9QRab
 */
self.__precacheManifest = [
  {
    "url": "404.html",
    "revision": "ef36fcc6ae444b19e0f0ba3477ec2b8f"
  },
  {
    "url": "about.html",
    "revision": "edf2c2ab6a6043066b73f35ce1137ad0"
  },
  {
    "url": "assets/css/0.styles.08a0540f.css",
    "revision": "3f1cf95f285c5d73fc435b716670412d"
  },
  {
    "url": "assets/img/search.83621669.svg",
    "revision": "83621669651b9a3d4bf64d1a670ad856"
  },
  {
    "url": "assets/js/10.986af9d6.js",
    "revision": "8d07197e0e8ffe74ab8db0680dd8ed31"
  },
  {
    "url": "assets/js/11.d838f98d.js",
    "revision": "07db2f1177aef2fed1a5c511e70adfb5"
  },
  {
    "url": "assets/js/12.5fd97cf6.js",
    "revision": "bb57067cdfdb151bf29302b1576ff985"
  },
  {
    "url": "assets/js/13.09db7eea.js",
    "revision": "3fe7aad03328d4d7050ea713c24f29e0"
  },
  {
    "url": "assets/js/14.c1170179.js",
    "revision": "98d8b33ae4dd390152c24f39f777563b"
  },
  {
    "url": "assets/js/15.90b1c7fc.js",
    "revision": "ca5eb881ca8271f7fae83f82c7511dda"
  },
  {
    "url": "assets/js/16.3d03c55b.js",
    "revision": "3f4780bc58b8f520e3af021009989d1a"
  },
  {
    "url": "assets/js/17.23774980.js",
    "revision": "271c1bf4db03274f85479f089e6d5737"
  },
  {
    "url": "assets/js/18.1a89581b.js",
    "revision": "8ee614d4c81f4cdda1ebecf6b61c7a34"
  },
  {
    "url": "assets/js/19.6247161d.js",
    "revision": "4f1807d0dc6e3c755ff9f9842d1dbc34"
  },
  {
    "url": "assets/js/2.c8e318ee.js",
    "revision": "e1f218e12637a8884888842fc51279d9"
  },
  {
    "url": "assets/js/20.c46fab6a.js",
    "revision": "0a6664afcec81aa45d5e74b459bbc73c"
  },
  {
    "url": "assets/js/21.448b4a74.js",
    "revision": "686ccb381160baa066dac700b71ad120"
  },
  {
    "url": "assets/js/22.b454e526.js",
    "revision": "5932ccf1a14bdc4e1316935a9cc6fb26"
  },
  {
    "url": "assets/js/23.a6b51d36.js",
    "revision": "a20e61d7e742214f3901b9536d92cb61"
  },
  {
    "url": "assets/js/24.3657d058.js",
    "revision": "c56b14ff2538b103fb0bef7bb887f735"
  },
  {
    "url": "assets/js/25.e4ea53f1.js",
    "revision": "b0e3a6f56ec0e1b33d5fbbc0b0e8f9fe"
  },
  {
    "url": "assets/js/26.efbed168.js",
    "revision": "f8297d743b6af929f87707f17e0d01ed"
  },
  {
    "url": "assets/js/27.b083e58b.js",
    "revision": "fe1a1eaf2e5f5ba562b3be4afe8a3534"
  },
  {
    "url": "assets/js/3.636665fe.js",
    "revision": "a4ead256bede2f71f22b73488497aed5"
  },
  {
    "url": "assets/js/4.b3719a29.js",
    "revision": "b8c9e78403bf0c6be59a1d7e58043579"
  },
  {
    "url": "assets/js/5.09d06dfa.js",
    "revision": "0ba187f2ee57db2931fc864b5958665f"
  },
  {
    "url": "assets/js/6.a2b0b332.js",
    "revision": "2a6a1b7a4ede9558423a8a608b62ba3e"
  },
  {
    "url": "assets/js/7.7e31cc32.js",
    "revision": "9191d0227b6c7c55a50296c1df51c492"
  },
  {
    "url": "assets/js/8.917805ff.js",
    "revision": "4417099c1a4238e8600d2463bb824e3b"
  },
  {
    "url": "assets/js/9.1b223ebc.js",
    "revision": "24700ad8b668545992064f5762bcec0b"
  },
  {
    "url": "assets/js/app.b78e39b3.js",
    "revision": "fbb6a4e1b9e8bb4575f4ff80cedfdd92"
  },
  {
    "url": "demo.html",
    "revision": "4768e0e91c9e674764a0db4e2cc2d3f3"
  },
  {
    "url": "en/about.html",
    "revision": "87bee2ffa9e467c379b66de7247e3447"
  },
  {
    "url": "en/guide/additional-package-support.html",
    "revision": "4e3e9815654cf0333c4282d4cc9f4027"
  },
  {
    "url": "en/guide/config.html",
    "revision": "1316a354f3c32143ba678bcccc6bc394"
  },
  {
    "url": "en/guide/faq.html",
    "revision": "343a19662359c3decc9249cc2da58788"
  },
  {
    "url": "en/guide/icon.html",
    "revision": "829d2f5048b4ccbd5dbebe95d48bb07a"
  },
  {
    "url": "en/guide/index.html",
    "revision": "420b46583e828e33466e1b465f3510b6"
  },
  {
    "url": "en/guide/page.html",
    "revision": "11a551c88dd7de8c67f7bc77e0d00217"
  },
  {
    "url": "en/guide/third-party-support.html",
    "revision": "c7233c11c168a5336a1cd2a3d0eb7df3"
  },
  {
    "url": "en/index.html",
    "revision": "6e63adb2c44b3cbccb073001f5fdf4b7"
  },
  {
    "url": "guide/additional-package-support.html",
    "revision": "eda9c54b9f95042563cb10766d48ff4b"
  },
  {
    "url": "guide/config.html",
    "revision": "4c3ccb70e26cb91f4c87160c678c33cd"
  },
  {
    "url": "guide/faq.html",
    "revision": "43c2306166dc7803a48bcbe19f958d21"
  },
  {
    "url": "guide/icon.html",
    "revision": "5d147dc0efc36f80b8b0a5afbba98815"
  },
  {
    "url": "guide/index.html",
    "revision": "d659527aea1b57e28d8b71184c95a6dd"
  },
  {
    "url": "guide/migrate.html",
    "revision": "65feaeb8f0d6811ad01ce27331558e45"
  },
  {
    "url": "guide/page.html",
    "revision": "fb1b0f0cdde15228f78f8fbd1ba44c81"
  },
  {
    "url": "guide/third-party-support.html",
    "revision": "841efd10d9091f63bb5144069a2b61a7"
  },
  {
    "url": "index.html",
    "revision": "2e600695cdf4a96f0444925b6bddd61c"
  },
  {
    "url": "logo.gif",
    "revision": "36e0231044c40383b466997c8f13b6d7"
  },
  {
    "url": "yun.svg",
    "revision": "ebbd22f3cde555d95e5dec5d41ed8505"
  }
].concat(self.__precacheManifest || []);
workbox.precaching.precacheAndRoute(self.__precacheManifest, {});
addEventListener('message', event => {
  const replyPort = event.ports[0]
  const message = event.data
  if (replyPort && message && message.type === 'skip-waiting') {
    event.waitUntil(
      self.skipWaiting().then(
        () => replyPort.postMessage({ error: null }),
        error => replyPort.postMessage({ error })
      )
    )
  }
})
