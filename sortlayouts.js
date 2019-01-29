/*
key
----
esc: escape
alpha: a-z + shift + enter + backspace + tab
topnum: 1-0
(l|r)_ctrl: controls
(l|r)_alt: alts
(l|r)_os: command (mac), windows (windows)
arrow: arrows
function: F1-F12
function2: buttons above the arrows in a fullsized/tkl keyboard (insert, page down, etc)
numpad: number pads on the very right side of fullsized keyboard
*/

function return_ff(desired){
  let formfactors = [["Numpad",
    ["numpad"],
    0,
    "XD24",
    "https://ae01.alicdn.com/kf/HTB1vNOlXeKAUKJjSZFzq6xdQFXaL/satan-pad-kc21-numpad-21key-Custom-Mechanical-Keyboard-keys-Underglow-RGB-PCB-plastic-case-plate-function.jpg_640x640.jpg",
    "Image Source: KPRepublic"
  ],
  ["40%",
    ["esc", "alpha", "caps", "l_ctrl", "r_ctrl", "l_os", "r_os", "l_alt", "r_alt"],
    0,
    "Vortex Core",
    "https://images-na.ssl-images-amazon.com/images/I/61asoWloPUL._SX355_.jpg",
    "Source: Amazon"
  ],
  ["60%",
    ["esc", "topnum", "alpha", "caps", "l_ctrl", "r_ctrl", "l_os", "r_os", "l_alt", "r_alt"],
    0,
    "GH60, DZ60, XD60",
    "https://mechanicalkeyboards.com/shop/images/products/large_1237_IMG_0984.jpg",
    "Source: mechanicalkeyboards.com"
  ],
  ["60% - HHKB",
    ["esc", "topnum", "alpha", "l_ctrl", "l_os", "r_os", "l_alt", "r_alt"],
    0,
    "GH60, DZ60, XD60",
    "https://cdn.shopify.com/s/files/1/1473/3902/products/2_8197539f-58ba-402b-a2f6-1ad5d3bfc41c_620x.jpg?v=1536248017",
    "Source: KBDFans"
  ],
  ["60% - Winkeyless",
    ["esc", "topnum", "alpha", "caps", "l_ctrl", "r_ctrl", "l_alt", "r_alt"],
    0,
    "GH60, DZ60, XD60",
    "https://cdn.shopify.com/s/files/1/1473/3902/products/2.1_1800x1800.jpg?v=1536248062",
    "Source: KBDFans"
  ],
  ["64%",
    ["esc", "topnum", "alpha", "caps", "l_ctrl", "r_ctrl", "l_os", "r_os", "l_alt", "r_alt", "arrow"],
    0,
    "XD60 (XD64)",
    "https://massdrop-s3.imgix.net/product-images/gh60-xd64-mechanical-keyboard-kit/363A1304%20copy_20170505114428.jpg?auto=format&fm=jpg&fit=crop&w=955&bg=f0f0f0&dpr=1",
    "Source: Massdrop"
  ],
  ["68%",
    ["esc", "topnum", "alpha", "caps", "l_ctrl", "r_ctrl", "l_os", "r_os", "l_alt", "r_alt", "arrow", "function2"],
    0,
    "Tada68",
    "https://cdn.shopify.com/s/files/1/1473/3902/products/2_40c81ba2-7709-46c5-a61c-a550749a4e98_620x.jpg?v=1536245651",
    "Source: KBDFans"],
  ["75%",
    ["esc", "topnum", "alpha", "caps", "l_ctrl", "r_ctrl", "l_os", "r_os", "l_alt", "r_alt", "arrow", "function2", "function"],
    0,
    "Vortex Race",
    "https://mechanicalkeyboards.com/shop/images/products/large_2668_large_2446_Race3_2.jpg",
    "Source: mechanicalkeyboards.com"
  ],
  ["Tenkeyless",
    ["esc", "topnum", "alpha", "caps", "l_ctrl", "r_ctrl", "l_os", "r_os", "l_alt", "r_alt", "arrow", "function2", "function"],
    0,
    "GMMK TKL",
    "https://cdn.shopify.com/s/files/1/0549/2681/products/mechanical-keyboard-the-glorious-gmmk-3_a2981c7e-108d-45c3-9fdf-fd4c47d8eca8.jpg?v=1540489214",
    "Source: Glorious PC Gaming Race"
  ],
  ["1800",
    ["esc", "topnum", "alpha", "caps", "l_ctrl", "r_ctrl", "l_os", "r_os", "l_alt", "r_alt", "arrow", "function2", "function", "numpad"],
    0,
    "https://cdn.shopify.com/s/files/1/1473/3902/products/11_2ef1840c-d0bf-4826-bbc0-b2f6a82471bb_1800x1800.jpg?v=1536242910",
    "Source: KBDFans"
  ],
  ["Fullsized",
    ["esc", "topnum", "alpha", "caps", "l_ctrl", "r_ctrl", "l_os", "r_os", "l_alt", "r_alt", "arrow", "function2", "function", "numpad"],
    0,
    "GMMK Fullsized",
    "https://cdn.shopify.com/s/files/1/0549/2681/products/aura_full_f1d87a2d-8096-4d76-b5f5-fa002bfaa1b6.jpg?v=1540489059",
    "Source: Glorious PC Gaming Race"
  ]];
  let importance = {
    "esc" : 2,
    "alpha" : 5,
    "caps" : 1,
    "numpad" : 2,
    "topnum" : 4,
    "function" : 1,
    "function2" : 1,
    "l_ctrl" : 0.25,
    "r_ctrl" : 0.25,
    "l_os" : 0.25,
    "r_os" : 0.25,
    "l_alt" : 0.25,
    "r_alt" : 0.25,
    "arrow" : 2,
  };
  formfactors.forEach(i=>{
    i[1].forEach(j=>{
      if (desired.indexOf(j) != -1) {
        i[2] += importance[j];
      } else {
        i[2] -= importance[j];
      }
    });
  });
  let k = 3; // sensitivity
  return formfactors.sort((a, b) => b[2]-a[2]).filter(e => formfactors[0][2]-k <= e[2]);
}
