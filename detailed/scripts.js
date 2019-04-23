function renderlayouts(desired){
    // removing all children
    let layouts = document.getElementById("layouts");
    while(layouts.firstChild)layouts.removeChild(layouts.firstChild);
    // actual logic
    return_ff(desired).forEach(e=>{
        let r = Object.assign(document.createElement("div"), {className: "layout"});
        r.appendChild(Object.assign(document.createElement("p"), {textContent: e[0], className: "layout-name"}));
        r.appendChild(Object.assign(document.createElement("p"), {textContent: "example pcbs: " + e[3], className: "layout-examples"}));
        r.appendChild(Object.assign(document.createElement("img"), {src: ("../" + e[4]), className: "layout-image"}));
        layouts.appendChild(r);
    });
    console.log(desired);
}


let groups = ["menu", "esc", "topnum", "alpha", "caps", "l_ctrl", "r_ctrl", "l_os", "r_os", "l_alt", "r_alt", "arrow", "function2", "function", "numpad"];
let selected = Array(groups.length).fill(false);
document.addEventListener("DOMContentLoaded", ()=>{
    groups.forEach((group, i)=>{
        [...document.getElementsByClassName(group)].forEach(el=>{
            el.addEventListener("mouseover", ()=>{
                if(!selected[i]){
                    [...document.getElementsByClassName(group)].forEach(e=>e.classList.add("hover-key"));
                }
            });
            el.addEventListener("mouseleave", ()=>{
                if(!selected[i]){
                    [...document.getElementsByClassName(group)].forEach(e=>e.classList.remove("hover-key"));
                }
            });
            el.addEventListener("click", ()=>{
                selected[i] = !selected[i];
                [...document.getElementsByClassName(group)].forEach(e=>{
                    if(selected[i]){
                        e.classList.add("selected-key");
                    } else if(e.classList.contains("selected-key")){
                        e.classList.remove("selected-key");
                    }
                });
                renderlayouts(groups.filter((e, i)=>selected[i]));
            });
        })
    })
})
