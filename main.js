// const inputBox = document.querySelector("#input-box");
// const list = document.querySelector("#list-container");
// const dataDate = document.querySelector("#data-date");

// function addTask(){
//     if(inputBox.value === ''){
//         alert("You must write something")
//     } else {
//         let li = document.createElement("li");
//         li.innerHTML = inputBox.value;
//         list.appendChild(li);
//         let pTag = document.createElement("p");
//         pTag.innerHTML = "Date:"+dataDate.value;
//         li.appendChild(pTag)

//         let span = document.createElement("span")
//         span.innerHTML = "\u00d7";
//         li.appendChild(span)
//     }
//     inputBox.value = ""
//     saveData();
// }
// list.addEventListener("click", (e)=>{
//     if (e.target.tagName === "LI") {
//         e.target.classList.toggle("checked");
//     saveData();
//     } else if (e.target.tagName === "SPAN") {
//         e.target.parentElement.remove();
//     saveData();
//     }
// })

// function saveData(){
//     localStorage.setItem("data", list.innerHTML)
// }
// function showTask(){
//     list.innerHTML = localStorage.getItem("data");
// }
// showTask();

// const formbox = document.querySelector("#input-box");
// const taskList = document.querySelector("#list-container");
// function TaskM(){
//     if(formbox.value === ''){
//         alert("Fuck YourSelf!")
//     }else{
//         let li = document.createElement("li")
//         li.innerHTML = formbox.value;
//         taskList.appendChild(li)
//         let span = document.createElement("span");
//         span.innerHTML="\u00d7";
//         li.appendChild(span)
//         formbox.value = ""
//         saveData()
//     }
// }
// taskList.addEventListener("click", (e)=>{
//     if(e.target.tagName === "LI"){
//         e.target.classList.toggle("checked")
//         saveData()
//     } else if(e.target.tagName === "SPAN"){
//         e.target.parentElement.remove();
//         saveData()
//     }
// })
// function saveData(){
//     localStorage.setItem("data", taskList.innerHTML)
// }

// function getData(){
//    taskList.innerHTML = localStorage.getItem("data")
// }
// getData();


const inputBox = document.querySelector("#input-box");
const listTask = document.querySelector("#list-container");

function TaskM(){
    if(inputBox.value ===""){
        alert("Fuck yourSELF")
    }else{
        let li = document.createElement("li")
        li.innerHTML = inputBox.value;
        listTask.appendChild(li)
        let span = document.createElement("span")
        span.innerHTML = "\u00d7"
        li.appendChild(span)
        inputBox.value=""
        saveData()
    }
}

listTask.addEventListener("click", (e)=>{
    if (e.target.tagName==="LI") {
        e.target.classList.toggle('checked');
        saveData()
    } else if(e.target.tagName==="SPAN"){
        e.target.parentElement.remove();
        saveData()
    }
})

function saveData(){
    localStorage.setItem("data", listTask.innerHTML)
}
function getData(){
    listTask.innerHTML = localStorage.getItem("data")
}
getData();