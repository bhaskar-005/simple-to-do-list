const add = document.querySelector('.submit');
const element =document.querySelector('.todo')
const text =document.querySelector('.todo input[type="text"]')
 const taskBox = document.querySelector('.task-box');


add.addEventListener("click",function(){

    const textIn=text.value;
    const newDiv =document.createElement('div')
    newDiv.classList.add('task-box') 

    newDiv.innerHTML=`${textIn} <span class="for-btn"> <i class="fa-solid fa-square-check"></i> <i class="fa-solid fa-square-minus"></i></span>`
    todo.append(newDiv);
    console.log(newDiv);
 

    const doneBtn = newDiv.querySelector('.fa-square-check');
doneBtn.addEventListener('click', function () {
    taskBox.style.textDecoration = "line-through";
      newDiv.style.textDecoration = "line-through";
});
const removeBtn = newDiv.querySelector('.fa-square-minus');
    removeBtn.addEventListener('click', function () {
        newDiv.remove();  
          taskBox.remove();
    });  
     text.value="";
})


