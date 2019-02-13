let groups = ["menu", "esc", "topnum", "alpha", "caps", "l_ctrl", "r_ctrl", "l_os", "r_os", "l_alt", "r_alt", "arrow", "function2", "function", "numpad"];
let selected = Array(groups.length).fill(false);
document.addEventListener("DOMContentLoaded", ()=>{
    groups.forEach((group, i)=>{
        [...document.getElementsByClassName(group)].forEach(el=>{
            el.addEventListener("mouseover", ()=>{
                setTimeout(()=>{
                    if(!selected[i]){
                        [...document.getElementsByClassName(group)].forEach(e=>e.style.opacity = 0.8);
                    }
                }, 00);
            });
            el.addEventListener("mouseleave", ()=>{
                setTimeout(()=>{
                    if(!selected[i]){
                        [...document.getElementsByClassName(group)].forEach(e=>e.style.opacity = 0.7);
                    }
                }, 00);
            });
            el.addEventListener("click", ()=>{
                selected[i] = !selected[i];
                [...document.getElementsByClassName(group)].forEach(e=>{
                    e.style.opacity = selected[i] ? 0.9 : 0.7;
                });
            });
        })
    })
})