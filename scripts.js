document.addEventListener("DOMContentLoaded", ()=>{
    ["esc", "topnum", "alpha", "caps", "l_ctrl", "r_ctrl", "l_os", "r_os", "l_alt", "r_alt", "arrow", "function2", "function", "numpad"].forEach(group=>{
        [...document.getElementsByClassName(group)].forEach(el=>{
            el.addEventListener("hover", ()=>{
                
            })
        })
    })
})