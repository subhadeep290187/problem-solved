
function sumIndex(arr=[], expected){
    for(let i = 0; i<arr.length; i++){
        let nextRequiredItem = expected - arr[i];
  
        if(arr.indexOf(nextRequiredItem)>0){
          return `[${i}, ${arr.indexOf(nextRequiredItem)}]`;
        }
    }
    return '[-1, -1]';
  }

  console.log(sumIndex([2,3,7,4,8],7));
