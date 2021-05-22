let img ;

function modelReady(){
  console.log("Haa hee hoo ")
}
function setup(){
  createCanvas(500,500)
  background(255)
  
  img = ml5.imageClassifier('MobileNet',modelReady);
 
}
  