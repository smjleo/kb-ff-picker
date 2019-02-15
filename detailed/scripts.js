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
                setTimeout(()=>{
                    if(!selected[i]){
                        [...document.getElementsByClassName(group)].forEach(e=>e.style.backgroundImage = "linear-gradient(to right, #444, #555, #444)");
                    }
                }, 00);
            });
            el.addEventListener("mouseleave", ()=>{
                setTimeout(()=>{
                    if(!selected[i]){
                        [...document.getElementsByClassName(group)].forEach(e=>e.style.backgroundImage = "linear-gradient(to right, #333, #444, #333)");
                    }
                }, 00);
            });
            el.addEventListener("click", ()=>{
                selected[i] = !selected[i];
                [...document.getElementsByClassName(group)].forEach(e=>{
                    if(selected[i]){
                        e.style.backgroundImage = "linear-gradient(to right, #585858, #686868, #585858)";
                    } else {
                        e.style.backgroundImage = "linear-gradient(to right, #333, #444, #333)";
                    }
                });
                renderlayouts(groups.filter((e, i)=>selected[i] && e != "menu"));
            });
        })
    })
})
