const row = 7, column = 7;

const container = document.getElementById('mainContainer');
container.addEventListener('keyup', checkCoordinates);

// auto generating all the elements
function createElems(){
    for(let i=0; i<row; i++){
        const elm = document.createElement("div");
        elm.setAttribute("class", "box-container");
        container.append(elm)
        for(let j=0; j<column; j++){
            const subElm = document.getElementsByClassName("box-container");
            const boxes = document.createElement("button");
            boxes.setAttribute("class", "box");
            boxes.setAttribute("data-coor", `${i},${j}`)
            subElm[i].appendChild(boxes);
        }
    }
}
createElems();


const firstElm = document.querySelector("[data-coor*='0,0']");
firstElm.focus();

let results = [];

function checkCoordinates(ev){
    const currentCoor = ev.target.dataset.coor;
    const keyCode = ev.keyCode;
    let coordinates, newCoordinates, nextElm;
    switch (keyCode) {       
        case 37://left arrow
            coordinates = currentCoor.split(",");
            newCoordinates = `'${coordinates[0]},${parseInt(coordinates[1])-1}'`;
            nextElm = document.querySelector(`[data-coor*=${newCoordinates}]`);   
            debugger
            if(nextElm){
                nextElm.focus();
                results.push(`{${newCoordinates}}`);
            }
            break;
        case 38:// up arrow
            coordinates = currentCoor.split(",");
            newCoordinates = `'${parseInt(coordinates[0])-1},${coordinates[1]}'`;
            nextElm = document.querySelector(`[data-coor*=${newCoordinates}]`);   
            if(nextElm){
                nextElm.focus();
                results.push(`{${newCoordinates}}`);
            }
            break;
        case 39:// right arrow     
            coordinates = currentCoor.split(",");
            newCoordinates = `'${coordinates[0]},${parseInt(coordinates[1])+1}'`;
            nextElm = document.querySelector(`[data-coor*=${newCoordinates}]`);   
            if(nextElm){
                nextElm.focus();
                results.push(`{${newCoordinates}}`);
            } 
            break;
        case 40:// down arrow  
            coordinates = currentCoor.split(",");
            newCoordinates = `'${parseInt(coordinates[0])+1},${coordinates[1]}'`;
            nextElm = document.querySelector(`[data-coor*=${newCoordinates}]`);   
            if(nextElm){
                nextElm.focus();
                results.push(`{${newCoordinates}}`);
            }    
            break;
    }
    document.getElementById("output").innerHTML = `[${results}]`;
    console.log(results);
}