

let createGrid= (width, height) => {
  let count = 0; 
  let hash = " #";
  let row = "";
  while(count < width){
    row += hash;
    count++;
  }
  let count2 = 0; 
  while(count2 < height){
    if( count2%2 === 0){
      console.log(""+row);
    }
    if( count2%2 === 1){
      console.log(" "+row);
    }
    count2++;
  }

 }

 createGrid(4,5);
