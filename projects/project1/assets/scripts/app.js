const commands = ["sit", "bark", "run", "stay"];

const barney = {
  name : "Barney",
  loveMeter : 100,
  sit : function(){
    document.getElementById("barney_img").src = "/assets/img/barney_sit.png";
  },
  
  goodBoy : function(){
    document.getElementById("barney_img").src = "/assets/img/barney_good.png";
  }
}

// if(barney.loveMeter > 80){
//   document.getElementById("barney_img").src = "/assets/img/barney_good.png"
// }

