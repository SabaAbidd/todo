const form=document.forms["myform"]
const input = form["task"]
const task_list= document.getElementById("task_list")
form.addEventListener("submit",(e)=>{
    e.preventDefault()

    const val=input.value;

    const newLi = document.createElement("li")
    newLi.innerHTML = val + "<i onclick =\"deleteTask(this)\"class=\"fa-solid fa-xmark\" style=\"float: right;\"></i>"

    task_list.appendChild(newLi);

})

function deleteTask(x){
console.log("HEllo")
x.parentElement.style.textDecoration="line-through"
}