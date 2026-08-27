import type { PhotoAsset } from "./photography.types";

export const photographyMetrics = {
  "profileVersion": 1,
  "tools": {
    "sharp": "0.34.5",
    "vips": "8.17.3"
  },
  "recognisedSourceCount": 10,
  "dngCount": 0,
  "confirmedPanoramaCount": 0,
  "possiblePanoramaCount": 0,
  "totalSourceBytes": 24479998,
  "medianSourceBytes": 2409016,
  "largestSourceBytes": 2958562,
  "totalSourceMegapixels": 15.7,
  "aspectRatioDistribution": {
    "portrait": 6,
    "landscape": 4,
    "square": 0,
    "panorama": 0
  },
  "exactDuplicateGroups": 0,
  "likelyDuplicateGroups": 0,
  "filesContainingGps": 0,
  "filesContainingSerialNumbers": 0,
  "filesRequiringManualConversion": 0,
  "publishedPhotoCount": 10,
  "totalGeneratedBytes": 4033782,
  "bytesByRole": {
    "thumb": 120674,
    "grid": 1463372,
    "viewer": 2449736,
    "panorama": 0,
    "poster": 0
  },
  "medianThumbBytes": 12157,
  "medianGridBytes": 136519,
  "medianViewerBytes": 217466,
  "panoramaBytes": 0,
  "averageReductionPercent": 84.03,
  "medianReductionPercent": 84.81,
  "coldProcessingDurationMs": 6665.57,
  "skippedFiles": 0,
  "processedFiles": 10,
  "failures": 0
} as const;

