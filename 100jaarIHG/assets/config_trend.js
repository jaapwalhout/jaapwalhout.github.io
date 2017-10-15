var CONFIG = {
 "data": {
  "lastModified": 1508071546000,
  "path": "./data/totaal.csv",
  "reader": "csv",
  "ddfPath": "./data/totaal.csv"
 },
 "locale": {
  "filePath": "assets/translation/",
  "id": "en"
 },
 "state": {
  "entities": {
   "autogenerate": {
    "conceptIndex": 0,
    "conceptType": "entity_domain",
    "data": "data"
   },
   "dim": "land",
   "show": {},
   "skipFilter": false
  },
  "entities_colorlegend": {
   "autogenerate": {
    "conceptIndex": 0,
    "conceptType": "entity_domain",
    "data": "data"
   },
   "dim": "_default",
   "show": {},
   "skipFilter": false
  },
  "entities_tags": {
   "dim": null,
   "show": {},
   "skipFilter": false
  },
  "marker": {
   "allowSelectMultiple": true,
   "axis_x": {
    "allow": {
     "scales": [
      "linear",
      "log",
      "genericLog",
      "time",
      "pow"
     ]
    },
    "autogenerate": {
     "conceptIndex": 1,
     "conceptType": "measure"
    },
    "data": "data",
    "domainMax": null,
    "domainMin": null,
    "scaleType": "linear",
    "use": "indicator",
    "which": "Uitvoer als percentage van BBP",
    "zoomedMax": null,
    "zoomedMin": null
   },
   "axis_y": {
    "allow": {
     "scales": [
      "linear",
      "log",
      "genericLog",
      "time",
      "pow"
     ]
    },
    "autogenerate": {
     "conceptIndex": 0,
     "conceptType": "measure"
    },
    "data": "data",
    "domainMax": null,
    "domainMin": null,
    "scaleType": "linear",
    "use": "indicator",
    "which": "Invoer als percentage van BBP",
    "zoomedMax": null,
    "zoomedMin": null
   },
   "color": {
    "allow": {
     "scales": [
      "linear",
      "log",
      "genericLog",
      "time",
      "pow",
      "ordinal"
     ]
    },
    "autogenerate": {
     "conceptIndex": 0,
     "conceptType": "entity_domain"
    },
    "data": "data",
    "palette": {
     "_default": "#ffb600"
    },
    "paletteLabels": null,
    "scaleType": "ordinal",
    "syncModels": [
     "marker_colorlegend"
    ],
    "use": "constant",
    "which": "_default"
   },
   "highlight": [],
   "label": {
    "autogenerate": {
     "conceptIndex": 0,
     "conceptType": "entity_domain"
    },
    "data": "data",
    "scaleType": "ordinal",
    "use": "property",
    "which": "land"
   },
   "opacityHighlightDim": 0.1,
   "opacityRegular": 1,
   "opacitySelectDim": 0.3,
   "select": [],
   "size": {
    "allow": {
     "scales": [
      "ordinal",
      "linear",
      "log",
      "genericLog",
      "pow"
     ]
    },
    "autogenerate": {
     "conceptIndex": 2,
     "conceptType": "measure"
    },
    "data": "data",
    "domainMax": null,
    "domainMin": null,
    "extent": [
     0,
     0.85
    ],
    "scaleType": "ordinal",
    "use": "constant",
    "which": "_default",
    "zoomedMax": null,
    "zoomedMin": null
   },
   "size_label": {
    "_important": false,
    "allow": {
     "names": [
      "_default"
     ],
     "scales": [
      "ordinal",
      "linear",
      "log",
      "genericLog",
      "pow"
     ]
    },
    "data": "data",
    "domainMax": null,
    "domainMin": null,
    "extent": [
     0,
     0.33
    ],
    "scaleType": "ordinal",
    "use": "constant",
    "which": "_default",
    "zoomedMax": null,
    "zoomedMin": null
   },
   "skipFilter": false,
   "space": [
    "entities",
    "time"
   ],
   "superHighlight": []
  },
  "marker_colorlegend": {
   "allowSelectMultiple": true,
   "highlight": [],
   "hook_geoshape": {
    "data": "data",
    "use": "property",
    "which": "shape_lores_svg"
   },
   "hook_rank": {
    "data": "data",
    "use": "property",
    "which": "rank"
   },
   "label": {
    "data": "data",
    "use": "property",
    "which": "name"
   },
   "opacityHighlightDim": 0.1,
   "opacityRegular": 1,
   "opacitySelectDim": 0.3,
   "select": [],
   "skipFilter": false,
   "space": [
    "entities_colorlegend"
   ],
   "superHighlight": []
  },
  "marker_tags": {
   "allowSelectMultiple": true,
   "highlight": [],
   "hook_parent": {
    "data": "data",
    "which": null
   },
   "label": {
    "data": "data",
    "use": null,
    "which": null
   },
   "opacityHighlightDim": 0.1,
   "opacityRegular": 1,
   "opacitySelectDim": 0.3,
   "select": [],
   "skipFilter": false,
   "space": [
    "entities_tags"
   ],
   "superHighlight": []
  },
  "time": {
   "autogenerate": {
    "conceptIndex": 0,
    "conceptType": "time",
    "data": "data"
   },
   "delay": 150,
   "delayThresholdX2": 90,
   "delayThresholdX4": 45,
   "dim": "jaar",
   "end": "2016",
   "endOrigin": null,
   "endSelected": "2016",
   "format": {
    "data": null,
    "ui": null
   },
   "immediatePlay": true,
   "loop": false,
   "offset": 0,
   "playable": true,
   "playing": false,
   "record": false,
   "round": "round",
   "start": "1921",
   "startOrigin": null,
   "startSelected": "1921",
   "step": 1,
   "unit": "year",
   "value": "1921"
  }
 },
 "ui": {
  "adaptMinMaxZoom": false,
  "buttons": [
   "moreoptions",
   "fullscreen",
  ],
  "chart": {
   "labels": {
    "dragging": true,
    "removeLabelBox": false
   },
   "lockNonSelected": 0,
   "margin": {
    "left": 80.37,
    "top": 0
   },
   "superhighlightOnMinimapHover": true,
   "trails": true,
   "whenHovering": {
    "higlightValueX": true,
    "higlightValueY": true,
    "showProjectionLineX": true,
    "showProjectionLineY": true
   }
  },
  "cursorMode": "arrow",
  "datawarning": {
   "doubtDomain": [],
   "doubtRange": []
  },
  "dialogs": {
   "moreoptions": [
    "opacity",
    "speed",
    "axes",
    "size",
    "colors",
    "label",
    "zoom",
    "presentation",
    "about"
   ],
   "popup": [
    "colors",
    "find",
    "size",
    "zoom",
    "moreoptions"
   ],
   "sidebar": [
   ]
  },
  "panWithArrow": false,
  "presentation": false,
  "show_ticks": true,
  "splash": false,
  "zoomOnScrolling": false
 },
 "chartType": "BubbleChart"
};