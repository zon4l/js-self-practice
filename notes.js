let container = document.querySelector('.container');
let body = document.querySelector("body")
para_count = 0;

function save()
{
    ++para_count;
    let noteEntry = document.querySelector('#note').value;    
    para = document.createElement("p");
    para.classList.add("para-"+para_count);
    textEntry = document.createTextNode(noteEntry);
    para.appendChild(textEntry);
    container.appendChild(para);
}

body.addEventListener("click", function(e)
{
    if(e.target.nodeName == "P")
    {
        console.log(e.target.className);

        if(e.target.className.indexOf('text-truncate') == -1){
            clicked_para = document.querySelector("." + e.target.className);
            clicked_para.classList.add("text-truncate");
        }
    }
    else
    {
        let active_paras = document.querySelectorAll(".text-truncate");
        for(let i = 0; i < active_paras.length; i++)
        {
            active_paras[i].classList.remove("text-truncate");
        }
    }
}
)