export const photos = [
  {
    "id": "back1-e1c68161",
    "no": "01",
    "type": "photo",
    "thumbSrc": "/photos/generated/back1-e1c68161/thumb.webp",
    "gridSrc": "/photos/generated/back1-e1c68161/grid.webp",
    "viewerSrc": "/photos/generated/back1-e1c68161/viewer.webp",
    "width": 1448,
    "height": 1086,
    "aspectRatio": 1.333333,
    "orientation": "landscape",
    "dominantColor": "#a8b8c8",
    "blurDataURL": "data:image/webp;base64,UklGRsAAAABXRUJQVlA4ILQAAABwBQCdASogABgAPxFssVAsJaSit/VYAYAiCWIAxN20Rdi1+tDWa6b37iHF23fxWUtTFDRQAP7fhA8A/+tjwyz6jHv8kskaqPR5YhFxyjwPV0p/6pmyVFIideQwEMpY271PCPxpBEFNReKpKAWsVJ7S9VHMDf/kEPKw+o2rTpIH0doDphcMGe7bacfrxGxAINkQY8GolgQxWBYUMTCV2QIFhbN6DWpMS5SyL0i2VsLEjgkugAA=",
    "alt": "A forested rocky shoreline curves around a calm lake beneath layered clouds.",
    "altStatus": "draft",
    "categories": [],
    "tags": [],
    "processing": {
      "profileVersion": 1,
      "sourceType": "standard-raster",
      "sourceWidth": 1448,
      "sourceHeight": 1086,
      "sourceBytes": 2798992,
      "generatedBytes": {
        "thumb": 12384,
        "grid": 195904,
        "viewer": 331726
      }
    }
  },
  {
    "id": "back2-b877a86a",
    "no": "02",
    "type": "photo",
    "thumbSrc": "/photos/generated/back2-b877a86a/thumb.webp",
    "gridSrc": "/photos/generated/back2-b877a86a/grid.webp",
    "viewerSrc": "/photos/generated/back2-b877a86a/viewer.webp",
    "width": 1672,
    "height": 941,
    "aspectRatio": 1.776833,
    "orientation": "landscape",
    "dominantColor": "#4898d8",
    "blurDataURL": "data:image/webp;base64,UklGRtYAAABXRUJQVlA4IMoAAACQBgCdASogABIAPxFwrlAsJiQisAgBgCIJbAC7MzQ2d0qtpL8AAG2Vd1b0WW9yJPtrVbWwnP3hJ1shFCyAAPedPDXJo2O7frYfSO7egukkULxHD3sO5XNoWbMW9ZHU/RFdAi3x9rX1ppxbfPThTtOc3gQHmDzElsQxJx9ydBuT8dQ/YODo8Ta2Ws8UHy7RyFB59yiSyiPmmJzUC4Pv2JcODwBurDZylY9x9PHnOOa6mdeMzjDlbC1Q1pXmUCzVZ2JZKMqEwyDg8AAA",
    "alt": "A colorful water park and roller coasters fill the landscape beneath a clear blue sky.",
    "altStatus": "draft",
    "categories": [],
    "tags": [],
    "processing": {
      "profileVersion": 1,
      "sourceType": "standard-raster",
      "sourceWidth": 1672,
      "sourceHeight": 941,
      "sourceBytes": 2842636,
      "generatedBytes": {
        "thumb": 15652,
        "grid": 209696,
        "viewer": 392314
      }
    }
  },
  {
    "id": "back3-50a0171b",
    "no": "03",
    "type": "photo",
    "thumbSrc": "/photos/generated/back3-50a0171b/thumb.webp",
    "gridSrc": "/photos/generated/back3-50a0171b/grid.webp",
    "viewerSrc": "/photos/generated/back3-50a0171b/viewer.webp",
    "width": 1122,
    "height": 1402,
    "aspectRatio": 0.800285,
    "orientation": "portrait",
    "dominantColor": "#182818",
    "blurDataURL": "data:image/webp;base64,UklGRvoAAABXRUJQVlA4IO4AAACQBQCdASoaACAAPxGAuFWsKCUjKAgBgCIJaAC7BbLA1Dqmjl5//15JcSDVeLWTECtT2KpAAAD+20utavAC/1sTuxAWgUERyKzTPy21Ef5hVcNuJLMHjP58MShg3zLNPPKEwnD1V7CjaT7KfXzrfxJO43INUFBnvx+D+tSDPWGEXYsAQMuX5m4zNQYMi7GYf6nt6SbS1P1I6He1pv5lXuwRn3p8gyJlkgnKxIPEPHQHANdAoElhFnBm/c4E9sDwiM8owpveauoxdXqmmER+9yDetNCNd1rAMBbGUZ/+UwploCrFeyVWWE+VmICFAAAA",
    "alt": "A columned university building and flags sit behind a sunlit lawn framed by trees.",
    "altStatus": "draft",
    "categories": [],
    "tags": [],
    "processing": {
      "profileVersion": 1,
      "sourceType": "standard-raster",
      "sourceWidth": 1122,
      "sourceHeight": 1402,
      "sourceBytes": 2958562,
      "generatedBytes": {
        "thumb": 20102,
        "grid": 261402,
        "viewer": 388174
      }
    }
  },
  {
    "id": "back4-9c795436",
    "no": "04",
    "type": "photo",
    "thumbSrc": "/photos/generated/back4-9c795436/thumb.webp",
    "gridSrc": "/photos/generated/back4-9c795436/grid.webp",
    "viewerSrc": "/photos/generated/back4-9c795436/viewer.webp",
    "width": 1448,
    "height": 1086,
    "aspectRatio": 1.333333,
    "orientation": "landscape",
    "dominantColor": "#786858",
    "blurDataURL": "data:image/webp;base64,UklGRpAAAABXRUJQVlA4IIQAAABQBQCdASogABgAPxF8slQsJ6QjKAqpgCIJZgCdOYz1f4BVFEJwtGh2Xu/7E9uqMU74WwAA/FL4qprJZxs8kPj572TBTWSkeTvD8qaQOjK8CJSaOAHCpL+oLr2e4YLSgYTTsgFfAzS4o4YEpJPmu6Vz0028bKoANv0UuuAUwC52AE6oAAA=",
    "alt": "Small waves roll onto a broad shoreline beneath a bright, open sky.",
    "altStatus": "draft",
    "categories": [],
    "tags": [],
    "processing": {
      "profileVersion": 1,
      "sourceType": "standard-raster",
      "sourceWidth": 1448,
      "sourceHeight": 1086,
      "sourceBytes": 2198591,
      "generatedBytes": {
        "thumb": 6064,
        "grid": 97422,
        "viewer": 165218
      }
    }
  },
  {
    "id": "back5-b719b88a",
    "no": "05",
    "type": "photo",
    "thumbSrc": "/photos/generated/back5-b719b88a/thumb.webp",
    "gridSrc": "/photos/generated/back5-b719b88a/grid.webp",
    "viewerSrc": "/photos/generated/back5-b719b88a/viewer.webp",
    "width": 1672,
    "height": 941,
    "aspectRatio": 1.776833,
    "orientation": "landscape",
    "dominantColor": "#88a8c8",
    "blurDataURL": "data:image/webp;base64,UklGRqAAAABXRUJQVlA4IJQAAAAQBQCdASogABIAPxF4sFIsJySisBgIAYAiCWQArAAtimPaVtlFCG6WosmGu8rnJGjgAPpg0mD4z6qEv7qQZkCySkt0aOZFBRzIjPzbBkFNPDlAfMN3ZgCD7A75qIDevfeYOXAeNzeaXzPrcTQG8P8lEgl1aqYTwkoRKSsmyZVZPuPJm1PbMmyUcWgjnSpFBbPLswAA",
    "alt": "A long cable-stayed bridge crosses the water as the sun sets behind it.",
    "altStatus": "draft",
    "categories": [],
    "tags": [],
    "processing": {
      "profileVersion": 1,
      "sourceType": "standard-raster",
      "sourceWidth": 1672,
      "sourceHeight": 941,
      "sourceBytes": 2101280,
      "generatedBytes": {
        "thumb": 7318,
        "grid": 85492,
        "viewer": 167864
      }
    }
  },
  {
    "id": "back6-41688dad",
    "no": "06",
    "type": "photo",
    "thumbSrc": "/photos/generated/back6-41688dad/thumb.webp",
    "gridSrc": "/photos/generated/back6-41688dad/grid.webp",
    "viewerSrc": "/photos/generated/back6-41688dad/viewer.webp",
    "width": 1122,
    "height": 1402,
    "aspectRatio": 0.800285,
    "orientation": "portrait",
    "dominantColor": "#b8c8d8",
    "blurDataURL": "data:image/webp;base64,UklGRtYAAABXRUJQVlA4IMoAAABwBQCdASoaACAAPxFyslKsJiSisBgIAYAiCWIAwoBpUNzclcppwMj84leN8DJyc5PoEtsqAP70+s6O6vKSNPuEGCM6G5/CDmtEeYO5+oha3oONYjfTv845Y616c0DeOwS9YDodJI0GWt5Vblq6zkt3cLI48oNBhZ2RYa3WD40AOH9bijgpuyKWQ4nOJ367NaRJpccZcK3RF9cm1kCfHtN8ET4JpH8G6kC84xsiLRYBraLu6ooU5Ukph2lgmdKkxpdX3WArA9x6QAAA",
    "alt": "Two people stand on a rocky overlook above a forested lake and distant cliffs.",
    "altStatus": "draft",
    "categories": [],
    "tags": [],
    "processing": {
      "profileVersion": 1,
      "sourceType": "standard-raster",
      "sourceWidth": 1122,
      "sourceHeight": 1402,
      "sourceBytes": 2348675,
      "generatedBytes": {
        "thumb": 12220,
        "grid": 132948,
        "viewer": 206348
      }
    }
  },
  {
    "id": "back7-d3f8117c",
    "no": "07",
    "type": "photo",
    "thumbSrc": "/photos/generated/back7-d3f8117c/thumb.webp",
    "gridSrc": "/photos/generated/back7-d3f8117c/grid.webp",
    "viewerSrc": "/photos/generated/back7-d3f8117c/viewer.webp",
    "width": 1122,
    "height": 1402,
    "aspectRatio": 0.800285,
    "orientation": "portrait",
    "dominantColor": "#6888b8",
    "blurDataURL": "data:image/webp;base64,UklGRqwAAABXRUJQVlA4IKAAAABQBQCdASoaACAAPxF8sVSsJ6QjKAqpgCIJZgC06GMlFPHrb3VYhrCFdotlIS0C0wbYX6AA/K4R4g/HDMHkA7pb9EJ0CxiwnR4eEj9W32HaEcM84sVG85/u7/GCKJ3In7r0OZI73WYX+cPTzbbL33dxiqgmH4NGM7Ut8LyTMjFVljGb1nXX0DaMw8kYHgyKAFFbEl2HzggAlllPMVG9UAAA",
    "alt": "A white modern lakeside museum curves along a landscaped waterfront path.",
    "altStatus": "draft",
    "categories": [],
    "tags": [],
    "processing": {
      "profileVersion": 1,
      "sourceType": "standard-raster",
      "sourceWidth": 1122,
      "sourceHeight": 1402,
      "sourceBytes": 2216576,
      "generatedBytes": {
        "thumb": 6970,
        "grid": 98820,
        "viewer": 169560
      }
    }
  },
  {
    "id": "me1-3da32daf",
    "no": "08",
    "type": "photo",
    "thumbSrc": "/photos/generated/me1-3da32daf/thumb.webp",
    "gridSrc": "/photos/generated/me1-3da32daf/grid.webp",
    "viewerSrc": "/photos/generated/me1-3da32daf/viewer.webp",
    "width": 1122,
    "height": 1402,
    "aspectRatio": 0.800285,
    "orientation": "portrait",
    "dominantColor": "#182808",
    "blurDataURL": "data:image/webp;base64,UklGRgQBAABXRUJQVlA4IPgAAADQBQCdASoaACAAPxF2sFAsJ6SisAgBgCIJagDFCy/DECs+21xV8D0SNuaGzKBRs8GCuzI/YqTIAP5yYWSRFw+S5jzQRjcfaZHRlzcAvnLcdey89i7AVc6+mqIJH/1U310ogLzI6S6OQd7vcWRMVOs6W5TJm/Z1gtme06evs7d5452I053z4cBV9hPRZ2FErgSO1X6PhLQ5qma9hbiwbn3PRRM4YjE22uicnDJ/dBm9tntTI8mxeMGNXHmwg9CjYKadKuQbfNqRQVNrUVhdPQX5+WQCQRAS/XblbdxAZkZ8ugChAkQSxZcA8umluYznWmRI7qjpbD2AAA==",
    "alt": "Nicholas Lee stands on a university lawn beneath a flowering tree.",
    "altStatus": "draft",
    "categories": [],
    "tags": [],
    "processing": {
      "profileVersion": 1,
      "sourceType": "standard-raster",
      "sourceWidth": 1122,
      "sourceHeight": 1402,
      "sourceBytes": 2527004,
      "generatedBytes": {
        "thumb": 21550,
        "grid": 172986,
        "viewer": 263278
      }
    }
  },
  {
    "id": "me2-3142d1d3",
    "no": "09",
    "type": "photo",
    "thumbSrc": "/photos/generated/me2-3142d1d3/thumb.webp",
    "gridSrc": "/photos/generated/me2-3142d1d3/grid.webp",
    "viewerSrc": "/photos/generated/me2-3142d1d3/viewer.webp",
    "width": 1086,
    "height": 1448,
    "aspectRatio": 0.75,
    "orientation": "portrait",
    "dominantColor": "#b8c8d8",
    "blurDataURL": "data:image/webp;base64,UklGRroAAABXRUJQVlA4IK4AAADQBACdASoYACAAPxF0s1EsJqSiqA1RgCIJZgCsAEI6zrWzYLFuxKuTD3BsudahWAD+8A3wzelvV4vqysOg9saX9jjIJr1J8cbAJx4ASKinEaXHp5fnHte+Ruh142gVZT+bzIpjW397bvdweWZxLagaAR843UtyzAPBRvEpqCp4ZisQyxmfMDVzkAXdziPWTiVVF+IkfH9UAZ8tHtEyygkYHeZUzpXGhcoGb9toAAA=",
    "alt": "Nicholas Lee stands beside a wooded lake overlook under a cloudy sky.",
    "altStatus": "draft",
    "categories": [],
    "tags": [],
    "processing": {
      "profileVersion": 1,
      "sourceType": "standard-raster",
      "sourceWidth": 1086,
      "sourceHeight": 1448,
      "sourceBytes": 2469356,
      "generatedBytes": {
        "thumb": 12094,
        "grid": 140090,
        "viewer": 228584
      }
    }
  },
  {
    "id": "me3-86a4f854",
    "no": "10",
    "type": "photo",
    "thumbSrc": "/photos/generated/me3-86a4f854/thumb.webp",
    "gridSrc": "/photos/generated/me3-86a4f854/grid.webp",
    "viewerSrc": "/photos/generated/me3-86a4f854/viewer.webp",
    "width": 941,
    "height": 1672,
    "aspectRatio": 0.562799,
    "orientation": "portrait",
    "dominantColor": "#b8c8d8",
    "blurDataURL": "data:image/webp;base64,UklGRqYAAABXRUJQVlA4IJoAAAAQBQCdASoSACAAPxF8slQsJ6QjKAqpgCIJZAC7ADNITbLfdYJ2t0WNIU+j4oem8g0AAP7e7EWpvEOiR/co3DMQteXM00u10Klbn1bgiAddUNH9N54oPXT2B69CB2fulML0GB+U/KAbEBtQNAOAEh8qlx7bHdARY9Pl9t6Cb5AB0xLmpeyQCf8809vyVhO/uvoHiIdEWBFxGIwA",
    "alt": "Nicholas Lee looks toward a cable-stayed bridge at sunset from the waterfront.",
    "altStatus": "draft",
    "categories": [],
    "tags": [],
    "processing": {
      "profileVersion": 1,
      "sourceType": "standard-raster",
      "sourceWidth": 941,
      "sourceHeight": 1672,
      "sourceBytes": 2018326,
      "generatedBytes": {
        "thumb": 6320,
        "grid": 68612,
        "viewer": 136670
      }
    }
  }
] as const satisfies readonly PhotoAsset[];

export const hiddenPhotoId = "me3-86a4f854";
