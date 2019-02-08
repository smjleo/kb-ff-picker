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

format
----
[Device Name,
  [properties],
  example pcb,
  example image,
]
*/

function return_ff(desired){
  let formfactors = [["Numpad",
    ["numpad"],
    0,
    "XD24",
    "/images/numpad.png"
  ],
  ["40%",
    ["esc", "alpha", "caps", "l_ctrl", "r_ctrl", "l_os", "r_os", "l_alt", "r_alt"],
    0,
    "Vortex Core",
    "/images/40.png"
  ],
  ["60%",
    ["esc", "topnum", "alpha", "caps", "l_ctrl", "r_ctrl", "l_os", "r_os", "l_alt", "r_alt"],
    0,
    "GH60, DZ60, XD60",
    "/images/60.png"
  ],
  ["60% - HHKB",
    ["esc", "topnum", "alpha", "l_ctrl", "l_os", "r_os", "l_alt", "r_alt"],
    0,
    "GH60, DZ60, XD60",
    "/images/hhkb.png"
  ],
  ["60% - Winkeyless",
    ["esc", "topnum", "alpha", "caps", "l_ctrl", "r_ctrl", "l_alt", "r_alt"],
    0,
    "GH60, DZ60, XD60",
    "/images/winkeyless.png"
  ],
  ["64%",
    ["esc", "topnum", "alpha", "caps", "l_ctrl", "r_ctrl", "l_os", "r_os", "l_alt", "r_alt", "arrow"],
    0,
    "XD60 (XD64)",
    "/images/64.png"
  ],
  ["68%",
    ["esc", "topnum", "alpha", "caps", "l_ctrl", "r_ctrl", "l_os", "r_os", "l_alt", "r_alt", "arrow", "function2"],
    0,
    "Tada68",
    "/images/68.png"
  ["75%",
    ["esc", "topnum", "alpha", "caps", "l_ctrl", "r_ctrl", "l_os", "r_os", "l_alt", "r_alt", "arrow", "function2", "function"],
    0,
    "Vortex Race",
    "/images/75.png"
  ],
  ["Tenkeyless",
    ["esc", "topnum", "alpha", "caps", "l_ctrl", "r_ctrl", "l_os", "r_os", "l_alt", "r_alt", "arrow", "function2", "function"],
    0,
    "GMMK TKL",
    "/images/tkl.png"
  ],
  ["1800",
    ["esc", "topnum", "alpha", "caps", "l_ctrl", "r_ctrl", "l_os", "r_os", "l_alt", "r_alt", "arrow", "function2", "function", "numpad"],
    0,
    "/images/1800.png"
  ],
  ["Fullsized",
    ["esc", "topnum", "alpha", "caps", "l_ctrl", "r_ctrl", "l_os", "r_os", "l_alt", "r_alt", "arrow", "function2", "function", "numpad"],
    0,
    "GMMK Fullsized",
    "/images/fullsized.png"
  ]];
  let importance = {
    "esc" : 2,
    "alpha" : 5,
    "caps" : 1,
    "numpad" : 2,
    "topnum" : 4,
    "function" : 1,key w-1
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
