let img ;


function setup(){
  createCanvas(500,500)
  background(255)
  
  img = ml5.imageClassifier('MobileNet', modelLoaded);
 
}
  console.log('ml5 version:', ml5.version);