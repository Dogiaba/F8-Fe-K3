
const todoButton = document.querySelector(".todo-button");
const addForm = document.querySelector(".add-form");
const cancel = document.querySelector(".cancel");
const form = document.querySelector("form");



todoButton.addEventListener("click",()=>{
    form.style.display="block";
})
cancel.addEventListener("click",()=>{
    form.style.display="none";
})

document.addEventListener("DOMContentLoaded",function(){
    const serverApi = `https://mjct5n-8080.csb.app/todos`;
    const ulTodoList = document.querySelector(".todo-list");

    function getAllTodos(){
        return new Promise(resolve => {
            fetch(new Request(serverApi))
            .then(res =>{return res.json();})
            .then(data => {resolve(data);})
        })
    }

    function saveTodo(text) {
        let req = new Request(dbUrl,{ method: 'POST',
            headers: new Headers({'Content-Type': 'application/json'}),
            body: JSON.stringify({text: text})
        });

        return new Promise(resolve => {
            fetch(req)
                .then(res => { return res.json(); })
                .then(data => { resolve(data); });
        })
    }

    function appendTodolist(todo){
        ulTodoList.innerHTML += `
        
        `
    }

})


// openModalButtons.forEach((button) => {
//   button.addEventListener("click", () => {
//     const modal = document.querySelector(button.dataset.modalTarget);
//     openModal(modal);
//   });
// });
// overlay.addEventListener("click", () => {
//   const modals = document.querySelectorAll(".modal.active");
//   modals.forEach((modal) => {
//     closeModal(modal);
//   });
// });

// closeModalButtons.forEach((button) => {
//   button.addEventListener("click", () => {
//     const modal = button.closest(".modal");
//     closeModal(modal);
//   });
// });

// function openModal(modal) {
//   if (modal == null) return;
//   modal.classList.add("active");
//   overlay.classList.add("active");
// }

// function closeModal(modal) {
//   if (modal == null) return;
//   modal.classList.remove("active");
//   overlay.classList.remove("active");
// }
