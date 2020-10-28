let arr = [[1,0,3],
            [0,8,6],
            [1,2,1]];

let rowLen = arr.length;
let sum= 0;
for(let i=0; i<rowLen; i++){
  let columnLen = arr[i].length;
  let row= "";
  let count = 0;
  for(let j=0;j<columnLen; j++){
    //count += arr[0][0]
    if(i===0){
      row += arr[0][count++];
    }else if( i === columnLen-1){
      row += arr[columnLen-1][count++]
    }else if(i===j){
      row +=arr[i][j]
    }else{
      row+=" "
    }
    
  }
  console.log(row)
}
