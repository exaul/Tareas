const btns = {
    "btn_azul": "blue",
    "btn_blanco": "white",
    "btn_rojo": "red",
    "btn_negro": "black",
    "btn_amarillo": "yellow"
  };
  
for(const btn_id in btns){
    const btn =document.getElementById(btn_id);
    const color= btns[btn_id];
    btn.addEventListener("click",function(){ 
        if(btn_id === "btn_negro" ){
            document.body.style.backgroundColor= color;
            document.body.style.color = "White"; 
        } else if(btn_id==="btn_blanco")
        {
            document.body.style.backgroundColor= color;
            document.body.style.color = "black"; 
            document.body.style.textShadow = "0 0 2px White";
        }
        else{
            document.body.style.backgroundColor = color;
            document.body.style.color = "White"; 
            document.body.style.textShadow = "0 0 2px black";
        }
    })

}

// Se llama al objeto 
// const Btn_Blue= document.getElementById("btn_azul");
// const Btn_White = document.getElementById("btn_blanco");
// const Btn_Red = document.getElementById("btn_rojo");
// const Btn_Black = document.getElementById("btn_negro");
// const Btn_Yellow = document.getElementById("btn_amarillo");
// // Agregar evento clip azul
// Btn_Blue.addEventListener("click",function(){

//     document.body.style.backgroundColor = "blue";
// }); 
// // Agregar evento clip blanco
// Btn_White.addEventListener("click",function(){
//     document.body.style.backgroundColor="white";
// });
// // Agregar evento clip rojo
// Btn_Red.addEventListener("click",function(){
//     document.body.style.backgroundColor="red";
// });
// // Agregar evento clip negro
// Btn_Black.addEventListener("click",function(){
//     document.body.style.backgroundColor="black";
// });
// Btn_Yellow.addEventListener("click",function(){
//     document.body.style.backgroundColor="yellow";
// });