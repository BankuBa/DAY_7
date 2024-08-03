let input = document.querySelector(".input")
let add_button = document.querySelector("button")
let app_area = document.querySelector('.todo_app')





add_button.addEventListener('click', () => {
  

  if (input.value === '') {
  window.alert('Please type something')
  } else {
    let created_trash = document.createElement("ion-icon");
    let created_list = document.createElement("li");
    let created_paragraph = document.createElement("p");
    created_trash.name = "trash-bin-outline";
    app_area.appendChild(created_list);
    created_list.appendChild(created_paragraph);
    created_list.appendChild(created_trash);
    created_trash.name = "trash-bin-outline";
    created_paragraph.innerHTML = input.value;
    input.value = "";

    
    created_paragraph.addEventListener('click', () => {
        created_list.classList.toggle('completed')
    })
    
    created_trash.addEventListener('click', ()=>{
      app_area.removeChild(created_list)
    })
}
  
})


