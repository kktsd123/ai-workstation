/* 极简 service worker
   作用：让浏览器把本站识别成「可安装的应用」（PWA）。
   安装到主屏幕后，Chrome 允许有声自动播放 —— 这是官方政策给的通道。 */

self.addEventListener('install', () => {
  self.skipWaiting();
});

self.addEventListener('activate', (event) => {
  event.waitUntil(self.clients.claim());
});

// 不做离线缓存，只负责让页面保持可用
self.addEventListener('fetch', () => {});
