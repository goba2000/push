'use strict';

importScripts('sw-toolbox.js');

toolbox.precache(["index.html","style/style.css"]);

toolbox.router.get('/push/images/*', toolbox.cacheFirst);

toolbox.router.get('/push/*', toolbox.networkFirst, {
  networkTimeoutSeconds: 5
});
