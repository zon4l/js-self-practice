let sum = 0;


let lSum = 0;
let iSum = 0;
let sSum = 0;


let lPerc = 0;
let iPerc = 0;
let sPerc = 0;


sumEntry = document.querySelector("#sum");

iSumEntry = document.querySelector("#i-total");
iPercEntry = document.querySelector("#i-perc");

sSumEntry = document.querySelector("#s-total");
sPercEntry = document.querySelector("#s-perc");

lSumEntry = document.querySelector("#l-total");
lPercEntry = document.querySelector("#l-perc");

let table = document.querySelector("table");


function entries(type, amount)
{
    switch(type){
        case "investment":
            iSum += amount;
            iSumEntry.innerHTML = iSum;

            iPerc = ((iSum/sum)*100);
            sPerc = ((sSum/sum)*100);
            lPerc = ((lSum/sum)*100);
            iPercEntry.innerHTML = iPerc;
            sPercEntry.innerHTML = sPerc;
            lPercEntry.innerHTML = lPerc;
            break;
        
        case "savings":
            sSum += amount;
            sSumEntry.innerHTML = sSum;

            iPerc = ((iSum/sum)*100);
            sPerc = ((sSum/sum)*100);
            lPerc = ((lSum/sum)*100);
            iPercEntry.innerHTML = iPerc;
            sPercEntry.innerHTML = sPerc;
            lPercEntry.innerHTML = lPerc;
            break;

        case "leisure":
            lSum += amount;
            lSumEntry.innerHTML = lSum;

            iPerc = ((iSum/sum)*100);
            sPerc = ((sSum/sum)*100);
            lPerc = ((lSum/sum)*100);
            iPercEntry.innerHTML = iPerc;
            sPercEntry.innerHTML = sPerc;
            lPercEntry.innerHTML = lPerc;
            break;
    }
}

function getDate()
{
    let today = new Date();
    let dd = String(today.getDate()).padStart(2, '0');
    let mm = String(today.getMonth() + 1).padStart(2, '0'); 
    let yyyy = today.getFullYear();

    today = mm + '/' + dd + '/' + yyyy;

    return today;
}


function add()
{
    let place = document.querySelector("#where").value;
    let amount = document.querySelector("#amount").value; 
    amount = parseInt(amount);
    let type = document.querySelector("#type").value;

    sum = sum + amount;
    sumEntry.innerHTML = sum;

    entries(type, amount);
    let date = getDate();

    table.style.display = 'block';

    let row = table.insertRow();

    let pCell = row.insertCell(0);
    let aCell = row.insertCell(1);
    let tCell = row.insertCell(2);
    let dCell = row.insertCell(3);

    pCell.innerHTML = place;
    aCell.innerHTML = amount;
    tCell.innerHTML = type;
    dCell.innerHTML = date;
}