 
 var noofdrum = document.querySelectorAll(".drum").length;
 for(var i=0 ; i<noofdrum ; i++){
      document.querySelectorAll("button")[i].addEventListener("click", function (){
         var buttoninnerHTML= this.innerHTML;
         runner(buttoninnerHTML);
         buttonanimation(buttoninnerHTML);

      });
 }

 document.addEventListener("keypress", (event) => {
    runner(event.key);
});


document.addEventListener("keypress", (event) => {
    runner(event.key);
    buttonanimation(event.key);
});
   function runner(key){
    switch (key) {
        case "w":
            var dum1=new Audio("./sounds/tom-1.mp3");
            dum1.play();
             break;
        case "a":
             var dum2=new Audio("./sounds/tom-2.mp3");
            dum2.play();
            break;
        case "s":
             var dum3=new Audio("./sounds/tom-3.mp3");
             dum3.play();
            break; 
         case "d":
            var dum4=new Audio("./sounds/tom-4.mp3");
            dum4.play();
            break;    
        case "j":
            var dum5=new Audio("./sounds/crash.mp3");
            dum5.play();
            break; 
        case "k":
            var dum6=new Audio("./sounds/kick-bass.mp3");
            dum6.play();
        break; 
        case "l":
             var dum7=new Audio("./sounds/snare.mp3");
             dum7.play();
             break;                                 
        default:
            console.log(buttoninnerHTML);
            break;
     }
  }
  function buttonanimation(currentkey){
     var animation=document.querySelector("."+currentkey);
     animation.classList.add("pressed");
     setTimeout(function (){
       animation.classList.remove("pressed");
     },200);
  }