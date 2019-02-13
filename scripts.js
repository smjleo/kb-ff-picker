function renderlayouts(desired){
    // removing all children
    let layouts = document.getElementById("layouts");
    while(layouts.firstChild)layouts.removeChild(layouts.firstChild);
    // actual logic
    return_ff(desired).forEach(e=>{
        let r = Object.assign(document.createElement("div"), {className: "layout"});
        r.appendChild(Object.assign(document.createElement("h2"), {textContent: e[3]}));
        r.appendChild(Object.assign(document.createElement("h3"), {textContent: e[0]}));
        r.appendChild(Object.assign(document.createElement("img"), {src: e[4]}));
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
                renderlayouts(groups.filter((e, i)=>selected[i]));
            });
        })
    })
})