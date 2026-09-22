globalThis.__nitro_main__ = import.meta.url;
import { i as HTTPError, n as defineLazyEventHandler, t as H3Core } from "./_libs/h3+rou3+srvx.mjs";
import { t as HookableCore } from "./_libs/hookable.mjs";
import { r as FastResponse } from "./_libs/h3-v2+rou3+srvx.mjs";
//#region #nitro-vite-setup
function lazyService(loader) {
	let promise, mod;
	return { fetch(req) {
		if (mod) return mod.fetch(req);
		if (!promise) promise = loader().then((_mod) => mod = _mod.default || _mod);
		return promise.then((mod) => mod.fetch(req));
	} };
}
var services = { ["ssr"]: lazyService(() => import("./_ssr/ssr.mjs")) };
globalThis.__nitro_vite_envs__ = services;
//#endregion
//#region #nitro/virtual/public-assets-data
var public_assets_data_default = {
	"/assets/AboutSection-eLod6A4m.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"d53-Ynr4FD58Sp5+Gk3DElln0BuzpBg\"",
		"mtime": "2026-09-22T15:50:02.863Z",
		"size": 3411,
		"path": "../public/assets/AboutSection-eLod6A4m.js"
	},
	"/assets/CapsuleReveal-DT17vZil.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"1162-lfkxwgy7aCei1znC2SvFzmnxEqk\"",
		"mtime": "2026-09-22T15:50:02.864Z",
		"size": 4450,
		"path": "../public/assets/CapsuleReveal-DT17vZil.js"
	},
	"/assets/collections-C0KnKohe.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"2f8-bW+lRpkGB+MIwueQxCbCZdouJ6Y\"",
		"mtime": "2026-09-22T15:50:02.873Z",
		"size": 760,
		"path": "../public/assets/collections-C0KnKohe.js"
	},
	"/assets/cart-OQaSuWvh.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"10ee-iZDSy5AmY8SpkYo3aH6oSfskNOE\"",
		"mtime": "2026-09-22T15:50:02.871Z",
		"size": 4334,
		"path": "../public/assets/cart-OQaSuWvh.js"
	},
	"/assets/collections-H_MxO42j.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"672-zg6L0dCuTnD+nH67/BhnAx8mJVs\"",
		"mtime": "2026-09-22T15:50:02.874Z",
		"size": 1650,
		"path": "../public/assets/collections-H_MxO42j.js"
	},
	"/assets/createLucideIcon-B4G8DJkL.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"4a4-PfjJPH1eLzusr/5uawGsGhWqIS8\"",
		"mtime": "2026-09-22T15:50:02.876Z",
		"size": 1188,
		"path": "../public/assets/createLucideIcon-B4G8DJkL.js"
	},
	"/assets/customise-BCaXPmi1.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"2d1-GhHQlHFQGsQRjeZd1pm0fVRSfvU\"",
		"mtime": "2026-09-22T15:50:02.877Z",
		"size": 721,
		"path": "../public/assets/customise-BCaXPmi1.js"
	},
	"/assets/CustomizationBuilder-BwI7bwaT.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"f72-BtZCBuSzmAZuKdRWs6UXH+5g9zY\"",
		"mtime": "2026-09-22T15:50:02.866Z",
		"size": 3954,
		"path": "../public/assets/CustomizationBuilder-BwI7bwaT.js"
	},
	"/assets/dist-TAJlF0Mx.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"82e5-NAZmva1ePhQOAnSH4sRaAdqJLlg\"",
		"mtime": "2026-09-22T15:50:02.878Z",
		"size": 33509,
		"path": "../public/assets/dist-TAJlF0Mx.js"
	},
	"/assets/FinalCTA-BDDi38_j.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"45e-QfpuWpwOSM0DF58MSlnvwdcSdUc\"",
		"mtime": "2026-09-22T15:50:02.869Z",
		"size": 1118,
		"path": "../public/assets/FinalCTA-BDDi38_j.js"
	},
	"/assets/index-BYsOvzaY.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"56446-R29Hsyg7gOqDkdV8FyIKbXO9nw0\"",
		"mtime": "2026-09-22T15:50:02.862Z",
		"size": 353350,
		"path": "../public/assets/index-BYsOvzaY.js"
	},
	"/assets/journal-Dr0tPMZT.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"75f-44tEjjrkciamFVGKtuS2mQMgtzw\"",
		"mtime": "2026-09-22T15:50:02.879Z",
		"size": 1887,
		"path": "../public/assets/journal-Dr0tPMZT.js"
	},
	"/assets/link-CWBjDBbq.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"8c18-ysujWvuqd9TIvBLLVouIbSRUgLA\"",
		"mtime": "2026-09-22T15:50:02.881Z",
		"size": 35864,
		"path": "../public/assets/link-CWBjDBbq.js"
	},
	"/assets/message-circle-Dq2Rxgem.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"f1-YeGYQCkW33nEEZ3el+QBNH2K+2A\"",
		"mtime": "2026-09-22T15:50:02.882Z",
		"size": 241,
		"path": "../public/assets/message-circle-Dq2Rxgem.js"
	},
	"/assets/our-story-BCE90dtB.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"2e5-4/97IxD+YWbNyBPd6eXwtWFxZgg\"",
		"mtime": "2026-09-22T15:50:02.886Z",
		"size": 741,
		"path": "../public/assets/our-story-BCE90dtB.js"
	},
	"/assets/preload-helper-Byr6O3d8.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"1845-yJhQWIPusPpH9Jm94rqFj0u45pI\"",
		"mtime": "2026-09-22T15:50:02.887Z",
		"size": 6213,
		"path": "../public/assets/preload-helper-Byr6O3d8.js"
	},
	"/assets/product._slug-CnZDDxYi.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"112c-JWtmttjnG/gPVwWMgDRY6E5qRrI\"",
		"mtime": "2026-09-22T15:50:02.889Z",
		"size": 4396,
		"path": "../public/assets/product._slug-CnZDDxYi.js"
	},
	"/assets/product._slug-DRWSq3J2.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"421-F+1HdAI0TmNn22nzUp9FuGhTZK8\"",
		"mtime": "2026-09-22T15:50:02.890Z",
		"size": 1057,
		"path": "../public/assets/product._slug-DRWSq3J2.js"
	},
	"/assets/Reveal-CYoqaU14.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"2c1-x1il38Tg3n2EG9Ph+DA7sGRXw8I\"",
		"mtime": "2026-09-22T15:50:02.870Z",
		"size": 705,
		"path": "../public/assets/Reveal-CYoqaU14.js"
	},
	"/assets/routes-CbP1o1pi.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"3812-2lHiP/jiZlcMplcNOrTUMPpU24k\"",
		"mtime": "2026-09-22T15:50:02.893Z",
		"size": 14354,
		"path": "../public/assets/routes-CbP1o1pi.js"
	},
	"/assets/shop-gl9WNapH.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"2188-lXqa5ov3yL7WCiJ+LU7WBCyBIvs\"",
		"mtime": "2026-09-22T15:50:02.894Z",
		"size": 8584,
		"path": "../public/assets/shop-gl9WNapH.js"
	},
	"/assets/shop-kys_THO7.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"44c-o04jruXis55Oic/dkzyZiUa8B/M\"",
		"mtime": "2026-09-22T15:50:02.895Z",
		"size": 1100,
		"path": "../public/assets/shop-kys_THO7.js"
	},
	"/assets/sparkles-BmQCxbI7.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"1ee-6Xhr8R1QCjkHmYZFm0Hiw+hTLb4\"",
		"mtime": "2026-09-22T15:50:02.896Z",
		"size": 494,
		"path": "../public/assets/sparkles-BmQCxbI7.js"
	},
	"/assets/styles-B9LeAxYJ.css": {
		"type": "text/css; charset=utf-8",
		"etag": "\"1917a-+rNitDLNoGQd0TwV/HgnH2oi3Xk\"",
		"mtime": "2026-09-22T15:50:02.907Z",
		"size": 102778,
		"path": "../public/assets/styles-B9LeAxYJ.css"
	},
	"/assets/products-CioCA-yv.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"1562-4YOyWTXNRj9Gxvyb3PC300EobwM\"",
		"mtime": "2026-09-22T15:50:02.891Z",
		"size": 5474,
		"path": "../public/assets/products-CioCA-yv.js"
	},
	"/assets/types-DKSnJpxg.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"dbdb-l3DXiPvS27ZIemys6aF3peFqnFI\"",
		"mtime": "2026-09-22T15:50:02.898Z",
		"size": 56283,
		"path": "../public/assets/types-DKSnJpxg.js"
	},
	"/assets/use-cart-C9Mbd9vT.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"585-xuhCV1ClDe1pd9eTLl0gZQ2ExWM\"",
		"mtime": "2026-09-22T15:50:02.899Z",
		"size": 1413,
		"path": "../public/assets/use-cart-C9Mbd9vT.js"
	},
	"/assets/use-wishlist-BKaE_7Qp.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"463-VTy0tXVwMHSx9K4ht2GQeG7L8QE\"",
		"mtime": "2026-09-22T15:50:02.903Z",
		"size": 1123,
		"path": "../public/assets/use-wishlist-BKaE_7Qp.js"
	},
	"/assets/whatsapp-DoIKjUv1.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"461-ujRf2v9FJO0+8b+uyHdcxLkEsvY\"",
		"mtime": "2026-09-22T15:50:02.905Z",
		"size": 1121,
		"path": "../public/assets/whatsapp-DoIKjUv1.js"
	},
	"/assets/wishlist-BvL5fsEn.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"91b-Ck+t5sq6mksKMrHrJJTJzd6omk8\"",
		"mtime": "2026-09-22T15:50:02.906Z",
		"size": 2331,
		"path": "../public/assets/wishlist-BvL5fsEn.js"
	},
	"/images/about-01.jpg": {
		"type": "image/jpeg",
		"etag": "\"17f92-UNxM/WgjEIlyo7NV4pjgMW0KSik\"",
		"mtime": "2026-09-22T15:04:23.441Z",
		"size": 98194,
		"path": "../public/images/about-01.jpg"
	},
	"/images/black-clover.jpg": {
		"type": "image/jpeg",
		"etag": "\"271f7-f9oyOspS47p/ZDvCyC9wH8tI6To\"",
		"mtime": "2026-09-22T15:04:23.458Z",
		"size": 160247,
		"path": "../public/images/black-clover.jpg"
	},
	"/images/gallery-01.jpg": {
		"type": "image/jpeg",
		"etag": "\"13493-UAnBQre4pN5y0gBSEXQ13FMU1A4\"",
		"mtime": "2026-09-22T15:04:23.488Z",
		"size": 78995,
		"path": "../public/images/gallery-01.jpg"
	},
	"/images/couple-bracelet.jpg": {
		"type": "image/jpeg",
		"etag": "\"18ae4-43xqBk9SWDfiYAhCnFj12cNkkRc\"",
		"mtime": "2026-09-22T15:04:23.473Z",
		"size": 101092,
		"path": "../public/images/couple-bracelet.jpg"
	},
	"/images/gallery-03.jpg": {
		"type": "image/jpeg",
		"etag": "\"1dc14-7Y+H2sO/Zb6r0zONeqPL7EX5bl0\"",
		"mtime": "2026-09-22T15:04:23.523Z",
		"size": 121876,
		"path": "../public/images/gallery-03.jpg"
	},
	"/images/gallery-05.jpg": {
		"type": "image/jpeg",
		"etag": "\"e928-dV4SPFPhHddoDkl1N5PjnxsL4xo\"",
		"mtime": "2026-09-22T15:04:23.553Z",
		"size": 59688,
		"path": "../public/images/gallery-05.jpg"
	},
	"/images/gallery-04.jpg": {
		"type": "image/jpeg",
		"etag": "\"1dcee-RBUlRG3peVAluIFiW9oX6AGMcdY\"",
		"mtime": "2026-09-22T15:04:23.539Z",
		"size": 122094,
		"path": "../public/images/gallery-04.jpg"
	},
	"/images/gallery-02.jpg": {
		"type": "image/jpeg",
		"etag": "\"14f11-d+7lcqUaPF/UdmNsm7Ys66Nbgr8\"",
		"mtime": "2026-09-22T15:04:23.504Z",
		"size": 85777,
		"path": "../public/images/gallery-02.jpg"
	},
	"/images/gallery-06.jpg": {
		"type": "image/jpeg",
		"etag": "\"1ba23-fdNMFmRwTBE8g1vi9F8blAkyIwM\"",
		"mtime": "2026-09-22T15:04:23.571Z",
		"size": 113187,
		"path": "../public/images/gallery-06.jpg"
	},
	"/images/gift-01.jpg": {
		"type": "image/jpeg",
		"etag": "\"1682f-a9ziEOx6EN3/1TaF7ddUrsg4j6Q\"",
		"mtime": "2026-09-22T15:04:23.588Z",
		"size": 92207,
		"path": "../public/images/gift-01.jpg"
	},
	"/images/gift-02.jpg": {
		"type": "image/jpeg",
		"etag": "\"16903-HNr+izEw9hqEM6YVq1nsy6w9Hhs\"",
		"mtime": "2026-09-22T15:04:23.604Z",
		"size": 92419,
		"path": "../public/images/gift-02.jpg"
	},
	"/images/gift-03.jpg": {
		"type": "image/jpeg",
		"etag": "\"c5a1-zaXqmW2igvmDg/ZAix5NIfu60Tk\"",
		"mtime": "2026-09-22T15:04:23.617Z",
		"size": 50593,
		"path": "../public/images/gift-03.jpg"
	},
	"/images/product-01.jpg": {
		"type": "image/jpeg",
		"etag": "\"e702-R5x3fDTTtCsEigDn7m6md7BeDA8\"",
		"mtime": "2026-09-22T15:04:23.632Z",
		"size": 59138,
		"path": "../public/images/product-01.jpg"
	},
	"/images/product-02.jpg": {
		"type": "image/jpeg",
		"etag": "\"d33d-4Xi9u5pWewpxQDHTEp84aBvmGHk\"",
		"mtime": "2026-09-22T15:04:23.646Z",
		"size": 54077,
		"path": "../public/images/product-02.jpg"
	},
	"/images/product-06.jpg": {
		"type": "image/jpeg",
		"etag": "\"1688e-T6Tf4Q37wLYE00Dk4U0vfuv3d4I\"",
		"mtime": "2026-09-22T15:04:23.715Z",
		"size": 92302,
		"path": "../public/images/product-06.jpg"
	},
	"/images/product-05.jpg": {
		"type": "image/jpeg",
		"etag": "\"17813-d6Xurb8KBBk1OGiZZVIG5bPOvV8\"",
		"mtime": "2026-09-22T15:04:23.696Z",
		"size": 96275,
		"path": "../public/images/product-05.jpg"
	},
	"/images/product-03.jpg": {
		"type": "image/jpeg",
		"etag": "\"1055e-PSemYfcBcaYRLjI0Km5/lnjsMKI\"",
		"mtime": "2026-09-22T15:04:23.662Z",
		"size": 66910,
		"path": "../public/images/product-03.jpg"
	},
	"/images/product-07.jpg": {
		"type": "image/jpeg",
		"etag": "\"d241-OKwRbAHHN0v5TFYY0Te5Qt1q7f4\"",
		"mtime": "2026-09-22T15:04:23.731Z",
		"size": 53825,
		"path": "../public/images/product-07.jpg"
	},
	"/images/product-04.jpg": {
		"type": "image/jpeg",
		"etag": "\"12771-7nqIVDoep3482D+g95p4FltJSn4\"",
		"mtime": "2026-09-22T15:04:23.679Z",
		"size": 75633,
		"path": "../public/images/product-04.jpg"
	},
	"/images/product-08.jpg": {
		"type": "image/jpeg",
		"etag": "\"de1c-fY6FEt3kuaowJ1SPQHvYKQVrGXg\"",
		"mtime": "2026-09-22T15:04:23.746Z",
		"size": 56860,
		"path": "../public/images/product-08.jpg"
	},
	"/videos/video-01/frame-000.jpg": {
		"type": "image/jpeg",
		"etag": "\"1a22-m3wOcOmj/lMiHviaaJkXDuTHKO8\"",
		"mtime": "2026-09-03T13:25:26.283Z",
		"size": 6690,
		"path": "../public/videos/video-01/frame-000.jpg"
	},
	"/images/story-01.jpg": {
		"type": "image/jpeg",
		"etag": "\"a16b-HRDKHImfvXlAl4I40ZwKI/JkKcc\"",
		"mtime": "2026-09-22T15:04:23.779Z",
		"size": 41323,
		"path": "../public/images/story-01.jpg"
	},
	"/images/product-09.jpg": {
		"type": "image/jpeg",
		"etag": "\"16529-KrmHFZNh7NkPylipLLLGi63s9rk\"",
		"mtime": "2026-09-22T15:04:23.763Z",
		"size": 91433,
		"path": "../public/images/product-09.jpg"
	},
	"/videos/video-01/frame-003.jpg": {
		"type": "image/jpeg",
		"etag": "\"1ba2-xL/BuBUsJ817xnaoDNgD2jPhUKc\"",
		"mtime": "2026-09-03T13:25:26.369Z",
		"size": 7074,
		"path": "../public/videos/video-01/frame-003.jpg"
	},
	"/videos/video-01/frame-001.jpg": {
		"type": "image/jpeg",
		"etag": "\"1b03-ES+5yqvTZG8fQtoqxyzc4Asf+VU\"",
		"mtime": "2026-09-03T13:25:26.299Z",
		"size": 6915,
		"path": "../public/videos/video-01/frame-001.jpg"
	},
	"/videos/video-01/frame-002.jpg": {
		"type": "image/jpeg",
		"etag": "\"1b03-ES+5yqvTZG8fQtoqxyzc4Asf+VU\"",
		"mtime": "2026-09-03T13:25:26.319Z",
		"size": 6915,
		"path": "../public/videos/video-01/frame-002.jpg"
	},
	"/videos/video-01/frame-004.jpg": {
		"type": "image/jpeg",
		"etag": "\"1bb4-PB9zGWwSbaVWgTO8ZinSMM/2pvk\"",
		"mtime": "2026-09-03T13:25:26.400Z",
		"size": 7092,
		"path": "../public/videos/video-01/frame-004.jpg"
	},
	"/videos/video-01/frame-005.jpg": {
		"type": "image/jpeg",
		"etag": "\"1c70-dPSOUo5aystXZ+kN+vZoyYyJUpo\"",
		"mtime": "2026-09-03T13:25:26.423Z",
		"size": 7280,
		"path": "../public/videos/video-01/frame-005.jpg"
	},
	"/videos/video-01/frame-006.jpg": {
		"type": "image/jpeg",
		"etag": "\"1d51-TVywOfhu7cTMBf7mWYvV6FNKm9g\"",
		"mtime": "2026-09-03T13:25:26.449Z",
		"size": 7505,
		"path": "../public/videos/video-01/frame-006.jpg"
	},
	"/videos/video-01/frame-007.jpg": {
		"type": "image/jpeg",
		"etag": "\"1d4a-CqEpDU/3TkfSkJLrx614xe5SYxU\"",
		"mtime": "2026-09-03T13:25:26.475Z",
		"size": 7498,
		"path": "../public/videos/video-01/frame-007.jpg"
	},
	"/videos/video-01/frame-008.jpg": {
		"type": "image/jpeg",
		"etag": "\"1db4-JXWWU6qBvVRa1nRVzq/krd5arrY\"",
		"mtime": "2026-09-03T13:25:26.492Z",
		"size": 7604,
		"path": "../public/videos/video-01/frame-008.jpg"
	},
	"/videos/video-01/frame-009.jpg": {
		"type": "image/jpeg",
		"etag": "\"1e85-34UbshNCOBzsXLPkp3zwOt9jJVM\"",
		"mtime": "2026-09-03T13:25:26.508Z",
		"size": 7813,
		"path": "../public/videos/video-01/frame-009.jpg"
	},
	"/videos/video-01/frame-010.jpg": {
		"type": "image/jpeg",
		"etag": "\"1f9f-XyQEMh0NsgziHERL8nDuM9hb/WQ\"",
		"mtime": "2026-09-03T13:25:26.523Z",
		"size": 8095,
		"path": "../public/videos/video-01/frame-010.jpg"
	},
	"/videos/video-01/frame-011.jpg": {
		"type": "image/jpeg",
		"etag": "\"209d-tmkaZnl6OC0NyhLdcZJRVo7Lv+g\"",
		"mtime": "2026-09-03T13:25:26.540Z",
		"size": 8349,
		"path": "../public/videos/video-01/frame-011.jpg"
	},
	"/videos/video-01/frame-012.jpg": {
		"type": "image/jpeg",
		"etag": "\"208d-+VmZR7vplO9TjrKVdpiLxRAlvaY\"",
		"mtime": "2026-09-03T13:25:26.557Z",
		"size": 8333,
		"path": "../public/videos/video-01/frame-012.jpg"
	},
	"/videos/video-01/frame-013.jpg": {
		"type": "image/jpeg",
		"etag": "\"21a1-GU80lsrlR7aloTsz1dcNhFg5Bgk\"",
		"mtime": "2026-09-03T13:25:26.573Z",
		"size": 8609,
		"path": "../public/videos/video-01/frame-013.jpg"
	},
	"/videos/video-01/frame-015.jpg": {
		"type": "image/jpeg",
		"etag": "\"244a-UDDuiuKCYHDmMN4lEcX5uRJIHPo\"",
		"mtime": "2026-09-03T13:25:26.604Z",
		"size": 9290,
		"path": "../public/videos/video-01/frame-015.jpg"
	},
	"/videos/video-01/frame-014.jpg": {
		"type": "image/jpeg",
		"etag": "\"225f-0i6VqX9HMeFrUnzaEIoq8wjp/HQ\"",
		"mtime": "2026-09-03T13:25:26.589Z",
		"size": 8799,
		"path": "../public/videos/video-01/frame-014.jpg"
	},
	"/videos/video-01/frame-017.jpg": {
		"type": "image/jpeg",
		"etag": "\"2511-QZJdApV1Z8fq9J2iDK0EPyzv2Yk\"",
		"mtime": "2026-09-03T13:25:26.634Z",
		"size": 9489,
		"path": "../public/videos/video-01/frame-017.jpg"
	},
	"/videos/video-01/frame-016.jpg": {
		"type": "image/jpeg",
		"etag": "\"2511-QZJdApV1Z8fq9J2iDK0EPyzv2Yk\"",
		"mtime": "2026-09-03T13:25:26.619Z",
		"size": 9489,
		"path": "../public/videos/video-01/frame-016.jpg"
	},
	"/videos/video-01/frame-019.jpg": {
		"type": "image/jpeg",
		"etag": "\"26db-ysQ2dDWghSGhLSvob9iihGtaHcI\"",
		"mtime": "2026-09-03T13:25:26.666Z",
		"size": 9947,
		"path": "../public/videos/video-01/frame-019.jpg"
	},
	"/videos/video-01/frame-018.jpg": {
		"type": "image/jpeg",
		"etag": "\"25de-hSUvcnTP7G4sUPRCLQTafj7FKJc\"",
		"mtime": "2026-09-03T13:25:26.650Z",
		"size": 9694,
		"path": "../public/videos/video-01/frame-018.jpg"
	},
	"/videos/video-01/frame-020.jpg": {
		"type": "image/jpeg",
		"etag": "\"278c-XDTjO8icGgbE8SPD20zrPY/STXs\"",
		"mtime": "2026-09-03T13:25:26.681Z",
		"size": 10124,
		"path": "../public/videos/video-01/frame-020.jpg"
	},
	"/videos/video-01/frame-021.jpg": {
		"type": "image/jpeg",
		"etag": "\"2839-Fgf3nudu7vLcCOTgxMUO6eUKDDA\"",
		"mtime": "2026-09-03T13:25:26.699Z",
		"size": 10297,
		"path": "../public/videos/video-01/frame-021.jpg"
	},
	"/videos/video-01/frame-022.jpg": {
		"type": "image/jpeg",
		"etag": "\"2839-Fgf3nudu7vLcCOTgxMUO6eUKDDA\"",
		"mtime": "2026-09-03T13:25:26.713Z",
		"size": 10297,
		"path": "../public/videos/video-01/frame-022.jpg"
	},
	"/videos/video-01/frame-026.jpg": {
		"type": "image/jpeg",
		"etag": "\"2a44-Y5sWHJbWhwLedwTcs4EuedY4SHQ\"",
		"mtime": "2026-09-03T13:25:26.774Z",
		"size": 10820,
		"path": "../public/videos/video-01/frame-026.jpg"
	},
	"/videos/video-01/frame-024.jpg": {
		"type": "image/jpeg",
		"etag": "\"2911-AOrd6AU3KQPq+sEWq0xuDwAyH3g\"",
		"mtime": "2026-09-03T13:25:26.743Z",
		"size": 10513,
		"path": "../public/videos/video-01/frame-024.jpg"
	},
	"/videos/video-01/frame-025.jpg": {
		"type": "image/jpeg",
		"etag": "\"29ce-JukmxKoO95xwbfUQyT2WcaNS/Uw\"",
		"mtime": "2026-09-03T13:25:26.758Z",
		"size": 10702,
		"path": "../public/videos/video-01/frame-025.jpg"
	},
	"/videos/video-01/frame-023.jpg": {
		"type": "image/jpeg",
		"etag": "\"28b4-oWrcR1TM2jsvRy5niKq6LyriHiY\"",
		"mtime": "2026-09-03T13:25:26.730Z",
		"size": 10420,
		"path": "../public/videos/video-01/frame-023.jpg"
	},
	"/videos/video-01/frame-027.jpg": {
		"type": "image/jpeg",
		"etag": "\"2a44-Y5sWHJbWhwLedwTcs4EuedY4SHQ\"",
		"mtime": "2026-09-03T13:25:26.790Z",
		"size": 10820,
		"path": "../public/videos/video-01/frame-027.jpg"
	},
	"/videos/video-01/frame-028.jpg": {
		"type": "image/jpeg",
		"etag": "\"2b01-osXnJpfgjGkR/PGYoTkslJ09Dfo\"",
		"mtime": "2026-09-03T13:25:26.805Z",
		"size": 11009,
		"path": "../public/videos/video-01/frame-028.jpg"
	},
	"/videos/video-01/frame-030.jpg": {
		"type": "image/jpeg",
		"etag": "\"2bee-ub+7evStT4hYv7cjjtfksDnn1R8\"",
		"mtime": "2026-09-03T13:25:26.836Z",
		"size": 11246,
		"path": "../public/videos/video-01/frame-030.jpg"
	},
	"/videos/video-01/frame-031.jpg": {
		"type": "image/jpeg",
		"etag": "\"2cb3-CA2klrwdsevtIax2d7cxl+o16as\"",
		"mtime": "2026-09-03T13:25:26.855Z",
		"size": 11443,
		"path": "../public/videos/video-01/frame-031.jpg"
	},
	"/videos/video-01/frame-029.jpg": {
		"type": "image/jpeg",
		"etag": "\"2b5f-JK1VqKQmovGri/UMRGBqtx8fr/A\"",
		"mtime": "2026-09-03T13:25:26.819Z",
		"size": 11103,
		"path": "../public/videos/video-01/frame-029.jpg"
	},
	"/videos/video-01/frame-032.jpg": {
		"type": "image/jpeg",
		"etag": "\"2cb3-CA2klrwdsevtIax2d7cxl+o16as\"",
		"mtime": "2026-09-03T13:25:26.870Z",
		"size": 11443,
		"path": "../public/videos/video-01/frame-032.jpg"
	},
	"/videos/video-01/frame-033.jpg": {
		"type": "image/jpeg",
		"etag": "\"2d47-XoO+jujth1GSUscS+RFlJw9Q26c\"",
		"mtime": "2026-09-03T13:25:26.885Z",
		"size": 11591,
		"path": "../public/videos/video-01/frame-033.jpg"
	},
	"/videos/video-01/frame-034.jpg": {
		"type": "image/jpeg",
		"etag": "\"2da6-cyodwAA1+ktXzZdAekjcgL/Oxw8\"",
		"mtime": "2026-09-03T13:25:26.900Z",
		"size": 11686,
		"path": "../public/videos/video-01/frame-034.jpg"
	},
	"/videos/video-01/frame-035.jpg": {
		"type": "image/jpeg",
		"etag": "\"2e68-nezKMj9ji6FPuJlaUF7ug8yPScI\"",
		"mtime": "2026-09-03T13:25:26.917Z",
		"size": 11880,
		"path": "../public/videos/video-01/frame-035.jpg"
	},
	"/videos/video-01/frame-037.jpg": {
		"type": "image/jpeg",
		"etag": "\"2ee6-dMesBSs/eUYRmtiufgXz9w0qvMk\"",
		"mtime": "2026-09-03T13:25:26.949Z",
		"size": 12006,
		"path": "../public/videos/video-01/frame-037.jpg"
	},
	"/videos/video-01/frame-036.jpg": {
		"type": "image/jpeg",
		"etag": "\"2ee6-dMesBSs/eUYRmtiufgXz9w0qvMk\"",
		"mtime": "2026-09-03T13:25:26.933Z",
		"size": 12006,
		"path": "../public/videos/video-01/frame-036.jpg"
	},
	"/videos/video-01/frame-038.jpg": {
		"type": "image/jpeg",
		"etag": "\"2f72-74RSO5sgkdn0lJ6utbJswHcKVcw\"",
		"mtime": "2026-09-03T13:25:26.965Z",
		"size": 12146,
		"path": "../public/videos/video-01/frame-038.jpg"
	},
	"/videos/video-01/frame-040.jpg": {
		"type": "image/jpeg",
		"etag": "\"3078-hD3e70ygdPmRk5IV7sbZ/GkJ8hA\"",
		"mtime": "2026-09-03T13:25:26.994Z",
		"size": 12408,
		"path": "../public/videos/video-01/frame-040.jpg"
	},
	"/videos/video-01/frame-039.jpg": {
		"type": "image/jpeg",
		"etag": "\"3012-WDKGlxnCuxHDui8cF+tDlrzeFPk\"",
		"mtime": "2026-09-03T13:25:26.979Z",
		"size": 12306,
		"path": "../public/videos/video-01/frame-039.jpg"
	},
	"/videos/video-01/frame-041.jpg": {
		"type": "image/jpeg",
		"etag": "\"3123-824QgSaM7zh8FZAEkQSEkSBTIOw\"",
		"mtime": "2026-09-03T13:25:27.012Z",
		"size": 12579,
		"path": "../public/videos/video-01/frame-041.jpg"
	},
	"/videos/video-01/frame-042.jpg": {
		"type": "image/jpeg",
		"etag": "\"3123-824QgSaM7zh8FZAEkQSEkSBTIOw\"",
		"mtime": "2026-09-03T13:25:27.027Z",
		"size": 12579,
		"path": "../public/videos/video-01/frame-042.jpg"
	},
	"/videos/video-01/frame-043.jpg": {
		"type": "image/jpeg",
		"etag": "\"315f-a09Im/JBvJMlkh5o9kQwKHeAJQ4\"",
		"mtime": "2026-09-03T13:25:27.043Z",
		"size": 12639,
		"path": "../public/videos/video-01/frame-043.jpg"
	},
	"/videos/video-01/frame-045.jpg": {
		"type": "image/jpeg",
		"etag": "\"32c4-EnqVfDc8EXsmnNDZdIOq0wzeUEU\"",
		"mtime": "2026-09-03T13:25:27.078Z",
		"size": 12996,
		"path": "../public/videos/video-01/frame-045.jpg"
	},
	"/videos/video-01/frame-044.jpg": {
		"type": "image/jpeg",
		"etag": "\"31cc-Z0ZjNCWZ+XYJmjTPGZyZXoVGTRo\"",
		"mtime": "2026-09-03T13:25:27.060Z",
		"size": 12748,
		"path": "../public/videos/video-01/frame-044.jpg"
	},
	"/videos/video-01/frame-046.jpg": {
		"type": "image/jpeg",
		"etag": "\"32d2-aD7MjXWkUrWk3xcNxvC2YP5KXKk\"",
		"mtime": "2026-09-03T13:25:27.097Z",
		"size": 13010,
		"path": "../public/videos/video-01/frame-046.jpg"
	},
	"/videos/video-01/frame-047.jpg": {
		"type": "image/jpeg",
		"etag": "\"32d2-aD7MjXWkUrWk3xcNxvC2YP5KXKk\"",
		"mtime": "2026-09-03T13:25:27.114Z",
		"size": 13010,
		"path": "../public/videos/video-01/frame-047.jpg"
	},
	"/videos/video-01/frame-049.jpg": {
		"type": "image/jpeg",
		"etag": "\"334f-oyQ9fcH+b+iSOANKiBH0HY6Mwqc\"",
		"mtime": "2026-09-03T13:25:27.146Z",
		"size": 13135,
		"path": "../public/videos/video-01/frame-049.jpg"
	},
	"/videos/video-01/frame-048.jpg": {
		"type": "image/jpeg",
		"etag": "\"3360-mzC7Et9oQ5SAdawgSSVbj+Lp480\"",
		"mtime": "2026-09-03T13:25:27.130Z",
		"size": 13152,
		"path": "../public/videos/video-01/frame-048.jpg"
	},
	"/videos/video-01/frame-050.jpg": {
		"type": "image/jpeg",
		"etag": "\"3368-tViX/2fp9CwDhTMB3QCnkjQfkAY\"",
		"mtime": "2026-09-03T13:25:27.163Z",
		"size": 13160,
		"path": "../public/videos/video-01/frame-050.jpg"
	},
	"/videos/video-01/frame-053.jpg": {
		"type": "image/jpeg",
		"etag": "\"32e5-SceEBbEKYwI5KWACwjNKL0zt/zg\"",
		"mtime": "2026-09-03T13:25:27.214Z",
		"size": 13029,
		"path": "../public/videos/video-01/frame-053.jpg"
	},
	"/videos/video-01/frame-052.jpg": {
		"type": "image/jpeg",
		"etag": "\"336e-URWVtudmfTkLqi9vAgd9FDFUKTo\"",
		"mtime": "2026-09-03T13:25:27.198Z",
		"size": 13166,
		"path": "../public/videos/video-01/frame-052.jpg"
	},
	"/videos/video-01/frame-051.jpg": {
		"type": "image/jpeg",
		"etag": "\"336e-URWVtudmfTkLqi9vAgd9FDFUKTo\"",
		"mtime": "2026-09-03T13:25:27.180Z",
		"size": 13166,
		"path": "../public/videos/video-01/frame-051.jpg"
	},
	"/videos/video-01/frame-054.jpg": {
		"type": "image/jpeg",
		"etag": "\"322f-Uerk0m1ofjV5uHE+0TGYVK/1oqM\"",
		"mtime": "2026-09-03T13:25:27.229Z",
		"size": 12847,
		"path": "../public/videos/video-01/frame-054.jpg"
	},
	"/videos/video-01/frame-055.jpg": {
		"type": "image/jpeg",
		"etag": "\"3193-YHm07ojO534+mps4Vnbj300HkkQ\"",
		"mtime": "2026-09-03T13:25:27.248Z",
		"size": 12691,
		"path": "../public/videos/video-01/frame-055.jpg"
	},
	"/videos/video-01/frame-056.jpg": {
		"type": "image/jpeg",
		"etag": "\"30de-lfP63HYEaa2Ks8DXiB8WtkkX6Tk\"",
		"mtime": "2026-09-03T13:25:27.265Z",
		"size": 12510,
		"path": "../public/videos/video-01/frame-056.jpg"
	},
	"/videos/video-01/frame-057.jpg": {
		"type": "image/jpeg",
		"etag": "\"30de-lfP63HYEaa2Ks8DXiB8WtkkX6Tk\"",
		"mtime": "2026-09-03T13:25:27.281Z",
		"size": 12510,
		"path": "../public/videos/video-01/frame-057.jpg"
	},
	"/videos/video-01/frame-058.jpg": {
		"type": "image/jpeg",
		"etag": "\"303c-ky2dqaSSY0J0a8AxC2kzRa1QWaM\"",
		"mtime": "2026-09-03T13:25:27.296Z",
		"size": 12348,
		"path": "../public/videos/video-01/frame-058.jpg"
	},
	"/videos/video-01/frame-060.jpg": {
		"type": "image/jpeg",
		"etag": "\"2e33-Nr52nlU4Wkt6imgPXJF+EcGTxz8\"",
		"mtime": "2026-09-03T13:25:27.331Z",
		"size": 11827,
		"path": "../public/videos/video-01/frame-060.jpg"
	},
	"/videos/video-01/frame-062.jpg": {
		"type": "image/jpeg",
		"etag": "\"2e14-JN6b6AY3+5/2Ts4OEfkuP79OdNk\"",
		"mtime": "2026-09-03T13:25:27.369Z",
		"size": 11796,
		"path": "../public/videos/video-01/frame-062.jpg"
	},
	"/videos/video-01/frame-061.jpg": {
		"type": "image/jpeg",
		"etag": "\"2e14-JN6b6AY3+5/2Ts4OEfkuP79OdNk\"",
		"mtime": "2026-09-03T13:25:27.350Z",
		"size": 11796,
		"path": "../public/videos/video-01/frame-061.jpg"
	},
	"/videos/video-01/frame-063.jpg": {
		"type": "image/jpeg",
		"etag": "\"2d7f-b8eKG3zTQ27j9Dl9NZRVxbKroDE\"",
		"mtime": "2026-09-03T13:25:27.386Z",
		"size": 11647,
		"path": "../public/videos/video-01/frame-063.jpg"
	},
	"/videos/video-01/frame-059.jpg": {
		"type": "image/jpeg",
		"etag": "\"2f68-z+L9ThHIBOIl8Np1lkAm7ezcbGA\"",
		"mtime": "2026-09-03T13:25:27.314Z",
		"size": 12136,
		"path": "../public/videos/video-01/frame-059.jpg"
	},
	"/videos/video-01/frame-065.jpg": {
		"type": "image/jpeg",
		"etag": "\"2cc1-+geWP3Q07Hdo5jZNE9aKo0fiI8s\"",
		"mtime": "2026-09-03T13:25:27.421Z",
		"size": 11457,
		"path": "../public/videos/video-01/frame-065.jpg"
	},
	"/videos/video-01/frame-064.jpg": {
		"type": "image/jpeg",
		"etag": "\"2d1b-hp+xqb+e0QKIgMJrbevVAwihC1c\"",
		"mtime": "2026-09-03T13:25:27.403Z",
		"size": 11547,
		"path": "../public/videos/video-01/frame-064.jpg"
	},
	"/videos/video-01/frame-067.jpg": {
		"type": "image/jpeg",
		"etag": "\"2c7a-tsvFlAbq8NAHz+hFjjRf3o2vWTI\"",
		"mtime": "2026-09-03T13:25:27.454Z",
		"size": 11386,
		"path": "../public/videos/video-01/frame-067.jpg"
	},
	"/videos/video-01/frame-066.jpg": {
		"type": "image/jpeg",
		"etag": "\"2c7a-tsvFlAbq8NAHz+hFjjRf3o2vWTI\"",
		"mtime": "2026-09-03T13:25:27.438Z",
		"size": 11386,
		"path": "../public/videos/video-01/frame-066.jpg"
	},
	"/videos/video-01/frame-068.jpg": {
		"type": "image/jpeg",
		"etag": "\"2c34-KN/1vUvzOcj2EQ3zSX5qQLplWl0\"",
		"mtime": "2026-09-03T13:25:27.473Z",
		"size": 11316,
		"path": "../public/videos/video-01/frame-068.jpg"
	},
	"/videos/video-01/frame-070.jpg": {
		"type": "image/jpeg",
		"etag": "\"2bca-z+klkprbY95/4LB0OmfmM5hodzU\"",
		"mtime": "2026-09-03T13:25:27.507Z",
		"size": 11210,
		"path": "../public/videos/video-01/frame-070.jpg"
	},
	"/videos/video-01/frame-069.jpg": {
		"type": "image/jpeg",
		"etag": "\"2c3c-yyLP5LwNdJuLZ4TOrC6onXc/Knw\"",
		"mtime": "2026-09-03T13:25:27.490Z",
		"size": 11324,
		"path": "../public/videos/video-01/frame-069.jpg"
	},
	"/videos/video-01/frame-071.jpg": {
		"type": "image/jpeg",
		"etag": "\"2b86-GH8bK6Xa8u+nOVMxAcuZzAVMdaY\"",
		"mtime": "2026-09-03T13:25:27.524Z",
		"size": 11142,
		"path": "../public/videos/video-01/frame-071.jpg"
	},
	"/videos/video-01/frame-072.jpg": {
		"type": "image/jpeg",
		"etag": "\"2b86-GH8bK6Xa8u+nOVMxAcuZzAVMdaY\"",
		"mtime": "2026-09-03T13:25:27.540Z",
		"size": 11142,
		"path": "../public/videos/video-01/frame-072.jpg"
	},
	"/videos/video-01/frame-073.jpg": {
		"type": "image/jpeg",
		"etag": "\"2b39-H3zINLi05LIMX0Iv70zkLck7ijU\"",
		"mtime": "2026-09-03T13:25:27.558Z",
		"size": 11065,
		"path": "../public/videos/video-01/frame-073.jpg"
	},
	"/videos/video-01/frame-074.jpg": {
		"type": "image/jpeg",
		"etag": "\"2a5e-NjmbEbXOWzo8gvbzsA6viRVi/J4\"",
		"mtime": "2026-09-03T13:25:27.574Z",
		"size": 10846,
		"path": "../public/videos/video-01/frame-074.jpg"
	},
	"/videos/video-01/frame-075.jpg": {
		"type": "image/jpeg",
		"etag": "\"2ac2-3jSjr4L455fhxQTOaBDxxfgguZI\"",
		"mtime": "2026-09-03T13:25:27.590Z",
		"size": 10946,
		"path": "../public/videos/video-01/frame-075.jpg"
	},
	"/videos/video-01/frame-077.jpg": {
		"type": "image/jpeg",
		"etag": "\"2b2d-LopJKe5oNw6xg4MpNMG84XBcOlM\"",
		"mtime": "2026-09-03T13:25:27.624Z",
		"size": 11053,
		"path": "../public/videos/video-01/frame-077.jpg"
	},
	"/videos/video-01/frame-076.jpg": {
		"type": "image/jpeg",
		"etag": "\"2b2d-LopJKe5oNw6xg4MpNMG84XBcOlM\"",
		"mtime": "2026-09-03T13:25:27.607Z",
		"size": 11053,
		"path": "../public/videos/video-01/frame-076.jpg"
	},
	"/videos/video-01/frame-079.jpg": {
		"type": "image/jpeg",
		"etag": "\"2c27-OQoZGLsexMFksz47dpyUw8PQD5M\"",
		"mtime": "2026-09-03T13:25:27.658Z",
		"size": 11303,
		"path": "../public/videos/video-01/frame-079.jpg"
	},
	"/videos/video-01/frame-078.jpg": {
		"type": "image/jpeg",
		"etag": "\"2baf-W/EQlhx7CTIBDdbkHopXg3OCeiE\"",
		"mtime": "2026-09-03T13:25:27.641Z",
		"size": 11183,
		"path": "../public/videos/video-01/frame-078.jpg"
	},
	"/videos/video-01/frame-080.jpg": {
		"type": "image/jpeg",
		"etag": "\"2dc1-qNVH4d5r/Q4dgicF9d1ArVtlTaM\"",
		"mtime": "2026-09-03T13:25:27.676Z",
		"size": 11713,
		"path": "../public/videos/video-01/frame-080.jpg"
	},
	"/videos/video-01/frame-082.jpg": {
		"type": "image/jpeg",
		"etag": "\"2db1-2z1fVGxCZqMSgVGrJcJJvCaY4Z4\"",
		"mtime": "2026-09-03T13:25:27.710Z",
		"size": 11697,
		"path": "../public/videos/video-01/frame-082.jpg"
	},
	"/videos/video-01/frame-084.jpg": {
		"type": "image/jpeg",
		"etag": "\"2ede-l7j0Tt89LfocNabOjhj3dM4QoXM\"",
		"mtime": "2026-09-03T13:25:27.744Z",
		"size": 11998,
		"path": "../public/videos/video-01/frame-084.jpg"
	},
	"/videos/video-01/frame-081.jpg": {
		"type": "image/jpeg",
		"etag": "\"2db1-2z1fVGxCZqMSgVGrJcJJvCaY4Z4\"",
		"mtime": "2026-09-03T13:25:27.693Z",
		"size": 11697,
		"path": "../public/videos/video-01/frame-081.jpg"
	},
	"/videos/video-01/frame-083.jpg": {
		"type": "image/jpeg",
		"etag": "\"2e3a-5WlxYAEW9YdtLmj1uAmpcpA2YAc\"",
		"mtime": "2026-09-03T13:25:27.726Z",
		"size": 11834,
		"path": "../public/videos/video-01/frame-083.jpg"
	},
	"/videos/video-01/frame-086.jpg": {
		"type": "image/jpeg",
		"etag": "\"303d-lanCfTq5tAWJFABvStrGy93hd7w\"",
		"mtime": "2026-09-03T13:25:27.782Z",
		"size": 12349,
		"path": "../public/videos/video-01/frame-086.jpg"
	},
	"/videos/video-01/frame-087.jpg": {
		"type": "image/jpeg",
		"etag": "\"303d-lanCfTq5tAWJFABvStrGy93hd7w\"",
		"mtime": "2026-09-03T13:25:27.801Z",
		"size": 12349,
		"path": "../public/videos/video-01/frame-087.jpg"
	},
	"/videos/video-01/frame-088.jpg": {
		"type": "image/jpeg",
		"etag": "\"317a-ns1EJtjTE0TLrUreRmM3FRQ7DZI\"",
		"mtime": "2026-09-03T13:25:27.817Z",
		"size": 12666,
		"path": "../public/videos/video-01/frame-088.jpg"
	},
	"/videos/video-01/frame-085.jpg": {
		"type": "image/jpeg",
		"etag": "\"2fcc-Q7UXG5RNpRQb69NmJA6bfIZ1EFk\"",
		"mtime": "2026-09-03T13:25:27.764Z",
		"size": 12236,
		"path": "../public/videos/video-01/frame-085.jpg"
	},
	"/videos/video-01/frame-091.jpg": {
		"type": "image/jpeg",
		"etag": "\"33d6-g3XI3ZFy3vfs2gX+OGqVOmKBmxE\"",
		"mtime": "2026-09-03T13:25:27.867Z",
		"size": 13270,
		"path": "../public/videos/video-01/frame-091.jpg"
	},
	"/videos/video-01/frame-090.jpg": {
		"type": "image/jpeg",
		"etag": "\"333e-T/jrwH1AIYGYYOPfUwl3JZ3Q3FQ\"",
		"mtime": "2026-09-03T13:25:27.850Z",
		"size": 13118,
		"path": "../public/videos/video-01/frame-090.jpg"
	},
	"/videos/video-01/frame-092.jpg": {
		"type": "image/jpeg",
		"etag": "\"33d6-g3XI3ZFy3vfs2gX+OGqVOmKBmxE\"",
		"mtime": "2026-09-03T13:25:27.884Z",
		"size": 13270,
		"path": "../public/videos/video-01/frame-092.jpg"
	},
	"/videos/video-01/frame-089.jpg": {
		"type": "image/jpeg",
		"etag": "\"327f-g+6eSyM1UksoJRgFZwLE5S8IyCw\"",
		"mtime": "2026-09-03T13:25:27.834Z",
		"size": 12927,
		"path": "../public/videos/video-01/frame-089.jpg"
	},
	"/videos/video-01/frame-093.jpg": {
		"type": "image/jpeg",
		"etag": "\"3491-hI2uG9aD0KSyso0u2NuedZagZ5I\"",
		"mtime": "2026-09-03T13:25:27.901Z",
		"size": 13457,
		"path": "../public/videos/video-01/frame-093.jpg"
	},
	"/videos/video-01/frame-094.jpg": {
		"type": "image/jpeg",
		"etag": "\"3556-LULju2iC7yx3UwJOehxsZMe+4u8\"",
		"mtime": "2026-09-03T13:25:27.916Z",
		"size": 13654,
		"path": "../public/videos/video-01/frame-094.jpg"
	},
	"/videos/video-01/frame-095.jpg": {
		"type": "image/jpeg",
		"etag": "\"359a-XsMdBeZUNykfU9ObtbFMMw+xXc4\"",
		"mtime": "2026-09-03T13:25:27.933Z",
		"size": 13722,
		"path": "../public/videos/video-01/frame-095.jpg"
	},
	"/videos/video-01/frame-096.jpg": {
		"type": "image/jpeg",
		"etag": "\"35c7-PArBoh/QaQ2QprLLeDuf0F/B0tU\"",
		"mtime": "2026-09-03T13:25:27.951Z",
		"size": 13767,
		"path": "../public/videos/video-01/frame-096.jpg"
	},
	"/videos/video-01/frame-098.jpg": {
		"type": "image/jpeg",
		"etag": "\"35b0-ph7kbYEbC/eD5cr4F9x4K+wbkLY\"",
		"mtime": "2026-09-03T13:25:27.986Z",
		"size": 13744,
		"path": "../public/videos/video-01/frame-098.jpg"
	},
	"/videos/video-01/frame-097.jpg": {
		"type": "image/jpeg",
		"etag": "\"35c7-PArBoh/QaQ2QprLLeDuf0F/B0tU\"",
		"mtime": "2026-09-03T13:25:27.968Z",
		"size": 13767,
		"path": "../public/videos/video-01/frame-097.jpg"
	},
	"/videos/video-01/frame-099.jpg": {
		"type": "image/jpeg",
		"etag": "\"3648-EtdnZT6zTeLb28ocPCCTyAWIsEE\"",
		"mtime": "2026-09-03T13:25:28.000Z",
		"size": 13896,
		"path": "../public/videos/video-01/frame-099.jpg"
	},
	"/videos/video-01/frame-100.jpg": {
		"type": "image/jpeg",
		"etag": "\"3760-jIEMgGCTs1FOXnEQtnripSTWUWg\"",
		"mtime": "2026-09-03T13:25:28.018Z",
		"size": 14176,
		"path": "../public/videos/video-01/frame-100.jpg"
	},
	"/videos/video-01/frame-101.jpg": {
		"type": "image/jpeg",
		"etag": "\"380a-pKEBm4479m3AM+NoyzlTXMlN/bU\"",
		"mtime": "2026-09-03T13:25:28.034Z",
		"size": 14346,
		"path": "../public/videos/video-01/frame-101.jpg"
	},
	"/videos/video-01/frame-102.jpg": {
		"type": "image/jpeg",
		"etag": "\"380a-pKEBm4479m3AM+NoyzlTXMlN/bU\"",
		"mtime": "2026-09-03T13:25:28.053Z",
		"size": 14346,
		"path": "../public/videos/video-01/frame-102.jpg"
	},
	"/videos/video-01/frame-103.jpg": {
		"type": "image/jpeg",
		"etag": "\"3894-sWxYQY6wqMQi9KEKO81hxyjvb8U\"",
		"mtime": "2026-09-03T13:25:28.070Z",
		"size": 14484,
		"path": "../public/videos/video-01/frame-103.jpg"
	},
	"/videos/video-01/frame-105.jpg": {
		"type": "image/jpeg",
		"etag": "\"3a8c-cd8GcKJQzm8+ARbEnvoIpt4pwk8\"",
		"mtime": "2026-09-03T13:25:28.104Z",
		"size": 14988,
		"path": "../public/videos/video-01/frame-105.jpg"
	},
	"/videos/video-01/frame-104.jpg": {
		"type": "image/jpeg",
		"etag": "\"3a0b-AJRTb1R12LDrqwc04Y3qdQRDaPQ\"",
		"mtime": "2026-09-03T13:25:28.086Z",
		"size": 14859,
		"path": "../public/videos/video-01/frame-104.jpg"
	},
	"/videos/video-01/frame-106.jpg": {
		"type": "image/jpeg",
		"etag": "\"3b26-v3yLd0OdGzqhOK75U81OONqmyiI\"",
		"mtime": "2026-09-03T13:25:28.120Z",
		"size": 15142,
		"path": "../public/videos/video-01/frame-106.jpg"
	},
	"/videos/video-01/frame-107.jpg": {
		"type": "image/jpeg",
		"etag": "\"3b26-v3yLd0OdGzqhOK75U81OONqmyiI\"",
		"mtime": "2026-09-03T13:25:28.139Z",
		"size": 15142,
		"path": "../public/videos/video-01/frame-107.jpg"
	},
	"/videos/video-01/frame-108.jpg": {
		"type": "image/jpeg",
		"etag": "\"3bb8-bZ5PoxkjGgFa2svsFKxSoEHpfLs\"",
		"mtime": "2026-09-03T13:25:28.156Z",
		"size": 15288,
		"path": "../public/videos/video-01/frame-108.jpg"
	},
	"/videos/video-01/frame-109.jpg": {
		"type": "image/jpeg",
		"etag": "\"3bed-QQHqbCI7n4E4tkS0wA3aFOrkE7Y\"",
		"mtime": "2026-09-03T13:25:28.172Z",
		"size": 15341,
		"path": "../public/videos/video-01/frame-109.jpg"
	},
	"/videos/video-01/frame-110.jpg": {
		"type": "image/jpeg",
		"etag": "\"3c55-ot7M+i1Stw6uKE32cn+o520i9OA\"",
		"mtime": "2026-09-03T13:25:28.188Z",
		"size": 15445,
		"path": "../public/videos/video-01/frame-110.jpg"
	},
	"/videos/video-01/frame-111.jpg": {
		"type": "image/jpeg",
		"etag": "\"3d0b-89IV8n9vGfBoSoVXBlqFeYFvwfw\"",
		"mtime": "2026-09-03T13:25:28.207Z",
		"size": 15627,
		"path": "../public/videos/video-01/frame-111.jpg"
	},
	"/videos/video-01/frame-113.jpg": {
		"type": "image/jpeg",
		"etag": "\"3d86-/HZtZJsd9AaGjWuXjjGHtC6/dS8\"",
		"mtime": "2026-09-03T13:25:28.242Z",
		"size": 15750,
		"path": "../public/videos/video-01/frame-113.jpg"
	},
	"/videos/video-01/frame-112.jpg": {
		"type": "image/jpeg",
		"etag": "\"3d0b-89IV8n9vGfBoSoVXBlqFeYFvwfw\"",
		"mtime": "2026-09-03T13:25:28.226Z",
		"size": 15627,
		"path": "../public/videos/video-01/frame-112.jpg"
	},
	"/videos/video-01/frame-114.jpg": {
		"type": "image/jpeg",
		"etag": "\"3e71-mXc+T32L5JB++8eCD3SNTW3Y+f4\"",
		"mtime": "2026-09-03T13:25:28.259Z",
		"size": 15985,
		"path": "../public/videos/video-01/frame-114.jpg"
	},
	"/videos/video-01/frame-115.jpg": {
		"type": "image/jpeg",
		"etag": "\"3fa7-uoHxbz9orAgy9Y+T76UbI26I30s\"",
		"mtime": "2026-09-03T13:25:28.278Z",
		"size": 16295,
		"path": "../public/videos/video-01/frame-115.jpg"
	},
	"/videos/video-01/frame-116.jpg": {
		"type": "image/jpeg",
		"etag": "\"407e-2QImAO//ZDG5G8cTQHV7+Wu3VVU\"",
		"mtime": "2026-09-03T13:25:28.293Z",
		"size": 16510,
		"path": "../public/videos/video-01/frame-116.jpg"
	},
	"/videos/video-01/frame-117.jpg": {
		"type": "image/jpeg",
		"etag": "\"407e-2QImAO//ZDG5G8cTQHV7+Wu3VVU\"",
		"mtime": "2026-09-03T13:25:28.312Z",
		"size": 16510,
		"path": "../public/videos/video-01/frame-117.jpg"
	},
	"/videos/video-01/frame-118.jpg": {
		"type": "image/jpeg",
		"etag": "\"4162-RNeoXVYJ+8b9Dnke8ol3fwFa5ME\"",
		"mtime": "2026-09-03T13:25:28.329Z",
		"size": 16738,
		"path": "../public/videos/video-01/frame-118.jpg"
	},
	"/videos/video-01/frame-119.jpg": {
		"type": "image/jpeg",
		"etag": "\"424d-lPaBnUywo5npCbMgy5ehyUb2l6k\"",
		"mtime": "2026-09-03T13:25:28.347Z",
		"size": 16973,
		"path": "../public/videos/video-01/frame-119.jpg"
	},
	"/videos/video-01/frame-120.jpg": {
		"type": "image/jpeg",
		"etag": "\"437d-8Okl22yeDjArZj93tcesft3NApE\"",
		"mtime": "2026-09-03T13:25:28.367Z",
		"size": 17277,
		"path": "../public/videos/video-01/frame-120.jpg"
	},
	"/videos/video-01/frame-121.jpg": {
		"type": "image/jpeg",
		"etag": "\"43dc-qpp5xeIhz5UgVri1B5mBhamGoCc\"",
		"mtime": "2026-09-03T13:25:28.387Z",
		"size": 17372,
		"path": "../public/videos/video-01/frame-121.jpg"
	},
	"/videos/video-01/frame-122.jpg": {
		"type": "image/jpeg",
		"etag": "\"43dc-qpp5xeIhz5UgVri1B5mBhamGoCc\"",
		"mtime": "2026-09-03T13:25:28.405Z",
		"size": 17372,
		"path": "../public/videos/video-01/frame-122.jpg"
	},
	"/videos/video-01/frame-123.jpg": {
		"type": "image/jpeg",
		"etag": "\"4469-qIk8CJvvK94mDuKJkZMZ+4j2WDg\"",
		"mtime": "2026-09-03T13:25:28.422Z",
		"size": 17513,
		"path": "../public/videos/video-01/frame-123.jpg"
	},
	"/videos/video-01/frame-124.jpg": {
		"type": "image/jpeg",
		"etag": "\"4578-/vE/tEyMia5hd0ytTOesIT1QoDU\"",
		"mtime": "2026-09-03T13:25:28.440Z",
		"size": 17784,
		"path": "../public/videos/video-01/frame-124.jpg"
	},
	"/videos/video-01/frame-125.jpg": {
		"type": "image/jpeg",
		"etag": "\"4693-FRk7Orr3thOYBWKkdlaEvyvHmSY\"",
		"mtime": "2026-09-03T13:25:28.459Z",
		"size": 18067,
		"path": "../public/videos/video-01/frame-125.jpg"
	},
	"/videos/video-01/frame-126.jpg": {
		"type": "image/jpeg",
		"etag": "\"46bc-Br/VxXGtT2EApWcs45p/1mwXjfA\"",
		"mtime": "2026-09-03T13:25:28.475Z",
		"size": 18108,
		"path": "../public/videos/video-01/frame-126.jpg"
	},
	"/videos/video-01/frame-127.jpg": {
		"type": "image/jpeg",
		"etag": "\"46bc-Br/VxXGtT2EApWcs45p/1mwXjfA\"",
		"mtime": "2026-09-03T13:25:28.495Z",
		"size": 18108,
		"path": "../public/videos/video-01/frame-127.jpg"
	},
	"/videos/video-01/frame-129.jpg": {
		"type": "image/jpeg",
		"etag": "\"47e2-LP3TBn8z9MHGKlDoEnhaEaznZQQ\"",
		"mtime": "2026-09-03T13:25:28.529Z",
		"size": 18402,
		"path": "../public/videos/video-01/frame-129.jpg"
	},
	"/videos/video-01/frame-128.jpg": {
		"type": "image/jpeg",
		"etag": "\"4788-LUcX7yazyMVXEdhu//qhkPrYVOo\"",
		"mtime": "2026-09-03T13:25:28.514Z",
		"size": 18312,
		"path": "../public/videos/video-01/frame-128.jpg"
	},
	"/videos/video-01/frame-130.jpg": {
		"type": "image/jpeg",
		"etag": "\"485f-iV9q4sv686Nzv6spPFRQ0yGHcZ0\"",
		"mtime": "2026-09-03T13:25:28.546Z",
		"size": 18527,
		"path": "../public/videos/video-01/frame-130.jpg"
	},
	"/videos/video-01/frame-131.jpg": {
		"type": "image/jpeg",
		"etag": "\"489f-X/Qa7Rh1hF3pPYrnWCIafoVIGZU\"",
		"mtime": "2026-09-03T13:25:28.564Z",
		"size": 18591,
		"path": "../public/videos/video-01/frame-131.jpg"
	},
	"/videos/video-01/frame-132.jpg": {
		"type": "image/jpeg",
		"etag": "\"489f-X/Qa7Rh1hF3pPYrnWCIafoVIGZU\"",
		"mtime": "2026-09-03T13:25:28.582Z",
		"size": 18591,
		"path": "../public/videos/video-01/frame-132.jpg"
	},
	"/videos/video-01/frame-133.jpg": {
		"type": "image/jpeg",
		"etag": "\"47a7-FtgAqmctRnUAvrSGsPJMlc5zakk\"",
		"mtime": "2026-09-03T13:25:28.599Z",
		"size": 18343,
		"path": "../public/videos/video-01/frame-133.jpg"
	},
	"/videos/video-01/frame-134.jpg": {
		"type": "image/jpeg",
		"etag": "\"475e-FsLH8ilu0qds460knSawQyqz8Hc\"",
		"mtime": "2026-09-03T13:25:28.615Z",
		"size": 18270,
		"path": "../public/videos/video-01/frame-134.jpg"
	},
	"/videos/video-01/frame-135.jpg": {
		"type": "image/jpeg",
		"etag": "\"47d7-1PCoBODQDK1faToz9e6bL1VrBb0\"",
		"mtime": "2026-09-03T13:25:28.629Z",
		"size": 18391,
		"path": "../public/videos/video-01/frame-135.jpg"
	},
	"/videos/video-01/frame-137.jpg": {
		"type": "image/jpeg",
		"etag": "\"475a-BDHQnL4sHRy1wPTtFEVo+zAKTtE\"",
		"mtime": "2026-09-03T13:25:28.665Z",
		"size": 18266,
		"path": "../public/videos/video-01/frame-137.jpg"
	},
	"/videos/video-01/frame-136.jpg": {
		"type": "image/jpeg",
		"etag": "\"475a-BDHQnL4sHRy1wPTtFEVo+zAKTtE\"",
		"mtime": "2026-09-03T13:25:28.646Z",
		"size": 18266,
		"path": "../public/videos/video-01/frame-136.jpg"
	},
	"/videos/video-01/frame-138.jpg": {
		"type": "image/jpeg",
		"etag": "\"47ba-jmHB2ieEzRV+XbQ0GjDq4LR/HIo\"",
		"mtime": "2026-09-03T13:25:28.684Z",
		"size": 18362,
		"path": "../public/videos/video-01/frame-138.jpg"
	},
	"/videos/video-01/frame-139.jpg": {
		"type": "image/jpeg",
		"etag": "\"471e-nG5DvS3PjI7bPbOIi6087Os4sN4\"",
		"mtime": "2026-09-03T13:25:28.699Z",
		"size": 18206,
		"path": "../public/videos/video-01/frame-139.jpg"
	},
	"/videos/video-01/frame-140.jpg": {
		"type": "image/jpeg",
		"etag": "\"47a4-9uA0CiW1hs7I/DrEv3fJiTshV8g\"",
		"mtime": "2026-09-03T13:25:28.715Z",
		"size": 18340,
		"path": "../public/videos/video-01/frame-140.jpg"
	},
	"/videos/video-01/frame-142.jpg": {
		"type": "image/jpeg",
		"etag": "\"479d-PB+KlFtINPjrs5ZLXrl44NtgUlo\"",
		"mtime": "2026-09-03T13:25:28.746Z",
		"size": 18333,
		"path": "../public/videos/video-01/frame-142.jpg"
	},
	"/videos/video-01/frame-141.jpg": {
		"type": "image/jpeg",
		"etag": "\"479d-PB+KlFtINPjrs5ZLXrl44NtgUlo\"",
		"mtime": "2026-09-03T13:25:28.729Z",
		"size": 18333,
		"path": "../public/videos/video-01/frame-141.jpg"
	},
	"/videos/video-01/frame-143.jpg": {
		"type": "image/jpeg",
		"etag": "\"4723-7/QTdHSaWJnx7t3Avkr4aVFSELc\"",
		"mtime": "2026-09-03T13:25:28.760Z",
		"size": 18211,
		"path": "../public/videos/video-01/frame-143.jpg"
	},
	"/videos/video-01/frame-144.jpg": {
		"type": "image/jpeg",
		"etag": "\"478e-lJN9uGXn4eFzx8jO89sLb5G0PZY\"",
		"mtime": "2026-09-03T13:25:28.775Z",
		"size": 18318,
		"path": "../public/videos/video-01/frame-144.jpg"
	},
	"/videos/video-01/frame-145.jpg": {
		"type": "image/jpeg",
		"etag": "\"47ee-CxL6udxOTEePzDxG0U/ZjN4ntg4\"",
		"mtime": "2026-09-03T13:25:28.791Z",
		"size": 18414,
		"path": "../public/videos/video-01/frame-145.jpg"
	},
	"/videos/video-01/frame-146.jpg": {
		"type": "image/jpeg",
		"etag": "\"473e-NkBH5yxcZXgqDdLJJBbi1Vd7E6A\"",
		"mtime": "2026-09-03T13:25:28.807Z",
		"size": 18238,
		"path": "../public/videos/video-01/frame-146.jpg"
	},
	"/videos/video-01/frame-147.jpg": {
		"type": "image/jpeg",
		"etag": "\"473e-NkBH5yxcZXgqDdLJJBbi1Vd7E6A\"",
		"mtime": "2026-09-03T13:25:28.824Z",
		"size": 18238,
		"path": "../public/videos/video-01/frame-147.jpg"
	},
	"/videos/video-01/frame-148.jpg": {
		"type": "image/jpeg",
		"etag": "\"47aa-8hchmS6nb34vwM4ydB5t7wJHM+0\"",
		"mtime": "2026-09-03T13:25:28.839Z",
		"size": 18346,
		"path": "../public/videos/video-01/frame-148.jpg"
	},
	"/videos/video-01/frame-149.jpg": {
		"type": "image/jpeg",
		"etag": "\"482f-3aNsT1pt3YJOHCS+0I7WYtYP9Ok\"",
		"mtime": "2026-09-03T13:25:28.855Z",
		"size": 18479,
		"path": "../public/videos/video-01/frame-149.jpg"
	},
	"/videos/video-01/frame-150.jpg": {
		"type": "image/jpeg",
		"etag": "\"48a7-6fQCXxJskkNTZx7iiJ4S3i3d/xk\"",
		"mtime": "2026-09-03T13:25:28.869Z",
		"size": 18599,
		"path": "../public/videos/video-01/frame-150.jpg"
	},
	"/videos/video-01/frame-151.jpg": {
		"type": "image/jpeg",
		"etag": "\"485f-LQSwZK1kXxMaJ5SrUZMvzWeRMOQ\"",
		"mtime": "2026-09-03T13:25:28.886Z",
		"size": 18527,
		"path": "../public/videos/video-01/frame-151.jpg"
	},
	"/videos/video-01/frame-152.jpg": {
		"type": "image/jpeg",
		"etag": "\"485f-LQSwZK1kXxMaJ5SrUZMvzWeRMOQ\"",
		"mtime": "2026-09-03T13:25:28.903Z",
		"size": 18527,
		"path": "../public/videos/video-01/frame-152.jpg"
	},
	"/videos/video-01/frame-153.jpg": {
		"type": "image/jpeg",
		"etag": "\"475b-CvJc7Z4L2+XIOwFKMvVclLYaGMI\"",
		"mtime": "2026-09-03T13:25:28.919Z",
		"size": 18267,
		"path": "../public/videos/video-01/frame-153.jpg"
	},
	"/videos/video-01/frame-154.jpg": {
		"type": "image/jpeg",
		"etag": "\"46ee-FGjY6G4OxH8BOI3xjXLP4FR4wyM\"",
		"mtime": "2026-09-03T13:25:28.935Z",
		"size": 18158,
		"path": "../public/videos/video-01/frame-154.jpg"
	},
	"/videos/video-01/frame-155.jpg": {
		"type": "image/jpeg",
		"etag": "\"471e-OEivrL1Y0bdDWkpOaNtAg5Th/ls\"",
		"mtime": "2026-09-03T13:25:28.950Z",
		"size": 18206,
		"path": "../public/videos/video-01/frame-155.jpg"
	},
	"/videos/video-01/frame-157.jpg": {
		"type": "image/jpeg",
		"etag": "\"475b-eq6MeZ+d3okynxnBM+/V0GQOtlw\"",
		"mtime": "2026-09-03T13:25:28.979Z",
		"size": 18267,
		"path": "../public/videos/video-01/frame-157.jpg"
	},
	"/videos/video-01/frame-156.jpg": {
		"type": "image/jpeg",
		"etag": "\"475b-eq6MeZ+d3okynxnBM+/V0GQOtlw\"",
		"mtime": "2026-09-03T13:25:28.965Z",
		"size": 18267,
		"path": "../public/videos/video-01/frame-156.jpg"
	},
	"/videos/video-01/frame-158.jpg": {
		"type": "image/jpeg",
		"etag": "\"47a0-Q2LKtL0GWwVcLSIZwNDSwx+0FJU\"",
		"mtime": "2026-09-03T13:25:28.993Z",
		"size": 18336,
		"path": "../public/videos/video-01/frame-158.jpg"
	},
	"/videos/video-01/frame-159.jpg": {
		"type": "image/jpeg",
		"etag": "\"470c-CX4E4BenFaBjqt0Lf7sx3WV9jy4\"",
		"mtime": "2026-09-03T13:25:29.009Z",
		"size": 18188,
		"path": "../public/videos/video-01/frame-159.jpg"
	},
	"/videos/video-01/frame-160.jpg": {
		"type": "image/jpeg",
		"etag": "\"47d0-ULvCkcr/cbzWI81hLSeyz8UBvh4\"",
		"mtime": "2026-09-03T13:25:29.025Z",
		"size": 18384,
		"path": "../public/videos/video-01/frame-160.jpg"
	},
	"/videos/video-01/frame-161.jpg": {
		"type": "image/jpeg",
		"etag": "\"4757-jjK+uCqzb+9wVdKclzHprjen86U\"",
		"mtime": "2026-09-03T13:25:29.042Z",
		"size": 18263,
		"path": "../public/videos/video-01/frame-161.jpg"
	},
	"/videos/video-01/frame-164.jpg": {
		"type": "image/jpeg",
		"etag": "\"4630-2Z4JCLGwntWno1lhdA+52UvwllU\"",
		"mtime": "2026-09-03T13:25:29.093Z",
		"size": 17968,
		"path": "../public/videos/video-01/frame-164.jpg"
	},
	"/videos/video-01/frame-163.jpg": {
		"type": "image/jpeg",
		"etag": "\"469a-dduO/327zVK2iTZvj/yAQOP0Euc\"",
		"mtime": "2026-09-03T13:25:29.076Z",
		"size": 18074,
		"path": "../public/videos/video-01/frame-163.jpg"
	},
	"/videos/video-01/frame-162.jpg": {
		"type": "image/jpeg",
		"etag": "\"4757-jjK+uCqzb+9wVdKclzHprjen86U\"",
		"mtime": "2026-09-03T13:25:29.059Z",
		"size": 18263,
		"path": "../public/videos/video-01/frame-162.jpg"
	},
	"/videos/video-01/frame-165.jpg": {
		"type": "image/jpeg",
		"etag": "\"45cf-xOKTJ56yWPdC5Lamh1hUN6L4/6s\"",
		"mtime": "2026-09-03T13:25:29.112Z",
		"size": 17871,
		"path": "../public/videos/video-01/frame-165.jpg"
	},
	"/videos/video-01/frame-166.jpg": {
		"type": "image/jpeg",
		"etag": "\"44eb-O/hw3O8Ccon+/sOoQZh/O9Okn9s\"",
		"mtime": "2026-09-03T13:25:29.131Z",
		"size": 17643,
		"path": "../public/videos/video-01/frame-166.jpg"
	},
	"/videos/video-01/frame-167.jpg": {
		"type": "image/jpeg",
		"etag": "\"44eb-O/hw3O8Ccon+/sOoQZh/O9Okn9s\"",
		"mtime": "2026-09-03T13:25:29.149Z",
		"size": 17643,
		"path": "../public/videos/video-01/frame-167.jpg"
	},
	"/videos/video-01/frame-168.jpg": {
		"type": "image/jpeg",
		"etag": "\"4477-di+mo37/yO6NxSq11wUr+hyTkag\"",
		"mtime": "2026-09-03T13:25:29.167Z",
		"size": 17527,
		"path": "../public/videos/video-01/frame-168.jpg"
	},
	"/videos/video-01/frame-169.jpg": {
		"type": "image/jpeg",
		"etag": "\"446c-+hTlm3yIKdcQmB7HSlK9fBQU5Hk\"",
		"mtime": "2026-09-03T13:25:29.183Z",
		"size": 17516,
		"path": "../public/videos/video-01/frame-169.jpg"
	},
	"/videos/video-01/frame-170.jpg": {
		"type": "image/jpeg",
		"etag": "\"438f-a7FYPwcOxcZ65/XjlB3LDOrjTdw\"",
		"mtime": "2026-09-03T13:25:29.203Z",
		"size": 17295,
		"path": "../public/videos/video-01/frame-170.jpg"
	},
	"/videos/video-01/frame-171.jpg": {
		"type": "image/jpeg",
		"etag": "\"4219-WQsSd3JXwJCmgqhNDKtFWRftzrI\"",
		"mtime": "2026-09-03T13:25:29.221Z",
		"size": 16921,
		"path": "../public/videos/video-01/frame-171.jpg"
	},
	"/videos/video-01/frame-172.jpg": {
		"type": "image/jpeg",
		"etag": "\"4219-WQsSd3JXwJCmgqhNDKtFWRftzrI\"",
		"mtime": "2026-09-03T13:25:29.239Z",
		"size": 16921,
		"path": "../public/videos/video-01/frame-172.jpg"
	},
	"/videos/video-01/frame-174.jpg": {
		"type": "image/jpeg",
		"etag": "\"41ef-nr6tiJjaUaP9RFIOAX/I2sW1zjY\"",
		"mtime": "2026-09-03T13:25:29.274Z",
		"size": 16879,
		"path": "../public/videos/video-01/frame-174.jpg"
	},
	"/videos/video-01/frame-173.jpg": {
		"type": "image/jpeg",
		"etag": "\"4238-AaML0K4J4phVAiRU4cztyH5A15g\"",
		"mtime": "2026-09-03T13:25:29.255Z",
		"size": 16952,
		"path": "../public/videos/video-01/frame-173.jpg"
	},
	"/videos/video-01/frame-175.jpg": {
		"type": "image/jpeg",
		"etag": "\"414b-FAnluLmzQItWwYPCSUWDsYEx0b8\"",
		"mtime": "2026-09-03T13:25:29.290Z",
		"size": 16715,
		"path": "../public/videos/video-01/frame-175.jpg"
	},
	"/videos/video-01/frame-176.jpg": {
		"type": "image/jpeg",
		"etag": "\"417b-4dMf5n3/tgCXFnOSI+UXgeLouY0\"",
		"mtime": "2026-09-03T13:25:29.307Z",
		"size": 16763,
		"path": "../public/videos/video-01/frame-176.jpg"
	},
	"/videos/video-01/frame-178.jpg": {
		"type": "image/jpeg",
		"etag": "\"4156-zX+upxdxQTxLcaX8kGifPrtMjNo\"",
		"mtime": "2026-09-03T13:25:29.343Z",
		"size": 16726,
		"path": "../public/videos/video-01/frame-178.jpg"
	},
	"/videos/video-01/frame-177.jpg": {
		"type": "image/jpeg",
		"etag": "\"417b-4dMf5n3/tgCXFnOSI+UXgeLouY0\"",
		"mtime": "2026-09-03T13:25:29.324Z",
		"size": 16763,
		"path": "../public/videos/video-01/frame-177.jpg"
	},
	"/videos/video-01/frame-179.jpg": {
		"type": "image/jpeg",
		"etag": "\"4151-SZdhKghP5UFGruGMGdcrgUeAxv4\"",
		"mtime": "2026-09-03T13:25:29.363Z",
		"size": 16721,
		"path": "../public/videos/video-01/frame-179.jpg"
	},
	"/videos/video-01/frame-180.jpg": {
		"type": "image/jpeg",
		"etag": "\"41c7-UreWSKxaZ6ZosbRCpITUznFvFC0\"",
		"mtime": "2026-09-03T13:25:29.380Z",
		"size": 16839,
		"path": "../public/videos/video-01/frame-180.jpg"
	},
	"/videos/video-01/frame-182.jpg": {
		"type": "image/jpeg",
		"etag": "\"4151-fR/nDaro9aCJFpEpwOU8CxfvTdM\"",
		"mtime": "2026-09-03T13:25:29.415Z",
		"size": 16721,
		"path": "../public/videos/video-01/frame-182.jpg"
	},
	"/videos/video-01/frame-181.jpg": {
		"type": "image/jpeg",
		"etag": "\"4151-fR/nDaro9aCJFpEpwOU8CxfvTdM\"",
		"mtime": "2026-09-03T13:25:29.396Z",
		"size": 16721,
		"path": "../public/videos/video-01/frame-181.jpg"
	},
	"/videos/video-01/frame-183.jpg": {
		"type": "image/jpeg",
		"etag": "\"4187-DGzfV9JB1xpD8AZo1eC+dVovhBg\"",
		"mtime": "2026-09-03T13:25:29.433Z",
		"size": 16775,
		"path": "../public/videos/video-01/frame-183.jpg"
	},
	"/videos/video-01/frame-184.jpg": {
		"type": "image/jpeg",
		"etag": "\"4212-MH1ISh2MjKWb9ozZUtVeMRGuZe8\"",
		"mtime": "2026-09-03T13:25:29.453Z",
		"size": 16914,
		"path": "../public/videos/video-01/frame-184.jpg"
	},
	"/videos/video-01/frame-185.jpg": {
		"type": "image/jpeg",
		"etag": "\"4213-hcut4hqAj88xUdSW2qxXDOQaE+M\"",
		"mtime": "2026-09-03T13:25:29.474Z",
		"size": 16915,
		"path": "../public/videos/video-01/frame-185.jpg"
	},
	"/videos/video-01/frame-186.jpg": {
		"type": "image/jpeg",
		"etag": "\"415b-bFjycilcq2uXTpaNva0YV97XCdw\"",
		"mtime": "2026-09-03T13:25:29.491Z",
		"size": 16731,
		"path": "../public/videos/video-01/frame-186.jpg"
	},
	"/videos/video-01/frame-187.jpg": {
		"type": "image/jpeg",
		"etag": "\"415b-bFjycilcq2uXTpaNva0YV97XCdw\"",
		"mtime": "2026-09-03T13:25:29.508Z",
		"size": 16731,
		"path": "../public/videos/video-01/frame-187.jpg"
	},
	"/videos/video-01/frame-188.jpg": {
		"type": "image/jpeg",
		"etag": "\"4148-Pdevx6svmuOCQt4OdkccevxxYZY\"",
		"mtime": "2026-09-03T13:25:29.526Z",
		"size": 16712,
		"path": "../public/videos/video-01/frame-188.jpg"
	},
	"/videos/video-01/frame-189.jpg": {
		"type": "image/jpeg",
		"etag": "\"418e-ccrK0GRfQwW8srYOZMOarJQVgeQ\"",
		"mtime": "2026-09-03T13:25:29.542Z",
		"size": 16782,
		"path": "../public/videos/video-01/frame-189.jpg"
	},
	"/videos/video-01/frame-191.jpg": {
		"type": "image/jpeg",
		"etag": "\"4220-bbhvfs3rpLMAH66qA6kAJAwBtoc\"",
		"mtime": "2026-09-03T13:25:29.578Z",
		"size": 16928,
		"path": "../public/videos/video-01/frame-191.jpg"
	},
	"/videos/video-01/frame-190.jpg": {
		"type": "image/jpeg",
		"etag": "\"41c6-NN+JlwFS9FmnKK0bOzJuyCXhIoY\"",
		"mtime": "2026-09-03T13:25:29.558Z",
		"size": 16838,
		"path": "../public/videos/video-01/frame-190.jpg"
	},
	"/videos/video-01/frame-192.jpg": {
		"type": "image/jpeg",
		"etag": "\"4220-bbhvfs3rpLMAH66qA6kAJAwBtoc\"",
		"mtime": "2026-09-03T13:25:29.595Z",
		"size": 16928,
		"path": "../public/videos/video-01/frame-192.jpg"
	},
	"/videos/video-01/frame-193.jpg": {
		"type": "image/jpeg",
		"etag": "\"4286-Xz1nO/SAiO9sXFVlee/t85ADUyg\"",
		"mtime": "2026-09-03T13:25:29.614Z",
		"size": 17030,
		"path": "../public/videos/video-01/frame-193.jpg"
	},
	"/videos/video-01/frame-195.jpg": {
		"type": "image/jpeg",
		"etag": "\"42d7-+KeNqsbfacPwmsozpfWSSrh0wzQ\"",
		"mtime": "2026-09-03T13:25:29.644Z",
		"size": 17111,
		"path": "../public/videos/video-01/frame-195.jpg"
	},
	"/videos/video-01/frame-194.jpg": {
		"type": "image/jpeg",
		"etag": "\"42de-aRhjfO2iBXAhBEH0VQKgzLjzLOY\"",
		"mtime": "2026-09-03T13:25:29.628Z",
		"size": 17118,
		"path": "../public/videos/video-01/frame-194.jpg"
	},
	"/videos/video-01/frame-196.jpg": {
		"type": "image/jpeg",
		"etag": "\"42f7-RHMlnlPNyd+1zUpIF/S39lisM1k\"",
		"mtime": "2026-09-03T13:25:29.664Z",
		"size": 17143,
		"path": "../public/videos/video-01/frame-196.jpg"
	},
	"/videos/video-01/frame-198.jpg": {
		"type": "image/jpeg",
		"etag": "\"4355-sLXoPPH8q16Ux2B1hdBAgDG26QA\"",
		"mtime": "2026-09-03T13:25:29.701Z",
		"size": 17237,
		"path": "../public/videos/video-01/frame-198.jpg"
	},
	"/videos/video-01/frame-199.jpg": {
		"type": "image/jpeg",
		"etag": "\"4360-DY943GL91kpeV4fyAOG3ZOvXw6k\"",
		"mtime": "2026-09-03T13:25:29.716Z",
		"size": 17248,
		"path": "../public/videos/video-01/frame-199.jpg"
	},
	"/videos/video-01/frame-200.jpg": {
		"type": "image/jpeg",
		"etag": "\"4475-MClwI/m9+17jhLo1I5HUnvcNZQA\"",
		"mtime": "2026-09-03T13:25:29.733Z",
		"size": 17525,
		"path": "../public/videos/video-01/frame-200.jpg"
	},
	"/videos/video-01/frame-197.jpg": {
		"type": "image/jpeg",
		"etag": "\"42f7-RHMlnlPNyd+1zUpIF/S39lisM1k\"",
		"mtime": "2026-09-03T13:25:29.680Z",
		"size": 17143,
		"path": "../public/videos/video-01/frame-197.jpg"
	},
	"/videos/video-01/frame-201.jpg": {
		"type": "image/jpeg",
		"etag": "\"44ee-0nmokskSLlhXAuGj4GJjAZgVIeI\"",
		"mtime": "2026-09-03T13:25:29.749Z",
		"size": 17646,
		"path": "../public/videos/video-01/frame-201.jpg"
	},
	"/videos/video-01/frame-202.jpg": {
		"type": "image/jpeg",
		"etag": "\"44ee-0nmokskSLlhXAuGj4GJjAZgVIeI\"",
		"mtime": "2026-09-03T13:25:29.765Z",
		"size": 17646,
		"path": "../public/videos/video-01/frame-202.jpg"
	},
	"/videos/video-01/frame-203.jpg": {
		"type": "image/jpeg",
		"etag": "\"4608-MDSybcMdlv2pTUG+GQcrYmsGCe4\"",
		"mtime": "2026-09-03T13:25:29.783Z",
		"size": 17928,
		"path": "../public/videos/video-01/frame-203.jpg"
	},
	"/videos/video-01/frame-204.jpg": {
		"type": "image/jpeg",
		"etag": "\"466f-BpcwXGewBy1LP9RFGynnDykgNW8\"",
		"mtime": "2026-09-03T13:25:29.801Z",
		"size": 18031,
		"path": "../public/videos/video-01/frame-204.jpg"
	},
	"/videos/video-01/frame-206.jpg": {
		"type": "image/jpeg",
		"etag": "\"4815-IPsVcOJa6bwyV4v269djdn1cHAY\"",
		"mtime": "2026-09-03T13:25:29.837Z",
		"size": 18453,
		"path": "../public/videos/video-01/frame-206.jpg"
	},
	"/videos/video-01/frame-205.jpg": {
		"type": "image/jpeg",
		"etag": "\"471b-rE2rWJ5SxdjgdFlULRWa0FbDUfw\"",
		"mtime": "2026-09-03T13:25:29.820Z",
		"size": 18203,
		"path": "../public/videos/video-01/frame-205.jpg"
	},
	"/videos/video-01/frame-207.jpg": {
		"type": "image/jpeg",
		"etag": "\"4815-IPsVcOJa6bwyV4v269djdn1cHAY\"",
		"mtime": "2026-09-03T13:25:29.854Z",
		"size": 18453,
		"path": "../public/videos/video-01/frame-207.jpg"
	},
	"/videos/video-01/frame-208.jpg": {
		"type": "image/jpeg",
		"etag": "\"4901-POnUXD4cT5lBEmLT7uwv4xRpKDs\"",
		"mtime": "2026-09-03T13:25:29.870Z",
		"size": 18689,
		"path": "../public/videos/video-01/frame-208.jpg"
	},
	"/videos/video-01/frame-209.jpg": {
		"type": "image/jpeg",
		"etag": "\"4a1c-2GJtyBAmFuIgaF4LFUyOdrF42s0\"",
		"mtime": "2026-09-03T13:25:29.887Z",
		"size": 18972,
		"path": "../public/videos/video-01/frame-209.jpg"
	},
	"/videos/video-01/frame-210.jpg": {
		"type": "image/jpeg",
		"etag": "\"4b5e-4y70iPeplFzjdiJt1iMy6BGyaS8\"",
		"mtime": "2026-09-03T13:25:29.904Z",
		"size": 19294,
		"path": "../public/videos/video-01/frame-210.jpg"
	},
	"/videos/video-01/frame-211.jpg": {
		"type": "image/jpeg",
		"etag": "\"4b8d-mR3OQH0Sux5bXiEzyAPmqmZutG4\"",
		"mtime": "2026-09-03T13:25:29.924Z",
		"size": 19341,
		"path": "../public/videos/video-01/frame-211.jpg"
	},
	"/videos/video-01/frame-212.jpg": {
		"type": "image/jpeg",
		"etag": "\"4b8d-mR3OQH0Sux5bXiEzyAPmqmZutG4\"",
		"mtime": "2026-09-03T13:25:29.941Z",
		"size": 19341,
		"path": "../public/videos/video-01/frame-212.jpg"
	},
	"/videos/video-01/frame-213.jpg": {
		"type": "image/jpeg",
		"etag": "\"4b50-geth5YekmLSrjlgjqpO5i5W9yF0\"",
		"mtime": "2026-09-03T13:25:29.958Z",
		"size": 19280,
		"path": "../public/videos/video-01/frame-213.jpg"
	},
	"/videos/video-01/frame-214.jpg": {
		"type": "image/jpeg",
		"etag": "\"4a16-J66yHpJu0RsthYc/dG78qe0SOh0\"",
		"mtime": "2026-09-03T13:25:29.975Z",
		"size": 18966,
		"path": "../public/videos/video-01/frame-214.jpg"
	},
	"/videos/video-01/frame-215.jpg": {
		"type": "image/jpeg",
		"etag": "\"49b6-oEBcTgckBBY0PSOOQO4BmoWKXcc\"",
		"mtime": "2026-09-03T13:25:29.994Z",
		"size": 18870,
		"path": "../public/videos/video-01/frame-215.jpg"
	},
	"/videos/video-01/frame-216.jpg": {
		"type": "image/jpeg",
		"etag": "\"4856-6GnmXSlKfZ4HyBxuIdCp0WJ+09s\"",
		"mtime": "2026-09-03T13:25:30.011Z",
		"size": 18518,
		"path": "../public/videos/video-01/frame-216.jpg"
	},
	"/videos/video-01/frame-217.jpg": {
		"type": "image/jpeg",
		"etag": "\"4856-6GnmXSlKfZ4HyBxuIdCp0WJ+09s\"",
		"mtime": "2026-09-03T13:25:30.028Z",
		"size": 18518,
		"path": "../public/videos/video-01/frame-217.jpg"
	},
	"/videos/video-01/frame-218.jpg": {
		"type": "image/jpeg",
		"etag": "\"4796-pQAtrZydowNlsB3ujwxZrw0GNCU\"",
		"mtime": "2026-09-03T13:25:30.044Z",
		"size": 18326,
		"path": "../public/videos/video-01/frame-218.jpg"
	},
	"/videos/video-01/frame-219.jpg": {
		"type": "image/jpeg",
		"etag": "\"468b-4h/IKNxA8XQyxZVDGJ6cZMJLs4I\"",
		"mtime": "2026-09-03T13:25:30.064Z",
		"size": 18059,
		"path": "../public/videos/video-01/frame-219.jpg"
	},
	"/videos/video-01/frame-220.jpg": {
		"type": "image/jpeg",
		"etag": "\"467d-rQ2oeWQty6njndQigy9/CdXXaM0\"",
		"mtime": "2026-09-03T13:25:30.084Z",
		"size": 18045,
		"path": "../public/videos/video-01/frame-220.jpg"
	},
	"/videos/video-01/frame-221.jpg": {
		"type": "image/jpeg",
		"etag": "\"45fc-Jims+9eEP1fc7DYmMXqwC4mBuVM\"",
		"mtime": "2026-09-03T13:25:30.100Z",
		"size": 17916,
		"path": "../public/videos/video-01/frame-221.jpg"
	},
	"/videos/video-01/frame-222.jpg": {
		"type": "image/jpeg",
		"etag": "\"45fc-Jims+9eEP1fc7DYmMXqwC4mBuVM\"",
		"mtime": "2026-09-03T13:25:30.118Z",
		"size": 17916,
		"path": "../public/videos/video-01/frame-222.jpg"
	},
	"/videos/video-01/frame-223.jpg": {
		"type": "image/jpeg",
		"etag": "\"4501-KzpRjQ5gH7FNDaERYDa0Jbd8lpo\"",
		"mtime": "2026-09-03T13:25:30.139Z",
		"size": 17665,
		"path": "../public/videos/video-01/frame-223.jpg"
	},
	"/videos/video-01/frame-224.jpg": {
		"type": "image/jpeg",
		"etag": "\"4441-lLjOsSH84ogldRICASFmr5Xts0U\"",
		"mtime": "2026-09-03T13:25:30.160Z",
		"size": 17473,
		"path": "../public/videos/video-01/frame-224.jpg"
	},
	"/videos/video-01/frame-226.jpg": {
		"type": "image/jpeg",
		"etag": "\"42c3-m4pEhuRt8KTvbs6MjJACC2DGKzQ\"",
		"mtime": "2026-09-03T13:25:30.195Z",
		"size": 17091,
		"path": "../public/videos/video-01/frame-226.jpg"
	},
	"/videos/video-01/frame-225.jpg": {
		"type": "image/jpeg",
		"etag": "\"43c1-KV0Rea5c/ItDJn3aswoBLb9ub0o\"",
		"mtime": "2026-09-03T13:25:30.179Z",
		"size": 17345,
		"path": "../public/videos/video-01/frame-225.jpg"
	},
	"/videos/video-01/frame-228.jpg": {
		"type": "image/jpeg",
		"etag": "\"4285-QnEP4ZBPldMF1HHh4CrlJOapj0E\"",
		"mtime": "2026-09-03T13:25:30.234Z",
		"size": 17029,
		"path": "../public/videos/video-01/frame-228.jpg"
	},
	"/videos/video-01/frame-227.jpg": {
		"type": "image/jpeg",
		"etag": "\"42c3-m4pEhuRt8KTvbs6MjJACC2DGKzQ\"",
		"mtime": "2026-09-03T13:25:30.214Z",
		"size": 17091,
		"path": "../public/videos/video-01/frame-227.jpg"
	},
	"/videos/video-01/frame-229.jpg": {
		"type": "image/jpeg",
		"etag": "\"41d9-9ufxIluaABrjSmm/r/B498UvsLo\"",
		"mtime": "2026-09-03T13:25:30.252Z",
		"size": 16857,
		"path": "../public/videos/video-01/frame-229.jpg"
	},
	"/videos/video-01/frame-230.jpg": {
		"type": "image/jpeg",
		"etag": "\"4129-GZZbN5BzahkDb7kT7eWASuJlXDQ\"",
		"mtime": "2026-09-03T13:25:30.269Z",
		"size": 16681,
		"path": "../public/videos/video-01/frame-230.jpg"
	},
	"/videos/video-01/frame-232.jpg": {
		"type": "image/jpeg",
		"etag": "\"40a3-Y08i/p1N1rZMSJPHEF/8hIhMsEY\"",
		"mtime": "2026-09-03T13:25:30.303Z",
		"size": 16547,
		"path": "../public/videos/video-01/frame-232.jpg"
	},
	"/videos/video-01/frame-231.jpg": {
		"type": "image/jpeg",
		"etag": "\"40a3-Y08i/p1N1rZMSJPHEF/8hIhMsEY\"",
		"mtime": "2026-09-03T13:25:30.286Z",
		"size": 16547,
		"path": "../public/videos/video-01/frame-231.jpg"
	},
	"/videos/video-01/frame-233.jpg": {
		"type": "image/jpeg",
		"etag": "\"40a1-CJ3ginEPlcWX76zSdSiHebt25II\"",
		"mtime": "2026-09-03T13:25:30.322Z",
		"size": 16545,
		"path": "../public/videos/video-01/frame-233.jpg"
	},
	"/videos/video-01/frame-234.jpg": {
		"type": "image/jpeg",
		"etag": "\"401c-BM4ElYJKyDnidT0um0+PrXRR1rw\"",
		"mtime": "2026-09-03T13:25:30.339Z",
		"size": 16412,
		"path": "../public/videos/video-01/frame-234.jpg"
	},
	"/videos/video-01/frame-235.jpg": {
		"type": "image/jpeg",
		"etag": "\"3f85-CI8tp0RyKs8QZuYYYP1BIn3woPc\"",
		"mtime": "2026-09-03T13:25:30.356Z",
		"size": 16261,
		"path": "../public/videos/video-01/frame-235.jpg"
	},
	"/videos/video-01/frame-236.jpg": {
		"type": "image/jpeg",
		"etag": "\"3ef6-/3AiOU+FkwQ5Z+VP4bzQ/lVY+cE\"",
		"mtime": "2026-09-03T13:25:30.373Z",
		"size": 16118,
		"path": "../public/videos/video-01/frame-236.jpg"
	},
	"/videos/video-01/frame-237.jpg": {
		"type": "image/jpeg",
		"etag": "\"3ef6-/3AiOU+FkwQ5Z+VP4bzQ/lVY+cE\"",
		"mtime": "2026-09-03T13:25:30.391Z",
		"size": 16118,
		"path": "../public/videos/video-01/frame-237.jpg"
	},
	"/videos/video-01/frame-238.jpg": {
		"type": "image/jpeg",
		"etag": "\"3eaa-N/BnJWhv3Vk9GxCvwR+LtiWsxl0\"",
		"mtime": "2026-09-03T13:25:30.408Z",
		"size": 16042,
		"path": "../public/videos/video-01/frame-238.jpg"
	},
	"/videos/video-01/frame-239.jpg": {
		"type": "image/jpeg",
		"etag": "\"3e27-EzgqmvXyaN7FvNZTldvm9zOSekU\"",
		"mtime": "2026-09-03T13:25:30.427Z",
		"size": 15911,
		"path": "../public/videos/video-01/frame-239.jpg"
	},
	"/videos/video-01/frame-241.jpg": {
		"type": "image/jpeg",
		"etag": "\"3d74-Y8X5mLsvly7A07hLSshlCsFQY/g\"",
		"mtime": "2026-09-03T13:25:30.468Z",
		"size": 15732,
		"path": "../public/videos/video-01/frame-241.jpg"
	},
	"/videos/video-01/frame-240.jpg": {
		"type": "image/jpeg",
		"etag": "\"3da4-6M5WAasJHkvSqkiMf5iAlDLJLGw\"",
		"mtime": "2026-09-03T13:25:30.447Z",
		"size": 15780,
		"path": "../public/videos/video-01/frame-240.jpg"
	},
	"/videos/video-01/frame-242.jpg": {
		"type": "image/jpeg",
		"etag": "\"3d74-Y8X5mLsvly7A07hLSshlCsFQY/g\"",
		"mtime": "2026-09-03T13:25:30.484Z",
		"size": 15732,
		"path": "../public/videos/video-01/frame-242.jpg"
	},
	"/videos/video-01/frame-243.jpg": {
		"type": "image/jpeg",
		"etag": "\"3d86-Rs0ws6svCZ2jGJlX+ul4YbGnQXM\"",
		"mtime": "2026-09-03T13:25:30.504Z",
		"size": 15750,
		"path": "../public/videos/video-01/frame-243.jpg"
	},
	"/videos/video-01/frame-244.jpg": {
		"type": "image/jpeg",
		"etag": "\"3d43-rZ/jgQ2Vklr2TOpFmB6oxf9AB+E\"",
		"mtime": "2026-09-03T13:25:30.521Z",
		"size": 15683,
		"path": "../public/videos/video-01/frame-244.jpg"
	},
	"/videos/video-01/frame-245.jpg": {
		"type": "image/jpeg",
		"etag": "\"3ce6-4HUqY8YK3QVdgOGrs5ftQ15QFS4\"",
		"mtime": "2026-09-03T13:25:30.537Z",
		"size": 15590,
		"path": "../public/videos/video-01/frame-245.jpg"
	},
	"/videos/video-01/frame-247.jpg": {
		"type": "image/jpeg",
		"etag": "\"3cb1-XLGXK5bi3SSuAEVlirH5u1Xm/l8\"",
		"mtime": "2026-09-03T13:25:30.571Z",
		"size": 15537,
		"path": "../public/videos/video-01/frame-247.jpg"
	},
	"/videos/video-01/frame-246.jpg": {
		"type": "image/jpeg",
		"etag": "\"3cb1-XLGXK5bi3SSuAEVlirH5u1Xm/l8\"",
		"mtime": "2026-09-03T13:25:30.554Z",
		"size": 15537,
		"path": "../public/videos/video-01/frame-246.jpg"
	},
	"/videos/video-01/frame-249.jpg": {
		"type": "image/jpeg",
		"etag": "\"3bf3-xJTQCu8Xii6S3bOfMI+i63fKGsA\"",
		"mtime": "2026-09-03T13:25:30.604Z",
		"size": 15347,
		"path": "../public/videos/video-01/frame-249.jpg"
	},
	"/videos/video-01/frame-248.jpg": {
		"type": "image/jpeg",
		"etag": "\"3c4d-8XDe67OT12hcQX38jmee1yLdsy0\"",
		"mtime": "2026-09-03T13:25:30.588Z",
		"size": 15437,
		"path": "../public/videos/video-01/frame-248.jpg"
	},
	"/videos/video-01/frame-250.jpg": {
		"type": "image/jpeg",
		"etag": "\"3bee-fvskUtCrXgQQiCu8Gq7TjwoOsvs\"",
		"mtime": "2026-09-03T13:25:30.620Z",
		"size": 15342,
		"path": "../public/videos/video-01/frame-250.jpg"
	},
	"/videos/video-01/frame-251.jpg": {
		"type": "image/jpeg",
		"etag": "\"3bca-zW6I544c2c9/nieM69XkedkzSUs\"",
		"mtime": "2026-09-03T13:25:30.636Z",
		"size": 15306,
		"path": "../public/videos/video-01/frame-251.jpg"
	},
	"/videos/video-01/frame-252.jpg": {
		"type": "image/jpeg",
		"etag": "\"3bca-zW6I544c2c9/nieM69XkedkzSUs\"",
		"mtime": "2026-09-03T13:25:30.650Z",
		"size": 15306,
		"path": "../public/videos/video-01/frame-252.jpg"
	},
	"/videos/video-01/frame-253.jpg": {
		"type": "image/jpeg",
		"etag": "\"3b6a-lEa6POeWfx8g/45Zg8jCZb4DpTY\"",
		"mtime": "2026-09-03T13:25:30.665Z",
		"size": 15210,
		"path": "../public/videos/video-01/frame-253.jpg"
	},
	"/videos/video-01/frame-254.jpg": {
		"type": "image/jpeg",
		"etag": "\"3b7e-ml6cOZ0c1hb7BVC9KW7rgW8lNe8\"",
		"mtime": "2026-09-03T13:25:30.682Z",
		"size": 15230,
		"path": "../public/videos/video-01/frame-254.jpg"
	},
	"/videos/video-01/frame-255.jpg": {
		"type": "image/jpeg",
		"etag": "\"3b61-ei8MkozChDnHdomjzr/uP4iRhcg\"",
		"mtime": "2026-09-03T13:25:30.701Z",
		"size": 15201,
		"path": "../public/videos/video-01/frame-255.jpg"
	},
	"/videos/video-01/frame-257.jpg": {
		"type": "image/jpeg",
		"etag": "\"3b0f-TAhFJ4IFim85uXxf7PShd8SHjlc\"",
		"mtime": "2026-09-03T13:25:30.734Z",
		"size": 15119,
		"path": "../public/videos/video-01/frame-257.jpg"
	},
	"/videos/video-01/frame-256.jpg": {
		"type": "image/jpeg",
		"etag": "\"3b0f-TAhFJ4IFim85uXxf7PShd8SHjlc\"",
		"mtime": "2026-09-03T13:25:30.719Z",
		"size": 15119,
		"path": "../public/videos/video-01/frame-256.jpg"
	},
	"/videos/video-01/frame-258.jpg": {
		"type": "image/jpeg",
		"etag": "\"3aa4-LOKSY8toaIFEKvDmY9o1I1/4DmA\"",
		"mtime": "2026-09-03T13:25:30.752Z",
		"size": 15012,
		"path": "../public/videos/video-01/frame-258.jpg"
	},
	"/videos/video-01/frame-259.jpg": {
		"type": "image/jpeg",
		"etag": "\"3a8e-+iqhZK6rNTFhwWpz0ML9FPdDhZ8\"",
		"mtime": "2026-09-03T13:25:30.767Z",
		"size": 14990,
		"path": "../public/videos/video-01/frame-259.jpg"
	},
	"/videos/video-01/frame-261.jpg": {
		"type": "image/jpeg",
		"etag": "\"3a8e-8pY5Xw9FPVOOfhEhahL0yvCqT7A\"",
		"mtime": "2026-09-03T13:25:30.797Z",
		"size": 14990,
		"path": "../public/videos/video-01/frame-261.jpg"
	},
	"/videos/video-01/frame-260.jpg": {
		"type": "image/jpeg",
		"etag": "\"3ab8-kneIMCmsD7ax0fCwpBv5vG/ihec\"",
		"mtime": "2026-09-03T13:25:30.782Z",
		"size": 15032,
		"path": "../public/videos/video-01/frame-260.jpg"
	},
	"/videos/video-01/frame-262.jpg": {
		"type": "image/jpeg",
		"etag": "\"3a8e-8pY5Xw9FPVOOfhEhahL0yvCqT7A\"",
		"mtime": "2026-09-03T13:25:30.811Z",
		"size": 14990,
		"path": "../public/videos/video-01/frame-262.jpg"
	},
	"/videos/video-01/frame-263.jpg": {
		"type": "image/jpeg",
		"etag": "\"3a96-G+oxRG6eJOPtKqwIP3yqf/2LMuM\"",
		"mtime": "2026-09-03T13:25:30.827Z",
		"size": 14998,
		"path": "../public/videos/video-01/frame-263.jpg"
	},
	"/videos/video-01/frame-264.jpg": {
		"type": "image/jpeg",
		"etag": "\"3a66-ClG/sya14c7eumPYE+DtA2Wrkbk\"",
		"mtime": "2026-09-03T13:25:30.843Z",
		"size": 14950,
		"path": "../public/videos/video-01/frame-264.jpg"
	},
	"/videos/video-01/frame-265.jpg": {
		"type": "image/jpeg",
		"etag": "\"3a58-VXQngPA7mlnRP68uayBt/htqH7o\"",
		"mtime": "2026-09-03T13:25:30.862Z",
		"size": 14936,
		"path": "../public/videos/video-01/frame-265.jpg"
	},
	"/videos/video-01/frame-266.jpg": {
		"type": "image/jpeg",
		"etag": "\"3a23-NlqglrWcFdZE+EC2IpG4kghyM6o\"",
		"mtime": "2026-09-03T13:25:30.878Z",
		"size": 14883,
		"path": "../public/videos/video-01/frame-266.jpg"
	},
	"/videos/video-01/frame-268.jpg": {
		"type": "image/jpeg",
		"etag": "\"3a43-RpSs8m/7I4EvjgQ6CKrhvDjTMKw\"",
		"mtime": "2026-09-03T13:25:30.911Z",
		"size": 14915,
		"path": "../public/videos/video-01/frame-268.jpg"
	},
	"/videos/video-01/frame-267.jpg": {
		"type": "image/jpeg",
		"etag": "\"3a23-NlqglrWcFdZE+EC2IpG4kghyM6o\"",
		"mtime": "2026-09-03T13:25:30.895Z",
		"size": 14883,
		"path": "../public/videos/video-01/frame-267.jpg"
	},
	"/videos/video-01/frame-269.jpg": {
		"type": "image/jpeg",
		"etag": "\"3a20-Vu4PliqWwUoYoLar3JktQ/7t3nc\"",
		"mtime": "2026-09-03T13:25:30.932Z",
		"size": 14880,
		"path": "../public/videos/video-01/frame-269.jpg"
	},
	"/videos/video-01/frame-270.jpg": {
		"type": "image/jpeg",
		"etag": "\"3a61-oSqPRoFRBChOJPvCxwsnuGObV+k\"",
		"mtime": "2026-09-03T13:25:30.951Z",
		"size": 14945,
		"path": "../public/videos/video-01/frame-270.jpg"
	},
	"/videos/video-01/frame-271.jpg": {
		"type": "image/jpeg",
		"etag": "\"3a09-6mcuMzOTgXxsJq7usHWOrREE+oo\"",
		"mtime": "2026-09-03T13:25:30.966Z",
		"size": 14857,
		"path": "../public/videos/video-01/frame-271.jpg"
	},
	"/videos/video-01/frame-273.jpg": {
		"type": "image/jpeg",
		"etag": "\"3a21-E1YTJcD7ElY1EzH4dWoBO2vTavk\"",
		"mtime": "2026-09-03T13:25:30.999Z",
		"size": 14881,
		"path": "../public/videos/video-01/frame-273.jpg"
	},
	"/videos/video-01/frame-272.jpg": {
		"type": "image/jpeg",
		"etag": "\"3a09-6mcuMzOTgXxsJq7usHWOrREE+oo\"",
		"mtime": "2026-09-03T13:25:30.982Z",
		"size": 14857,
		"path": "../public/videos/video-01/frame-272.jpg"
	},
	"/videos/video-01/frame-274.jpg": {
		"type": "image/jpeg",
		"etag": "\"39f4-xcn3QfM3+b/xRBSrGcpZL3QUcv4\"",
		"mtime": "2026-09-03T13:25:31.014Z",
		"size": 14836,
		"path": "../public/videos/video-01/frame-274.jpg"
	},
	"/videos/video-01/frame-275.jpg": {
		"type": "image/jpeg",
		"etag": "\"39e1-0W62E+Ubf54yU30OFLw4xiAFRXo\"",
		"mtime": "2026-09-03T13:25:31.029Z",
		"size": 14817,
		"path": "../public/videos/video-01/frame-275.jpg"
	},
	"/videos/video-01/frame-276.jpg": {
		"type": "image/jpeg",
		"etag": "\"39c4-0JlTRqorGCBioXYzN/bssoIL2Hk\"",
		"mtime": "2026-09-03T13:25:31.047Z",
		"size": 14788,
		"path": "../public/videos/video-01/frame-276.jpg"
	},
	"/videos/video-01/frame-277.jpg": {
		"type": "image/jpeg",
		"etag": "\"39c4-0JlTRqorGCBioXYzN/bssoIL2Hk\"",
		"mtime": "2026-09-03T13:25:31.067Z",
		"size": 14788,
		"path": "../public/videos/video-01/frame-277.jpg"
	},
	"/videos/video-01/frame-278.jpg": {
		"type": "image/jpeg",
		"etag": "\"39ea-wUkmPDJ+D9b15hVQt9wKB93ZfXM\"",
		"mtime": "2026-09-03T13:25:31.085Z",
		"size": 14826,
		"path": "../public/videos/video-01/frame-278.jpg"
	},
	"/videos/video-01/frame-279.jpg": {
		"type": "image/jpeg",
		"etag": "\"39b5-wTw5krcPe9dmOgL8TzQN2A46V7c\"",
		"mtime": "2026-09-03T13:25:31.100Z",
		"size": 14773,
		"path": "../public/videos/video-01/frame-279.jpg"
	},
	"/videos/video-01/frame-280.jpg": {
		"type": "image/jpeg",
		"etag": "\"39f9-Li3fJOuHJXjXRZbcftLaHSOkaiY\"",
		"mtime": "2026-09-03T13:25:31.116Z",
		"size": 14841,
		"path": "../public/videos/video-01/frame-280.jpg"
	},
	"/videos/video-01/frame-281.jpg": {
		"type": "image/jpeg",
		"etag": "\"39c1-Xk4hm9ZiAqYhYxBuRs/0D1Nc4KM\"",
		"mtime": "2026-09-03T13:25:31.135Z",
		"size": 14785,
		"path": "../public/videos/video-01/frame-281.jpg"
	},
	"/videos/video-01/frame-282.jpg": {
		"type": "image/jpeg",
		"etag": "\"39c1-Xk4hm9ZiAqYhYxBuRs/0D1Nc4KM\"",
		"mtime": "2026-09-03T13:25:31.153Z",
		"size": 14785,
		"path": "../public/videos/video-01/frame-282.jpg"
	},
	"/videos/video-01/frame-283.jpg": {
		"type": "image/jpeg",
		"etag": "\"39ba-eNANoXWs631Huaw4UTOX2GoZ3w0\"",
		"mtime": "2026-09-03T13:25:31.171Z",
		"size": 14778,
		"path": "../public/videos/video-01/frame-283.jpg"
	},
	"/videos/video-01/frame-284.jpg": {
		"type": "image/jpeg",
		"etag": "\"3980-FSB2nemFTDnIcGgelbX3syXag2k\"",
		"mtime": "2026-09-03T13:25:31.190Z",
		"size": 14720,
		"path": "../public/videos/video-01/frame-284.jpg"
	},
	"/videos/video-01/frame-285.jpg": {
		"type": "image/jpeg",
		"etag": "\"3973-ygx0OlE3yWz8212LbFZyseYCg6A\"",
		"mtime": "2026-09-03T13:25:31.206Z",
		"size": 14707,
		"path": "../public/videos/video-01/frame-285.jpg"
	},
	"/videos/video-01/frame-286.jpg": {
		"type": "image/jpeg",
		"etag": "\"396f-Wp5AjlFJgw504M4UCUP2RiFQXa8\"",
		"mtime": "2026-09-03T13:25:31.224Z",
		"size": 14703,
		"path": "../public/videos/video-01/frame-286.jpg"
	},
	"/videos/video-01/frame-287.jpg": {
		"type": "image/jpeg",
		"etag": "\"396f-Wp5AjlFJgw504M4UCUP2RiFQXa8\"",
		"mtime": "2026-09-03T13:25:31.240Z",
		"size": 14703,
		"path": "../public/videos/video-01/frame-287.jpg"
	},
	"/videos/video-01/frame-288.jpg": {
		"type": "image/jpeg",
		"etag": "\"3963-ifYe/hzYcFo5F9YpP+Ss14kAl4w\"",
		"mtime": "2026-09-03T13:25:31.257Z",
		"size": 14691,
		"path": "../public/videos/video-01/frame-288.jpg"
	},
	"/videos/video-01/frame-289.jpg": {
		"type": "image/jpeg",
		"etag": "\"3926-M3CYEuf8qUDDlwyGq2hYmHKRXkU\"",
		"mtime": "2026-09-03T13:25:31.273Z",
		"size": 14630,
		"path": "../public/videos/video-01/frame-289.jpg"
	},
	"/videos/video-01/frame-291.jpg": {
		"type": "image/jpeg",
		"etag": "\"3927-kghkmhTly6WWQc823a7X2trgYJ4\"",
		"mtime": "2026-09-03T13:25:31.310Z",
		"size": 14631,
		"path": "../public/videos/video-01/frame-291.jpg"
	},
	"/videos/video-01/frame-290.jpg": {
		"type": "image/jpeg",
		"etag": "\"3981-g0XcLJOwV4O3b2X+qhrMYUi69JQ\"",
		"mtime": "2026-09-03T13:25:31.291Z",
		"size": 14721,
		"path": "../public/videos/video-01/frame-290.jpg"
	},
	"/videos/video-01/frame-292.jpg": {
		"type": "image/jpeg",
		"etag": "\"3927-kghkmhTly6WWQc823a7X2trgYJ4\"",
		"mtime": "2026-09-03T13:25:31.326Z",
		"size": 14631,
		"path": "../public/videos/video-01/frame-292.jpg"
	},
	"/videos/video-01/frame-293.jpg": {
		"type": "image/jpeg",
		"etag": "\"3936-4GO5/FaHXBmPK7lhpKc8dtaAUi4\"",
		"mtime": "2026-09-03T13:25:31.345Z",
		"size": 14646,
		"path": "../public/videos/video-01/frame-293.jpg"
	},
	"/videos/video-01/frame-294.jpg": {
		"type": "image/jpeg",
		"etag": "\"3938-vNzfElhPIF2L0nV47LrxuhPeRg8\"",
		"mtime": "2026-09-03T13:25:31.363Z",
		"size": 14648,
		"path": "../public/videos/video-01/frame-294.jpg"
	},
	"/videos/video-01/frame-295.jpg": {
		"type": "image/jpeg",
		"etag": "\"3931-UwLm82/ROxvhudPKlPDdPanUeuE\"",
		"mtime": "2026-09-03T13:25:31.381Z",
		"size": 14641,
		"path": "../public/videos/video-01/frame-295.jpg"
	},
	"/videos/video-01/frame-297.jpg": {
		"type": "image/jpeg",
		"etag": "\"3931-yHwWuPqwJYcPWM3jISz2JlQKxAE\"",
		"mtime": "2026-09-03T13:25:31.413Z",
		"size": 14641,
		"path": "../public/videos/video-01/frame-297.jpg"
	},
	"/videos/video-01/frame-296.jpg": {
		"type": "image/jpeg",
		"etag": "\"3931-yHwWuPqwJYcPWM3jISz2JlQKxAE\"",
		"mtime": "2026-09-03T13:25:31.398Z",
		"size": 14641,
		"path": "../public/videos/video-01/frame-296.jpg"
	},
	"/videos/video-01/frame-298.jpg": {
		"type": "image/jpeg",
		"etag": "\"3928-XKE7MOM9l3nZsySWwCQUg9RRAXQ\"",
		"mtime": "2026-09-03T13:25:31.432Z",
		"size": 14632,
		"path": "../public/videos/video-01/frame-298.jpg"
	},
	"/videos/video-01/frame-299.jpg": {
		"type": "image/jpeg",
		"etag": "\"392b-FuGm28C4lDYOl8ndHOXyGuvjAmI\"",
		"mtime": "2026-09-03T13:25:31.449Z",
		"size": 14635,
		"path": "../public/videos/video-01/frame-299.jpg"
	},
	"/videos/video-03/frame-000.jpg": {
		"type": "image/jpeg",
		"etag": "\"8071-fkniLhZACuJ3jIo0/xmK22TL+qc\"",
		"mtime": "2026-09-03T13:25:36.305Z",
		"size": 32881,
		"path": "../public/videos/video-03/frame-000.jpg"
	},
	"/videos/video-03/frame-002.jpg": {
		"type": "image/jpeg",
		"etag": "\"810a-RGBXYZaiQPIs7tCUM5mK/GkQX9Y\"",
		"mtime": "2026-09-03T13:25:36.345Z",
		"size": 33034,
		"path": "../public/videos/video-03/frame-002.jpg"
	},
	"/videos/video-03/frame-003.jpg": {
		"type": "image/jpeg",
		"etag": "\"8123-hFJIZDN51HwZEKqAUxMstk/5zlE\"",
		"mtime": "2026-09-03T13:25:36.364Z",
		"size": 33059,
		"path": "../public/videos/video-03/frame-003.jpg"
	},
	"/videos/video-03/frame-001.jpg": {
		"type": "image/jpeg",
		"etag": "\"805c-9mqKVFrI5YQomDW/CYykemNiS7o\"",
		"mtime": "2026-09-03T13:25:36.326Z",
		"size": 32860,
		"path": "../public/videos/video-03/frame-001.jpg"
	},
	"/videos/video-03/frame-004.jpg": {
		"type": "image/jpeg",
		"etag": "\"818a-suAIEkRFDBvVmbViPreUCwMYPCU\"",
		"mtime": "2026-09-03T13:25:36.390Z",
		"size": 33162,
		"path": "../public/videos/video-03/frame-004.jpg"
	},
	"/videos/video-03/frame-005.jpg": {
		"type": "image/jpeg",
		"etag": "\"82e9-V8Z63p87jdgb1Ih8qf9kHN7yKRo\"",
		"mtime": "2026-09-03T13:25:36.411Z",
		"size": 33513,
		"path": "../public/videos/video-03/frame-005.jpg"
	},
	"/videos/video-03/frame-007.jpg": {
		"type": "image/jpeg",
		"etag": "\"817e-hS5z5Hz+94e0kPzC4kPDzT4206k\"",
		"mtime": "2026-09-03T13:25:36.450Z",
		"size": 33150,
		"path": "../public/videos/video-03/frame-007.jpg"
	},
	"/videos/video-03/frame-006.jpg": {
		"type": "image/jpeg",
		"etag": "\"812e-UtkaRlJRddFHbDJz2WQ308waSQY\"",
		"mtime": "2026-09-03T13:25:36.430Z",
		"size": 33070,
		"path": "../public/videos/video-03/frame-006.jpg"
	},
	"/videos/video-03/frame-008.jpg": {
		"type": "image/jpeg",
		"etag": "\"8243-90AB+kgHO2XfQ1eFGeqXt+OS+zI\"",
		"mtime": "2026-09-03T13:25:36.473Z",
		"size": 33347,
		"path": "../public/videos/video-03/frame-008.jpg"
	},
	"/videos/video-03/frame-009.jpg": {
		"type": "image/jpeg",
		"etag": "\"8239-/n92gbIJHyr+zAjalqL4pDUb8SM\"",
		"mtime": "2026-09-03T13:25:36.490Z",
		"size": 33337,
		"path": "../public/videos/video-03/frame-009.jpg"
	},
	"/videos/video-03/frame-011.jpg": {
		"type": "image/jpeg",
		"etag": "\"81d2-EU1eMicgqJ7VyNqJVrfy84/DQe4\"",
		"mtime": "2026-09-03T13:25:36.531Z",
		"size": 33234,
		"path": "../public/videos/video-03/frame-011.jpg"
	},
	"/videos/video-03/frame-010.jpg": {
		"type": "image/jpeg",
		"etag": "\"827a-p10bvrZYBUCErlRlgZi7kWvBqpA\"",
		"mtime": "2026-09-03T13:25:36.511Z",
		"size": 33402,
		"path": "../public/videos/video-03/frame-010.jpg"
	},
	"/videos/video-03/frame-012.jpg": {
		"type": "image/jpeg",
		"etag": "\"81d2-EU1eMicgqJ7VyNqJVrfy84/DQe4\"",
		"mtime": "2026-09-03T13:25:36.549Z",
		"size": 33234,
		"path": "../public/videos/video-03/frame-012.jpg"
	},
	"/videos/video-03/frame-013.jpg": {
		"type": "image/jpeg",
		"etag": "\"81bb-Vj/1EoMpvqv+ZtB198E0SmwoStg\"",
		"mtime": "2026-09-03T13:25:36.569Z",
		"size": 33211,
		"path": "../public/videos/video-03/frame-013.jpg"
	},
	"/videos/video-03/frame-014.jpg": {
		"type": "image/jpeg",
		"etag": "\"825a-EVsn1PUviedSYbu1p8XIfpmwt/s\"",
		"mtime": "2026-09-03T13:25:36.585Z",
		"size": 33370,
		"path": "../public/videos/video-03/frame-014.jpg"
	},
	"/videos/video-03/frame-015.jpg": {
		"type": "image/jpeg",
		"etag": "\"837f-7+47dGORbotW9iyCLvwUVEP1W2E\"",
		"mtime": "2026-09-03T13:25:36.603Z",
		"size": 33663,
		"path": "../public/videos/video-03/frame-015.jpg"
	},
	"/videos/video-03/frame-016.jpg": {
		"type": "image/jpeg",
		"etag": "\"8280-Jqnx6wiKdU5GCUfqRz9BCS3kE9A\"",
		"mtime": "2026-09-03T13:25:36.621Z",
		"size": 33408,
		"path": "../public/videos/video-03/frame-016.jpg"
	},
	"/videos/video-03/frame-017.jpg": {
		"type": "image/jpeg",
		"etag": "\"8280-Jqnx6wiKdU5GCUfqRz9BCS3kE9A\"",
		"mtime": "2026-09-03T13:25:36.641Z",
		"size": 33408,
		"path": "../public/videos/video-03/frame-017.jpg"
	},
	"/videos/video-03/frame-019.jpg": {
		"type": "image/jpeg",
		"etag": "\"8171-8CThOhsmciF1R+WVI57iyxvRIYI\"",
		"mtime": "2026-09-03T13:25:36.675Z",
		"size": 33137,
		"path": "../public/videos/video-03/frame-019.jpg"
	},
	"/videos/video-03/frame-018.jpg": {
		"type": "image/jpeg",
		"etag": "\"81e3-rhFS4X8/o49iDGtcAmpe1efVTFQ\"",
		"mtime": "2026-09-03T13:25:36.659Z",
		"size": 33251,
		"path": "../public/videos/video-03/frame-018.jpg"
	},
	"/videos/video-03/frame-020.jpg": {
		"type": "image/jpeg",
		"etag": "\"824f-OUcLrvrZBIXq/rv+J/oW2gVCm7E\"",
		"mtime": "2026-09-03T13:25:36.691Z",
		"size": 33359,
		"path": "../public/videos/video-03/frame-020.jpg"
	},
	"/videos/video-03/frame-021.jpg": {
		"type": "image/jpeg",
		"etag": "\"81d8-bBf/nb4WefjoR5M/4aQT10CJsZE\"",
		"mtime": "2026-09-03T13:25:36.709Z",
		"size": 33240,
		"path": "../public/videos/video-03/frame-021.jpg"
	},
	"/videos/video-03/frame-022.jpg": {
		"type": "image/jpeg",
		"etag": "\"81d8-bBf/nb4WefjoR5M/4aQT10CJsZE\"",
		"mtime": "2026-09-03T13:25:36.727Z",
		"size": 33240,
		"path": "../public/videos/video-03/frame-022.jpg"
	},
	"/videos/video-03/frame-023.jpg": {
		"type": "image/jpeg",
		"etag": "\"8244-y7/hBs58QFDjwCWFPyv4O54uu6k\"",
		"mtime": "2026-09-03T13:25:36.743Z",
		"size": 33348,
		"path": "../public/videos/video-03/frame-023.jpg"
	},
	"/videos/video-03/frame-024.jpg": {
		"type": "image/jpeg",
		"etag": "\"826e-OvgxKJbuYDD6+8crqIHYWttsHuc\"",
		"mtime": "2026-09-03T13:25:36.758Z",
		"size": 33390,
		"path": "../public/videos/video-03/frame-024.jpg"
	},
	"/videos/video-03/frame-025.jpg": {
		"type": "image/jpeg",
		"etag": "\"83ad-ctAdiYY62/ZdK6K9qgIix7H1Th0\"",
		"mtime": "2026-09-03T13:25:36.774Z",
		"size": 33709,
		"path": "../public/videos/video-03/frame-025.jpg"
	},
	"/videos/video-03/frame-026.jpg": {
		"type": "image/jpeg",
		"etag": "\"828d-6qRyWpSaaC7mJvpPdD4TYLTREeM\"",
		"mtime": "2026-09-03T13:25:36.791Z",
		"size": 33421,
		"path": "../public/videos/video-03/frame-026.jpg"
	},
	"/videos/video-03/frame-027.jpg": {
		"type": "image/jpeg",
		"etag": "\"828d-6qRyWpSaaC7mJvpPdD4TYLTREeM\"",
		"mtime": "2026-09-03T13:25:36.807Z",
		"size": 33421,
		"path": "../public/videos/video-03/frame-027.jpg"
	},
	"/videos/video-03/frame-028.jpg": {
		"type": "image/jpeg",
		"etag": "\"8292-Bore99uFU0B4C1cPK2X2Qs+xl9c\"",
		"mtime": "2026-09-03T13:25:36.822Z",
		"size": 33426,
		"path": "../public/videos/video-03/frame-028.jpg"
	},
	"/videos/video-03/frame-029.jpg": {
		"type": "image/jpeg",
		"etag": "\"81ff-1PC95HgXZoNQ/fKOI+LwIIq5920\"",
		"mtime": "2026-09-03T13:25:36.838Z",
		"size": 33279,
		"path": "../public/videos/video-03/frame-029.jpg"
	},
	"/videos/video-03/frame-033.jpg": {
		"type": "image/jpeg",
		"etag": "\"829c-6Ds6o8hBDVXMXD98gSDN6qc/wm8\"",
		"mtime": "2026-09-03T13:25:36.904Z",
		"size": 33436,
		"path": "../public/videos/video-03/frame-033.jpg"
	},
	"/videos/video-03/frame-030.jpg": {
		"type": "image/jpeg",
		"etag": "\"830d-6RYB1+xLO+VAXPmyQtxHHM0tZmU\"",
		"mtime": "2026-09-03T13:25:36.852Z",
		"size": 33549,
		"path": "../public/videos/video-03/frame-030.jpg"
	},
	"/videos/video-03/frame-032.jpg": {
		"type": "image/jpeg",
		"etag": "\"824f-GiuHDFVNN5KHdkyaN525fmkUM34\"",
		"mtime": "2026-09-03T13:25:36.888Z",
		"size": 33359,
		"path": "../public/videos/video-03/frame-032.jpg"
	},
	"/videos/video-03/frame-034.jpg": {
		"type": "image/jpeg",
		"etag": "\"82d5-O3gHGJiieIeSy38WFFsFRyNwIkg\"",
		"mtime": "2026-09-03T13:25:36.917Z",
		"size": 33493,
		"path": "../public/videos/video-03/frame-034.jpg"
	},
	"/videos/video-03/frame-031.jpg": {
		"type": "image/jpeg",
		"etag": "\"824f-GiuHDFVNN5KHdkyaN525fmkUM34\"",
		"mtime": "2026-09-03T13:25:36.871Z",
		"size": 33359,
		"path": "../public/videos/video-03/frame-031.jpg"
	},
	"/videos/video-03/frame-035.jpg": {
		"type": "image/jpeg",
		"etag": "\"83fb-50nizKiKsPVou3N0W08B49vgt1E\"",
		"mtime": "2026-09-03T13:25:36.935Z",
		"size": 33787,
		"path": "../public/videos/video-03/frame-035.jpg"
	},
	"/videos/video-03/frame-036.jpg": {
		"type": "image/jpeg",
		"etag": "\"8313-Q+JEsihMrUkUjBmDOwNVu5G2OYw\"",
		"mtime": "2026-09-03T13:25:36.950Z",
		"size": 33555,
		"path": "../public/videos/video-03/frame-036.jpg"
	},
	"/videos/video-03/frame-038.jpg": {
		"type": "image/jpeg",
		"etag": "\"8359-eoCBtL2bT2c36gKf0xDYJbIV1HY\"",
		"mtime": "2026-09-03T13:25:36.982Z",
		"size": 33625,
		"path": "../public/videos/video-03/frame-038.jpg"
	},
	"/videos/video-03/frame-039.jpg": {
		"type": "image/jpeg",
		"etag": "\"830f-/F6V9bBA6ZF3gFXW+HoG7NuXgjA\"",
		"mtime": "2026-09-03T13:25:36.997Z",
		"size": 33551,
		"path": "../public/videos/video-03/frame-039.jpg"
	},
	"/videos/video-03/frame-037.jpg": {
		"type": "image/jpeg",
		"etag": "\"8313-Q+JEsihMrUkUjBmDOwNVu5G2OYw\"",
		"mtime": "2026-09-03T13:25:36.966Z",
		"size": 33555,
		"path": "../public/videos/video-03/frame-037.jpg"
	},
	"/videos/video-03/frame-040.jpg": {
		"type": "image/jpeg",
		"etag": "\"8399-wGkrMAkOor002z20FMQ7u81jb98\"",
		"mtime": "2026-09-03T13:25:37.011Z",
		"size": 33689,
		"path": "../public/videos/video-03/frame-040.jpg"
	},
	"/videos/video-03/frame-041.jpg": {
		"type": "image/jpeg",
		"etag": "\"833e-Mi8ALZZf9UM74Q9bwWFiaYK2I1w\"",
		"mtime": "2026-09-03T13:25:37.028Z",
		"size": 33598,
		"path": "../public/videos/video-03/frame-041.jpg"
	},
	"/videos/video-03/frame-042.jpg": {
		"type": "image/jpeg",
		"etag": "\"833e-Mi8ALZZf9UM74Q9bwWFiaYK2I1w\"",
		"mtime": "2026-09-03T13:25:37.045Z",
		"size": 33598,
		"path": "../public/videos/video-03/frame-042.jpg"
	},
	"/videos/video-03/frame-043.jpg": {
		"type": "image/jpeg",
		"etag": "\"82df-ZU/KkGBLUoh3zJUg3pnHAUjaEr8\"",
		"mtime": "2026-09-03T13:25:37.060Z",
		"size": 33503,
		"path": "../public/videos/video-03/frame-043.jpg"
	},
	"/videos/video-03/frame-044.jpg": {
		"type": "image/jpeg",
		"etag": "\"8364-+DoBpojBnKIAfAClsa9+l0dF7QA\"",
		"mtime": "2026-09-03T13:25:37.076Z",
		"size": 33636,
		"path": "../public/videos/video-03/frame-044.jpg"
	},
	"/videos/video-03/frame-045.jpg": {
		"type": "image/jpeg",
		"etag": "\"846a-wkBFC0ZV0LNpCBWPUTCyJbSZXME\"",
		"mtime": "2026-09-03T13:25:37.092Z",
		"size": 33898,
		"path": "../public/videos/video-03/frame-045.jpg"
	},
	"/videos/video-03/frame-046.jpg": {
		"type": "image/jpeg",
		"etag": "\"8335-FqP2idsfwfrCbUnZpTsjnku4YGo\"",
		"mtime": "2026-09-03T13:25:37.108Z",
		"size": 33589,
		"path": "../public/videos/video-03/frame-046.jpg"
	},
	"/videos/video-03/frame-047.jpg": {
		"type": "image/jpeg",
		"etag": "\"8335-FqP2idsfwfrCbUnZpTsjnku4YGo\"",
		"mtime": "2026-09-03T13:25:37.124Z",
		"size": 33589,
		"path": "../public/videos/video-03/frame-047.jpg"
	},
	"/videos/video-03/frame-049.jpg": {
		"type": "image/jpeg",
		"etag": "\"829e-skVp8Xk5iED1EJdP4y3FckSEseU\"",
		"mtime": "2026-09-03T13:25:37.157Z",
		"size": 33438,
		"path": "../public/videos/video-03/frame-049.jpg"
	},
	"/videos/video-03/frame-050.jpg": {
		"type": "image/jpeg",
		"etag": "\"82d6-GldGQXekK1M9GB0Ezit18OlYhro\"",
		"mtime": "2026-09-03T13:25:37.175Z",
		"size": 33494,
		"path": "../public/videos/video-03/frame-050.jpg"
	},
	"/videos/video-03/frame-048.jpg": {
		"type": "image/jpeg",
		"etag": "\"8334-C9ohk9bwfpRId3RVuOTLRl0QQZU\"",
		"mtime": "2026-09-03T13:25:37.140Z",
		"size": 33588,
		"path": "../public/videos/video-03/frame-048.jpg"
	},
	"/videos/video-03/frame-051.jpg": {
		"type": "image/jpeg",
		"etag": "\"82b9-8gyV5qmpGtAkSb+esawpdixqa+I\"",
		"mtime": "2026-09-03T13:25:37.192Z",
		"size": 33465,
		"path": "../public/videos/video-03/frame-051.jpg"
	},
	"/videos/video-03/frame-052.jpg": {
		"type": "image/jpeg",
		"etag": "\"82b9-8gyV5qmpGtAkSb+esawpdixqa+I\"",
		"mtime": "2026-09-03T13:25:37.209Z",
		"size": 33465,
		"path": "../public/videos/video-03/frame-052.jpg"
	},
	"/videos/video-03/frame-053.jpg": {
		"type": "image/jpeg",
		"etag": "\"828f-5YtAm95+0ECnXSxjVjsTWwYREz0\"",
		"mtime": "2026-09-03T13:25:37.224Z",
		"size": 33423,
		"path": "../public/videos/video-03/frame-053.jpg"
	},
	"/videos/video-03/frame-054.jpg": {
		"type": "image/jpeg",
		"etag": "\"825f-EQiYg3RYmAnzKqjRMAqjy1OXyLs\"",
		"mtime": "2026-09-03T13:25:37.240Z",
		"size": 33375,
		"path": "../public/videos/video-03/frame-054.jpg"
	},
	"/videos/video-03/frame-055.jpg": {
		"type": "image/jpeg",
		"etag": "\"8446-GfIAKytb1X485+GwdjxFJQ05b5g\"",
		"mtime": "2026-09-03T13:25:37.259Z",
		"size": 33862,
		"path": "../public/videos/video-03/frame-055.jpg"
	},
	"/videos/video-03/frame-056.jpg": {
		"type": "image/jpeg",
		"etag": "\"8280-7rj5zVp6sifkFTt0l3l+gcYCSos\"",
		"mtime": "2026-09-03T13:25:37.277Z",
		"size": 33408,
		"path": "../public/videos/video-03/frame-056.jpg"
	},
	"/videos/video-03/frame-057.jpg": {
		"type": "image/jpeg",
		"etag": "\"8280-7rj5zVp6sifkFTt0l3l+gcYCSos\"",
		"mtime": "2026-09-03T13:25:37.296Z",
		"size": 33408,
		"path": "../public/videos/video-03/frame-057.jpg"
	},
	"/videos/video-03/frame-059.jpg": {
		"type": "image/jpeg",
		"etag": "\"8213-LnARXJkV8KCqZ3QWAamROB00ZrQ\"",
		"mtime": "2026-09-03T13:25:37.329Z",
		"size": 33299,
		"path": "../public/videos/video-03/frame-059.jpg"
	},
	"/videos/video-03/frame-058.jpg": {
		"type": "image/jpeg",
		"etag": "\"8243-COT/LHbHxhnHoAX5tKhMo68ul30\"",
		"mtime": "2026-09-03T13:25:37.311Z",
		"size": 33347,
		"path": "../public/videos/video-03/frame-058.jpg"
	},
	"/videos/video-03/frame-060.jpg": {
		"type": "image/jpeg",
		"etag": "\"828e-+XfJIRCyVsmvzizkyJ6vTwqXPzQ\"",
		"mtime": "2026-09-03T13:25:37.347Z",
		"size": 33422,
		"path": "../public/videos/video-03/frame-060.jpg"
	},
	"/videos/video-03/frame-063.jpg": {
		"type": "image/jpeg",
		"etag": "\"81c8-YnLhsWJ+4K5p9spK7ekv7YbaktQ\"",
		"mtime": "2026-09-03T13:25:37.398Z",
		"size": 33224,
		"path": "../public/videos/video-03/frame-063.jpg"
	},
	"/videos/video-03/frame-064.jpg": {
		"type": "image/jpeg",
		"etag": "\"8188-waVranAV6YNS+b0IfF2U0xfQsZw\"",
		"mtime": "2026-09-03T13:25:37.416Z",
		"size": 33160,
		"path": "../public/videos/video-03/frame-064.jpg"
	},
	"/videos/video-03/frame-061.jpg": {
		"type": "image/jpeg",
		"etag": "\"81c3-BzdNMOUnvfI0Q+Wl2xNehpnyf2g\"",
		"mtime": "2026-09-03T13:25:37.367Z",
		"size": 33219,
		"path": "../public/videos/video-03/frame-061.jpg"
	},
	"/videos/video-03/frame-062.jpg": {
		"type": "image/jpeg",
		"etag": "\"81c3-BzdNMOUnvfI0Q+Wl2xNehpnyf2g\"",
		"mtime": "2026-09-03T13:25:37.381Z",
		"size": 33219,
		"path": "../public/videos/video-03/frame-062.jpg"
	},
	"/videos/video-03/frame-065.jpg": {
		"type": "image/jpeg",
		"etag": "\"827d-ZNCsGztjH7C1qu07Vn7wnbWmbUQ\"",
		"mtime": "2026-09-03T13:25:37.435Z",
		"size": 33405,
		"path": "../public/videos/video-03/frame-065.jpg"
	},
	"/videos/video-03/frame-066.jpg": {
		"type": "image/jpeg",
		"etag": "\"8135-5skaWx1Xdecp7m+MSkwv+5Bn99M\"",
		"mtime": "2026-09-03T13:25:37.460Z",
		"size": 33077,
		"path": "../public/videos/video-03/frame-066.jpg"
	},
	"/videos/video-03/frame-067.jpg": {
		"type": "image/jpeg",
		"etag": "\"8135-5skaWx1Xdecp7m+MSkwv+5Bn99M\"",
		"mtime": "2026-09-03T13:25:37.477Z",
		"size": 33077,
		"path": "../public/videos/video-03/frame-067.jpg"
	},
	"/videos/video-03/frame-068.jpg": {
		"type": "image/jpeg",
		"etag": "\"80d4-Se7zEV9IBMXm2iyPexKgxKKEIP0\"",
		"mtime": "2026-09-03T13:25:37.495Z",
		"size": 32980,
		"path": "../public/videos/video-03/frame-068.jpg"
	},
	"/videos/video-03/frame-069.jpg": {
		"type": "image/jpeg",
		"etag": "\"80ad-B4L9LEXt+l6gUGxDysbd/6FjQRM\"",
		"mtime": "2026-09-03T13:25:37.513Z",
		"size": 32941,
		"path": "../public/videos/video-03/frame-069.jpg"
	},
	"/videos/video-03/frame-070.jpg": {
		"type": "image/jpeg",
		"etag": "\"8121-x0Kqr4c+xnA9wqv7zN/RVfBclUE\"",
		"mtime": "2026-09-03T13:25:37.530Z",
		"size": 33057,
		"path": "../public/videos/video-03/frame-070.jpg"
	},
	"/videos/video-03/frame-071.jpg": {
		"type": "image/jpeg",
		"etag": "\"80ca-fLF0pIYqExlcqSWvCUfEB/F8oV8\"",
		"mtime": "2026-09-03T13:25:37.545Z",
		"size": 32970,
		"path": "../public/videos/video-03/frame-071.jpg"
	},
	"/videos/video-03/frame-072.jpg": {
		"type": "image/jpeg",
		"etag": "\"80ca-fLF0pIYqExlcqSWvCUfEB/F8oV8\"",
		"mtime": "2026-09-03T13:25:37.563Z",
		"size": 32970,
		"path": "../public/videos/video-03/frame-072.jpg"
	},
	"/videos/video-03/frame-074.jpg": {
		"type": "image/jpeg",
		"etag": "\"7c61-aisW7Sf8MMziIlzze5qIMmPUC+Q\"",
		"mtime": "2026-09-03T13:25:37.595Z",
		"size": 31841,
		"path": "../public/videos/video-03/frame-074.jpg"
	},
	"/videos/video-03/frame-073.jpg": {
		"type": "image/jpeg",
		"etag": "\"7fe3-iOGOFdKwlixuCXnPzcYBlBY1ONE\"",
		"mtime": "2026-09-03T13:25:37.579Z",
		"size": 32739,
		"path": "../public/videos/video-03/frame-073.jpg"
	},
	"/videos/video-03/frame-075.jpg": {
		"type": "image/jpeg",
		"etag": "\"804f-auMif75jJiQKNfPb8VY+ZEKmMgY\"",
		"mtime": "2026-09-03T13:25:37.612Z",
		"size": 32847,
		"path": "../public/videos/video-03/frame-075.jpg"
	},
	"/videos/video-03/frame-076.jpg": {
		"type": "image/jpeg",
		"etag": "\"807b-1WiAkesVmvidsVd7uzMjjAVSAoc\"",
		"mtime": "2026-09-03T13:25:37.628Z",
		"size": 32891,
		"path": "../public/videos/video-03/frame-076.jpg"
	},
	"/videos/video-03/frame-077.jpg": {
		"type": "image/jpeg",
		"etag": "\"807b-1WiAkesVmvidsVd7uzMjjAVSAoc\"",
		"mtime": "2026-09-03T13:25:37.646Z",
		"size": 32891,
		"path": "../public/videos/video-03/frame-077.jpg"
	},
	"/videos/video-03/frame-078.jpg": {
		"type": "image/jpeg",
		"etag": "\"8172-WVxlBSBm9yzPtyKY79ynhFkLzKQ\"",
		"mtime": "2026-09-03T13:25:37.665Z",
		"size": 33138,
		"path": "../public/videos/video-03/frame-078.jpg"
	},
	"/videos/video-03/frame-080.jpg": {
		"type": "image/jpeg",
		"etag": "\"8383-Vf0pmtuXcNn2rtfMSHo5yEuzuD0\"",
		"mtime": "2026-09-03T13:25:37.698Z",
		"size": 33667,
		"path": "../public/videos/video-03/frame-080.jpg"
	},
	"/videos/video-03/frame-079.jpg": {
		"type": "image/jpeg",
		"etag": "\"8231-lGfx+JXk3pTEMxKpAXf2hqJ/7MI\"",
		"mtime": "2026-09-03T13:25:37.682Z",
		"size": 33329,
		"path": "../public/videos/video-03/frame-079.jpg"
	},
	"/videos/video-03/frame-084.jpg": {
		"type": "image/jpeg",
		"etag": "\"82d8-jUxBfPVhjqWZhmF72ydEKkIytL0\"",
		"mtime": "2026-09-03T13:25:37.770Z",
		"size": 33496,
		"path": "../public/videos/video-03/frame-084.jpg"
	},
	"/videos/video-03/frame-087.jpg": {
		"type": "image/jpeg",
		"etag": "\"82c8-YLyrgdQMZJpG6SB3gwXzI+nSrkg\"",
		"mtime": "2026-09-03T13:25:37.819Z",
		"size": 33480,
		"path": "../public/videos/video-03/frame-087.jpg"
	},
	"/videos/video-03/frame-082.jpg": {
		"type": "image/jpeg",
		"etag": "\"83dc-OCP/KrPj6FUHpRLjM+BP8AnoV5E\"",
		"mtime": "2026-09-03T13:25:37.730Z",
		"size": 33756,
		"path": "../public/videos/video-03/frame-082.jpg"
	},
	"/videos/video-03/frame-083.jpg": {
		"type": "image/jpeg",
		"etag": "\"8394-Fq81uLQS+g5K1AhdMGq14fee0AE\"",
		"mtime": "2026-09-03T13:25:37.753Z",
		"size": 33684,
		"path": "../public/videos/video-03/frame-083.jpg"
	},
	"/videos/video-03/frame-088.jpg": {
		"type": "image/jpeg",
		"etag": "\"82ff-N7OaPVN0J7nMCQIjgARzI4tXQJI\"",
		"mtime": "2026-09-03T13:25:37.834Z",
		"size": 33535,
		"path": "../public/videos/video-03/frame-088.jpg"
	},
	"/videos/video-03/frame-085.jpg": {
		"type": "image/jpeg",
		"etag": "\"8460-Ck/8+iecdcUIUTM7MCFiUQ3X3uE\"",
		"mtime": "2026-09-03T13:25:37.784Z",
		"size": 33888,
		"path": "../public/videos/video-03/frame-085.jpg"
	},
	"/videos/video-03/frame-086.jpg": {
		"type": "image/jpeg",
		"etag": "\"82c8-YLyrgdQMZJpG6SB3gwXzI+nSrkg\"",
		"mtime": "2026-09-03T13:25:37.803Z",
		"size": 33480,
		"path": "../public/videos/video-03/frame-086.jpg"
	},
	"/videos/video-03/frame-089.jpg": {
		"type": "image/jpeg",
		"etag": "\"829e-U4P+2NjkPrFxCrCzJRsAPdv59gM\"",
		"mtime": "2026-09-03T13:25:37.849Z",
		"size": 33438,
		"path": "../public/videos/video-03/frame-089.jpg"
	},
	"/videos/video-03/frame-081.jpg": {
		"type": "image/jpeg",
		"etag": "\"83dc-OCP/KrPj6FUHpRLjM+BP8AnoV5E\"",
		"mtime": "2026-09-03T13:25:37.712Z",
		"size": 33756,
		"path": "../public/videos/video-03/frame-081.jpg"
	},
	"/videos/video-03/frame-090.jpg": {
		"type": "image/jpeg",
		"etag": "\"82dd-lUhunmPpCe0+D/zTm8A718ClEhQ\"",
		"mtime": "2026-09-03T13:25:37.864Z",
		"size": 33501,
		"path": "../public/videos/video-03/frame-090.jpg"
	},
	"/videos/video-03/frame-091.jpg": {
		"type": "image/jpeg",
		"etag": "\"8237-g3ozqeGdqmLuqAh/wJ2Qh1AIBMg\"",
		"mtime": "2026-09-03T13:25:37.881Z",
		"size": 33335,
		"path": "../public/videos/video-03/frame-091.jpg"
	},
	"/videos/video-03/frame-093.jpg": {
		"type": "image/jpeg",
		"etag": "\"8155-I2eUINCRwEKtS+YK6iZaK2W2F8s\"",
		"mtime": "2026-09-03T13:25:37.917Z",
		"size": 33109,
		"path": "../public/videos/video-03/frame-093.jpg"
	},
	"/videos/video-03/frame-094.jpg": {
		"type": "image/jpeg",
		"etag": "\"8092-M7DgHt7R/+dM87Sys7FFf6oIpWo\"",
		"mtime": "2026-09-03T13:25:37.933Z",
		"size": 32914,
		"path": "../public/videos/video-03/frame-094.jpg"
	},
	"/videos/video-03/frame-092.jpg": {
		"type": "image/jpeg",
		"etag": "\"8237-g3ozqeGdqmLuqAh/wJ2Qh1AIBMg\"",
		"mtime": "2026-09-03T13:25:37.899Z",
		"size": 33335,
		"path": "../public/videos/video-03/frame-092.jpg"
	},
	"/videos/video-03/frame-097.jpg": {
		"type": "image/jpeg",
		"etag": "\"80e9-U86blXySfT74AQGJiHunYjIwII0\"",
		"mtime": "2026-09-03T13:25:37.988Z",
		"size": 33001,
		"path": "../public/videos/video-03/frame-097.jpg"
	},
	"/videos/video-03/frame-096.jpg": {
		"type": "image/jpeg",
		"etag": "\"80e9-U86blXySfT74AQGJiHunYjIwII0\"",
		"mtime": "2026-09-03T13:25:37.971Z",
		"size": 33001,
		"path": "../public/videos/video-03/frame-096.jpg"
	},
	"/videos/video-03/frame-098.jpg": {
		"type": "image/jpeg",
		"etag": "\"827c-zfWvDbVonA5Y2YEPmq6ulUJNcpg\"",
		"mtime": "2026-09-03T13:25:38.002Z",
		"size": 33404,
		"path": "../public/videos/video-03/frame-098.jpg"
	},
	"/videos/video-03/frame-101.jpg": {
		"type": "image/jpeg",
		"etag": "\"83e3-98CWUcBsJbYAWbI62RRLAeyWfcc\"",
		"mtime": "2026-09-03T13:25:38.051Z",
		"size": 33763,
		"path": "../public/videos/video-03/frame-101.jpg"
	},
	"/videos/video-03/frame-099.jpg": {
		"type": "image/jpeg",
		"etag": "\"8287-BRMBcCW7CUq61fFEkTRBt9i+Mu0\"",
		"mtime": "2026-09-03T13:25:38.018Z",
		"size": 33415,
		"path": "../public/videos/video-03/frame-099.jpg"
	},
	"/videos/video-03/frame-095.jpg": {
		"type": "image/jpeg",
		"etag": "\"8290-ER97ePn9SAiYP1602fTd6i2FvPA\"",
		"mtime": "2026-09-03T13:25:37.951Z",
		"size": 33424,
		"path": "../public/videos/video-03/frame-095.jpg"
	},
	"/videos/video-03/frame-100.jpg": {
		"type": "image/jpeg",
		"etag": "\"8425-BpkKzN+LuwWKKBEhmYv2OszwZfc\"",
		"mtime": "2026-09-03T13:25:38.034Z",
		"size": 33829,
		"path": "../public/videos/video-03/frame-100.jpg"
	},
	"/videos/video-03/frame-102.jpg": {
		"type": "image/jpeg",
		"etag": "\"83e3-98CWUcBsJbYAWbI62RRLAeyWfcc\"",
		"mtime": "2026-09-03T13:25:38.071Z",
		"size": 33763,
		"path": "../public/videos/video-03/frame-102.jpg"
	},
	"/videos/video-03/frame-104.jpg": {
		"type": "image/jpeg",
		"etag": "\"814d-A1ZtWlNddIr+6LVf9qlRF0rru3w\"",
		"mtime": "2026-09-03T13:25:38.099Z",
		"size": 33101,
		"path": "../public/videos/video-03/frame-104.jpg"
	},
	"/videos/video-03/frame-103.jpg": {
		"type": "image/jpeg",
		"etag": "\"82cc-MG9M7Y5UvwUE2FoTY3A0Yk+pVoQ\"",
		"mtime": "2026-09-03T13:25:38.089Z",
		"size": 33484,
		"path": "../public/videos/video-03/frame-103.jpg"
	},
	"/videos/video-03/frame-105.jpg": {
		"type": "image/jpeg",
		"etag": "\"82eb-P0je6xKPAi/yxhoaznjS1jI4Gb8\"",
		"mtime": "2026-09-03T13:25:38.112Z",
		"size": 33515,
		"path": "../public/videos/video-03/frame-105.jpg"
	},
	"/videos/video-03/frame-108.jpg": {
		"type": "image/jpeg",
		"etag": "\"828e-0cQpmZlDFc5NmggoBPBVV7IsbhI\"",
		"mtime": "2026-09-03T13:25:38.147Z",
		"size": 33422,
		"path": "../public/videos/video-03/frame-108.jpg"
	},
	"/videos/video-03/frame-106.jpg": {
		"type": "image/jpeg",
		"etag": "\"81a8-xEW6pzOup8pkGUQiDpP80x2/Q6w\"",
		"mtime": "2026-09-03T13:25:38.125Z",
		"size": 33192,
		"path": "../public/videos/video-03/frame-106.jpg"
	},
	"/videos/video-03/frame-111.jpg": {
		"type": "image/jpeg",
		"etag": "\"81e8-pYgoPSioWPFIKzXvvcmEUMYuB2A\"",
		"mtime": "2026-09-03T13:25:38.178Z",
		"size": 33256,
		"path": "../public/videos/video-03/frame-111.jpg"
	},
	"/videos/video-03/frame-109.jpg": {
		"type": "image/jpeg",
		"etag": "\"8274-6N0803wr5dxWqJfssZPFqVK8swc\"",
		"mtime": "2026-09-03T13:25:38.158Z",
		"size": 33396,
		"path": "../public/videos/video-03/frame-109.jpg"
	},
	"/videos/video-03/frame-110.jpg": {
		"type": "image/jpeg",
		"etag": "\"82bf-7DCUbyGOdAn25dHkswdRqdhHlC8\"",
		"mtime": "2026-09-03T13:25:38.167Z",
		"size": 33471,
		"path": "../public/videos/video-03/frame-110.jpg"
	},
	"/videos/video-03/frame-107.jpg": {
		"type": "image/jpeg",
		"etag": "\"81a8-xEW6pzOup8pkGUQiDpP80x2/Q6w\"",
		"mtime": "2026-09-03T13:25:38.135Z",
		"size": 33192,
		"path": "../public/videos/video-03/frame-107.jpg"
	},
	"/videos/video-03/frame-112.jpg": {
		"type": "image/jpeg",
		"etag": "\"81e8-pYgoPSioWPFIKzXvvcmEUMYuB2A\"",
		"mtime": "2026-09-03T13:25:38.190Z",
		"size": 33256,
		"path": "../public/videos/video-03/frame-112.jpg"
	},
	"/videos/video-03/frame-113.jpg": {
		"type": "image/jpeg",
		"etag": "\"808f-P14SstmCLN4cSymxT/hnHcCdjQo\"",
		"mtime": "2026-09-03T13:25:38.204Z",
		"size": 32911,
		"path": "../public/videos/video-03/frame-113.jpg"
	},
	"/videos/video-03/frame-114.jpg": {
		"type": "image/jpeg",
		"etag": "\"7f1f-E8oUaFrHfxSABnRxrXbxrPZyPJ0\"",
		"mtime": "2026-09-03T13:25:38.216Z",
		"size": 32543,
		"path": "../public/videos/video-03/frame-114.jpg"
	},
	"/videos/video-03/frame-115.jpg": {
		"type": "image/jpeg",
		"etag": "\"7f85-IZlw1IrpDxon23n5Bfg9JQzMi30\"",
		"mtime": "2026-09-03T13:25:38.228Z",
		"size": 32645,
		"path": "../public/videos/video-03/frame-115.jpg"
	},
	"/videos/video-03/frame-118.jpg": {
		"type": "image/jpeg",
		"etag": "\"7d11-33txB7DQe2xM7r113DDkOJhvZMk\"",
		"mtime": "2026-09-03T13:25:38.262Z",
		"size": 32017,
		"path": "../public/videos/video-03/frame-118.jpg"
	},
	"/videos/video-03/frame-117.jpg": {
		"type": "image/jpeg",
		"etag": "\"7d59-FB0RrlrT56hX7zkw048pPsAA/PU\"",
		"mtime": "2026-09-03T13:25:38.249Z",
		"size": 32089,
		"path": "../public/videos/video-03/frame-117.jpg"
	},
	"/videos/video-03/frame-116.jpg": {
		"type": "image/jpeg",
		"etag": "\"7d59-FB0RrlrT56hX7zkw048pPsAA/PU\"",
		"mtime": "2026-09-03T13:25:38.239Z",
		"size": 32089,
		"path": "../public/videos/video-03/frame-116.jpg"
	},
	"/videos/video-03/frame-119.jpg": {
		"type": "image/jpeg",
		"etag": "\"7c72-Aa6BaLdloNzfGKL1dkQB+i8NisA\"",
		"mtime": "2026-09-03T13:25:38.276Z",
		"size": 31858,
		"path": "../public/videos/video-03/frame-119.jpg"
	},
	"/videos/video-03/frame-120.jpg": {
		"type": "image/jpeg",
		"etag": "\"7ccc-d7SxyklkAdIc57bsYDhpkE8Cj4U\"",
		"mtime": "2026-09-03T13:25:38.287Z",
		"size": 31948,
		"path": "../public/videos/video-03/frame-120.jpg"
	},
	"/videos/video-03/frame-121.jpg": {
		"type": "image/jpeg",
		"etag": "\"7b77-+20Z50ayjct5UjBmBIFe8+UT4A8\"",
		"mtime": "2026-09-03T13:25:38.299Z",
		"size": 31607,
		"path": "../public/videos/video-03/frame-121.jpg"
	},
	"/videos/video-03/frame-122.jpg": {
		"type": "image/jpeg",
		"etag": "\"7b77-+20Z50ayjct5UjBmBIFe8+UT4A8\"",
		"mtime": "2026-09-03T13:25:38.311Z",
		"size": 31607,
		"path": "../public/videos/video-03/frame-122.jpg"
	},
	"/videos/video-03/frame-123.jpg": {
		"type": "image/jpeg",
		"etag": "\"7aaf-4BZGZwVmB5cPqAMM2ufCD1zbugw\"",
		"mtime": "2026-09-03T13:25:38.323Z",
		"size": 31407,
		"path": "../public/videos/video-03/frame-123.jpg"
	},
	"/videos/video-03/frame-124.jpg": {
		"type": "image/jpeg",
		"etag": "\"7978-6MEHNy9T+ipbRsqeQlRO41P2ewQ\"",
		"mtime": "2026-09-03T13:25:38.334Z",
		"size": 31096,
		"path": "../public/videos/video-03/frame-124.jpg"
	},
	"/videos/video-03/frame-126.jpg": {
		"type": "image/jpeg",
		"etag": "\"78e4-YGEjbnxEYDoNWXXJxm+V1s8+kew\"",
		"mtime": "2026-09-03T13:25:38.359Z",
		"size": 30948,
		"path": "../public/videos/video-03/frame-126.jpg"
	},
	"/videos/video-03/frame-125.jpg": {
		"type": "image/jpeg",
		"etag": "\"7a97-+71aPcrkT8PjPGHF2djaXcJBPDk\"",
		"mtime": "2026-09-03T13:25:38.347Z",
		"size": 31383,
		"path": "../public/videos/video-03/frame-125.jpg"
	},
	"/videos/video-03/frame-127.jpg": {
		"type": "image/jpeg",
		"etag": "\"78e4-YGEjbnxEYDoNWXXJxm+V1s8+kew\"",
		"mtime": "2026-09-03T13:25:38.371Z",
		"size": 30948,
		"path": "../public/videos/video-03/frame-127.jpg"
	},
	"/videos/video-03/frame-128.jpg": {
		"type": "image/jpeg",
		"etag": "\"794a-awBvJ67E1qeeDkGdRcm4H+3TG48\"",
		"mtime": "2026-09-03T13:25:38.382Z",
		"size": 31050,
		"path": "../public/videos/video-03/frame-128.jpg"
	},
	"/videos/video-03/frame-130.jpg": {
		"type": "image/jpeg",
		"etag": "\"7908-UQk0i4nZPiwhGdkIB3/qzgqC7rk\"",
		"mtime": "2026-09-03T13:25:38.404Z",
		"size": 30984,
		"path": "../public/videos/video-03/frame-130.jpg"
	},
	"/videos/video-03/frame-129.jpg": {
		"type": "image/jpeg",
		"etag": "\"7925-k4hWX7a3627KOLzs3Qrdu/JZmQQ\"",
		"mtime": "2026-09-03T13:25:38.393Z",
		"size": 31013,
		"path": "../public/videos/video-03/frame-129.jpg"
	},
	"/videos/video-03/frame-131.jpg": {
		"type": "image/jpeg",
		"etag": "\"77e2-jiU3eDMBnogFFTS3GZQmgwl6wGs\"",
		"mtime": "2026-09-03T13:25:38.416Z",
		"size": 30690,
		"path": "../public/videos/video-03/frame-131.jpg"
	},
	"/videos/video-03/frame-132.jpg": {
		"type": "image/jpeg",
		"etag": "\"77e2-jiU3eDMBnogFFTS3GZQmgwl6wGs\"",
		"mtime": "2026-09-03T13:25:38.429Z",
		"size": 30690,
		"path": "../public/videos/video-03/frame-132.jpg"
	},
	"/videos/video-03/frame-133.jpg": {
		"type": "image/jpeg",
		"etag": "\"771e-WRi4tewQtio7hazjPgz+cUVp4Ho\"",
		"mtime": "2026-09-03T13:25:38.442Z",
		"size": 30494,
		"path": "../public/videos/video-03/frame-133.jpg"
	},
	"/videos/video-03/frame-134.jpg": {
		"type": "image/jpeg",
		"etag": "\"75ba-cfx/sqTjQcQfeiRVksQNp67s9cQ\"",
		"mtime": "2026-09-03T13:25:38.454Z",
		"size": 30138,
		"path": "../public/videos/video-03/frame-134.jpg"
	},
	"/videos/video-03/frame-136.jpg": {
		"type": "image/jpeg",
		"etag": "\"74c2-P8EJpMPUtaTRlaiqBV3fgAizia8\"",
		"mtime": "2026-09-03T13:25:38.482Z",
		"size": 29890,
		"path": "../public/videos/video-03/frame-136.jpg"
	},
	"/videos/video-03/frame-137.jpg": {
		"type": "image/jpeg",
		"etag": "\"74c2-P8EJpMPUtaTRlaiqBV3fgAizia8\"",
		"mtime": "2026-09-03T13:25:38.499Z",
		"size": 29890,
		"path": "../public/videos/video-03/frame-137.jpg"
	},
	"/videos/video-03/frame-138.jpg": {
		"type": "image/jpeg",
		"etag": "\"7533-suTM9QWJtMpatREd7VL58+In+mI\"",
		"mtime": "2026-09-03T13:25:38.518Z",
		"size": 30003,
		"path": "../public/videos/video-03/frame-138.jpg"
	},
	"/videos/video-03/frame-135.jpg": {
		"type": "image/jpeg",
		"etag": "\"7645-911GiQ9hu33UkltZXbOCPURUrJM\"",
		"mtime": "2026-09-03T13:25:38.466Z",
		"size": 30277,
		"path": "../public/videos/video-03/frame-135.jpg"
	},
	"/videos/video-03/frame-139.jpg": {
		"type": "image/jpeg",
		"etag": "\"74a2-mpA+jmQhC1urTunzL5J4MwR2V24\"",
		"mtime": "2026-09-03T13:25:38.538Z",
		"size": 29858,
		"path": "../public/videos/video-03/frame-139.jpg"
	},
	"/videos/video-03/frame-140.jpg": {
		"type": "image/jpeg",
		"etag": "\"74c9-5nvuWAXvHU0IHtgXKvEyamLKYJo\"",
		"mtime": "2026-09-03T13:25:38.553Z",
		"size": 29897,
		"path": "../public/videos/video-03/frame-140.jpg"
	},
	"/videos/video-03/frame-141.jpg": {
		"type": "image/jpeg",
		"etag": "\"73e6-PFidDtxbP43WiTqsze97fmFzoZg\"",
		"mtime": "2026-09-03T13:25:38.568Z",
		"size": 29670,
		"path": "../public/videos/video-03/frame-141.jpg"
	},
	"/videos/video-03/frame-142.jpg": {
		"type": "image/jpeg",
		"etag": "\"73e6-PFidDtxbP43WiTqsze97fmFzoZg\"",
		"mtime": "2026-09-03T13:25:38.585Z",
		"size": 29670,
		"path": "../public/videos/video-03/frame-142.jpg"
	},
	"/videos/video-03/frame-143.jpg": {
		"type": "image/jpeg",
		"etag": "\"72c3-NtE8sYpUNtybuAtPOvXo6F79XFA\"",
		"mtime": "2026-09-03T13:25:38.605Z",
		"size": 29379,
		"path": "../public/videos/video-03/frame-143.jpg"
	},
	"/videos/video-03/frame-144.jpg": {
		"type": "image/jpeg",
		"etag": "\"71dd-Hpuaqa0XU8kmFm55iwg9e8b+hA4\"",
		"mtime": "2026-09-03T13:25:38.621Z",
		"size": 29149,
		"path": "../public/videos/video-03/frame-144.jpg"
	},
	"/videos/video-03/frame-145.jpg": {
		"type": "image/jpeg",
		"etag": "\"727a-BrEBRaAu/aoS5gd0H7rqX/myaUA\"",
		"mtime": "2026-09-03T13:25:38.636Z",
		"size": 29306,
		"path": "../public/videos/video-03/frame-145.jpg"
	},
	"/videos/video-03/frame-146.jpg": {
		"type": "image/jpeg",
		"etag": "\"70c3-pT6cMTf0WtoyctqeeD3/dnrcWSI\"",
		"mtime": "2026-09-03T13:25:38.650Z",
		"size": 28867,
		"path": "../public/videos/video-03/frame-146.jpg"
	},
	"/videos/video-03/frame-147.jpg": {
		"type": "image/jpeg",
		"etag": "\"70c3-pT6cMTf0WtoyctqeeD3/dnrcWSI\"",
		"mtime": "2026-09-03T13:25:38.667Z",
		"size": 28867,
		"path": "../public/videos/video-03/frame-147.jpg"
	},
	"/videos/video-03/frame-148.jpg": {
		"type": "image/jpeg",
		"etag": "\"6ff6-lp+UzMiblL6cwn4pAXc+7DWhY1E\"",
		"mtime": "2026-09-03T13:25:38.688Z",
		"size": 28662,
		"path": "../public/videos/video-03/frame-148.jpg"
	},
	"/videos/video-03/frame-150.jpg": {
		"type": "image/jpeg",
		"etag": "\"713a-rsG+dFiUGfg9QUtygSr9gPEUybc\"",
		"mtime": "2026-09-03T13:25:38.721Z",
		"size": 28986,
		"path": "../public/videos/video-03/frame-150.jpg"
	},
	"/videos/video-03/frame-149.jpg": {
		"type": "image/jpeg",
		"etag": "\"7024-e7q+14dZVRZTrxixhYYy3WoPSuE\"",
		"mtime": "2026-09-03T13:25:38.705Z",
		"size": 28708,
		"path": "../public/videos/video-03/frame-149.jpg"
	},
	"/videos/video-03/frame-151.jpg": {
		"type": "image/jpeg",
		"etag": "\"7295-W5+V5TOHpnOkNFR1EcCRwjLLCBI\"",
		"mtime": "2026-09-03T13:25:38.740Z",
		"size": 29333,
		"path": "../public/videos/video-03/frame-151.jpg"
	},
	"/videos/video-03/frame-152.jpg": {
		"type": "image/jpeg",
		"etag": "\"7295-W5+V5TOHpnOkNFR1EcCRwjLLCBI\"",
		"mtime": "2026-09-03T13:25:38.757Z",
		"size": 29333,
		"path": "../public/videos/video-03/frame-152.jpg"
	},
	"/videos/video-03/frame-153.jpg": {
		"type": "image/jpeg",
		"etag": "\"73dc-MZ99KO4UpnNwCO8Xk1CYFRV9XG8\"",
		"mtime": "2026-09-03T13:25:38.772Z",
		"size": 29660,
		"path": "../public/videos/video-03/frame-153.jpg"
	},
	"/videos/video-03/frame-154.jpg": {
		"type": "image/jpeg",
		"etag": "\"730b-6cjg3Nn3bMN9RiNjxb2VJ4GiuO0\"",
		"mtime": "2026-09-03T13:25:38.786Z",
		"size": 29451,
		"path": "../public/videos/video-03/frame-154.jpg"
	},
	"/videos/video-03/frame-155.jpg": {
		"type": "image/jpeg",
		"etag": "\"74bb-33XSScHTrLL5GryKF6sC2kTfgaY\"",
		"mtime": "2026-09-03T13:25:38.800Z",
		"size": 29883,
		"path": "../public/videos/video-03/frame-155.jpg"
	},
	"/videos/video-03/frame-157.jpg": {
		"type": "image/jpeg",
		"etag": "\"772a-nx0CrWbTxxhKgWDgHT0UzSEhivA\"",
		"mtime": "2026-09-03T13:25:38.834Z",
		"size": 30506,
		"path": "../public/videos/video-03/frame-157.jpg"
	},
	"/videos/video-03/frame-158.jpg": {
		"type": "image/jpeg",
		"etag": "\"7d41-jLVEUAnl4QyzrvdhdYiK+5ppf4Y\"",
		"mtime": "2026-09-03T13:25:38.851Z",
		"size": 32065,
		"path": "../public/videos/video-03/frame-158.jpg"
	},
	"/videos/video-03/frame-156.jpg": {
		"type": "image/jpeg",
		"etag": "\"772a-nx0CrWbTxxhKgWDgHT0UzSEhivA\"",
		"mtime": "2026-09-03T13:25:38.818Z",
		"size": 30506,
		"path": "../public/videos/video-03/frame-156.jpg"
	},
	"/videos/video-03/frame-159.jpg": {
		"type": "image/jpeg",
		"etag": "\"7ea7-kIY8/Kx8zHcpBmloc1j6qMFZpbw\"",
		"mtime": "2026-09-03T13:25:38.880Z",
		"size": 32423,
		"path": "../public/videos/video-03/frame-159.jpg"
	},
	"/videos/video-03/frame-160.jpg": {
		"type": "image/jpeg",
		"etag": "\"7f88-Rs9flQ3Lr+4Z7krypaU1oXgqSdA\"",
		"mtime": "2026-09-03T13:25:38.898Z",
		"size": 32648,
		"path": "../public/videos/video-03/frame-160.jpg"
	},
	"/videos/video-03/frame-161.jpg": {
		"type": "image/jpeg",
		"etag": "\"7f52-OngXHz9zga4FqWP7EEY0sJYzKyU\"",
		"mtime": "2026-09-03T13:25:38.918Z",
		"size": 32594,
		"path": "../public/videos/video-03/frame-161.jpg"
	},
	"/videos/video-03/frame-162.jpg": {
		"type": "image/jpeg",
		"etag": "\"7f52-OngXHz9zga4FqWP7EEY0sJYzKyU\"",
		"mtime": "2026-09-03T13:25:38.933Z",
		"size": 32594,
		"path": "../public/videos/video-03/frame-162.jpg"
	},
	"/videos/video-03/frame-163.jpg": {
		"type": "image/jpeg",
		"etag": "\"7eda-tYL+xtO18rtE1MoLC1K4sWTMpko\"",
		"mtime": "2026-09-03T13:25:38.947Z",
		"size": 32474,
		"path": "../public/videos/video-03/frame-163.jpg"
	},
	"/videos/video-03/frame-165.jpg": {
		"type": "image/jpeg",
		"etag": "\"7ea5-gGUK5H532UX7fNRqW4AmFJwK4EY\"",
		"mtime": "2026-09-03T13:25:38.977Z",
		"size": 32421,
		"path": "../public/videos/video-03/frame-165.jpg"
	},
	"/videos/video-03/frame-166.jpg": {
		"type": "image/jpeg",
		"etag": "\"7da3-Td18FzzR1MoXXiVYhstFzih/+FU\"",
		"mtime": "2026-09-03T13:25:38.995Z",
		"size": 32163,
		"path": "../public/videos/video-03/frame-166.jpg"
	},
	"/videos/video-03/frame-164.jpg": {
		"type": "image/jpeg",
		"etag": "\"7e31-iT5T9vkEvnRvKYE9jj6SE8h9Wfo\"",
		"mtime": "2026-09-03T13:25:38.962Z",
		"size": 32305,
		"path": "../public/videos/video-03/frame-164.jpg"
	},
	"/videos/video-03/frame-167.jpg": {
		"type": "image/jpeg",
		"etag": "\"7da3-Td18FzzR1MoXXiVYhstFzih/+FU\"",
		"mtime": "2026-09-03T13:25:39.012Z",
		"size": 32163,
		"path": "../public/videos/video-03/frame-167.jpg"
	},
	"/videos/video-03/frame-168.jpg": {
		"type": "image/jpeg",
		"etag": "\"7e9d-pbAiN00Ixq4YJnPvnPoLzLFxUds\"",
		"mtime": "2026-09-03T13:25:39.026Z",
		"size": 32413,
		"path": "../public/videos/video-03/frame-168.jpg"
	},
	"/videos/video-03/frame-169.jpg": {
		"type": "image/jpeg",
		"etag": "\"7e5e-MoH3GgyItocf3Qry6kPJ3r/ktCg\"",
		"mtime": "2026-09-03T13:25:39.040Z",
		"size": 32350,
		"path": "../public/videos/video-03/frame-169.jpg"
	},
	"/videos/video-03/frame-172.jpg": {
		"type": "image/jpeg",
		"etag": "\"7e1a-Xq2tqNNvIjI8TK8Jgl2CP0n+nVY\"",
		"mtime": "2026-09-03T13:25:39.087Z",
		"size": 32282,
		"path": "../public/videos/video-03/frame-172.jpg"
	},
	"/videos/video-03/frame-171.jpg": {
		"type": "image/jpeg",
		"etag": "\"7e1a-Xq2tqNNvIjI8TK8Jgl2CP0n+nVY\"",
		"mtime": "2026-09-03T13:25:39.072Z",
		"size": 32282,
		"path": "../public/videos/video-03/frame-171.jpg"
	},
	"/videos/video-03/frame-170.jpg": {
		"type": "image/jpeg",
		"etag": "\"7e40-osekH++GioGH2WBbaozSV1K4USk\"",
		"mtime": "2026-09-03T13:25:39.057Z",
		"size": 32320,
		"path": "../public/videos/video-03/frame-170.jpg"
	},
	"/videos/video-03/frame-175.jpg": {
		"type": "image/jpeg",
		"etag": "\"7df5-aBXe7lxL/J/hTeAUuLyfC+NVWfA\"",
		"mtime": "2026-09-03T13:25:39.135Z",
		"size": 32245,
		"path": "../public/videos/video-03/frame-175.jpg"
	},
	"/videos/video-03/frame-173.jpg": {
		"type": "image/jpeg",
		"etag": "\"7e72-YK9udvYHmtUQ+SCgIoxna423KQU\"",
		"mtime": "2026-09-03T13:25:39.104Z",
		"size": 32370,
		"path": "../public/videos/video-03/frame-173.jpg"
	},
	"/videos/video-03/frame-174.jpg": {
		"type": "image/jpeg",
		"etag": "\"7dbe-SAuzuUWHJr48VuLnUvCdvm+j4qw\"",
		"mtime": "2026-09-03T13:25:39.120Z",
		"size": 32190,
		"path": "../public/videos/video-03/frame-174.jpg"
	},
	"/videos/video-03/frame-176.jpg": {
		"type": "image/jpeg",
		"etag": "\"7d39-qYlgIL2hL7LzwxKp/pNDnsHTW+0\"",
		"mtime": "2026-09-03T13:25:39.152Z",
		"size": 32057,
		"path": "../public/videos/video-03/frame-176.jpg"
	},
	"/videos/video-03/frame-178.jpg": {
		"type": "image/jpeg",
		"etag": "\"7ddb-yPimII2xGYQM2oqOIepQH1ywRp4\"",
		"mtime": "2026-09-03T13:25:39.184Z",
		"size": 32219,
		"path": "../public/videos/video-03/frame-178.jpg"
	},
	"/videos/video-03/frame-177.jpg": {
		"type": "image/jpeg",
		"etag": "\"7d39-qYlgIL2hL7LzwxKp/pNDnsHTW+0\"",
		"mtime": "2026-09-03T13:25:39.167Z",
		"size": 32057,
		"path": "../public/videos/video-03/frame-177.jpg"
	},
	"/videos/video-03/frame-179.jpg": {
		"type": "image/jpeg",
		"etag": "\"7d3e-bRg7QzvM/cjeTbaf61/+/nngrIY\"",
		"mtime": "2026-09-03T13:25:39.202Z",
		"size": 32062,
		"path": "../public/videos/video-03/frame-179.jpg"
	},
	"/videos/video-03/frame-180.jpg": {
		"type": "image/jpeg",
		"etag": "\"7e29-xW5m5zTfXz+0RUeypZjFKnPB6F0\"",
		"mtime": "2026-09-03T13:25:39.222Z",
		"size": 32297,
		"path": "../public/videos/video-03/frame-180.jpg"
	},
	"/videos/video-03/frame-182.jpg": {
		"type": "image/jpeg",
		"etag": "\"7dbd-QI2YARutt3pJMYuvp3iA7H5fFT8\"",
		"mtime": "2026-09-03T13:25:39.256Z",
		"size": 32189,
		"path": "../public/videos/video-03/frame-182.jpg"
	},
	"/videos/video-03/frame-183.jpg": {
		"type": "image/jpeg",
		"etag": "\"7da1-yWbISe2OU1LENtE+9Tz9u3A8aUA\"",
		"mtime": "2026-09-03T13:25:39.270Z",
		"size": 32161,
		"path": "../public/videos/video-03/frame-183.jpg"
	},
	"/videos/video-03/frame-181.jpg": {
		"type": "image/jpeg",
		"etag": "\"7dbd-QI2YARutt3pJMYuvp3iA7H5fFT8\"",
		"mtime": "2026-09-03T13:25:39.239Z",
		"size": 32189,
		"path": "../public/videos/video-03/frame-181.jpg"
	},
	"/videos/video-03/frame-185.jpg": {
		"type": "image/jpeg",
		"etag": "\"7cd2-prm7uIQyRAVf1iwXgQ7wStOVEWQ\"",
		"mtime": "2026-09-03T13:25:39.305Z",
		"size": 31954,
		"path": "../public/videos/video-03/frame-185.jpg"
	},
	"/videos/video-03/frame-184.jpg": {
		"type": "image/jpeg",
		"etag": "\"7c4d-U4rJ3jihxXJtCtXPuX1S24h5Cz4\"",
		"mtime": "2026-09-03T13:25:39.287Z",
		"size": 31821,
		"path": "../public/videos/video-03/frame-184.jpg"
	},
	"/videos/video-03/frame-186.jpg": {
		"type": "image/jpeg",
		"etag": "\"7b5b-6thy1SwhuQiQ4jip7I4tW+akHGQ\"",
		"mtime": "2026-09-03T13:25:39.326Z",
		"size": 31579,
		"path": "../public/videos/video-03/frame-186.jpg"
	},
	"/videos/video-03/frame-187.jpg": {
		"type": "image/jpeg",
		"etag": "\"7b5b-6thy1SwhuQiQ4jip7I4tW+akHGQ\"",
		"mtime": "2026-09-03T13:25:39.343Z",
		"size": 31579,
		"path": "../public/videos/video-03/frame-187.jpg"
	},
	"/videos/video-03/frame-188.jpg": {
		"type": "image/jpeg",
		"etag": "\"7bd6-x+qemTZkoce21UdW+Nn5bW2pWr8\"",
		"mtime": "2026-09-03T13:25:39.361Z",
		"size": 31702,
		"path": "../public/videos/video-03/frame-188.jpg"
	},
	"/videos/video-03/frame-189.jpg": {
		"type": "image/jpeg",
		"etag": "\"7b5b-dyGIjIMnKEQZqhGIz8dfdRce7yU\"",
		"mtime": "2026-09-03T13:25:39.377Z",
		"size": 31579,
		"path": "../public/videos/video-03/frame-189.jpg"
	},
	"/videos/video-03/frame-190.jpg": {
		"type": "image/jpeg",
		"etag": "\"7b02-JrnGUH7L/saUE/M8S/h7kWOOA4c\"",
		"mtime": "2026-09-03T13:25:39.393Z",
		"size": 31490,
		"path": "../public/videos/video-03/frame-190.jpg"
	},
	"/videos/video-03/frame-191.jpg": {
		"type": "image/jpeg",
		"etag": "\"7aa0-A0mY8uaonjNgLjQEPtQsTDk7AZk\"",
		"mtime": "2026-09-03T13:25:39.408Z",
		"size": 31392,
		"path": "../public/videos/video-03/frame-191.jpg"
	},
	"/videos/video-03/frame-192.jpg": {
		"type": "image/jpeg",
		"etag": "\"7aa0-A0mY8uaonjNgLjQEPtQsTDk7AZk\"",
		"mtime": "2026-09-03T13:25:39.424Z",
		"size": 31392,
		"path": "../public/videos/video-03/frame-192.jpg"
	},
	"/videos/video-03/frame-193.jpg": {
		"type": "image/jpeg",
		"etag": "\"7ab1-zDh9fV02vDo23JyNS/DuG9ngOLg\"",
		"mtime": "2026-09-03T13:25:39.443Z",
		"size": 31409,
		"path": "../public/videos/video-03/frame-193.jpg"
	},
	"/videos/video-03/frame-195.jpg": {
		"type": "image/jpeg",
		"etag": "\"7ac3-MwFBUFJkpmblyepDN8yt26kQjR4\"",
		"mtime": "2026-09-03T13:25:39.480Z",
		"size": 31427,
		"path": "../public/videos/video-03/frame-195.jpg"
	},
	"/videos/video-03/frame-194.jpg": {
		"type": "image/jpeg",
		"etag": "\"7973-r8z8gBVxC4xIYXUz7yKYk4CSTC8\"",
		"mtime": "2026-09-03T13:25:39.461Z",
		"size": 31091,
		"path": "../public/videos/video-03/frame-194.jpg"
	},
	"/videos/video-03/frame-196.jpg": {
		"type": "image/jpeg",
		"etag": "\"7971-HeSbLhK69ps02+AF3BF48ouLFCQ\"",
		"mtime": "2026-09-03T13:25:39.494Z",
		"size": 31089,
		"path": "../public/videos/video-03/frame-196.jpg"
	},
	"/videos/video-03/frame-197.jpg": {
		"type": "image/jpeg",
		"etag": "\"7971-HeSbLhK69ps02+AF3BF48ouLFCQ\"",
		"mtime": "2026-09-03T13:25:39.509Z",
		"size": 31089,
		"path": "../public/videos/video-03/frame-197.jpg"
	},
	"/videos/video-03/frame-199.jpg": {
		"type": "image/jpeg",
		"etag": "\"7974-LWmTK+xhydZ9Q19iMFtDjG6l/R4\"",
		"mtime": "2026-09-03T13:25:39.544Z",
		"size": 31092,
		"path": "../public/videos/video-03/frame-199.jpg"
	},
	"/videos/video-03/frame-198.jpg": {
		"type": "image/jpeg",
		"etag": "\"7a2e-IVK6ViZJiQ3B35nT01oIUwY6VlM\"",
		"mtime": "2026-09-03T13:25:39.527Z",
		"size": 31278,
		"path": "../public/videos/video-03/frame-198.jpg"
	},
	"/videos/video-03/frame-201.jpg": {
		"type": "image/jpeg",
		"etag": "\"7844-CiHCC0zY/I4z5Y/TKANHQrArBM4\"",
		"mtime": "2026-09-03T13:25:39.576Z",
		"size": 30788,
		"path": "../public/videos/video-03/frame-201.jpg"
	},
	"/videos/video-03/frame-200.jpg": {
		"type": "image/jpeg",
		"etag": "\"78bf-wqcbiaz0XVJDyE+5XnqRU/GfXYM\"",
		"mtime": "2026-09-03T13:25:39.561Z",
		"size": 30911,
		"path": "../public/videos/video-03/frame-200.jpg"
	},
	"/videos/video-03/frame-203.jpg": {
		"type": "image/jpeg",
		"etag": "\"78d4-3bqIf0nQ0AQ9vb8H60t3OwF2cKM\"",
		"mtime": "2026-09-03T13:25:39.609Z",
		"size": 30932,
		"path": "../public/videos/video-03/frame-203.jpg"
	},
	"/videos/video-03/frame-202.jpg": {
		"type": "image/jpeg",
		"etag": "\"7844-CiHCC0zY/I4z5Y/TKANHQrArBM4\"",
		"mtime": "2026-09-03T13:25:39.593Z",
		"size": 30788,
		"path": "../public/videos/video-03/frame-202.jpg"
	},
	"/videos/video-03/frame-204.jpg": {
		"type": "image/jpeg",
		"etag": "\"77bf-fi90CYydC76+ARpR+o5SBICLpe0\"",
		"mtime": "2026-09-03T13:25:39.625Z",
		"size": 30655,
		"path": "../public/videos/video-03/frame-204.jpg"
	},
	"/videos/video-03/frame-205.jpg": {
		"type": "image/jpeg",
		"etag": "\"78ee-i4SXaVWrvwqGa0FwS+je6WFOnj4\"",
		"mtime": "2026-09-03T13:25:39.641Z",
		"size": 30958,
		"path": "../public/videos/video-03/frame-205.jpg"
	},
	"/videos/video-03/frame-206.jpg": {
		"type": "image/jpeg",
		"etag": "\"77ff-Nx1g7I6AFqqsWvTd9gEtCQwJyrA\"",
		"mtime": "2026-09-03T13:25:39.657Z",
		"size": 30719,
		"path": "../public/videos/video-03/frame-206.jpg"
	},
	"/videos/video-03/frame-207.jpg": {
		"type": "image/jpeg",
		"etag": "\"77ff-Nx1g7I6AFqqsWvTd9gEtCQwJyrA\"",
		"mtime": "2026-09-03T13:25:39.675Z",
		"size": 30719,
		"path": "../public/videos/video-03/frame-207.jpg"
	},
	"/videos/video-03/frame-208.jpg": {
		"type": "image/jpeg",
		"etag": "\"7954-ID8M6kgUO8/gkvm3Whx00RDFS+o\"",
		"mtime": "2026-09-03T13:25:39.691Z",
		"size": 31060,
		"path": "../public/videos/video-03/frame-208.jpg"
	},
	"/videos/video-03/frame-210.jpg": {
		"type": "image/jpeg",
		"etag": "\"7950-50HqcZ6yI/uHu9mPLuCVEVsf75w\"",
		"mtime": "2026-09-03T13:25:39.723Z",
		"size": 31056,
		"path": "../public/videos/video-03/frame-210.jpg"
	},
	"/videos/video-03/frame-209.jpg": {
		"type": "image/jpeg",
		"etag": "\"7958-+tRj4y0EBtzrX0piakgiRNBzJNI\"",
		"mtime": "2026-09-03T13:25:39.708Z",
		"size": 31064,
		"path": "../public/videos/video-03/frame-209.jpg"
	},
	"/videos/video-03/frame-211.jpg": {
		"type": "image/jpeg",
		"etag": "\"7985-iTrtpLOZ1LmGDSdIIFfjtbTky9s\"",
		"mtime": "2026-09-03T13:25:39.739Z",
		"size": 31109,
		"path": "../public/videos/video-03/frame-211.jpg"
	},
	"/videos/video-03/frame-212.jpg": {
		"type": "image/jpeg",
		"etag": "\"7985-iTrtpLOZ1LmGDSdIIFfjtbTky9s\"",
		"mtime": "2026-09-03T13:25:39.755Z",
		"size": 31109,
		"path": "../public/videos/video-03/frame-212.jpg"
	},
	"/videos/video-03/frame-213.jpg": {
		"type": "image/jpeg",
		"etag": "\"7b40-DtnXoAyMwfIdlFUFgLGZSXZH0Wo\"",
		"mtime": "2026-09-03T13:25:39.773Z",
		"size": 31552,
		"path": "../public/videos/video-03/frame-213.jpg"
	},
	"/videos/video-03/frame-214.jpg": {
		"type": "image/jpeg",
		"etag": "\"7a78-/a7BOE9JHIHokBT+9owa0Y9J7co\"",
		"mtime": "2026-09-03T13:25:39.792Z",
		"size": 31352,
		"path": "../public/videos/video-03/frame-214.jpg"
	},
	"/videos/video-03/frame-215.jpg": {
		"type": "image/jpeg",
		"etag": "\"7c07-ctcdDMpv0Fk2C996bRJLZPyVzNY\"",
		"mtime": "2026-09-03T13:25:39.808Z",
		"size": 31751,
		"path": "../public/videos/video-03/frame-215.jpg"
	},
	"/videos/video-03/frame-216.jpg": {
		"type": "image/jpeg",
		"etag": "\"7adf-HWFsm9E1dsU2kpJpbvY2nX0l5wg\"",
		"mtime": "2026-09-03T13:25:39.822Z",
		"size": 31455,
		"path": "../public/videos/video-03/frame-216.jpg"
	},
	"/videos/video-03/frame-220.jpg": {
		"type": "image/jpeg",
		"etag": "\"7ee9-LO+OCjJHSYHu9+kkB3QszV84324\"",
		"mtime": "2026-09-03T13:25:39.890Z",
		"size": 32489,
		"path": "../public/videos/video-03/frame-220.jpg"
	},
	"/videos/video-03/frame-219.jpg": {
		"type": "image/jpeg",
		"etag": "\"7c7c-sQ1TYs5x6PL344tZeUifzthbRe8\"",
		"mtime": "2026-09-03T13:25:39.874Z",
		"size": 31868,
		"path": "../public/videos/video-03/frame-219.jpg"
	},
	"/videos/video-03/frame-218.jpg": {
		"type": "image/jpeg",
		"etag": "\"7c48-rTggquNvwWHwCJHx9QzAxM703F4\"",
		"mtime": "2026-09-03T13:25:39.858Z",
		"size": 31816,
		"path": "../public/videos/video-03/frame-218.jpg"
	},
	"/videos/video-03/frame-217.jpg": {
		"type": "image/jpeg",
		"etag": "\"7adf-HWFsm9E1dsU2kpJpbvY2nX0l5wg\"",
		"mtime": "2026-09-03T13:25:39.840Z",
		"size": 31455,
		"path": "../public/videos/video-03/frame-217.jpg"
	},
	"/videos/video-03/frame-222.jpg": {
		"type": "image/jpeg",
		"etag": "\"7fce-zDTMEHHQPAh/XMgMSZ2eS9t3gAg\"",
		"mtime": "2026-09-03T13:25:39.924Z",
		"size": 32718,
		"path": "../public/videos/video-03/frame-222.jpg"
	},
	"/videos/video-03/frame-221.jpg": {
		"type": "image/jpeg",
		"etag": "\"7fce-zDTMEHHQPAh/XMgMSZ2eS9t3gAg\"",
		"mtime": "2026-09-03T13:25:39.907Z",
		"size": 32718,
		"path": "../public/videos/video-03/frame-221.jpg"
	},
	"/videos/video-03/frame-223.jpg": {
		"type": "image/jpeg",
		"etag": "\"8043-pIsiaObM4SP8R14ekB/ay6ABOLU\"",
		"mtime": "2026-09-03T13:25:39.943Z",
		"size": 32835,
		"path": "../public/videos/video-03/frame-223.jpg"
	},
	"/videos/video-03/frame-224.jpg": {
		"type": "image/jpeg",
		"etag": "\"7f23-5qu9xcyzn9TetaghyTbftQ+IoNY\"",
		"mtime": "2026-09-03T13:25:39.960Z",
		"size": 32547,
		"path": "../public/videos/video-03/frame-224.jpg"
	},
	"/videos/video-03/frame-226.jpg": {
		"type": "image/jpeg",
		"etag": "\"7eb4-C08LrdoGxtB9XUjDK/mvsnVHJts\"",
		"mtime": "2026-09-03T13:25:39.999Z",
		"size": 32436,
		"path": "../public/videos/video-03/frame-226.jpg"
	},
	"/videos/video-03/frame-225.jpg": {
		"type": "image/jpeg",
		"etag": "\"8100-maZrB5AguClpczBmXMjXkTPwHBM\"",
		"mtime": "2026-09-03T13:25:39.977Z",
		"size": 33024,
		"path": "../public/videos/video-03/frame-225.jpg"
	},
	"/videos/video-03/frame-228.jpg": {
		"type": "image/jpeg",
		"etag": "\"8026-6TYpFNRjqgEdf3pApxpmbLE3VGs\"",
		"mtime": "2026-09-03T13:25:40.035Z",
		"size": 32806,
		"path": "../public/videos/video-03/frame-228.jpg"
	},
	"/videos/video-03/frame-227.jpg": {
		"type": "image/jpeg",
		"etag": "\"7eb4-C08LrdoGxtB9XUjDK/mvsnVHJts\"",
		"mtime": "2026-09-03T13:25:40.019Z",
		"size": 32436,
		"path": "../public/videos/video-03/frame-227.jpg"
	},
	"/videos/video-03/frame-229.jpg": {
		"type": "image/jpeg",
		"etag": "\"7eb1-mWQ/LjrpLUA05TmjVihO3gvY8fk\"",
		"mtime": "2026-09-03T13:25:40.053Z",
		"size": 32433,
		"path": "../public/videos/video-03/frame-229.jpg"
	},
	"/videos/video-03/frame-230.jpg": {
		"type": "image/jpeg",
		"etag": "\"7f93-iyuZ9nySt6efbfrVKXsuYCOIGjQ\"",
		"mtime": "2026-09-03T13:25:40.074Z",
		"size": 32659,
		"path": "../public/videos/video-03/frame-230.jpg"
	},
	"/videos/video-03/frame-231.jpg": {
		"type": "image/jpeg",
		"etag": "\"7fb5-MPoMptWpzd+uzocgXh1SfAXv75s\"",
		"mtime": "2026-09-03T13:25:40.091Z",
		"size": 32693,
		"path": "../public/videos/video-03/frame-231.jpg"
	},
	"/videos/video-03/frame-232.jpg": {
		"type": "image/jpeg",
		"etag": "\"7fb5-MPoMptWpzd+uzocgXh1SfAXv75s\"",
		"mtime": "2026-09-03T13:25:40.111Z",
		"size": 32693,
		"path": "../public/videos/video-03/frame-232.jpg"
	},
	"/videos/video-03/frame-233.jpg": {
		"type": "image/jpeg",
		"etag": "\"7fed-Q4eyuNFf3Rc55g/2DoD1oFYt/Hw\"",
		"mtime": "2026-09-03T13:25:40.129Z",
		"size": 32749,
		"path": "../public/videos/video-03/frame-233.jpg"
	},
	"/videos/video-03/frame-235.jpg": {
		"type": "image/jpeg",
		"etag": "\"8186-Cm4rzBHMmlNJ0kh9HHyOI00K1Eo\"",
		"mtime": "2026-09-03T13:25:40.171Z",
		"size": 33158,
		"path": "../public/videos/video-03/frame-235.jpg"
	},
	"/videos/video-03/frame-234.jpg": {
		"type": "image/jpeg",
		"etag": "\"7f15-x6uzEkH835YzzqjtUdF96XMWPjU\"",
		"mtime": "2026-09-03T13:25:40.148Z",
		"size": 32533,
		"path": "../public/videos/video-03/frame-234.jpg"
	},
	"/videos/video-03/frame-237.jpg": {
		"type": "image/jpeg",
		"etag": "\"7f79-9KAY/tdnkMbOAoi6spTmZFsBgBM\"",
		"mtime": "2026-09-03T13:25:40.206Z",
		"size": 32633,
		"path": "../public/videos/video-03/frame-237.jpg"
	},
	"/videos/video-03/frame-236.jpg": {
		"type": "image/jpeg",
		"etag": "\"7f79-9KAY/tdnkMbOAoi6spTmZFsBgBM\"",
		"mtime": "2026-09-03T13:25:40.187Z",
		"size": 32633,
		"path": "../public/videos/video-03/frame-236.jpg"
	},
	"/videos/video-03/frame-239.jpg": {
		"type": "image/jpeg",
		"etag": "\"7f63-0en7g+Al6G9TmPUAV4KW6vDtk58\"",
		"mtime": "2026-09-03T13:25:40.247Z",
		"size": 32611,
		"path": "../public/videos/video-03/frame-239.jpg"
	},
	"/videos/video-03/frame-238.jpg": {
		"type": "image/jpeg",
		"etag": "\"8048-BSH9kOk/RLC4jUukJs2Q3yjL7Mc\"",
		"mtime": "2026-09-03T13:25:40.227Z",
		"size": 32840,
		"path": "../public/videos/video-03/frame-238.jpg"
	},
	"/videos/video-03/frame-240.jpg": {
		"type": "image/jpeg",
		"etag": "\"807e-ptaCTCqHyWKZHKrjHgAN/sJ70MY\"",
		"mtime": "2026-09-03T13:25:40.265Z",
		"size": 32894,
		"path": "../public/videos/video-03/frame-240.jpg"
	},
	"/videos/video-03/frame-241.jpg": {
		"type": "image/jpeg",
		"etag": "\"801a-4uiqhG1sMc58uK3rGPaFgYhUN2E\"",
		"mtime": "2026-09-03T13:25:40.283Z",
		"size": 32794,
		"path": "../public/videos/video-03/frame-241.jpg"
	},
	"/videos/video-03/frame-245.jpg": {
		"type": "image/jpeg",
		"etag": "\"7fc1-zFLOpIlGwXyOXenN5622ew8PetI\"",
		"mtime": "2026-09-03T13:25:40.356Z",
		"size": 32705,
		"path": "../public/videos/video-03/frame-245.jpg"
	},
	"/videos/video-03/frame-242.jpg": {
		"type": "image/jpeg",
		"etag": "\"801a-4uiqhG1sMc58uK3rGPaFgYhUN2E\"",
		"mtime": "2026-09-03T13:25:40.302Z",
		"size": 32794,
		"path": "../public/videos/video-03/frame-242.jpg"
	},
	"/videos/video-03/frame-244.jpg": {
		"type": "image/jpeg",
		"etag": "\"7e2b-X4LcOZ0F0lxbUoJaEmJTFBjTq3U\"",
		"mtime": "2026-09-03T13:25:40.340Z",
		"size": 32299,
		"path": "../public/videos/video-03/frame-244.jpg"
	},
	"/videos/video-03/frame-247.jpg": {
		"type": "image/jpeg",
		"etag": "\"7db2-U8VUjXohADJaKBfv5YZLd9HIQEU\"",
		"mtime": "2026-09-03T13:25:40.392Z",
		"size": 32178,
		"path": "../public/videos/video-03/frame-247.jpg"
	},
	"/videos/video-03/frame-243.jpg": {
		"type": "image/jpeg",
		"etag": "\"7f4e-yPZTllw5Q2pbDNroTxl8WXSlwwM\"",
		"mtime": "2026-09-03T13:25:40.320Z",
		"size": 32590,
		"path": "../public/videos/video-03/frame-243.jpg"
	},
	"/videos/video-03/frame-246.jpg": {
		"type": "image/jpeg",
		"etag": "\"7db2-U8VUjXohADJaKBfv5YZLd9HIQEU\"",
		"mtime": "2026-09-03T13:25:40.375Z",
		"size": 32178,
		"path": "../public/videos/video-03/frame-246.jpg"
	},
	"/videos/video-03/frame-248.jpg": {
		"type": "image/jpeg",
		"etag": "\"7a60-bWcZn1I1qwzM4U1QksOah7mAZic\"",
		"mtime": "2026-09-03T13:25:40.407Z",
		"size": 31328,
		"path": "../public/videos/video-03/frame-248.jpg"
	},
	"/videos/video-03/frame-249.jpg": {
		"type": "image/jpeg",
		"etag": "\"7860-xZKJNnD3kZVnU9XVZPWz6EmEoCs\"",
		"mtime": "2026-09-03T13:25:40.418Z",
		"size": 30816,
		"path": "../public/videos/video-03/frame-249.jpg"
	},
	"/videos/video-03/frame-250.jpg": {
		"type": "image/jpeg",
		"etag": "\"7987-LktdED7p9dPo3rm/7kN7Mj+oNS4\"",
		"mtime": "2026-09-03T13:25:40.431Z",
		"size": 31111,
		"path": "../public/videos/video-03/frame-250.jpg"
	},
	"/videos/video-03/frame-251.jpg": {
		"type": "image/jpeg",
		"etag": "\"7c65-bsW6z+1MOdq4xm8jxba4bUf71qY\"",
		"mtime": "2026-09-03T13:25:40.447Z",
		"size": 31845,
		"path": "../public/videos/video-03/frame-251.jpg"
	},
	"/videos/video-03/frame-252.jpg": {
		"type": "image/jpeg",
		"etag": "\"7c65-bsW6z+1MOdq4xm8jxba4bUf71qY\"",
		"mtime": "2026-09-03T13:25:40.470Z",
		"size": 31845,
		"path": "../public/videos/video-03/frame-252.jpg"
	},
	"/videos/video-03/frame-253.jpg": {
		"type": "image/jpeg",
		"etag": "\"7fe5-gv/28nrCXaw72qyq7kbuF0SJTxw\"",
		"mtime": "2026-09-03T13:25:40.490Z",
		"size": 32741,
		"path": "../public/videos/video-03/frame-253.jpg"
	},
	"/videos/video-03/frame-254.jpg": {
		"type": "image/jpeg",
		"etag": "\"83e7-JbVAFCP1SgjZ3t8wZqf/FOjI37Q\"",
		"mtime": "2026-09-03T13:25:40.500Z",
		"size": 33767,
		"path": "../public/videos/video-03/frame-254.jpg"
	},
	"/videos/video-03/frame-255.jpg": {
		"type": "image/jpeg",
		"etag": "\"8a40-VUiW+OrCyqNEblbqMnxtQSecvf8\"",
		"mtime": "2026-09-03T13:25:40.511Z",
		"size": 35392,
		"path": "../public/videos/video-03/frame-255.jpg"
	},
	"/videos/video-03/frame-256.jpg": {
		"type": "image/jpeg",
		"etag": "\"8dff-XpsBC67+eD0HkIawtmo0S4hsf2M\"",
		"mtime": "2026-09-03T13:25:40.522Z",
		"size": 36351,
		"path": "../public/videos/video-03/frame-256.jpg"
	},
	"/videos/video-03/frame-257.jpg": {
		"type": "image/jpeg",
		"etag": "\"8dff-XpsBC67+eD0HkIawtmo0S4hsf2M\"",
		"mtime": "2026-09-03T13:25:40.534Z",
		"size": 36351,
		"path": "../public/videos/video-03/frame-257.jpg"
	},
	"/videos/video-03/frame-258.jpg": {
		"type": "image/jpeg",
		"etag": "\"957c-4JdxY/JUwKE9b1wvzdMh27yzwR8\"",
		"mtime": "2026-09-03T13:25:40.546Z",
		"size": 38268,
		"path": "../public/videos/video-03/frame-258.jpg"
	},
	"/videos/video-03/frame-259.jpg": {
		"type": "image/jpeg",
		"etag": "\"98c1-ORHIAscgR7oHbwxXb6vWdkrNbfo\"",
		"mtime": "2026-09-03T13:25:40.558Z",
		"size": 39105,
		"path": "../public/videos/video-03/frame-259.jpg"
	},
	"/videos/video-03/frame-261.jpg": {
		"type": "image/jpeg",
		"etag": "\"a7cb-2stOAgaMjaD+0HDCKgPWO+NMXvo\"",
		"mtime": "2026-09-03T13:25:40.582Z",
		"size": 42955,
		"path": "../public/videos/video-03/frame-261.jpg"
	},
	"/videos/video-03/frame-260.jpg": {
		"type": "image/jpeg",
		"etag": "\"9fcf-vIB3brgLmjb3+M13aq6+WO+VFTw\"",
		"mtime": "2026-09-03T13:25:40.569Z",
		"size": 40911,
		"path": "../public/videos/video-03/frame-260.jpg"
	},
	"/videos/video-03/frame-263.jpg": {
		"type": "image/jpeg",
		"etag": "\"a8f2-enljHZoJm+PrDrvSQdb+xKMHiVk\"",
		"mtime": "2026-09-03T13:25:40.608Z",
		"size": 43250,
		"path": "../public/videos/video-03/frame-263.jpg"
	},
	"/videos/video-03/frame-262.jpg": {
		"type": "image/jpeg",
		"etag": "\"a7cb-2stOAgaMjaD+0HDCKgPWO+NMXvo\"",
		"mtime": "2026-09-03T13:25:40.594Z",
		"size": 42955,
		"path": "../public/videos/video-03/frame-262.jpg"
	},
	"/videos/video-03/frame-264.jpg": {
		"type": "image/jpeg",
		"etag": "\"a9a0-NDTEmP2jCmPubWINIibA6gfpKf8\"",
		"mtime": "2026-09-03T13:25:40.622Z",
		"size": 43424,
		"path": "../public/videos/video-03/frame-264.jpg"
	},
	"/videos/video-03/frame-265.jpg": {
		"type": "image/jpeg",
		"etag": "\"a9d9-GSYBAIlXMHKMkTzWZLrjEqKdRv8\"",
		"mtime": "2026-09-03T13:25:40.634Z",
		"size": 43481,
		"path": "../public/videos/video-03/frame-265.jpg"
	},
	"/videos/video-03/frame-266.jpg": {
		"type": "image/jpeg",
		"etag": "\"aa53-fEE7iyGtooQe2c7r9LqQjwyU+HI\"",
		"mtime": "2026-09-03T13:25:40.645Z",
		"size": 43603,
		"path": "../public/videos/video-03/frame-266.jpg"
	},
	"/videos/video-03/frame-268.jpg": {
		"type": "image/jpeg",
		"etag": "\"aa67-zBqp3T96rHiUFi81WLKTK3uiD3c\"",
		"mtime": "2026-09-03T13:25:40.667Z",
		"size": 43623,
		"path": "../public/videos/video-03/frame-268.jpg"
	},
	"/videos/video-03/frame-267.jpg": {
		"type": "image/jpeg",
		"etag": "\"aa53-fEE7iyGtooQe2c7r9LqQjwyU+HI\"",
		"mtime": "2026-09-03T13:25:40.656Z",
		"size": 43603,
		"path": "../public/videos/video-03/frame-267.jpg"
	},
	"/videos/video-03/frame-269.jpg": {
		"type": "image/jpeg",
		"etag": "\"aa5e-wnYmnG+xms7DV8QhdD1gbi1VU+M\"",
		"mtime": "2026-09-03T13:25:40.678Z",
		"size": 43614,
		"path": "../public/videos/video-03/frame-269.jpg"
	},
	"/videos/video-03/frame-271.jpg": {
		"type": "image/jpeg",
		"etag": "\"aa54-TpLQ4kTBRTWJND8d2AOWI2jYVPs\"",
		"mtime": "2026-09-03T13:25:40.702Z",
		"size": 43604,
		"path": "../public/videos/video-03/frame-271.jpg"
	},
	"/videos/video-03/frame-270.jpg": {
		"type": "image/jpeg",
		"etag": "\"a9a4-cFXJinwY4/sNSt7JhojI9o8BRRM\"",
		"mtime": "2026-09-03T13:25:40.690Z",
		"size": 43428,
		"path": "../public/videos/video-03/frame-270.jpg"
	},
	"/videos/video-03/frame-272.jpg": {
		"type": "image/jpeg",
		"etag": "\"aa54-TpLQ4kTBRTWJND8d2AOWI2jYVPs\"",
		"mtime": "2026-09-03T13:25:40.717Z",
		"size": 43604,
		"path": "../public/videos/video-03/frame-272.jpg"
	},
	"/videos/video-03/frame-273.jpg": {
		"type": "image/jpeg",
		"etag": "\"a9fe-64vgduilHzATD+WnrDxW2l8juAk\"",
		"mtime": "2026-09-03T13:25:40.729Z",
		"size": 43518,
		"path": "../public/videos/video-03/frame-273.jpg"
	},
	"/videos/video-03/frame-274.jpg": {
		"type": "image/jpeg",
		"etag": "\"a9ff-W4CxCOCQpG5Kq3kTzGfQJeMnJdY\"",
		"mtime": "2026-09-03T13:25:40.739Z",
		"size": 43519,
		"path": "../public/videos/video-03/frame-274.jpg"
	},
	"/videos/video-03/frame-275.jpg": {
		"type": "image/jpeg",
		"etag": "\"a9bb-7RbUlZ9ocW0dIPdbQvKaiFe1F4I\"",
		"mtime": "2026-09-03T13:25:40.750Z",
		"size": 43451,
		"path": "../public/videos/video-03/frame-275.jpg"
	},
	"/videos/video-03/frame-276.jpg": {
		"type": "image/jpeg",
		"etag": "\"a9ba-vDS0NCF3mGJrH7t45dhiUusvd+o\"",
		"mtime": "2026-09-03T13:25:40.762Z",
		"size": 43450,
		"path": "../public/videos/video-03/frame-276.jpg"
	},
	"/videos/video-03/frame-277.jpg": {
		"type": "image/jpeg",
		"etag": "\"a9ba-vDS0NCF3mGJrH7t45dhiUusvd+o\"",
		"mtime": "2026-09-03T13:25:40.773Z",
		"size": 43450,
		"path": "../public/videos/video-03/frame-277.jpg"
	},
	"/videos/video-03/frame-278.jpg": {
		"type": "image/jpeg",
		"etag": "\"a96d-D+D/KPJvrqK5XhdMAAj0vuz6RWo\"",
		"mtime": "2026-09-03T13:25:40.785Z",
		"size": 43373,
		"path": "../public/videos/video-03/frame-278.jpg"
	},
	"/videos/video-03/frame-279.jpg": {
		"type": "image/jpeg",
		"etag": "\"a96d-wrHIMBX44mhTiBCSPnre1K03/ek\"",
		"mtime": "2026-09-03T13:25:40.797Z",
		"size": 43373,
		"path": "../public/videos/video-03/frame-279.jpg"
	},
	"/videos/video-03/frame-280.jpg": {
		"type": "image/jpeg",
		"etag": "\"a900-euV/HCNvqH/5PaBsxS4C8QyHuwg\"",
		"mtime": "2026-09-03T13:25:40.808Z",
		"size": 43264,
		"path": "../public/videos/video-03/frame-280.jpg"
	},
	"/videos/video-03/frame-281.jpg": {
		"type": "image/jpeg",
		"etag": "\"a994-ydAd0N/H89gno3QQg2renbPBYPY\"",
		"mtime": "2026-09-03T13:25:40.818Z",
		"size": 43412,
		"path": "../public/videos/video-03/frame-281.jpg"
	},
	"/videos/video-03/frame-282.jpg": {
		"type": "image/jpeg",
		"etag": "\"a994-ydAd0N/H89gno3QQg2renbPBYPY\"",
		"mtime": "2026-09-03T13:25:40.830Z",
		"size": 43412,
		"path": "../public/videos/video-03/frame-282.jpg"
	},
	"/videos/video-03/frame-283.jpg": {
		"type": "image/jpeg",
		"etag": "\"a962-mucJHwe1UX20R03pVaadSIpOuM8\"",
		"mtime": "2026-09-03T13:25:40.842Z",
		"size": 43362,
		"path": "../public/videos/video-03/frame-283.jpg"
	},
	"/videos/video-03/frame-284.jpg": {
		"type": "image/jpeg",
		"etag": "\"a96f-jyMwbd/pJ5YDkInDE8CTGtD4Usw\"",
		"mtime": "2026-09-03T13:25:40.852Z",
		"size": 43375,
		"path": "../public/videos/video-03/frame-284.jpg"
	},
	"/videos/video-03/frame-286.jpg": {
		"type": "image/jpeg",
		"etag": "\"a986-nnJQXLlxCEhEZqei01xlO5oI0Mw\"",
		"mtime": "2026-09-03T13:25:40.877Z",
		"size": 43398,
		"path": "../public/videos/video-03/frame-286.jpg"
	},
	"/videos/video-03/frame-285.jpg": {
		"type": "image/jpeg",
		"etag": "\"a9bf-MhRt8jRA8gFIH3mxradW1b0aMUg\"",
		"mtime": "2026-09-03T13:25:40.865Z",
		"size": 43455,
		"path": "../public/videos/video-03/frame-285.jpg"
	},
	"/videos/video-03/frame-287.jpg": {
		"type": "image/jpeg",
		"etag": "\"a986-nnJQXLlxCEhEZqei01xlO5oI0Mw\"",
		"mtime": "2026-09-03T13:25:40.888Z",
		"size": 43398,
		"path": "../public/videos/video-03/frame-287.jpg"
	},
	"/videos/video-03/frame-288.jpg": {
		"type": "image/jpeg",
		"etag": "\"a907-oo2h/rAZda3V0TRc0CVKXPFqQ+g\"",
		"mtime": "2026-09-03T13:25:40.898Z",
		"size": 43271,
		"path": "../public/videos/video-03/frame-288.jpg"
	},
	"/videos/video-03/frame-289.jpg": {
		"type": "image/jpeg",
		"etag": "\"a907-F4rskKOdaEfZ4biucTiORmcFeYM\"",
		"mtime": "2026-09-03T13:25:40.910Z",
		"size": 43271,
		"path": "../public/videos/video-03/frame-289.jpg"
	},
	"/videos/video-03/frame-290.jpg": {
		"type": "image/jpeg",
		"etag": "\"a956-D2l4D7UzanZz1Eh0Y/he0d3RFGo\"",
		"mtime": "2026-09-03T13:25:40.921Z",
		"size": 43350,
		"path": "../public/videos/video-03/frame-290.jpg"
	},
	"/videos/video-03/frame-291.jpg": {
		"type": "image/jpeg",
		"etag": "\"a993-l9+gO7N5ziW0E8I8yiKDjkPvmKs\"",
		"mtime": "2026-09-03T13:25:40.933Z",
		"size": 43411,
		"path": "../public/videos/video-03/frame-291.jpg"
	},
	"/videos/video-03/frame-292.jpg": {
		"type": "image/jpeg",
		"etag": "\"a993-l9+gO7N5ziW0E8I8yiKDjkPvmKs\"",
		"mtime": "2026-09-03T13:25:40.944Z",
		"size": 43411,
		"path": "../public/videos/video-03/frame-292.jpg"
	},
	"/videos/video-03/frame-293.jpg": {
		"type": "image/jpeg",
		"etag": "\"a8ca-YGwu1jquFSB9+IXHcTr3Pded2NM\"",
		"mtime": "2026-09-03T13:25:40.954Z",
		"size": 43210,
		"path": "../public/videos/video-03/frame-293.jpg"
	},
	"/videos/video-03/frame-294.jpg": {
		"type": "image/jpeg",
		"etag": "\"a9a5-5npUQITjiMjpI1kycNLTDZ0u/Nc\"",
		"mtime": "2026-09-03T13:25:40.966Z",
		"size": 43429,
		"path": "../public/videos/video-03/frame-294.jpg"
	},
	"/videos/video-03/frame-295.jpg": {
		"type": "image/jpeg",
		"etag": "\"a9b0-2LUevMr8LiNY5VbKiTHwXobKUrc\"",
		"mtime": "2026-09-03T13:25:40.981Z",
		"size": 43440,
		"path": "../public/videos/video-03/frame-295.jpg"
	},
	"/videos/video-03/frame-297.jpg": {
		"type": "image/jpeg",
		"etag": "\"a9c5-+c2gMX2VaXKlOykh6TrwMRZSFdw\"",
		"mtime": "2026-09-03T13:25:41.015Z",
		"size": 43461,
		"path": "../public/videos/video-03/frame-297.jpg"
	},
	"/videos/video-03/frame-296.jpg": {
		"type": "image/jpeg",
		"etag": "\"a9c5-+c2gMX2VaXKlOykh6TrwMRZSFdw\"",
		"mtime": "2026-09-03T13:25:40.998Z",
		"size": 43461,
		"path": "../public/videos/video-03/frame-296.jpg"
	},
	"/videos/video-03/frame-298.jpg": {
		"type": "image/jpeg",
		"etag": "\"a92f-P9S7ryLMtQ7r0DvbtOBLjPKhGrU\"",
		"mtime": "2026-09-03T13:25:41.034Z",
		"size": 43311,
		"path": "../public/videos/video-03/frame-298.jpg"
	},
	"/videos/video-03/frame-299.jpg": {
		"type": "image/jpeg",
		"etag": "\"a975-c3fnUMB4TbMBlL7CXrTJsOIjjLU\"",
		"mtime": "2026-09-03T13:25:41.049Z",
		"size": 43381,
		"path": "../public/videos/video-03/frame-299.jpg"
	},
	"/videos/video-02/frame-000.jpg": {
		"type": "image/jpeg",
		"etag": "\"5a8a-HuEA2yK9gbFyGiYM9mnQeTwm2M0\"",
		"mtime": "2026-09-03T13:25:31.485Z",
		"size": 23178,
		"path": "../public/videos/video-02/frame-000.jpg"
	},
	"/videos/video-02/frame-001.jpg": {
		"type": "image/jpeg",
		"etag": "\"5ad9-EqG/Tdg1qsI/mr0idQaJzpyfQCg\"",
		"mtime": "2026-09-03T13:25:31.502Z",
		"size": 23257,
		"path": "../public/videos/video-02/frame-001.jpg"
	},
	"/videos/video-02/frame-002.jpg": {
		"type": "image/jpeg",
		"etag": "\"5c9a-DEhnj+SETUpR327HPSpjYaR8gSM\"",
		"mtime": "2026-09-03T13:25:31.520Z",
		"size": 23706,
		"path": "../public/videos/video-02/frame-002.jpg"
	},
	"/videos/video-02/frame-003.jpg": {
		"type": "image/jpeg",
		"etag": "\"5baa-P8E2d0M/8VPFh5XcPKmjaT1SmuA\"",
		"mtime": "2026-09-03T13:25:31.537Z",
		"size": 23466,
		"path": "../public/videos/video-02/frame-003.jpg"
	},
	"/videos/video-02/frame-004.jpg": {
		"type": "image/jpeg",
		"etag": "\"5ad5-pb80cysKnYRXpcMUNJt4M/3fPY8\"",
		"mtime": "2026-09-03T13:25:31.556Z",
		"size": 23253,
		"path": "../public/videos/video-02/frame-004.jpg"
	},
	"/videos/video-02/frame-005.jpg": {
		"type": "image/jpeg",
		"etag": "\"5b24-yCuJDbFogOrXKMyfP4TE1fv6z+M\"",
		"mtime": "2026-09-03T13:25:31.573Z",
		"size": 23332,
		"path": "../public/videos/video-02/frame-005.jpg"
	},
	"/videos/video-02/frame-006.jpg": {
		"type": "image/jpeg",
		"etag": "\"5aaf-CKMU5DMF/Fky6BZoMtDct8bX0Ks\"",
		"mtime": "2026-09-03T13:25:31.589Z",
		"size": 23215,
		"path": "../public/videos/video-02/frame-006.jpg"
	},
	"/videos/video-02/frame-007.jpg": {
		"type": "image/jpeg",
		"etag": "\"5ad3-gKnm6plUT3ATVnshpfDhiKiqaME\"",
		"mtime": "2026-09-03T13:25:31.604Z",
		"size": 23251,
		"path": "../public/videos/video-02/frame-007.jpg"
	},
	"/videos/video-02/frame-008.jpg": {
		"type": "image/jpeg",
		"etag": "\"5a4b-6uS4l0b2UvyfvPqdG31NovBg8WU\"",
		"mtime": "2026-09-03T13:25:31.623Z",
		"size": 23115,
		"path": "../public/videos/video-02/frame-008.jpg"
	},
	"/videos/video-02/frame-009.jpg": {
		"type": "image/jpeg",
		"etag": "\"5a5b-K7cxGDKxAJsRv1MYSwlm/iRiG0I\"",
		"mtime": "2026-09-03T13:25:31.640Z",
		"size": 23131,
		"path": "../public/videos/video-02/frame-009.jpg"
	},
	"/videos/video-02/frame-010.jpg": {
		"type": "image/jpeg",
		"etag": "\"5a0a-InZycRXtUrmxu2l0KPpYRuvJzc4\"",
		"mtime": "2026-09-03T13:25:31.658Z",
		"size": 23050,
		"path": "../public/videos/video-02/frame-010.jpg"
	},
	"/videos/video-02/frame-011.jpg": {
		"type": "image/jpeg",
		"etag": "\"59e2-gnDnAf8J+olGjNTtAegM5IjtyEc\"",
		"mtime": "2026-09-03T13:25:31.675Z",
		"size": 23010,
		"path": "../public/videos/video-02/frame-011.jpg"
	},
	"/videos/video-02/frame-012.jpg": {
		"type": "image/jpeg",
		"etag": "\"59e2-gnDnAf8J+olGjNTtAegM5IjtyEc\"",
		"mtime": "2026-09-03T13:25:31.690Z",
		"size": 23010,
		"path": "../public/videos/video-02/frame-012.jpg"
	},
	"/videos/video-02/frame-013.jpg": {
		"type": "image/jpeg",
		"etag": "\"59ca-Tn3QxVV1vtseci4hSP+FDJv3vOQ\"",
		"mtime": "2026-09-03T13:25:31.710Z",
		"size": 22986,
		"path": "../public/videos/video-02/frame-013.jpg"
	},
	"/videos/video-02/frame-014.jpg": {
		"type": "image/jpeg",
		"etag": "\"59f2-YQoPTn+ynJU4pOiK2Vo7S0yTKcw\"",
		"mtime": "2026-09-03T13:25:31.729Z",
		"size": 23026,
		"path": "../public/videos/video-02/frame-014.jpg"
	},
	"/videos/video-02/frame-015.jpg": {
		"type": "image/jpeg",
		"etag": "\"5a19-uRilWxFxsupG8J9p2zOfrtyqLB0\"",
		"mtime": "2026-09-03T13:25:31.747Z",
		"size": 23065,
		"path": "../public/videos/video-02/frame-015.jpg"
	},
	"/videos/video-02/frame-016.jpg": {
		"type": "image/jpeg",
		"etag": "\"5a4e-e1PjoiovqUyobhs1t3Ns6D4MH9M\"",
		"mtime": "2026-09-03T13:25:31.762Z",
		"size": 23118,
		"path": "../public/videos/video-02/frame-016.jpg"
	},
	"/videos/video-02/frame-017.jpg": {
		"type": "image/jpeg",
		"etag": "\"5a4e-e1PjoiovqUyobhs1t3Ns6D4MH9M\"",
		"mtime": "2026-09-03T13:25:31.784Z",
		"size": 23118,
		"path": "../public/videos/video-02/frame-017.jpg"
	},
	"/videos/video-02/frame-018.jpg": {
		"type": "image/jpeg",
		"etag": "\"59e7-OgKmKxxR5G6hjEsT8DMpKCA0s8E\"",
		"mtime": "2026-09-03T13:25:31.801Z",
		"size": 23015,
		"path": "../public/videos/video-02/frame-018.jpg"
	},
	"/videos/video-02/frame-019.jpg": {
		"type": "image/jpeg",
		"etag": "\"59eb-Sfo208a1TlcbZU9T0zAkocDjXbc\"",
		"mtime": "2026-09-03T13:25:31.819Z",
		"size": 23019,
		"path": "../public/videos/video-02/frame-019.jpg"
	},
	"/videos/video-02/frame-020.jpg": {
		"type": "image/jpeg",
		"etag": "\"59b2-Bz/wxf3QfcIq8zcYOGGzFdl89xc\"",
		"mtime": "2026-09-03T13:25:31.837Z",
		"size": 22962,
		"path": "../public/videos/video-02/frame-020.jpg"
	},
	"/videos/video-02/frame-021.jpg": {
		"type": "image/jpeg",
		"etag": "\"59ec-d5iZ+hA6HB2fexujSHIKzfyQ6o0\"",
		"mtime": "2026-09-03T13:25:31.855Z",
		"size": 23020,
		"path": "../public/videos/video-02/frame-021.jpg"
	},
	"/videos/video-02/frame-022.jpg": {
		"type": "image/jpeg",
		"etag": "\"59ec-d5iZ+hA6HB2fexujSHIKzfyQ6o0\"",
		"mtime": "2026-09-03T13:25:31.873Z",
		"size": 23020,
		"path": "../public/videos/video-02/frame-022.jpg"
	},
	"/videos/video-02/frame-023.jpg": {
		"type": "image/jpeg",
		"etag": "\"5a1a-p+i19VeVnecUid6ZvN4rCOZ2npU\"",
		"mtime": "2026-09-03T13:25:31.892Z",
		"size": 23066,
		"path": "../public/videos/video-02/frame-023.jpg"
	},
	"/videos/video-02/frame-024.jpg": {
		"type": "image/jpeg",
		"etag": "\"5a62-ImXTNWIrp1E/XtrFIqDwpZfyX84\"",
		"mtime": "2026-09-03T13:25:31.910Z",
		"size": 23138,
		"path": "../public/videos/video-02/frame-024.jpg"
	},
	"/videos/video-02/frame-025.jpg": {
		"type": "image/jpeg",
		"etag": "\"5a63-+Xl3G5MH2cMH++O6mMxJRzm7Fq8\"",
		"mtime": "2026-09-03T13:25:31.925Z",
		"size": 23139,
		"path": "../public/videos/video-02/frame-025.jpg"
	},
	"/videos/video-02/frame-026.jpg": {
		"type": "image/jpeg",
		"etag": "\"5a71-4rm9oXqcWCUWhQLIPMWQOIFF+FQ\"",
		"mtime": "2026-09-03T13:25:31.944Z",
		"size": 23153,
		"path": "../public/videos/video-02/frame-026.jpg"
	},
	"/videos/video-02/frame-027.jpg": {
		"type": "image/jpeg",
		"etag": "\"5a71-4rm9oXqcWCUWhQLIPMWQOIFF+FQ\"",
		"mtime": "2026-09-03T13:25:31.962Z",
		"size": 23153,
		"path": "../public/videos/video-02/frame-027.jpg"
	},
	"/videos/video-02/frame-028.jpg": {
		"type": "image/jpeg",
		"etag": "\"5a71-O+8FLZuBXyskeUnJo2nJx/pqrsE\"",
		"mtime": "2026-09-03T13:25:31.980Z",
		"size": 23153,
		"path": "../public/videos/video-02/frame-028.jpg"
	},
	"/videos/video-02/frame-029.jpg": {
		"type": "image/jpeg",
		"etag": "\"5a5e-h52k2IyM3X0tME5HDXEhWKCh8nk\"",
		"mtime": "2026-09-03T13:25:31.999Z",
		"size": 23134,
		"path": "../public/videos/video-02/frame-029.jpg"
	},
	"/videos/video-02/frame-031.jpg": {
		"type": "image/jpeg",
		"etag": "\"5986-GR3reVHzjvBS6urTzycNlJj4C2w\"",
		"mtime": "2026-09-03T13:25:32.035Z",
		"size": 22918,
		"path": "../public/videos/video-02/frame-031.jpg"
	},
	"/videos/video-02/frame-032.jpg": {
		"type": "image/jpeg",
		"etag": "\"5986-GR3reVHzjvBS6urTzycNlJj4C2w\"",
		"mtime": "2026-09-03T13:25:32.053Z",
		"size": 22918,
		"path": "../public/videos/video-02/frame-032.jpg"
	},
	"/videos/video-02/frame-033.jpg": {
		"type": "image/jpeg",
		"etag": "\"5a00-LORWdL0gxBLxnEsE+rA+9oLiE/k\"",
		"mtime": "2026-09-03T13:25:32.070Z",
		"size": 23040,
		"path": "../public/videos/video-02/frame-033.jpg"
	},
	"/videos/video-02/frame-034.jpg": {
		"type": "image/jpeg",
		"etag": "\"5a2c-mLJZuFVzv40S+FobY9udP/nb4bg\"",
		"mtime": "2026-09-03T13:25:32.085Z",
		"size": 23084,
		"path": "../public/videos/video-02/frame-034.jpg"
	},
	"/videos/video-02/frame-030.jpg": {
		"type": "image/jpeg",
		"etag": "\"59f0-ibz1qeUkPOReXuEwDx9SVY7Ac9Y\"",
		"mtime": "2026-09-03T13:25:32.017Z",
		"size": 23024,
		"path": "../public/videos/video-02/frame-030.jpg"
	},
	"/videos/video-02/frame-035.jpg": {
		"type": "image/jpeg",
		"etag": "\"5a98-IjgYOVM9ZRahSThQKVyBiFJlq0o\"",
		"mtime": "2026-09-03T13:25:32.105Z",
		"size": 23192,
		"path": "../public/videos/video-02/frame-035.jpg"
	},
	"/videos/video-02/frame-037.jpg": {
		"type": "image/jpeg",
		"etag": "\"5a6e-dfWJ1Mdn8xvMFMjI2ImYPvuxoRM\"",
		"mtime": "2026-09-03T13:25:32.139Z",
		"size": 23150,
		"path": "../public/videos/video-02/frame-037.jpg"
	},
	"/videos/video-02/frame-038.jpg": {
		"type": "image/jpeg",
		"etag": "\"5a45-8p5aF/+lKEVwwK2TOLtijgjcLD8\"",
		"mtime": "2026-09-03T13:25:32.157Z",
		"size": 23109,
		"path": "../public/videos/video-02/frame-038.jpg"
	},
	"/videos/video-02/frame-039.jpg": {
		"type": "image/jpeg",
		"etag": "\"5a03-6nWHtbINgZNgc9TSO/abSBC/rNI\"",
		"mtime": "2026-09-03T13:25:32.176Z",
		"size": 23043,
		"path": "../public/videos/video-02/frame-039.jpg"
	},
	"/videos/video-02/frame-036.jpg": {
		"type": "image/jpeg",
		"etag": "\"5a6e-dfWJ1Mdn8xvMFMjI2ImYPvuxoRM\"",
		"mtime": "2026-09-03T13:25:32.121Z",
		"size": 23150,
		"path": "../public/videos/video-02/frame-036.jpg"
	},
	"/videos/video-02/frame-040.jpg": {
		"type": "image/jpeg",
		"etag": "\"5a0b-bwW2kjkUDbJupvWhokIiR1imGnE\"",
		"mtime": "2026-09-03T13:25:32.196Z",
		"size": 23051,
		"path": "../public/videos/video-02/frame-040.jpg"
	},
	"/videos/video-02/frame-042.jpg": {
		"type": "image/jpeg",
		"etag": "\"5a47-pb5oHS4nuUcG6ogUH30GGirDewQ\"",
		"mtime": "2026-09-03T13:25:32.228Z",
		"size": 23111,
		"path": "../public/videos/video-02/frame-042.jpg"
	},
	"/videos/video-02/frame-041.jpg": {
		"type": "image/jpeg",
		"etag": "\"5a47-pb5oHS4nuUcG6ogUH30GGirDewQ\"",
		"mtime": "2026-09-03T13:25:32.212Z",
		"size": 23111,
		"path": "../public/videos/video-02/frame-041.jpg"
	},
	"/videos/video-02/frame-043.jpg": {
		"type": "image/jpeg",
		"etag": "\"5a94-Rswa9oyWAxNg8xMj5z8ArMkTPXk\"",
		"mtime": "2026-09-03T13:25:32.247Z",
		"size": 23188,
		"path": "../public/videos/video-02/frame-043.jpg"
	},
	"/videos/video-02/frame-044.jpg": {
		"type": "image/jpeg",
		"etag": "\"5ae6-3Ho7oWYyCYVj4sbYqQdXV8+3ic8\"",
		"mtime": "2026-09-03T13:25:32.266Z",
		"size": 23270,
		"path": "../public/videos/video-02/frame-044.jpg"
	},
	"/videos/video-02/frame-045.jpg": {
		"type": "image/jpeg",
		"etag": "\"5a8a-IDg7QfvsXvKufRnVFNQlvD9R5Dg\"",
		"mtime": "2026-09-03T13:25:32.287Z",
		"size": 23178,
		"path": "../public/videos/video-02/frame-045.jpg"
	},
	"/videos/video-02/frame-046.jpg": {
		"type": "image/jpeg",
		"etag": "\"5a5a-66zpdrUoABPphbvIv1FinUqblIY\"",
		"mtime": "2026-09-03T13:25:32.304Z",
		"size": 23130,
		"path": "../public/videos/video-02/frame-046.jpg"
	},
	"/videos/video-02/frame-047.jpg": {
		"type": "image/jpeg",
		"etag": "\"5a5a-66zpdrUoABPphbvIv1FinUqblIY\"",
		"mtime": "2026-09-03T13:25:32.321Z",
		"size": 23130,
		"path": "../public/videos/video-02/frame-047.jpg"
	},
	"/videos/video-02/frame-048.jpg": {
		"type": "image/jpeg",
		"etag": "\"5a7a-ZhhCWy+lJK2CblVftfmkTEsDedg\"",
		"mtime": "2026-09-03T13:25:32.339Z",
		"size": 23162,
		"path": "../public/videos/video-02/frame-048.jpg"
	},
	"/videos/video-02/frame-049.jpg": {
		"type": "image/jpeg",
		"etag": "\"5a26-NdPjueu59NVfpjU/QMxXh6czIec\"",
		"mtime": "2026-09-03T13:25:32.358Z",
		"size": 23078,
		"path": "../public/videos/video-02/frame-049.jpg"
	},
	"/videos/video-02/frame-050.jpg": {
		"type": "image/jpeg",
		"etag": "\"5a54-wgkF8ir8/sFYpiCzbwq/sErkLa8\"",
		"mtime": "2026-09-03T13:25:32.377Z",
		"size": 23124,
		"path": "../public/videos/video-02/frame-050.jpg"
	},
	"/videos/video-02/frame-051.jpg": {
		"type": "image/jpeg",
		"etag": "\"5a56-QAfZidtYDSr1qRYh9BGSNdLqr40\"",
		"mtime": "2026-09-03T13:25:32.393Z",
		"size": 23126,
		"path": "../public/videos/video-02/frame-051.jpg"
	},
	"/videos/video-02/frame-052.jpg": {
		"type": "image/jpeg",
		"etag": "\"5a56-QAfZidtYDSr1qRYh9BGSNdLqr40\"",
		"mtime": "2026-09-03T13:25:32.410Z",
		"size": 23126,
		"path": "../public/videos/video-02/frame-052.jpg"
	},
	"/videos/video-02/frame-053.jpg": {
		"type": "image/jpeg",
		"etag": "\"5aa6-1It4leWgbvnL4ATIiAU2uNf00kI\"",
		"mtime": "2026-09-03T13:25:32.429Z",
		"size": 23206,
		"path": "../public/videos/video-02/frame-053.jpg"
	},
	"/videos/video-02/frame-054.jpg": {
		"type": "image/jpeg",
		"etag": "\"5a47-fdohbprjEoEuWh/pisKKCcy+Qlg\"",
		"mtime": "2026-09-03T13:25:32.450Z",
		"size": 23111,
		"path": "../public/videos/video-02/frame-054.jpg"
	},
	"/videos/video-02/frame-055.jpg": {
		"type": "image/jpeg",
		"etag": "\"5aab-WNJjPQsLrFjpOxQsc20O+Lv3FDY\"",
		"mtime": "2026-09-03T13:25:32.469Z",
		"size": 23211,
		"path": "../public/videos/video-02/frame-055.jpg"
	},
	"/videos/video-02/frame-058.jpg": {
		"type": "image/jpeg",
		"etag": "\"59b1-KTZcfHqVh50sJ3ZYA1BjUit6/Pk\"",
		"mtime": "2026-09-03T13:25:32.525Z",
		"size": 22961,
		"path": "../public/videos/video-02/frame-058.jpg"
	},
	"/videos/video-02/frame-059.jpg": {
		"type": "image/jpeg",
		"etag": "\"594f-nqVCPNvZEz/+97mVRZiN43lbjrQ\"",
		"mtime": "2026-09-03T13:25:32.541Z",
		"size": 22863,
		"path": "../public/videos/video-02/frame-059.jpg"
	},
	"/videos/video-02/frame-057.jpg": {
		"type": "image/jpeg",
		"etag": "\"5a03-mUKsQzA/966Kt0trEuE0oBSNyFc\"",
		"mtime": "2026-09-03T13:25:32.507Z",
		"size": 23043,
		"path": "../public/videos/video-02/frame-057.jpg"
	},
	"/videos/video-02/frame-060.jpg": {
		"type": "image/jpeg",
		"etag": "\"5a79-UsenneFbfGZN93BIf2TlaYxdhMM\"",
		"mtime": "2026-09-03T13:25:32.557Z",
		"size": 23161,
		"path": "../public/videos/video-02/frame-060.jpg"
	},
	"/videos/video-02/frame-056.jpg": {
		"type": "image/jpeg",
		"etag": "\"5a03-mUKsQzA/966Kt0trEuE0oBSNyFc\"",
		"mtime": "2026-09-03T13:25:32.488Z",
		"size": 23043,
		"path": "../public/videos/video-02/frame-056.jpg"
	},
	"/videos/video-02/frame-061.jpg": {
		"type": "image/jpeg",
		"etag": "\"5ad7-7XrP8ksA2Vu+CDIPGKLnmNRaqVE\"",
		"mtime": "2026-09-03T13:25:32.577Z",
		"size": 23255,
		"path": "../public/videos/video-02/frame-061.jpg"
	},
	"/videos/video-02/frame-062.jpg": {
		"type": "image/jpeg",
		"etag": "\"5ad7-7XrP8ksA2Vu+CDIPGKLnmNRaqVE\"",
		"mtime": "2026-09-03T13:25:32.595Z",
		"size": 23255,
		"path": "../public/videos/video-02/frame-062.jpg"
	},
	"/videos/video-02/frame-063.jpg": {
		"type": "image/jpeg",
		"etag": "\"5ab0-oiwLRyUyDlhMjv6gYSldKvA19sw\"",
		"mtime": "2026-09-03T13:25:32.613Z",
		"size": 23216,
		"path": "../public/videos/video-02/frame-063.jpg"
	},
	"/videos/video-02/frame-064.jpg": {
		"type": "image/jpeg",
		"etag": "\"5b03-APRNfr7lQw360y5Lr3cTt8/eHLA\"",
		"mtime": "2026-09-03T13:25:32.628Z",
		"size": 23299,
		"path": "../public/videos/video-02/frame-064.jpg"
	},
	"/videos/video-02/frame-065.jpg": {
		"type": "image/jpeg",
		"etag": "\"5b18-OXPXQIPtTU+fz7ZgLolaUHR611E\"",
		"mtime": "2026-09-03T13:25:32.644Z",
		"size": 23320,
		"path": "../public/videos/video-02/frame-065.jpg"
	},
	"/videos/video-02/frame-066.jpg": {
		"type": "image/jpeg",
		"etag": "\"5a96-8rowagxyYcqeEyTvooErYN6T0vo\"",
		"mtime": "2026-09-03T13:25:32.659Z",
		"size": 23190,
		"path": "../public/videos/video-02/frame-066.jpg"
	},
	"/videos/video-02/frame-068.jpg": {
		"type": "image/jpeg",
		"etag": "\"5a68-vt8Q84VxmRR7dedgFyK6WByaA00\"",
		"mtime": "2026-09-03T13:25:32.691Z",
		"size": 23144,
		"path": "../public/videos/video-02/frame-068.jpg"
	},
	"/videos/video-02/frame-069.jpg": {
		"type": "image/jpeg",
		"etag": "\"5ace-m3PbDlUJB80de3x752OLuos6bHU\"",
		"mtime": "2026-09-03T13:25:32.708Z",
		"size": 23246,
		"path": "../public/videos/video-02/frame-069.jpg"
	},
	"/videos/video-02/frame-067.jpg": {
		"type": "image/jpeg",
		"etag": "\"5a96-8rowagxyYcqeEyTvooErYN6T0vo\"",
		"mtime": "2026-09-03T13:25:32.676Z",
		"size": 23190,
		"path": "../public/videos/video-02/frame-067.jpg"
	},
	"/videos/video-02/frame-070.jpg": {
		"type": "image/jpeg",
		"etag": "\"5af6-co9qfmUMC61S5/DYoct3dOOeXjU\"",
		"mtime": "2026-09-03T13:25:32.724Z",
		"size": 23286,
		"path": "../public/videos/video-02/frame-070.jpg"
	},
	"/videos/video-02/frame-072.jpg": {
		"type": "image/jpeg",
		"etag": "\"5a76-PtWK4wyAv989GEjliJU6GRQT9VU\"",
		"mtime": "2026-09-03T13:25:32.757Z",
		"size": 23158,
		"path": "../public/videos/video-02/frame-072.jpg"
	},
	"/videos/video-02/frame-071.jpg": {
		"type": "image/jpeg",
		"etag": "\"5a76-PtWK4wyAv989GEjliJU6GRQT9VU\"",
		"mtime": "2026-09-03T13:25:32.740Z",
		"size": 23158,
		"path": "../public/videos/video-02/frame-071.jpg"
	},
	"/videos/video-02/frame-074.jpg": {
		"type": "image/jpeg",
		"etag": "\"5a45-7OAImmivY52iCHKoky3OwbOoh54\"",
		"mtime": "2026-09-03T13:25:32.789Z",
		"size": 23109,
		"path": "../public/videos/video-02/frame-074.jpg"
	},
	"/videos/video-02/frame-075.jpg": {
		"type": "image/jpeg",
		"etag": "\"5ac3-AuB9pFbXZXpa59hYT7MCdQULxVQ\"",
		"mtime": "2026-09-03T13:25:32.806Z",
		"size": 23235,
		"path": "../public/videos/video-02/frame-075.jpg"
	},
	"/videos/video-02/frame-076.jpg": {
		"type": "image/jpeg",
		"etag": "\"5a3f-uf+yJov6lEU4QFpv2xUCH+qpUjk\"",
		"mtime": "2026-09-03T13:25:32.824Z",
		"size": 23103,
		"path": "../public/videos/video-02/frame-076.jpg"
	},
	"/videos/video-02/frame-077.jpg": {
		"type": "image/jpeg",
		"etag": "\"5a3f-uf+yJov6lEU4QFpv2xUCH+qpUjk\"",
		"mtime": "2026-09-03T13:25:32.843Z",
		"size": 23103,
		"path": "../public/videos/video-02/frame-077.jpg"
	},
	"/videos/video-02/frame-073.jpg": {
		"type": "image/jpeg",
		"etag": "\"59c9-/Ig8RKWfaaOuXzLvKlPtszuvnWA\"",
		"mtime": "2026-09-03T13:25:32.772Z",
		"size": 22985,
		"path": "../public/videos/video-02/frame-073.jpg"
	},
	"/videos/video-02/frame-078.jpg": {
		"type": "image/jpeg",
		"etag": "\"5a9d-sp9VKt5r0ry1Eq5T6Dx/V15/ksg\"",
		"mtime": "2026-09-03T13:25:32.862Z",
		"size": 23197,
		"path": "../public/videos/video-02/frame-078.jpg"
	},
	"/videos/video-02/frame-079.jpg": {
		"type": "image/jpeg",
		"etag": "\"5b0d-MNM3i7300aHD6t5CxKaD5+6Jl34\"",
		"mtime": "2026-09-03T13:25:32.878Z",
		"size": 23309,
		"path": "../public/videos/video-02/frame-079.jpg"
	},
	"/videos/video-02/frame-080.jpg": {
		"type": "image/jpeg",
		"etag": "\"5c5b-TB9L4UInxk7dnDjCpvOo7Hod6FY\"",
		"mtime": "2026-09-03T13:25:32.893Z",
		"size": 23643,
		"path": "../public/videos/video-02/frame-080.jpg"
	},
	"/videos/video-02/frame-081.jpg": {
		"type": "image/jpeg",
		"etag": "\"5c83-SMIraczg5BdEzlDmJw7dgLRbH6Y\"",
		"mtime": "2026-09-03T13:25:32.909Z",
		"size": 23683,
		"path": "../public/videos/video-02/frame-081.jpg"
	},
	"/videos/video-02/frame-082.jpg": {
		"type": "image/jpeg",
		"etag": "\"5c83-SMIraczg5BdEzlDmJw7dgLRbH6Y\"",
		"mtime": "2026-09-03T13:25:32.924Z",
		"size": 23683,
		"path": "../public/videos/video-02/frame-082.jpg"
	},
	"/videos/video-02/frame-085.jpg": {
		"type": "image/jpeg",
		"etag": "\"5d56-E+Ja4ONxESg3q3gbH25CEE8H3Wo\"",
		"mtime": "2026-09-03T13:25:32.974Z",
		"size": 23894,
		"path": "../public/videos/video-02/frame-085.jpg"
	},
	"/videos/video-02/frame-083.jpg": {
		"type": "image/jpeg",
		"etag": "\"5d24-3QplGhFOaef1rJIT9gZPV1QTiVE\"",
		"mtime": "2026-09-03T13:25:32.939Z",
		"size": 23844,
		"path": "../public/videos/video-02/frame-083.jpg"
	},
	"/videos/video-02/frame-084.jpg": {
		"type": "image/jpeg",
		"etag": "\"5d0a-zkZ/N+vnx8uLUuXAVutctlUBywc\"",
		"mtime": "2026-09-03T13:25:32.955Z",
		"size": 23818,
		"path": "../public/videos/video-02/frame-084.jpg"
	},
	"/videos/video-02/frame-086.jpg": {
		"type": "image/jpeg",
		"etag": "\"5d3a-kUZG+ge4NZTBK5u0sJYXVlaxg9U\"",
		"mtime": "2026-09-03T13:25:32.987Z",
		"size": 23866,
		"path": "../public/videos/video-02/frame-086.jpg"
	},
	"/videos/video-02/frame-087.jpg": {
		"type": "image/jpeg",
		"etag": "\"5d3a-kUZG+ge4NZTBK5u0sJYXVlaxg9U\"",
		"mtime": "2026-09-03T13:25:32.997Z",
		"size": 23866,
		"path": "../public/videos/video-02/frame-087.jpg"
	},
	"/videos/video-02/frame-088.jpg": {
		"type": "image/jpeg",
		"etag": "\"5ca6-BPeLlm47n7bTJpDDDGI6apkbd0I\"",
		"mtime": "2026-09-03T13:25:33.007Z",
		"size": 23718,
		"path": "../public/videos/video-02/frame-088.jpg"
	},
	"/videos/video-02/frame-089.jpg": {
		"type": "image/jpeg",
		"etag": "\"5bc9-ZmkeWChgz1QBoykFqmCrJo82fF8\"",
		"mtime": "2026-09-03T13:25:33.019Z",
		"size": 23497,
		"path": "../public/videos/video-02/frame-089.jpg"
	},
	"/videos/video-02/frame-090.jpg": {
		"type": "image/jpeg",
		"etag": "\"5bd1-m7vcrYEdEjr4bajcqRHlt+c1JOM\"",
		"mtime": "2026-09-03T13:25:33.030Z",
		"size": 23505,
		"path": "../public/videos/video-02/frame-090.jpg"
	},
	"/videos/video-02/frame-092.jpg": {
		"type": "image/jpeg",
		"etag": "\"5c0a-m1MDWhHkilFIbMQbejqYnR+hN5I\"",
		"mtime": "2026-09-03T13:25:33.057Z",
		"size": 23562,
		"path": "../public/videos/video-02/frame-092.jpg"
	},
	"/videos/video-02/frame-091.jpg": {
		"type": "image/jpeg",
		"etag": "\"5c0a-m1MDWhHkilFIbMQbejqYnR+hN5I\"",
		"mtime": "2026-09-03T13:25:33.042Z",
		"size": 23562,
		"path": "../public/videos/video-02/frame-091.jpg"
	},
	"/videos/video-02/frame-094.jpg": {
		"type": "image/jpeg",
		"etag": "\"5c77-R9Y/eEJdDlCS7RPAoRMlu+yBL9A\"",
		"mtime": "2026-09-03T13:25:33.079Z",
		"size": 23671,
		"path": "../public/videos/video-02/frame-094.jpg"
	},
	"/videos/video-02/frame-093.jpg": {
		"type": "image/jpeg",
		"etag": "\"5c38-xXIpcab86S3/ymflG437FI3qAJg\"",
		"mtime": "2026-09-03T13:25:33.069Z",
		"size": 23608,
		"path": "../public/videos/video-02/frame-093.jpg"
	},
	"/videos/video-02/frame-095.jpg": {
		"type": "image/jpeg",
		"etag": "\"5c8e-CLZtvp828uqCV3WElfRqnuvduFw\"",
		"mtime": "2026-09-03T13:25:33.090Z",
		"size": 23694,
		"path": "../public/videos/video-02/frame-095.jpg"
	},
	"/videos/video-02/frame-096.jpg": {
		"type": "image/jpeg",
		"etag": "\"5c4c-5ei5ysmnIoXQ6BErNLejJvvg8AQ\"",
		"mtime": "2026-09-03T13:25:33.101Z",
		"size": 23628,
		"path": "../public/videos/video-02/frame-096.jpg"
	},
	"/videos/video-02/frame-097.jpg": {
		"type": "image/jpeg",
		"etag": "\"5c4c-5ei5ysmnIoXQ6BErNLejJvvg8AQ\"",
		"mtime": "2026-09-03T13:25:33.115Z",
		"size": 23628,
		"path": "../public/videos/video-02/frame-097.jpg"
	},
	"/videos/video-02/frame-098.jpg": {
		"type": "image/jpeg",
		"etag": "\"5c2a-uboLBq6+4PtrmfSaZVD43pJWul4\"",
		"mtime": "2026-09-03T13:25:33.129Z",
		"size": 23594,
		"path": "../public/videos/video-02/frame-098.jpg"
	},
	"/videos/video-02/frame-099.jpg": {
		"type": "image/jpeg",
		"etag": "\"5c47-NrVkq/G9JD+S9pIPqpSRtjjjuig\"",
		"mtime": "2026-09-03T13:25:33.141Z",
		"size": 23623,
		"path": "../public/videos/video-02/frame-099.jpg"
	},
	"/videos/video-02/frame-101.jpg": {
		"type": "image/jpeg",
		"etag": "\"5c84-RTTrmx4IXgCsbVOmaUwN7QqYwtI\"",
		"mtime": "2026-09-03T13:25:33.164Z",
		"size": 23684,
		"path": "../public/videos/video-02/frame-101.jpg"
	},
	"/videos/video-02/frame-100.jpg": {
		"type": "image/jpeg",
		"etag": "\"5c6d-iiexooYLPg6X23QgAArmiFaN80s\"",
		"mtime": "2026-09-03T13:25:33.154Z",
		"size": 23661,
		"path": "../public/videos/video-02/frame-100.jpg"
	},
	"/videos/video-02/frame-102.jpg": {
		"type": "image/jpeg",
		"etag": "\"5c84-RTTrmx4IXgCsbVOmaUwN7QqYwtI\"",
		"mtime": "2026-09-03T13:25:33.176Z",
		"size": 23684,
		"path": "../public/videos/video-02/frame-102.jpg"
	},
	"/videos/video-02/frame-103.jpg": {
		"type": "image/jpeg",
		"etag": "\"5cd7-ZCY/giKxoFrzGW+bUQS6cb0JKjc\"",
		"mtime": "2026-09-03T13:25:33.188Z",
		"size": 23767,
		"path": "../public/videos/video-02/frame-103.jpg"
	},
	"/videos/video-02/frame-104.jpg": {
		"type": "image/jpeg",
		"etag": "\"5cf1-AccOAS9CDfGezSwi1pjb9opfN5k\"",
		"mtime": "2026-09-03T13:25:33.201Z",
		"size": 23793,
		"path": "../public/videos/video-02/frame-104.jpg"
	},
	"/videos/video-02/frame-105.jpg": {
		"type": "image/jpeg",
		"etag": "\"5cd3-h9sgYL8YtmRLIcSMztAILa3m3aA\"",
		"mtime": "2026-09-03T13:25:33.213Z",
		"size": 23763,
		"path": "../public/videos/video-02/frame-105.jpg"
	},
	"/videos/video-02/frame-106.jpg": {
		"type": "image/jpeg",
		"etag": "\"5c93-V8AkMTjzoZ9v+j1Xja87ztCYqNk\"",
		"mtime": "2026-09-03T13:25:33.223Z",
		"size": 23699,
		"path": "../public/videos/video-02/frame-106.jpg"
	},
	"/videos/video-02/frame-109.jpg": {
		"type": "image/jpeg",
		"etag": "\"5b1e-n9XWaFrk5nsui+Vr8L2xzDre3Hc\"",
		"mtime": "2026-09-03T13:25:33.260Z",
		"size": 23326,
		"path": "../public/videos/video-02/frame-109.jpg"
	},
	"/videos/video-02/frame-110.jpg": {
		"type": "image/jpeg",
		"etag": "\"5adc-MvBgeAI8yd6mXT2h0a7VPl9VBmw\"",
		"mtime": "2026-09-03T13:25:33.274Z",
		"size": 23260,
		"path": "../public/videos/video-02/frame-110.jpg"
	},
	"/videos/video-02/frame-108.jpg": {
		"type": "image/jpeg",
		"etag": "\"5c29-yWF3xG1mlXM6NWwT0Ps97iOlvdc\"",
		"mtime": "2026-09-03T13:25:33.248Z",
		"size": 23593,
		"path": "../public/videos/video-02/frame-108.jpg"
	},
	"/videos/video-02/frame-107.jpg": {
		"type": "image/jpeg",
		"etag": "\"5c93-V8AkMTjzoZ9v+j1Xja87ztCYqNk\"",
		"mtime": "2026-09-03T13:25:33.237Z",
		"size": 23699,
		"path": "../public/videos/video-02/frame-107.jpg"
	},
	"/videos/video-02/frame-111.jpg": {
		"type": "image/jpeg",
		"etag": "\"5b0c-6lcdfWs/xbrGIMekXQzSTC7FgJM\"",
		"mtime": "2026-09-03T13:25:33.286Z",
		"size": 23308,
		"path": "../public/videos/video-02/frame-111.jpg"
	},
	"/videos/video-02/frame-112.jpg": {
		"type": "image/jpeg",
		"etag": "\"5b0c-6lcdfWs/xbrGIMekXQzSTC7FgJM\"",
		"mtime": "2026-09-03T13:25:33.297Z",
		"size": 23308,
		"path": "../public/videos/video-02/frame-112.jpg"
	},
	"/videos/video-02/frame-113.jpg": {
		"type": "image/jpeg",
		"etag": "\"5c0d-K3S0UWh2wr5RRgP7Bj1dehlYq+0\"",
		"mtime": "2026-09-03T13:25:33.309Z",
		"size": 23565,
		"path": "../public/videos/video-02/frame-113.jpg"
	},
	"/videos/video-02/frame-114.jpg": {
		"type": "image/jpeg",
		"etag": "\"5cf6-tKdzo+ljO3skxTn1QOGHCn/CVi0\"",
		"mtime": "2026-09-03T13:25:33.320Z",
		"size": 23798,
		"path": "../public/videos/video-02/frame-114.jpg"
	},
	"/videos/video-02/frame-115.jpg": {
		"type": "image/jpeg",
		"etag": "\"5d82-BThLFX33YIVpnTpkzqHK66r/BQ8\"",
		"mtime": "2026-09-03T13:25:33.329Z",
		"size": 23938,
		"path": "../public/videos/video-02/frame-115.jpg"
	},
	"/videos/video-02/frame-116.jpg": {
		"type": "image/jpeg",
		"etag": "\"5d78-GTh0mwMAv87BkOI7aVk8VYjX3tk\"",
		"mtime": "2026-09-03T13:25:33.342Z",
		"size": 23928,
		"path": "../public/videos/video-02/frame-116.jpg"
	},
	"/videos/video-02/frame-118.jpg": {
		"type": "image/jpeg",
		"etag": "\"5dbd-VMqKOmH+4XX9+U+Lt1QASHD2baA\"",
		"mtime": "2026-09-03T13:25:33.364Z",
		"size": 23997,
		"path": "../public/videos/video-02/frame-118.jpg"
	},
	"/videos/video-02/frame-117.jpg": {
		"type": "image/jpeg",
		"etag": "\"5d78-GTh0mwMAv87BkOI7aVk8VYjX3tk\"",
		"mtime": "2026-09-03T13:25:33.354Z",
		"size": 23928,
		"path": "../public/videos/video-02/frame-117.jpg"
	},
	"/videos/video-02/frame-119.jpg": {
		"type": "image/jpeg",
		"etag": "\"5d77-03/UwC/EyCUvSjA3+AOkpMGztKw\"",
		"mtime": "2026-09-03T13:25:33.377Z",
		"size": 23927,
		"path": "../public/videos/video-02/frame-119.jpg"
	},
	"/videos/video-02/frame-120.jpg": {
		"type": "image/jpeg",
		"etag": "\"6839-SEFhmqV2XOKvzhfV9bq5XP+V9Cc\"",
		"mtime": "2026-09-03T13:25:33.389Z",
		"size": 26681,
		"path": "../public/videos/video-02/frame-120.jpg"
	},
	"/videos/video-02/frame-121.jpg": {
		"type": "image/jpeg",
		"etag": "\"680c-NaBqg4E+zbQxJaMJm+ojcp1e8vI\"",
		"mtime": "2026-09-03T13:25:33.399Z",
		"size": 26636,
		"path": "../public/videos/video-02/frame-121.jpg"
	},
	"/videos/video-02/frame-122.jpg": {
		"type": "image/jpeg",
		"etag": "\"680c-NaBqg4E+zbQxJaMJm+ojcp1e8vI\"",
		"mtime": "2026-09-03T13:25:33.411Z",
		"size": 26636,
		"path": "../public/videos/video-02/frame-122.jpg"
	},
	"/videos/video-02/frame-123.jpg": {
		"type": "image/jpeg",
		"etag": "\"67a6-K2S9zQcw74xtYBHtIqsFqxT0C0Q\"",
		"mtime": "2026-09-03T13:25:33.423Z",
		"size": 26534,
		"path": "../public/videos/video-02/frame-123.jpg"
	},
	"/videos/video-02/frame-124.jpg": {
		"type": "image/jpeg",
		"etag": "\"679e-sHnhwze2e0rzKr7MApCNOcU5uHM\"",
		"mtime": "2026-09-03T13:25:33.436Z",
		"size": 26526,
		"path": "../public/videos/video-02/frame-124.jpg"
	},
	"/videos/video-02/frame-125.jpg": {
		"type": "image/jpeg",
		"etag": "\"67b7-dsTxicpHe9S58S4NKF2fl6gALP0\"",
		"mtime": "2026-09-03T13:25:33.454Z",
		"size": 26551,
		"path": "../public/videos/video-02/frame-125.jpg"
	},
	"/videos/video-02/frame-126.jpg": {
		"type": "image/jpeg",
		"etag": "\"6778-xlNlBRKRlXS/VSHzUfmuGbMo2JA\"",
		"mtime": "2026-09-03T13:25:33.472Z",
		"size": 26488,
		"path": "../public/videos/video-02/frame-126.jpg"
	},
	"/videos/video-02/frame-127.jpg": {
		"type": "image/jpeg",
		"etag": "\"6778-xlNlBRKRlXS/VSHzUfmuGbMo2JA\"",
		"mtime": "2026-09-03T13:25:33.488Z",
		"size": 26488,
		"path": "../public/videos/video-02/frame-127.jpg"
	},
	"/videos/video-02/frame-128.jpg": {
		"type": "image/jpeg",
		"etag": "\"6742-fOze9GOfth72aYStYCdSi/UYw5M\"",
		"mtime": "2026-09-03T13:25:33.507Z",
		"size": 26434,
		"path": "../public/videos/video-02/frame-128.jpg"
	},
	"/videos/video-02/frame-129.jpg": {
		"type": "image/jpeg",
		"etag": "\"671e-/u32Ivp+RZ3Pw1QnQ263y5ew654\"",
		"mtime": "2026-09-03T13:25:33.525Z",
		"size": 26398,
		"path": "../public/videos/video-02/frame-129.jpg"
	},
	"/videos/video-02/frame-130.jpg": {
		"type": "image/jpeg",
		"etag": "\"66d4-b/EdRnxUa+zNWujmZx+5PnSMVCg\"",
		"mtime": "2026-09-03T13:25:33.547Z",
		"size": 26324,
		"path": "../public/videos/video-02/frame-130.jpg"
	},
	"/videos/video-02/frame-131.jpg": {
		"type": "image/jpeg",
		"etag": "\"66d5-PzoYVSReZaC5j79XWxAXLYlVVdY\"",
		"mtime": "2026-09-03T13:25:33.564Z",
		"size": 26325,
		"path": "../public/videos/video-02/frame-131.jpg"
	},
	"/videos/video-02/frame-132.jpg": {
		"type": "image/jpeg",
		"etag": "\"66d5-PzoYVSReZaC5j79XWxAXLYlVVdY\"",
		"mtime": "2026-09-03T13:25:33.582Z",
		"size": 26325,
		"path": "../public/videos/video-02/frame-132.jpg"
	},
	"/videos/video-02/frame-135.jpg": {
		"type": "image/jpeg",
		"etag": "\"665e-94GjDG8zoEkjAApem5SBgqh44ho\"",
		"mtime": "2026-09-03T13:25:33.633Z",
		"size": 26206,
		"path": "../public/videos/video-02/frame-135.jpg"
	},
	"/videos/video-02/frame-134.jpg": {
		"type": "image/jpeg",
		"etag": "\"66c1-X8e+qpFJOM6FKPWp4ggcbMMnK9Q\"",
		"mtime": "2026-09-03T13:25:33.618Z",
		"size": 26305,
		"path": "../public/videos/video-02/frame-134.jpg"
	},
	"/videos/video-02/frame-133.jpg": {
		"type": "image/jpeg",
		"etag": "\"66d4-ZQIDRdpjJ/OkDcMsoGzwyW4n8Ac\"",
		"mtime": "2026-09-03T13:25:33.600Z",
		"size": 26324,
		"path": "../public/videos/video-02/frame-133.jpg"
	},
	"/videos/video-02/frame-136.jpg": {
		"type": "image/jpeg",
		"etag": "\"6656-mes6fZ+C9+4oSiv84tiFvLO+Md0\"",
		"mtime": "2026-09-03T13:25:33.650Z",
		"size": 26198,
		"path": "../public/videos/video-02/frame-136.jpg"
	},
	"/videos/video-02/frame-137.jpg": {
		"type": "image/jpeg",
		"etag": "\"6656-mes6fZ+C9+4oSiv84tiFvLO+Md0\"",
		"mtime": "2026-09-03T13:25:33.672Z",
		"size": 26198,
		"path": "../public/videos/video-02/frame-137.jpg"
	},
	"/videos/video-02/frame-138.jpg": {
		"type": "image/jpeg",
		"etag": "\"65f6-6IB+Ey3vnhTiQ4HO8EuCuurBmEQ\"",
		"mtime": "2026-09-03T13:25:33.689Z",
		"size": 26102,
		"path": "../public/videos/video-02/frame-138.jpg"
	},
	"/videos/video-02/frame-139.jpg": {
		"type": "image/jpeg",
		"etag": "\"65bd-yivtVMhYwybts4DR6oa2jrpw76c\"",
		"mtime": "2026-09-03T13:25:33.708Z",
		"size": 26045,
		"path": "../public/videos/video-02/frame-139.jpg"
	},
	"/videos/video-02/frame-140.jpg": {
		"type": "image/jpeg",
		"etag": "\"6581-JLVBvkKogZeS0wWBUh/3LLkE8vI\"",
		"mtime": "2026-09-03T13:25:33.726Z",
		"size": 25985,
		"path": "../public/videos/video-02/frame-140.jpg"
	},
	"/videos/video-02/frame-141.jpg": {
		"type": "image/jpeg",
		"etag": "\"6559-GUJyJlt6GtUb5G0HBZxAJVu6GzY\"",
		"mtime": "2026-09-03T13:25:33.746Z",
		"size": 25945,
		"path": "../public/videos/video-02/frame-141.jpg"
	},
	"/videos/video-02/frame-142.jpg": {
		"type": "image/jpeg",
		"etag": "\"6559-GUJyJlt6GtUb5G0HBZxAJVu6GzY\"",
		"mtime": "2026-09-03T13:25:33.765Z",
		"size": 25945,
		"path": "../public/videos/video-02/frame-142.jpg"
	},
	"/videos/video-02/frame-143.jpg": {
		"type": "image/jpeg",
		"etag": "\"651e-3Z5Hpg55uESY8ZD1U4lLEcHww74\"",
		"mtime": "2026-09-03T13:25:33.782Z",
		"size": 25886,
		"path": "../public/videos/video-02/frame-143.jpg"
	},
	"/videos/video-02/frame-144.jpg": {
		"type": "image/jpeg",
		"etag": "\"651b-Epo1UqK9qgP9/vnsbc8orICkaEA\"",
		"mtime": "2026-09-03T13:25:33.801Z",
		"size": 25883,
		"path": "../public/videos/video-02/frame-144.jpg"
	},
	"/videos/video-02/frame-145.jpg": {
		"type": "image/jpeg",
		"etag": "\"64a0-POKdHN6vCaPzFky9zNDdmsHHgwU\"",
		"mtime": "2026-09-03T13:25:33.819Z",
		"size": 25760,
		"path": "../public/videos/video-02/frame-145.jpg"
	},
	"/videos/video-02/frame-147.jpg": {
		"type": "image/jpeg",
		"etag": "\"64a4-az1lrXF2NYJQdJeV5AkQ4Dwdpbs\"",
		"mtime": "2026-09-03T13:25:33.853Z",
		"size": 25764,
		"path": "../public/videos/video-02/frame-147.jpg"
	},
	"/videos/video-02/frame-148.jpg": {
		"type": "image/jpeg",
		"etag": "\"6448-VL1x/rEHHbYK3AYAUJ7YaqRoucg\"",
		"mtime": "2026-09-03T13:25:33.870Z",
		"size": 25672,
		"path": "../public/videos/video-02/frame-148.jpg"
	},
	"/videos/video-02/frame-149.jpg": {
		"type": "image/jpeg",
		"etag": "\"63f2-c7TK+U2+WX69GcjcJQyIvPiPi30\"",
		"mtime": "2026-09-03T13:25:33.888Z",
		"size": 25586,
		"path": "../public/videos/video-02/frame-149.jpg"
	},
	"/videos/video-02/frame-146.jpg": {
		"type": "image/jpeg",
		"etag": "\"64a4-az1lrXF2NYJQdJeV5AkQ4Dwdpbs\"",
		"mtime": "2026-09-03T13:25:33.837Z",
		"size": 25764,
		"path": "../public/videos/video-02/frame-146.jpg"
	},
	"/videos/video-02/frame-150.jpg": {
		"type": "image/jpeg",
		"etag": "\"63e8-UGX7oNSoML4k9F/sbMI2F3P7DLg\"",
		"mtime": "2026-09-03T13:25:33.907Z",
		"size": 25576,
		"path": "../public/videos/video-02/frame-150.jpg"
	},
	"/videos/video-02/frame-151.jpg": {
		"type": "image/jpeg",
		"etag": "\"6387-IpQx6jd0l2Zi5dqqWsaQ6nOaw6s\"",
		"mtime": "2026-09-03T13:25:33.925Z",
		"size": 25479,
		"path": "../public/videos/video-02/frame-151.jpg"
	},
	"/videos/video-02/frame-152.jpg": {
		"type": "image/jpeg",
		"etag": "\"6387-IpQx6jd0l2Zi5dqqWsaQ6nOaw6s\"",
		"mtime": "2026-09-03T13:25:33.942Z",
		"size": 25479,
		"path": "../public/videos/video-02/frame-152.jpg"
	},
	"/videos/video-02/frame-153.jpg": {
		"type": "image/jpeg",
		"etag": "\"6369-cA5EibvaIsNh1iJ/UO1CCRssN9A\"",
		"mtime": "2026-09-03T13:25:33.957Z",
		"size": 25449,
		"path": "../public/videos/video-02/frame-153.jpg"
	},
	"/videos/video-02/frame-154.jpg": {
		"type": "image/jpeg",
		"etag": "\"633b-jb4MVqzIx82U90q+s5iIpX5iTCc\"",
		"mtime": "2026-09-03T13:25:33.977Z",
		"size": 25403,
		"path": "../public/videos/video-02/frame-154.jpg"
	},
	"/videos/video-02/frame-155.jpg": {
		"type": "image/jpeg",
		"etag": "\"62c5-TBpPFkllIJEDpacVjKEWt+nz5q8\"",
		"mtime": "2026-09-03T13:25:33.994Z",
		"size": 25285,
		"path": "../public/videos/video-02/frame-155.jpg"
	},
	"/videos/video-02/frame-156.jpg": {
		"type": "image/jpeg",
		"etag": "\"61b0-ulRAEiNdzC0ChfkZVr2twkbTCmU\"",
		"mtime": "2026-09-03T13:25:34.010Z",
		"size": 25008,
		"path": "../public/videos/video-02/frame-156.jpg"
	},
	"/videos/video-02/frame-157.jpg": {
		"type": "image/jpeg",
		"etag": "\"61b0-ulRAEiNdzC0ChfkZVr2twkbTCmU\"",
		"mtime": "2026-09-03T13:25:34.028Z",
		"size": 25008,
		"path": "../public/videos/video-02/frame-157.jpg"
	},
	"/videos/video-02/frame-158.jpg": {
		"type": "image/jpeg",
		"etag": "\"6118-nv/FUxMxUVw2WfhgjexbAeiW7HY\"",
		"mtime": "2026-09-03T13:25:34.047Z",
		"size": 24856,
		"path": "../public/videos/video-02/frame-158.jpg"
	},
	"/videos/video-02/frame-161.jpg": {
		"type": "image/jpeg",
		"etag": "\"60e2-0tOvasNBTE7bbpLtFiOsJRXopbY\"",
		"mtime": "2026-09-03T13:25:34.098Z",
		"size": 24802,
		"path": "../public/videos/video-02/frame-161.jpg"
	},
	"/videos/video-02/frame-159.jpg": {
		"type": "image/jpeg",
		"etag": "\"5fa9-KTWkp7N6LLQmagl5UtFu0lzwJYA\"",
		"mtime": "2026-09-03T13:25:34.066Z",
		"size": 24489,
		"path": "../public/videos/video-02/frame-159.jpg"
	},
	"/videos/video-02/frame-162.jpg": {
		"type": "image/jpeg",
		"etag": "\"60e2-0tOvasNBTE7bbpLtFiOsJRXopbY\"",
		"mtime": "2026-09-03T13:25:34.115Z",
		"size": 24802,
		"path": "../public/videos/video-02/frame-162.jpg"
	},
	"/videos/video-02/frame-163.jpg": {
		"type": "image/jpeg",
		"etag": "\"60ce-/lyhXLbXBZzpQdcg58F9tz6CPug\"",
		"mtime": "2026-09-03T13:25:34.133Z",
		"size": 24782,
		"path": "../public/videos/video-02/frame-163.jpg"
	},
	"/videos/video-02/frame-167.jpg": {
		"type": "image/jpeg",
		"etag": "\"609b-yVD2XS7pe9s1znP8NH0IPIdUn4o\"",
		"mtime": "2026-09-03T13:25:34.204Z",
		"size": 24731,
		"path": "../public/videos/video-02/frame-167.jpg"
	},
	"/videos/video-02/frame-164.jpg": {
		"type": "image/jpeg",
		"etag": "\"607f-AveZON2tZpWJnHMwqgo+JyecP14\"",
		"mtime": "2026-09-03T13:25:34.152Z",
		"size": 24703,
		"path": "../public/videos/video-02/frame-164.jpg"
	},
	"/videos/video-02/frame-168.jpg": {
		"type": "image/jpeg",
		"etag": "\"600c-CQx5qz2Fjeo9rPV6utFk6Ufxz+k\"",
		"mtime": "2026-09-03T13:25:34.222Z",
		"size": 24588,
		"path": "../public/videos/video-02/frame-168.jpg"
	},
	"/videos/video-02/frame-166.jpg": {
		"type": "image/jpeg",
		"etag": "\"609b-yVD2XS7pe9s1znP8NH0IPIdUn4o\"",
		"mtime": "2026-09-03T13:25:34.184Z",
		"size": 24731,
		"path": "../public/videos/video-02/frame-166.jpg"
	},
	"/videos/video-02/frame-165.jpg": {
		"type": "image/jpeg",
		"etag": "\"612d-kTCNffVbFAt7zX5skB1t+IPKYfQ\"",
		"mtime": "2026-09-03T13:25:34.169Z",
		"size": 24877,
		"path": "../public/videos/video-02/frame-165.jpg"
	},
	"/videos/video-02/frame-160.jpg": {
		"type": "image/jpeg",
		"etag": "\"5fef-d6DNnEg8jRzHK0zMeHgOnT3ftA8\"",
		"mtime": "2026-09-03T13:25:34.082Z",
		"size": 24559,
		"path": "../public/videos/video-02/frame-160.jpg"
	},
	"/videos/video-02/frame-169.jpg": {
		"type": "image/jpeg",
		"etag": "\"5f5a-NoiBPNUoM74lq37XmNG4JGNBs/U\"",
		"mtime": "2026-09-03T13:25:34.241Z",
		"size": 24410,
		"path": "../public/videos/video-02/frame-169.jpg"
	},
	"/videos/video-02/frame-171.jpg": {
		"type": "image/jpeg",
		"etag": "\"5fcf-Paei7Rq/Z3LJUrwnvGxCicKSR9U\"",
		"mtime": "2026-09-03T13:25:34.273Z",
		"size": 24527,
		"path": "../public/videos/video-02/frame-171.jpg"
	},
	"/videos/video-02/frame-170.jpg": {
		"type": "image/jpeg",
		"etag": "\"5f5e-1qh4F/Q+CYqrscu+5A9t37UXvBo\"",
		"mtime": "2026-09-03T13:25:34.257Z",
		"size": 24414,
		"path": "../public/videos/video-02/frame-170.jpg"
	},
	"/videos/video-02/frame-173.jpg": {
		"type": "image/jpeg",
		"etag": "\"5fb0-T1sNlBhURszC6IaACjMoW19RIsU\"",
		"mtime": "2026-09-03T13:25:34.312Z",
		"size": 24496,
		"path": "../public/videos/video-02/frame-173.jpg"
	},
	"/videos/video-02/frame-174.jpg": {
		"type": "image/jpeg",
		"etag": "\"6018-Hci1UOzYE3A5tVrDmBe+Dl6tAlI\"",
		"mtime": "2026-09-03T13:25:34.330Z",
		"size": 24600,
		"path": "../public/videos/video-02/frame-174.jpg"
	},
	"/videos/video-02/frame-172.jpg": {
		"type": "image/jpeg",
		"etag": "\"5fcf-Paei7Rq/Z3LJUrwnvGxCicKSR9U\"",
		"mtime": "2026-09-03T13:25:34.292Z",
		"size": 24527,
		"path": "../public/videos/video-02/frame-172.jpg"
	},
	"/videos/video-02/frame-176.jpg": {
		"type": "image/jpeg",
		"etag": "\"5fd4-HJVtnXD6R2jpnSZJy7LtBUjOxM4\"",
		"mtime": "2026-09-03T13:25:34.368Z",
		"size": 24532,
		"path": "../public/videos/video-02/frame-176.jpg"
	},
	"/videos/video-02/frame-175.jpg": {
		"type": "image/jpeg",
		"etag": "\"60a0-K2IKHrxje4UBTOTNfTLmL0VTJF0\"",
		"mtime": "2026-09-03T13:25:34.348Z",
		"size": 24736,
		"path": "../public/videos/video-02/frame-175.jpg"
	},
	"/videos/video-02/frame-177.jpg": {
		"type": "image/jpeg",
		"etag": "\"5fd4-HJVtnXD6R2jpnSZJy7LtBUjOxM4\"",
		"mtime": "2026-09-03T13:25:34.387Z",
		"size": 24532,
		"path": "../public/videos/video-02/frame-177.jpg"
	},
	"/videos/video-02/frame-178.jpg": {
		"type": "image/jpeg",
		"etag": "\"5ff0-iBk9iFLf5NTn1Y3dbkIy3J/KAtk\"",
		"mtime": "2026-09-03T13:25:34.404Z",
		"size": 24560,
		"path": "../public/videos/video-02/frame-178.jpg"
	},
	"/videos/video-02/frame-179.jpg": {
		"type": "image/jpeg",
		"etag": "\"6057-rQUofwoyKR2rtQp+Z6jEl4g/rM0\"",
		"mtime": "2026-09-03T13:25:34.421Z",
		"size": 24663,
		"path": "../public/videos/video-02/frame-179.jpg"
	},
	"/videos/video-02/frame-180.jpg": {
		"type": "image/jpeg",
		"etag": "\"7249-XOvKuTvgZnlNfzRO//XYJLEimSc\"",
		"mtime": "2026-09-03T13:25:34.438Z",
		"size": 29257,
		"path": "../public/videos/video-02/frame-180.jpg"
	},
	"/videos/video-02/frame-181.jpg": {
		"type": "image/jpeg",
		"etag": "\"72fb-HF5/hfAkGPfJG21WNKkZAO2JXkY\"",
		"mtime": "2026-09-03T13:25:34.459Z",
		"size": 29435,
		"path": "../public/videos/video-02/frame-181.jpg"
	},
	"/videos/video-02/frame-182.jpg": {
		"type": "image/jpeg",
		"etag": "\"72fb-HF5/hfAkGPfJG21WNKkZAO2JXkY\"",
		"mtime": "2026-09-03T13:25:34.476Z",
		"size": 29435,
		"path": "../public/videos/video-02/frame-182.jpg"
	},
	"/videos/video-02/frame-183.jpg": {
		"type": "image/jpeg",
		"etag": "\"72b3-mkgS8jR5lItpajua9gewczlHoMY\"",
		"mtime": "2026-09-03T13:25:34.493Z",
		"size": 29363,
		"path": "../public/videos/video-02/frame-183.jpg"
	},
	"/videos/video-02/frame-185.jpg": {
		"type": "image/jpeg",
		"etag": "\"73f0-xxKAh+LxdZ5M92Jide+yWV6KIWU\"",
		"mtime": "2026-09-03T13:25:34.527Z",
		"size": 29680,
		"path": "../public/videos/video-02/frame-185.jpg"
	},
	"/videos/video-02/frame-184.jpg": {
		"type": "image/jpeg",
		"etag": "\"735b-TDdIJh/hCAdo4e+J4qmEx3o+4AM\"",
		"mtime": "2026-09-03T13:25:34.509Z",
		"size": 29531,
		"path": "../public/videos/video-02/frame-184.jpg"
	},
	"/videos/video-02/frame-187.jpg": {
		"type": "image/jpeg",
		"etag": "\"72d8-ixBoJJcVKNukJvxN0eqWkTm5LO8\"",
		"mtime": "2026-09-03T13:25:34.560Z",
		"size": 29400,
		"path": "../public/videos/video-02/frame-187.jpg"
	},
	"/videos/video-02/frame-186.jpg": {
		"type": "image/jpeg",
		"etag": "\"72d8-ixBoJJcVKNukJvxN0eqWkTm5LO8\"",
		"mtime": "2026-09-03T13:25:34.542Z",
		"size": 29400,
		"path": "../public/videos/video-02/frame-186.jpg"
	},
	"/videos/video-02/frame-189.jpg": {
		"type": "image/jpeg",
		"etag": "\"7211-netxbnAQ//qHGnW22wccgllRP+M\"",
		"mtime": "2026-09-03T13:25:34.610Z",
		"size": 29201,
		"path": "../public/videos/video-02/frame-189.jpg"
	},
	"/videos/video-02/frame-190.jpg": {
		"type": "image/jpeg",
		"etag": "\"72d3-Py8HN1loQ5t/ZoEsJ7eyK5r2QQ8\"",
		"mtime": "2026-09-03T13:25:34.634Z",
		"size": 29395,
		"path": "../public/videos/video-02/frame-190.jpg"
	},
	"/videos/video-02/frame-188.jpg": {
		"type": "image/jpeg",
		"etag": "\"7282-E6kZhIK4uFJEiFVdU5ojmMJkpAs\"",
		"mtime": "2026-09-03T13:25:34.586Z",
		"size": 29314,
		"path": "../public/videos/video-02/frame-188.jpg"
	},
	"/videos/video-02/frame-191.jpg": {
		"type": "image/jpeg",
		"etag": "\"7263-sllm3J+fK03m75gtP11qDSvlE+U\"",
		"mtime": "2026-09-03T13:25:34.656Z",
		"size": 29283,
		"path": "../public/videos/video-02/frame-191.jpg"
	},
	"/videos/video-02/frame-192.jpg": {
		"type": "image/jpeg",
		"etag": "\"7263-sllm3J+fK03m75gtP11qDSvlE+U\"",
		"mtime": "2026-09-03T13:25:34.677Z",
		"size": 29283,
		"path": "../public/videos/video-02/frame-192.jpg"
	},
	"/videos/video-02/frame-193.jpg": {
		"type": "image/jpeg",
		"etag": "\"7236-q8ps9da2alWXVxDTmLyaZ1FV6kI\"",
		"mtime": "2026-09-03T13:25:34.698Z",
		"size": 29238,
		"path": "../public/videos/video-02/frame-193.jpg"
	},
	"/videos/video-02/frame-194.jpg": {
		"type": "image/jpeg",
		"etag": "\"710b-UFTPNWGMD4DRMXbVahiyQUDhcRA\"",
		"mtime": "2026-09-03T13:25:34.718Z",
		"size": 28939,
		"path": "../public/videos/video-02/frame-194.jpg"
	},
	"/videos/video-02/frame-196.jpg": {
		"type": "image/jpeg",
		"etag": "\"6f52-25aE2lHP19d0zIqHdvPiSeAQZqw\"",
		"mtime": "2026-09-03T13:25:34.746Z",
		"size": 28498,
		"path": "../public/videos/video-02/frame-196.jpg"
	},
	"/videos/video-02/frame-195.jpg": {
		"type": "image/jpeg",
		"etag": "\"716f-zUFwRrzSx9RRot6QYEbrq8N06lE\"",
		"mtime": "2026-09-03T13:25:34.734Z",
		"size": 29039,
		"path": "../public/videos/video-02/frame-195.jpg"
	},
	"/videos/video-02/frame-198.jpg": {
		"type": "image/jpeg",
		"etag": "\"6dad-52Fpd0hNCo2RcU2xgmK1FUxluK8\"",
		"mtime": "2026-09-03T13:25:34.786Z",
		"size": 28077,
		"path": "../public/videos/video-02/frame-198.jpg"
	},
	"/videos/video-02/frame-197.jpg": {
		"type": "image/jpeg",
		"etag": "\"6f52-25aE2lHP19d0zIqHdvPiSeAQZqw\"",
		"mtime": "2026-09-03T13:25:34.765Z",
		"size": 28498,
		"path": "../public/videos/video-02/frame-197.jpg"
	},
	"/videos/video-02/frame-199.jpg": {
		"type": "image/jpeg",
		"etag": "\"6d4b-tvr+w8qnpYYvicbHle1Uhmzr39w\"",
		"mtime": "2026-09-03T13:25:34.797Z",
		"size": 27979,
		"path": "../public/videos/video-02/frame-199.jpg"
	},
	"/videos/video-02/frame-200.jpg": {
		"type": "image/jpeg",
		"etag": "\"6db5-YMW6oyTylHSuleibZar7flNmlfg\"",
		"mtime": "2026-09-03T13:25:34.806Z",
		"size": 28085,
		"path": "../public/videos/video-02/frame-200.jpg"
	},
	"/videos/video-02/frame-201.jpg": {
		"type": "image/jpeg",
		"etag": "\"6f1a-xZSN5XOxkiU0pTF72OYx1nwtXKQ\"",
		"mtime": "2026-09-03T13:25:34.817Z",
		"size": 28442,
		"path": "../public/videos/video-02/frame-201.jpg"
	},
	"/videos/video-02/frame-202.jpg": {
		"type": "image/jpeg",
		"etag": "\"6f1a-xZSN5XOxkiU0pTF72OYx1nwtXKQ\"",
		"mtime": "2026-09-03T13:25:34.828Z",
		"size": 28442,
		"path": "../public/videos/video-02/frame-202.jpg"
	},
	"/videos/video-02/frame-203.jpg": {
		"type": "image/jpeg",
		"etag": "\"70a5-rV0dFf3uRuWg+lDcbxBGB0YWwn0\"",
		"mtime": "2026-09-03T13:25:34.839Z",
		"size": 28837,
		"path": "../public/videos/video-02/frame-203.jpg"
	},
	"/videos/video-02/frame-204.jpg": {
		"type": "image/jpeg",
		"etag": "\"71ec-x6UKHZhKYps+zavRj2HL8TuMpac\"",
		"mtime": "2026-09-03T13:25:34.849Z",
		"size": 29164,
		"path": "../public/videos/video-02/frame-204.jpg"
	},
	"/videos/video-02/frame-206.jpg": {
		"type": "image/jpeg",
		"etag": "\"7275-rL16//1wLL505DS+HFkTOJhvmp0\"",
		"mtime": "2026-09-03T13:25:34.869Z",
		"size": 29301,
		"path": "../public/videos/video-02/frame-206.jpg"
	},
	"/videos/video-02/frame-205.jpg": {
		"type": "image/jpeg",
		"etag": "\"72c3-NMh6LnCqFBM6L7diHtQoaON1ZRs\"",
		"mtime": "2026-09-03T13:25:34.859Z",
		"size": 29379,
		"path": "../public/videos/video-02/frame-205.jpg"
	},
	"/videos/video-02/frame-207.jpg": {
		"type": "image/jpeg",
		"etag": "\"7275-rL16//1wLL505DS+HFkTOJhvmp0\"",
		"mtime": "2026-09-03T13:25:34.879Z",
		"size": 29301,
		"path": "../public/videos/video-02/frame-207.jpg"
	},
	"/videos/video-02/frame-209.jpg": {
		"type": "image/jpeg",
		"etag": "\"71c0-ElUjxiRHttILBjn8aYGP//pIqHY\"",
		"mtime": "2026-09-03T13:25:34.899Z",
		"size": 29120,
		"path": "../public/videos/video-02/frame-209.jpg"
	},
	"/videos/video-02/frame-208.jpg": {
		"type": "image/jpeg",
		"etag": "\"71a3-wNqUaGD88bUpboEwJ0L/nYPppv4\"",
		"mtime": "2026-09-03T13:25:34.888Z",
		"size": 29091,
		"path": "../public/videos/video-02/frame-208.jpg"
	},
	"/videos/video-02/frame-210.jpg": {
		"type": "image/jpeg",
		"etag": "\"706e-wDKmhi+rP1TFhxOQzk6xtuL7Bfk\"",
		"mtime": "2026-09-03T13:25:34.911Z",
		"size": 28782,
		"path": "../public/videos/video-02/frame-210.jpg"
	},
	"/videos/video-02/frame-211.jpg": {
		"type": "image/jpeg",
		"etag": "\"7057-QJ2U3Co3dqILV0Wf0P34Wl8T5g4\"",
		"mtime": "2026-09-03T13:25:34.922Z",
		"size": 28759,
		"path": "../public/videos/video-02/frame-211.jpg"
	},
	"/videos/video-02/frame-212.jpg": {
		"type": "image/jpeg",
		"etag": "\"7057-QJ2U3Co3dqILV0Wf0P34Wl8T5g4\"",
		"mtime": "2026-09-03T13:25:34.932Z",
		"size": 28759,
		"path": "../public/videos/video-02/frame-212.jpg"
	},
	"/videos/video-02/frame-213.jpg": {
		"type": "image/jpeg",
		"etag": "\"7109-XCqTon/b1yntQdgZYUcSzGLV7Tw\"",
		"mtime": "2026-09-03T13:25:34.944Z",
		"size": 28937,
		"path": "../public/videos/video-02/frame-213.jpg"
	},
	"/videos/video-02/frame-214.jpg": {
		"type": "image/jpeg",
		"etag": "\"71d2-ZmDcXpbR58uMWkgtsWco6lx8MJs\"",
		"mtime": "2026-09-03T13:25:34.953Z",
		"size": 29138,
		"path": "../public/videos/video-02/frame-214.jpg"
	},
	"/videos/video-02/frame-215.jpg": {
		"type": "image/jpeg",
		"etag": "\"7340-WgKRX7Y7ixwuOnsPKK9Z/wQFUmc\"",
		"mtime": "2026-09-03T13:25:34.963Z",
		"size": 29504,
		"path": "../public/videos/video-02/frame-215.jpg"
	},
	"/videos/video-02/frame-217.jpg": {
		"type": "image/jpeg",
		"etag": "\"7266-8xierIABuOWScg6gSizh14W7xwA\"",
		"mtime": "2026-09-03T13:25:34.985Z",
		"size": 29286,
		"path": "../public/videos/video-02/frame-217.jpg"
	},
	"/videos/video-02/frame-216.jpg": {
		"type": "image/jpeg",
		"etag": "\"7266-8xierIABuOWScg6gSizh14W7xwA\"",
		"mtime": "2026-09-03T13:25:34.974Z",
		"size": 29286,
		"path": "../public/videos/video-02/frame-216.jpg"
	},
	"/videos/video-02/frame-218.jpg": {
		"type": "image/jpeg",
		"etag": "\"722d-AAdsxL8j0xdHC/sQSBdois1tEfE\"",
		"mtime": "2026-09-03T13:25:34.996Z",
		"size": 29229,
		"path": "../public/videos/video-02/frame-218.jpg"
	},
	"/videos/video-02/frame-219.jpg": {
		"type": "image/jpeg",
		"etag": "\"725c-KODJPqonUlosgfcU4qFnvmBhKIQ\"",
		"mtime": "2026-09-03T13:25:35.007Z",
		"size": 29276,
		"path": "../public/videos/video-02/frame-219.jpg"
	},
	"/videos/video-02/frame-220.jpg": {
		"type": "image/jpeg",
		"etag": "\"7585-v92T5SR7sqUebRsfYt/4R1UHJ1g\"",
		"mtime": "2026-09-03T13:25:35.018Z",
		"size": 30085,
		"path": "../public/videos/video-02/frame-220.jpg"
	},
	"/videos/video-02/frame-222.jpg": {
		"type": "image/jpeg",
		"etag": "\"7581-pdOQGDHle2ZgcQjRQlckk0UhKKg\"",
		"mtime": "2026-09-03T13:25:35.041Z",
		"size": 30081,
		"path": "../public/videos/video-02/frame-222.jpg"
	},
	"/videos/video-02/frame-221.jpg": {
		"type": "image/jpeg",
		"etag": "\"7581-pdOQGDHle2ZgcQjRQlckk0UhKKg\"",
		"mtime": "2026-09-03T13:25:35.030Z",
		"size": 30081,
		"path": "../public/videos/video-02/frame-221.jpg"
	},
	"/videos/video-02/frame-223.jpg": {
		"type": "image/jpeg",
		"etag": "\"75a3-wzZ3u9e9Y40ddjhYh41XRS6gfZc\"",
		"mtime": "2026-09-03T13:25:35.050Z",
		"size": 30115,
		"path": "../public/videos/video-02/frame-223.jpg"
	},
	"/videos/video-02/frame-224.jpg": {
		"type": "image/jpeg",
		"etag": "\"75d5-o5wL8buU/Cy+zUgAB8sAKReTDsA\"",
		"mtime": "2026-09-03T13:25:35.062Z",
		"size": 30165,
		"path": "../public/videos/video-02/frame-224.jpg"
	},
	"/videos/video-02/frame-225.jpg": {
		"type": "image/jpeg",
		"etag": "\"7649-bFWHATTxPhAJCkCmAjMCx+Kdu6M\"",
		"mtime": "2026-09-03T13:25:35.074Z",
		"size": 30281,
		"path": "../public/videos/video-02/frame-225.jpg"
	},
	"/videos/video-02/frame-226.jpg": {
		"type": "image/jpeg",
		"etag": "\"73e9-AE5OTr0zb36+zQTNxCmXt23FtZI\"",
		"mtime": "2026-09-03T13:25:35.086Z",
		"size": 29673,
		"path": "../public/videos/video-02/frame-226.jpg"
	},
	"/videos/video-02/frame-227.jpg": {
		"type": "image/jpeg",
		"etag": "\"73e9-AE5OTr0zb36+zQTNxCmXt23FtZI\"",
		"mtime": "2026-09-03T13:25:35.099Z",
		"size": 29673,
		"path": "../public/videos/video-02/frame-227.jpg"
	},
	"/videos/video-02/frame-229.jpg": {
		"type": "image/jpeg",
		"etag": "\"7253-xwVeA52YajJ1uWR6/uyArSaGsjM\"",
		"mtime": "2026-09-03T13:25:35.124Z",
		"size": 29267,
		"path": "../public/videos/video-02/frame-229.jpg"
	},
	"/videos/video-02/frame-228.jpg": {
		"type": "image/jpeg",
		"etag": "\"732d-VmG3ga1voGGJOShE+tqEpCWkDr4\"",
		"mtime": "2026-09-03T13:25:35.110Z",
		"size": 29485,
		"path": "../public/videos/video-02/frame-228.jpg"
	},
	"/videos/video-02/frame-230.jpg": {
		"type": "image/jpeg",
		"etag": "\"7422-sewUMJkI69ag+FwP0EdMKXQAMNY\"",
		"mtime": "2026-09-03T13:25:35.144Z",
		"size": 29730,
		"path": "../public/videos/video-02/frame-230.jpg"
	},
	"/videos/video-02/frame-231.jpg": {
		"type": "image/jpeg",
		"etag": "\"74a9-Kk9kZThyx4nbvvKe1QpRgtS9XtQ\"",
		"mtime": "2026-09-03T13:25:35.164Z",
		"size": 29865,
		"path": "../public/videos/video-02/frame-231.jpg"
	},
	"/videos/video-02/frame-232.jpg": {
		"type": "image/jpeg",
		"etag": "\"74a9-Kk9kZThyx4nbvvKe1QpRgtS9XtQ\"",
		"mtime": "2026-09-03T13:25:35.182Z",
		"size": 29865,
		"path": "../public/videos/video-02/frame-232.jpg"
	},
	"/videos/video-02/frame-234.jpg": {
		"type": "image/jpeg",
		"etag": "\"7482-8vk0/ymYg39/bE2wFB9WHQBwKis\"",
		"mtime": "2026-09-03T13:25:35.219Z",
		"size": 29826,
		"path": "../public/videos/video-02/frame-234.jpg"
	},
	"/videos/video-02/frame-233.jpg": {
		"type": "image/jpeg",
		"etag": "\"7490-nnYvnqmkXb2T9wqDXkdyFLeh960\"",
		"mtime": "2026-09-03T13:25:35.199Z",
		"size": 29840,
		"path": "../public/videos/video-02/frame-233.jpg"
	},
	"/videos/video-02/frame-235.jpg": {
		"type": "image/jpeg",
		"etag": "\"750b-MGUvZjsyYoXu2A3q44HlB3xCZnA\"",
		"mtime": "2026-09-03T13:25:35.244Z",
		"size": 29963,
		"path": "../public/videos/video-02/frame-235.jpg"
	},
	"/videos/video-02/frame-236.jpg": {
		"type": "image/jpeg",
		"etag": "\"73a8-n5qyOEKSopeO6dIm1bnxOZ0p+eg\"",
		"mtime": "2026-09-03T13:25:35.268Z",
		"size": 29608,
		"path": "../public/videos/video-02/frame-236.jpg"
	},
	"/videos/video-02/frame-237.jpg": {
		"type": "image/jpeg",
		"etag": "\"73a8-n5qyOEKSopeO6dIm1bnxOZ0p+eg\"",
		"mtime": "2026-09-03T13:25:35.292Z",
		"size": 29608,
		"path": "../public/videos/video-02/frame-237.jpg"
	},
	"/videos/video-02/frame-238.jpg": {
		"type": "image/jpeg",
		"etag": "\"72f2-OqyO/IiT5ORO9PGVPWA69zm8dLY\"",
		"mtime": "2026-09-03T13:25:35.315Z",
		"size": 29426,
		"path": "../public/videos/video-02/frame-238.jpg"
	},
	"/videos/video-02/frame-239.jpg": {
		"type": "image/jpeg",
		"etag": "\"7313-ho/mWArNcgMVAK92KcM94yDj1Wg\"",
		"mtime": "2026-09-03T13:25:35.345Z",
		"size": 29459,
		"path": "../public/videos/video-02/frame-239.jpg"
	},
	"/videos/video-02/frame-242.jpg": {
		"type": "image/jpeg",
		"etag": "\"4efc-DfnQXIiEU4U2O3MFEqSpwYPEsuY\"",
		"mtime": "2026-09-03T13:25:35.409Z",
		"size": 20220,
		"path": "../public/videos/video-02/frame-242.jpg"
	},
	"/videos/video-02/frame-243.jpg": {
		"type": "image/jpeg",
		"etag": "\"4f58-IK70CwHq3DUu8Vo3JRXdOsyOrHY\"",
		"mtime": "2026-09-03T13:25:35.428Z",
		"size": 20312,
		"path": "../public/videos/video-02/frame-243.jpg"
	},
	"/videos/video-02/frame-240.jpg": {
		"type": "image/jpeg",
		"etag": "\"4e03-9NG3cBpQjb9L1WFM0NBp+JJ+dxM\"",
		"mtime": "2026-09-03T13:25:35.364Z",
		"size": 19971,
		"path": "../public/videos/video-02/frame-240.jpg"
	},
	"/videos/video-02/frame-241.jpg": {
		"type": "image/jpeg",
		"etag": "\"4efc-DfnQXIiEU4U2O3MFEqSpwYPEsuY\"",
		"mtime": "2026-09-03T13:25:35.385Z",
		"size": 20220,
		"path": "../public/videos/video-02/frame-241.jpg"
	},
	"/videos/video-02/frame-244.jpg": {
		"type": "image/jpeg",
		"etag": "\"4f4f-VEeoPQeQsVkS9oA92ZttqKM0x94\"",
		"mtime": "2026-09-03T13:25:35.447Z",
		"size": 20303,
		"path": "../public/videos/video-02/frame-244.jpg"
	},
	"/videos/video-02/frame-245.jpg": {
		"type": "image/jpeg",
		"etag": "\"5019-Q+qwsdNgaHHSaCI/1HCk/DC7aYU\"",
		"mtime": "2026-09-03T13:25:35.471Z",
		"size": 20505,
		"path": "../public/videos/video-02/frame-245.jpg"
	},
	"/videos/video-02/frame-248.jpg": {
		"type": "image/jpeg",
		"etag": "\"5011-KReoSOuP3w+uOzGGBtkfFZhckTg\"",
		"mtime": "2026-09-03T13:25:35.528Z",
		"size": 20497,
		"path": "../public/videos/video-02/frame-248.jpg"
	},
	"/videos/video-02/frame-247.jpg": {
		"type": "image/jpeg",
		"etag": "\"500f-RjtNq374EdyaFupdlXcKoFzwwxo\"",
		"mtime": "2026-09-03T13:25:35.511Z",
		"size": 20495,
		"path": "../public/videos/video-02/frame-247.jpg"
	},
	"/videos/video-02/frame-246.jpg": {
		"type": "image/jpeg",
		"etag": "\"500f-RjtNq374EdyaFupdlXcKoFzwwxo\"",
		"mtime": "2026-09-03T13:25:35.491Z",
		"size": 20495,
		"path": "../public/videos/video-02/frame-246.jpg"
	},
	"/videos/video-02/frame-249.jpg": {
		"type": "image/jpeg",
		"etag": "\"4fe3-v04qs6MiDGxPgcitctTpl6s2Ahc\"",
		"mtime": "2026-09-03T13:25:35.552Z",
		"size": 20451,
		"path": "../public/videos/video-02/frame-249.jpg"
	},
	"/videos/video-02/frame-250.jpg": {
		"type": "image/jpeg",
		"etag": "\"50c2-WX4QY29XXGMn8en8ax2W1+hXsWs\"",
		"mtime": "2026-09-03T13:25:35.575Z",
		"size": 20674,
		"path": "../public/videos/video-02/frame-250.jpg"
	},
	"/videos/video-02/frame-252.jpg": {
		"type": "image/jpeg",
		"etag": "\"508f-HgfLkbre8ah3oq9b+VyOGYbACxc\"",
		"mtime": "2026-09-03T13:25:35.616Z",
		"size": 20623,
		"path": "../public/videos/video-02/frame-252.jpg"
	},
	"/videos/video-02/frame-251.jpg": {
		"type": "image/jpeg",
		"etag": "\"508f-HgfLkbre8ah3oq9b+VyOGYbACxc\"",
		"mtime": "2026-09-03T13:25:35.596Z",
		"size": 20623,
		"path": "../public/videos/video-02/frame-251.jpg"
	},
	"/videos/video-02/frame-253.jpg": {
		"type": "image/jpeg",
		"etag": "\"5172-kBvzRSp1Q+myuh4gVuf6BgiaYPM\"",
		"mtime": "2026-09-03T13:25:35.639Z",
		"size": 20850,
		"path": "../public/videos/video-02/frame-253.jpg"
	},
	"/videos/video-02/frame-254.jpg": {
		"type": "image/jpeg",
		"etag": "\"516b-tDwbhPOz38RQ1YbsSkF4utru9gw\"",
		"mtime": "2026-09-03T13:25:35.659Z",
		"size": 20843,
		"path": "../public/videos/video-02/frame-254.jpg"
	},
	"/videos/video-02/frame-255.jpg": {
		"type": "image/jpeg",
		"etag": "\"52f3-YH/9PDBFkOyxlEjTItqubvAe1eo\"",
		"mtime": "2026-09-03T13:25:35.678Z",
		"size": 21235,
		"path": "../public/videos/video-02/frame-255.jpg"
	},
	"/videos/video-02/frame-256.jpg": {
		"type": "image/jpeg",
		"etag": "\"554a-+tl0v+ru85GmzJ7pUx9OOksl3Tc\"",
		"mtime": "2026-09-03T13:25:35.704Z",
		"size": 21834,
		"path": "../public/videos/video-02/frame-256.jpg"
	},
	"/videos/video-02/frame-257.jpg": {
		"type": "image/jpeg",
		"etag": "\"554a-+tl0v+ru85GmzJ7pUx9OOksl3Tc\"",
		"mtime": "2026-09-03T13:25:35.724Z",
		"size": 21834,
		"path": "../public/videos/video-02/frame-257.jpg"
	},
	"/videos/video-02/frame-259.jpg": {
		"type": "image/jpeg",
		"etag": "\"55cb-zfg04OvarZ52RHMRCaNi/VTWVSI\"",
		"mtime": "2026-09-03T13:25:35.753Z",
		"size": 21963,
		"path": "../public/videos/video-02/frame-259.jpg"
	},
	"/videos/video-02/frame-260.jpg": {
		"type": "image/jpeg",
		"etag": "\"54a5-kxw5u3qtoTdUON8Z+WV34Neta00\"",
		"mtime": "2026-09-03T13:25:35.768Z",
		"size": 21669,
		"path": "../public/videos/video-02/frame-260.jpg"
	},
	"/videos/video-02/frame-261.jpg": {
		"type": "image/jpeg",
		"etag": "\"549f-ml8d+VdOaj5li8VQDUiZlwcvTJM\"",
		"mtime": "2026-09-03T13:25:35.783Z",
		"size": 21663,
		"path": "../public/videos/video-02/frame-261.jpg"
	},
	"/videos/video-02/frame-264.jpg": {
		"type": "image/jpeg",
		"etag": "\"5426-K9uMiYD911402O12KkedgFB+84U\"",
		"mtime": "2026-09-03T13:25:35.821Z",
		"size": 21542,
		"path": "../public/videos/video-02/frame-264.jpg"
	},
	"/videos/video-02/frame-262.jpg": {
		"type": "image/jpeg",
		"etag": "\"549f-ml8d+VdOaj5li8VQDUiZlwcvTJM\"",
		"mtime": "2026-09-03T13:25:35.797Z",
		"size": 21663,
		"path": "../public/videos/video-02/frame-262.jpg"
	},
	"/videos/video-02/frame-263.jpg": {
		"type": "image/jpeg",
		"etag": "\"54e1-HLfYcCtbNmzSzl6MaqqYUUnp8z0\"",
		"mtime": "2026-09-03T13:25:35.810Z",
		"size": 21729,
		"path": "../public/videos/video-02/frame-263.jpg"
	},
	"/videos/video-02/frame-265.jpg": {
		"type": "image/jpeg",
		"etag": "\"5507-SuwCVoIygmQMv3zSKIz6qrc15jU\"",
		"mtime": "2026-09-03T13:25:35.832Z",
		"size": 21767,
		"path": "../public/videos/video-02/frame-265.jpg"
	},
	"/videos/video-02/frame-258.jpg": {
		"type": "image/jpeg",
		"etag": "\"5613-Lu8YUw7hjQYyHbc5GnfpsP/cbeQ\"",
		"mtime": "2026-09-03T13:25:35.741Z",
		"size": 22035,
		"path": "../public/videos/video-02/frame-258.jpg"
	},
	"/videos/video-02/frame-266.jpg": {
		"type": "image/jpeg",
		"etag": "\"5552-BnMcO2djOihm2hS+TQZc/bYg6rM\"",
		"mtime": "2026-09-03T13:25:35.846Z",
		"size": 21842,
		"path": "../public/videos/video-02/frame-266.jpg"
	},
	"/videos/video-02/frame-268.jpg": {
		"type": "image/jpeg",
		"etag": "\"561d-6cORJAauP1uZPVAe+3sfbuUWji4\"",
		"mtime": "2026-09-03T13:25:35.875Z",
		"size": 22045,
		"path": "../public/videos/video-02/frame-268.jpg"
	},
	"/videos/video-02/frame-267.jpg": {
		"type": "image/jpeg",
		"etag": "\"5552-BnMcO2djOihm2hS+TQZc/bYg6rM\"",
		"mtime": "2026-09-03T13:25:35.861Z",
		"size": 21842,
		"path": "../public/videos/video-02/frame-267.jpg"
	},
	"/videos/video-02/frame-269.jpg": {
		"type": "image/jpeg",
		"etag": "\"561e-tB9FfGOWSPMOWhmoDzLrebv1azY\"",
		"mtime": "2026-09-03T13:25:35.889Z",
		"size": 22046,
		"path": "../public/videos/video-02/frame-269.jpg"
	},
	"/videos/video-02/frame-271.jpg": {
		"type": "image/jpeg",
		"etag": "\"5799-hAKE73F3yJCL8vZlWUfbvRUOFWM\"",
		"mtime": "2026-09-03T13:25:35.911Z",
		"size": 22425,
		"path": "../public/videos/video-02/frame-271.jpg"
	},
	"/videos/video-02/frame-270.jpg": {
		"type": "image/jpeg",
		"etag": "\"56ce-64k/QG2A5UQtEfjuRHbVizXPvj8\"",
		"mtime": "2026-09-03T13:25:35.900Z",
		"size": 22222,
		"path": "../public/videos/video-02/frame-270.jpg"
	},
	"/videos/video-02/frame-272.jpg": {
		"type": "image/jpeg",
		"etag": "\"5799-hAKE73F3yJCL8vZlWUfbvRUOFWM\"",
		"mtime": "2026-09-03T13:25:35.924Z",
		"size": 22425,
		"path": "../public/videos/video-02/frame-272.jpg"
	},
	"/videos/video-02/frame-274.jpg": {
		"type": "image/jpeg",
		"etag": "\"592c-YM8l6owNvuQpeir2gPdL2FA/ZIw\"",
		"mtime": "2026-09-03T13:25:35.948Z",
		"size": 22828,
		"path": "../public/videos/video-02/frame-274.jpg"
	},
	"/videos/video-02/frame-273.jpg": {
		"type": "image/jpeg",
		"etag": "\"5825-XA0cIGowrkxpiQ5KgQM+1G0K2n8\"",
		"mtime": "2026-09-03T13:25:35.936Z",
		"size": 22565,
		"path": "../public/videos/video-02/frame-273.jpg"
	},
	"/videos/video-02/frame-275.jpg": {
		"type": "image/jpeg",
		"etag": "\"5a1f-y6UoOLOoHP0yFiFc/A3QaHqiSSI\"",
		"mtime": "2026-09-03T13:25:35.960Z",
		"size": 23071,
		"path": "../public/videos/video-02/frame-275.jpg"
	},
	"/videos/video-02/frame-276.jpg": {
		"type": "image/jpeg",
		"etag": "\"58f0-PJS3ChrRdAuOweKQRa9xUU+t0TI\"",
		"mtime": "2026-09-03T13:25:35.971Z",
		"size": 22768,
		"path": "../public/videos/video-02/frame-276.jpg"
	},
	"/videos/video-02/frame-277.jpg": {
		"type": "image/jpeg",
		"etag": "\"58f0-PJS3ChrRdAuOweKQRa9xUU+t0TI\"",
		"mtime": "2026-09-03T13:25:35.983Z",
		"size": 22768,
		"path": "../public/videos/video-02/frame-277.jpg"
	},
	"/videos/video-02/frame-278.jpg": {
		"type": "image/jpeg",
		"etag": "\"582c-W1iWsRrW+SzqoHE6FpnloXeJVPc\"",
		"mtime": "2026-09-03T13:25:35.996Z",
		"size": 22572,
		"path": "../public/videos/video-02/frame-278.jpg"
	},
	"/videos/video-02/frame-279.jpg": {
		"type": "image/jpeg",
		"etag": "\"5745-q7ow5t+TfWXeJ/w9iLV5D3L15ro\"",
		"mtime": "2026-09-03T13:25:36.008Z",
		"size": 22341,
		"path": "../public/videos/video-02/frame-279.jpg"
	},
	"/videos/video-02/frame-280.jpg": {
		"type": "image/jpeg",
		"etag": "\"5783-jyYrWTO1niaXEkDwyuuwpojkY0w\"",
		"mtime": "2026-09-03T13:25:36.019Z",
		"size": 22403,
		"path": "../public/videos/video-02/frame-280.jpg"
	},
	"/videos/video-02/frame-281.jpg": {
		"type": "image/jpeg",
		"etag": "\"5758-p7R/+9aTPvxC6+PAhhv09RlnZXY\"",
		"mtime": "2026-09-03T13:25:36.031Z",
		"size": 22360,
		"path": "../public/videos/video-02/frame-281.jpg"
	},
	"/videos/video-02/frame-282.jpg": {
		"type": "image/jpeg",
		"etag": "\"5758-p7R/+9aTPvxC6+PAhhv09RlnZXY\"",
		"mtime": "2026-09-03T13:25:36.044Z",
		"size": 22360,
		"path": "../public/videos/video-02/frame-282.jpg"
	},
	"/videos/video-02/frame-283.jpg": {
		"type": "image/jpeg",
		"etag": "\"5753-/5jOM+JnRSfH5+f/WhLS3Tc1rIQ\"",
		"mtime": "2026-09-03T13:25:36.056Z",
		"size": 22355,
		"path": "../public/videos/video-02/frame-283.jpg"
	},
	"/videos/video-02/frame-284.jpg": {
		"type": "image/jpeg",
		"etag": "\"579e-ysVHU4LKRQVptINZ+W7fuhYVaPc\"",
		"mtime": "2026-09-03T13:25:36.065Z",
		"size": 22430,
		"path": "../public/videos/video-02/frame-284.jpg"
	},
	"/videos/video-02/frame-285.jpg": {
		"type": "image/jpeg",
		"etag": "\"582b-rl59TXdkbkOoERD+nEiqi6CGobc\"",
		"mtime": "2026-09-03T13:25:36.080Z",
		"size": 22571,
		"path": "../public/videos/video-02/frame-285.jpg"
	},
	"/videos/video-02/frame-286.jpg": {
		"type": "image/jpeg",
		"etag": "\"581b-2cn1C/lh0PNOgemPZdCEQNmdBag\"",
		"mtime": "2026-09-03T13:25:36.092Z",
		"size": 22555,
		"path": "../public/videos/video-02/frame-286.jpg"
	},
	"/videos/video-02/frame-287.jpg": {
		"type": "image/jpeg",
		"etag": "\"581b-2cn1C/lh0PNOgemPZdCEQNmdBag\"",
		"mtime": "2026-09-03T13:25:36.105Z",
		"size": 22555,
		"path": "../public/videos/video-02/frame-287.jpg"
	},
	"/videos/video-02/frame-289.jpg": {
		"type": "image/jpeg",
		"etag": "\"5835-Fp+EkGDwQrULAzUKWyr4Fb2yWU0\"",
		"mtime": "2026-09-03T13:25:36.135Z",
		"size": 22581,
		"path": "../public/videos/video-02/frame-289.jpg"
	},
	"/videos/video-02/frame-288.jpg": {
		"type": "image/jpeg",
		"etag": "\"5881-Y2oo/3UUvVrQWP/iLxq9SNewo1c\"",
		"mtime": "2026-09-03T13:25:36.120Z",
		"size": 22657,
		"path": "../public/videos/video-02/frame-288.jpg"
	},
	"/videos/video-02/frame-290.jpg": {
		"type": "image/jpeg",
		"etag": "\"582a-PgHvR1d7cV28RinmRd+Qsh0fuuY\"",
		"mtime": "2026-09-03T13:25:36.149Z",
		"size": 22570,
		"path": "../public/videos/video-02/frame-290.jpg"
	},
	"/videos/video-02/frame-291.jpg": {
		"type": "image/jpeg",
		"etag": "\"5831-5fB+8jTTGuYmmsC7mE1kQ3UjM3c\"",
		"mtime": "2026-09-03T13:25:36.163Z",
		"size": 22577,
		"path": "../public/videos/video-02/frame-291.jpg"
	},
	"/videos/video-02/frame-293.jpg": {
		"type": "image/jpeg",
		"etag": "\"5880-Si9hHL/twZG4CpIC+dWNKI2ICys\"",
		"mtime": "2026-09-03T13:25:36.189Z",
		"size": 22656,
		"path": "../public/videos/video-02/frame-293.jpg"
	},
	"/videos/video-02/frame-292.jpg": {
		"type": "image/jpeg",
		"etag": "\"5831-5fB+8jTTGuYmmsC7mE1kQ3UjM3c\"",
		"mtime": "2026-09-03T13:25:36.176Z",
		"size": 22577,
		"path": "../public/videos/video-02/frame-292.jpg"
	},
	"/videos/video-02/frame-294.jpg": {
		"type": "image/jpeg",
		"etag": "\"5834-x6GJ/rta9qBMtZ7LkDbjljRPWAs\"",
		"mtime": "2026-09-03T13:25:36.200Z",
		"size": 22580,
		"path": "../public/videos/video-02/frame-294.jpg"
	},
	"/videos/video-02/frame-295.jpg": {
		"type": "image/jpeg",
		"etag": "\"5860-y26e8JgpKCPiSE9kcCzzOWCsKPM\"",
		"mtime": "2026-09-03T13:25:36.214Z",
		"size": 22624,
		"path": "../public/videos/video-02/frame-295.jpg"
	},
	"/videos/video-02/frame-296.jpg": {
		"type": "image/jpeg",
		"etag": "\"57fe-H+zykwD/dl/CKL1UtiIJGV6Jqt8\"",
		"mtime": "2026-09-03T13:25:36.226Z",
		"size": 22526,
		"path": "../public/videos/video-02/frame-296.jpg"
	},
	"/videos/video-02/frame-298.jpg": {
		"type": "image/jpeg",
		"etag": "\"57fb-/o7lFFszmrKu37g6c/M+rjU96aA\"",
		"mtime": "2026-09-03T13:25:36.252Z",
		"size": 22523,
		"path": "../public/videos/video-02/frame-298.jpg"
	},
	"/videos/video-02/frame-297.jpg": {
		"type": "image/jpeg",
		"etag": "\"57fe-H+zykwD/dl/CKL1UtiIJGV6Jqt8\"",
		"mtime": "2026-09-03T13:25:36.240Z",
		"size": 22526,
		"path": "../public/videos/video-02/frame-297.jpg"
	},
	"/videos/video-02/frame-299.jpg": {
		"type": "image/jpeg",
		"etag": "\"585f-H/Kst1QWHBr/+lcuqV+cdERhhw4\"",
		"mtime": "2026-09-03T13:25:36.268Z",
		"size": 22623,
		"path": "../public/videos/video-02/frame-299.jpg"
	}
};
//#endregion
//#region #nitro/virtual/public-assets
var publicAssetBases = {};
function isPublicAssetURL(id = "") {
	if (public_assets_data_default[id]) return true;
	for (const base in publicAssetBases) if (id.startsWith(base)) return true;
	return false;
}
//#endregion
//#region node_modules/nitro/dist/runtime/internal/route-rules.mjs
var headers = ((m) => function headersRouteRule(event) {
	for (const [key, value] of Object.entries(m.options || {})) event.res.headers.set(key, value);
});
//#endregion
//#region #nitro/virtual/routing
var findRouteRules = /* @__PURE__ */ (() => {
	const $0 = [{
		name: "headers",
		route: "/assets/**",
		handler: headers,
		options: { "cache-control": "public, max-age=31536000, immutable" }
	}];
	return (m, p) => {
		let r = [];
		if (p.charCodeAt(p.length - 1) === 47) p = p.slice(0, -1) || "/";
		let s = p.split("/");
		if (s.length > 1) {
			if (s[1] === "assets") r.unshift({
				data: $0,
				params: { "_": s.slice(2).join("/") }
			});
		}
		return r;
	};
})();
var _lazy_KFTO8t = defineLazyEventHandler(() => import("./_chunks/ssr-renderer.mjs"));
var findRoute = /* @__PURE__ */ (() => {
	const data = {
		route: "/**",
		handler: _lazy_KFTO8t
	};
	return ((_m, p) => {
		return {
			data,
			params: { "_": p.slice(1) }
		};
	});
})();
[].filter(Boolean);
//#endregion
//#region node_modules/nitro/dist/runtime/internal/error/prod.mjs
var errorHandler = (error, event) => {
	const res = defaultHandler(error, event);
	return new FastResponse(typeof res.body === "string" ? res.body : JSON.stringify(res.body, null, 2), res);
};
function defaultHandler(error, event) {
	const unhandled = error.unhandled ?? !HTTPError.isError(error);
	const { status = 500, statusText = "" } = unhandled ? {} : error;
	if (status === 404) {
		const url = event.url || new URL(event.req.url);
		const baseURL = "/";
		if (/^\/[^/]/.test(baseURL) && !url.pathname.startsWith(baseURL)) return {
			status: 302,
			headers: new Headers({ location: `${baseURL}${url.pathname.slice(1)}${url.search}` })
		};
	}
	const headers = new Headers(unhandled ? {} : error.headers);
	headers.set("content-type", "application/json; charset=utf-8");
	return {
		status,
		statusText,
		headers,
		body: {
			error: true,
			...unhandled ? {
				status,
				unhandled: true
			} : typeof error.toJSON === "function" ? error.toJSON() : {
				status,
				statusText,
				message: error.message
			}
		}
	};
}
//#endregion
//#region #nitro/virtual/error-handler
var errorHandlers = [errorHandler];
async function error_handler_default(error, event) {
	for (const handler of errorHandlers) try {
		const response = await handler(error, event, { defaultHandler });
		if (response) return response;
	} catch (error) {
		console.error(error);
	}
}
//#endregion
//#region #nitro/virtual/app
function createNitroApp() {
	const captureError = (error, errorCtx) => {
		if (errorCtx?.event) {
			const errors = errorCtx.event.req.context?.nitro?.errors;
			if (errors) errors.push({
				error,
				context: errorCtx
			});
		}
	};
	const h3App = createH3App({ onError(error, event) {
		return error_handler_default(error, event);
	} });
	let appHandler = (req) => {
		req.context ||= {};
		req.context.nitro = req.context.nitro || { errors: [] };
		return h3App.fetch(req);
	};
	return {
		fetch: appHandler,
		h3: h3App,
		hooks: void 0,
		captureError
	};
}
function createH3App(config) {
	const h3App = new H3Core(config);
	h3App["~findRoute"] = (event) => findRoute(event.req.method, event.url.pathname);
	h3App["~getMiddleware"] = (event, route) => {
		const pathname = event.url.pathname;
		const method = event.req.method;
		const middleware = [];
		const routeRules = getRouteRules(method, pathname);
		event.context.routeRules = routeRules?.routeRules;
		if (routeRules?.routeRuleMiddleware.length) middleware.push(...routeRules.routeRuleMiddleware);
		if (route?.data?.middleware?.length) middleware.push(...route.data.middleware);
		return middleware;
	};
	return h3App;
}
//#endregion
//#region node_modules/nitro/dist/runtime/internal/app.mjs
var APP_ID = "default";
function useNitroApp() {
	let instance = useNitroApp._instance;
	if (instance) return instance;
	instance = useNitroApp._instance = createNitroApp();
	globalThis.__nitro__ = globalThis.__nitro__ || {};
	globalThis.__nitro__[APP_ID] = instance;
	return instance;
}
function useNitroHooks() {
	const nitroApp = useNitroApp();
	const hooks = nitroApp.hooks;
	if (hooks) return hooks;
	return nitroApp.hooks = new HookableCore();
}
function getRouteRules(method, pathname) {
	const m = findRouteRules(method, pathname);
	if (!m?.length) return { routeRuleMiddleware: [] };
	const routeRules = {};
	for (const layer of m) for (const rule of layer.data) {
		const currentRule = routeRules[rule.name];
		if (currentRule) {
			if (rule.options === false) {
				delete routeRules[rule.name];
				continue;
			}
			if (typeof currentRule.options === "object" && typeof rule.options === "object") currentRule.options = {
				...currentRule.options,
				...rule.options
			};
			else currentRule.options = rule.options;
			currentRule.route = rule.route;
			currentRule.params = {
				...currentRule.params,
				...layer.params
			};
		} else if (rule.options !== false) routeRules[rule.name] = {
			...rule,
			params: layer.params
		};
	}
	const middleware = [];
	const orderedRules = Object.values(routeRules).sort((a, b) => (a.handler?.order || 0) - (b.handler?.order || 0));
	for (const rule of orderedRules) {
		if (rule.options === false || !rule.handler) continue;
		middleware.push(rule.handler(rule));
	}
	return {
		routeRules,
		routeRuleMiddleware: middleware
	};
}
//#endregion
//#region node_modules/nitro/dist/presets/cloudflare/runtime/_module-handler.mjs
function createHandler(hooks) {
	const nitroApp = useNitroApp();
	const nitroHooks = useNitroHooks();
	return {
		async fetch(request, env, context) {
			globalThis.__env__ = env;
			augmentReq(request, {
				env,
				context
			});
			const ctxExt = {};
			const url = new URL(request.url);
			if (hooks.fetch) {
				const res = await hooks.fetch(request, env, context, url, ctxExt);
				if (res) return res;
			}
			return await nitroApp.fetch(request);
		},
		scheduled(controller, env, context) {
			globalThis.__env__ = env;
			context.waitUntil(nitroHooks.callHook("cloudflare:scheduled", {
				controller,
				env,
				context
			}) || Promise.resolve());
		},
		email(message, env, context) {
			globalThis.__env__ = env;
			context.waitUntil(nitroHooks.callHook("cloudflare:email", {
				message,
				event: message,
				env,
				context
			}) || Promise.resolve());
		},
		queue(batch, env, context) {
			globalThis.__env__ = env;
			context.waitUntil(nitroHooks.callHook("cloudflare:queue", {
				batch,
				event: batch,
				env,
				context
			}) || Promise.resolve());
		},
		tail(traces, env, context) {
			globalThis.__env__ = env;
			context.waitUntil(nitroHooks.callHook("cloudflare:tail", {
				traces,
				env,
				context
			}) || Promise.resolve());
		},
		trace(traces, env, context) {
			globalThis.__env__ = env;
			context.waitUntil(nitroHooks.callHook("cloudflare:trace", {
				traces,
				env,
				context
			}) || Promise.resolve());
		}
	};
}
function augmentReq(cfReq, ctx) {
	const req = cfReq;
	req.ip = cfReq.headers.get("cf-connecting-ip") || void 0;
	req.runtime ??= { name: "cloudflare" };
	req.runtime.cloudflare = {
		...req.runtime.cloudflare,
		...ctx
	};
	req.waitUntil = ctx.context?.waitUntil.bind(ctx.context);
}
//#endregion
//#region node_modules/nitro/dist/presets/cloudflare/runtime/cloudflare-module.mjs
var cloudflare_module_default = createHandler({ fetch(cfRequest, env, context, url) {
	if (env.ASSETS && isPublicAssetURL(url.pathname)) return env.ASSETS.fetch(cfRequest);
} });
//#endregion
export { cloudflare_module_default as default };
