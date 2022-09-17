var APP_DATA = {
  "scenes": [
    {
      "id": "0-buiten",
      "name": "Buiten",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        },
        {
          "tileSize": 512,
          "size": 4096
        }
      ],
      "faceSize": 2816,
      "initialViewParameters": {
        "yaw": 0.06950425791587023,
        "pitch": -0.2981048696438062,
        "fov": 1.3553835649548314
      },
      "linkHotspots": [
        {
          "yaw": 0.026527303146057335,
          "pitch": 0.03829411654322534,
          "rotation": 0,
          "target": "1-ingang"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "1-ingang",
      "name": "Ingang",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        },
        {
          "tileSize": 512,
          "size": 4096
        }
      ],
      "faceSize": 2816,
      "initialViewParameters": {
        "yaw": -0.36890721509174185,
        "pitch": -0.10433670437533671,
        "fov": 1.3553835649548314
      },
      "linkHotspots": [
        {
          "yaw": -2.8063373993011353,
          "pitch": 0.09257570922295422,
          "rotation": 6.283185307179586,
          "target": "0-buiten"
        },
        {
          "yaw": -0.3257229001373485,
          "pitch": 0.16585440994269618,
          "rotation": 0,
          "target": "3-a"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "2-tram",
      "name": "Tram",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        },
        {
          "tileSize": 512,
          "size": 4096
        }
      ],
      "faceSize": 2816,
      "initialViewParameters": {
        "yaw": 0.0409896905657412,
        "pitch": 0.12421036235157956,
        "fov": 1.3553835649548314
      },
      "linkHotspots": [
        {
          "yaw": -0.06183285407341543,
          "pitch": 0.20313691035615378,
          "rotation": 5.497787143782138,
          "target": "5-c"
        },
        {
          "yaw": -2.5985636771452665,
          "pitch": 0.4433451111548816,
          "rotation": 5.497787143782138,
          "target": "3-a"
        },
        {
          "yaw": -2.0515502038104003,
          "pitch": 0.7058300712697001,
          "rotation": 0.7853981633974483,
          "target": "4-b"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "3-a",
      "name": "A",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        },
        {
          "tileSize": 512,
          "size": 4096
        }
      ],
      "faceSize": 2816,
      "initialViewParameters": {
        "yaw": -1.6364810941710388,
        "pitch": 0.08439174026215213,
        "fov": 1.3553835649548314
      },
      "linkHotspots": [
        {
          "yaw": 1.3187268794034175,
          "pitch": 0.1930021605596508,
          "rotation": 6.283185307179586,
          "target": "1-ingang"
        },
        {
          "yaw": -1.6187661614962092,
          "pitch": 0.06080067945062595,
          "rotation": 0,
          "target": "4-b"
        },
        {
          "yaw": -1.119869099860173,
          "pitch": 0.24043397975536962,
          "rotation": 0.7853981633974483,
          "target": "2-tram"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "4-b",
      "name": "B",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        },
        {
          "tileSize": 512,
          "size": 4096
        }
      ],
      "faceSize": 2816,
      "initialViewParameters": {
        "pitch": 0,
        "yaw": 0,
        "fov": 1.5707963267948966
      },
      "linkHotspots": [
        {
          "yaw": 1.9785763566880323,
          "pitch": 0.0874503088780898,
          "rotation": 6.283185307179586,
          "target": "3-a"
        },
        {
          "yaw": -1.1550504465034663,
          "pitch": 0.24903803588499152,
          "rotation": 0,
          "target": "5-c"
        },
        {
          "yaw": 1.712315813684703,
          "pitch": 0.13921468742688248,
          "rotation": 5.497787143782138,
          "target": "2-tram"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "5-c",
      "name": "C",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        },
        {
          "tileSize": 512,
          "size": 4096
        }
      ],
      "faceSize": 2816,
      "initialViewParameters": {
        "yaw": -0.31122935106575156,
        "pitch": 0.15758602220465967,
        "fov": 1.3553835649548314
      },
      "linkHotspots": [
        {
          "yaw": 1.60083700243631,
          "pitch": 0.2692130480951995,
          "rotation": 0,
          "target": "4-b"
        }
      ],
      "infoHotspots": []
    }
  ],
  "name": "Bar Bildung",
  "settings": {
    "mouseViewMode": "drag",
    "autorotateEnabled": false,
    "fullscreenButton": true,
    "viewControlButtons": false
  }
};
