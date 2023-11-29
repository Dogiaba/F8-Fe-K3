import React, { useReducer, useState } from 'react'
import "uuid"
import "bootstrap/dist/css/bootstrap.min.css"
import "../assets/Styles/Styles.scss"
import"../assets/Styles/styless.css"



function NewToDoFrom({task, createTodo}) {
    const [userInput, setUserInput]= useReducer(
        (state, newState) =>({...state,...newState}),
        {
            task: ""
        }
    )

    const handleChanhe = evt =>{
        setUserInput({[evt.target.name]: evt.target.value});
    }

    const handleSubmit = evt =>{
        evt.preventDefault();
        const newTodo ={
            id: uuid(),
            task: userInput.task, completed: false,
        }
        createTodo(newTodo);
        setUserInput({task:""})
    }
  return (
    <div className='mx-auto p-5'>
    <div className="container bg-slate-700 p-4 flex flex-col flex bg-warning bg-gradient">
        <div className="mx-auto w-full max-w-3xl px-4 py-6 ">
            <h1 className='text-center'>Welcome to Todo App!</h1>
            <form className="pagination justify-content-center"  onSubmit={handleSubmit}>
                <div className="flex items-center border-b  py-2">
                    <input value={userInput.task} onChange={handleChanhe} id="task" name="task" type='text'  placeholder='Thêm một việc làm mới' className=" bg-transparent px-2 w-full mr-3 py-1  focus:outline-none text-white h5 pb-2 mb-4 inputBtn" autoFocus/>
                    <button type='submit' className=" hover:bg-teal-700 text-white  font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline flex-shrink-0 btn btn-success">Thêm mới</button>
                </div>
            </form>
            <ul className='list-disc w-full max-w-3xl flex flex-col gap-4'>
                <li className='rounded bg-white shadow-md px-4 pt-4 pb-5 flex flex-col my-2'>không có todo</li>
            </ul>
        </div>
    </div>
</div>
  )
}

export default NewToDoFrom