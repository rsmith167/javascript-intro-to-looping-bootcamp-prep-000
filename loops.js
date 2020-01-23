var array[]

function forLoop(array){
  
  for( var i = 0; i < 25; i++){
    
    [...array, `I am ${i} strange loop.`]
  }
  return array
}