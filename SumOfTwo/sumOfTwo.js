function sumIndex(arr=[], expected){
    arr.every((item, i)=>{
        let nextRequiredItem = expected - item;
  
        if(arr.indexOf(nextRequiredItem)>0){
          console.log(`[${i}, ${arr.indexOf(nextRequiredItem)}]`);
          return false;
        }else{
          return true;
        }
  
    })
  }
  
  
  sumIndex([2,3,7,4,8], 7);