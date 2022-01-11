let list = document.querySelector(".list");
let btn = document.querySelector("button");

function add() 
{
    let task = document.querySelector("#task-name").value

    if(task == '')
    {
        alert("enter a valid task");
    }

    else
    {
        let newComplete = document.createElement('button');
        newComplete.innerHTML = "Complete";
        newComplete.onclick = function()
        {
            newElement.style.textDecoration = 'line-through';
        }

        let newRemove = document.createElement('button');
        newRemove.innerHTML = "Remove";
        newRemove.onclick = function()
        {
            list.removeChild(newElement);
        }

        let newElement = document.createElement('li');
        newElement.appendChild(document.createTextNode(task));

        newElement.appendChild(newComplete);
        newElement.appendChild(newRemove);

        list.appendChild(newElement);
    }
}