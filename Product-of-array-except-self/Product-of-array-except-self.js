let arr = [1,2,3,4];


// with O(n^2) complexity
const product_of_array_except_self_n2 = (arr)=>{
    const newArr = [];
    arr.forEach(elm => {
        let product = 1;
        arr.forEach(elm1=>{
            if(elm!==elm1){
                product*=elm1;
            } 
        })
        newArr.push(product);
    });
    return newArr;
}
const t0 =  performance.now();
console.log("with O(n^2)", product_of_array_except_self_n2(arr), 
"Execution Time =", performance.now()-t0);
// with O(n)
const product_of_array_except_self_n_1 = (arr)=>{
    let product = 1;
    const output = [];
    arr.forEach(elm=>{
        product *= elm;
    });
    arr.forEach(elm=>{
        output.push(product/elm);
    })
    return output;
}
const t1 =  performance.now();
console.log("With O(n)",product_of_array_except_self_n_1(arr),
"Execution Time =", performance.now()-t1);