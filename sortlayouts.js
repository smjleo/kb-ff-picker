/*
key
----
esc: escape
alpha: a-z + shift + enter + backspace + tab
topnum: 1-0
l/r_ctrl: controls
l/r_alt: alts
l/r_os: command (mac), windows (windows)
arrow: arrows
function: F1-F12
function2: buttons above the arrows in a fullsized/tkl keyboard (insert, page down, etc)
numpad: number pads on the very right side of fullsized keyboard
*/

function sort_ff(desired){
  let formfactors = [
    ["Numpad", ["numpad"]],
    ["40%", ["esc", "alpha", "caps", "l_ctrl", "r_ctrl", "l_os", "r_os", "l_alt", "r_alt"]],
    ["60%", ["esc", "topnum", "alpha", "caps", "l_ctrl", "r_ctrl", "l_os", "r_os", "l_alt", "r_alt"]],
    ["60% - HHKB", ["esc", "topnum", "alpha", "l_ctrl", "l_os", "r_os", "l_alt", "r_alt"]],
    ["60% - Winkeyless", ["esc", "topnum", "alpha", "caps", "l_ctrl", "r_ctrl", "l_alt", "r_alt"]],
    ["64%", ["esc", "topnum", "alpha", "caps", "l_ctrl", "r_ctrl", "l_os", "r_os", "l_alt", "r_alt", "arrow"]],
    ["68%", ["esc", "topnum", "alpha", "caps", "l_ctrl", "r_ctrl", "l_os", "r_os", "l_alt", "r_alt", "arrow", "function2"]],
    ["75%", ["esc", "topnum", "alpha", "caps", "l_ctrl", "r_ctrl", "l_os", "r_os", "l_alt", "r_alt", "arrow", "function2", "function"]],
    ["Tenkeyless", ["esc", "topnum", "alpha", "caps", "l_ctrl", "r_ctrl", "l_os", "r_os", "l_alt", "r_alt", "arrow", "function2", "function"]],
    ["1800", ["esc", "topnum", "alpha", "caps", "l_ctrl", "r_ctrl", "l_os", "r_os", "l_alt", "r_alt", "arrow", "function2", "function", "numpad"]],
    ["Fullsized", ["esc", "topnum", "alpha", "caps", "l_ctrl", "r_ctrl", "l_os", "r_os", "l_alt", "r_alt", "arrow", "function2", "function", "numpad"]]
  ];
  for (var i in formfactors) {
    i[1].filter(features => desired.indexOf(features) != -1);
  }
}
