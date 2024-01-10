let button = document.getElementById("btn");
//Mouse Events
//Source : https://developer.mozilla.org/en-US/docs/Web/API/Element#mouse_events
//click
// button.addEventListener("dblclick", ()=>{
//     document.querySelector(".box").innerHTML = "<b>Yayyy!! You were clicked!!</b>";
// });
//Mouse Down:
// button.addEventListener("mousedown", ()=>{
//     document.querySelector(".box").innerHTML = "<b>Yayyy!! You were clicked!!</b>";
// });
//Double click
// button.addEventListener("dblclick", ()=>{
//     document.querySelector(".box").innerHTML = "<b>Yayyy!! You were clicked!!</b>";
// });
//ContextMenu: listens when right button is clicked.
// button.addEventListener("contextmenu", ()=>{
//     alert("Don't right click please!");
// });
//Mouseup
// button.addEventListener("mouseleave", ()=>{
//     document.querySelector(".box").innerHTML = "<b>Yayyy!! You were clicked!!</b>";
// });

//Keyboard Events
document.addEventListener("keydown",(e)=>{
    // console.log(e.key,e.keyCode);
    console.log(e ,e.key);
});
