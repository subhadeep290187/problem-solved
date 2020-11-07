let arr1= [[1,0,3],
            [0,8,6],
            [1,2,1]];


for(let i=0;i<arr1.length; i++){
    let row = '';
    for(let j=0;j<arr1.length; j++){
        row += arr1[i][j]+' ';
    }
    console.log(row)
}

