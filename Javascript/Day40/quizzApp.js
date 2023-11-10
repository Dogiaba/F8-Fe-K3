import { client } from "./client.js";
import { config } from "./config.js";
const { PAGE_LIMIT } = config;

const startQuizz = document.querySelector(".start-quizz");
const startBtn = document.querySelector(".start-btn");
const quizContent = document.querySelector(".quiz-content");
const container = document.querySelector(".container");

let questionCount;
let scoreCount = 0;
let count = 11;
let countdown;

const app = {
    query: {},
    render: function(question, options){
        const innHtml = `
        <p class="title-question">${question}</p>
        <div class="questions">
        ${options.map((option)=>`<button class="anw-btn">${option}</button>`).join("")}</div>
        `
        quizContent.innerHTML += innHtml;
    },

    addEvent: function(){

        startBtn.addEventListener("click", ()=>{
            startQuizz.classList.add("hide");
            container.classList.remove("hide");
            console.log("ok")

        })

        window.onload = ()=>{
            startQuizz.classList.remove("hide");
            container.classList.add("hide")
        }
    },

    checker: function(optio){
        countdown = setTimeout(()=>{
            count--;
        })
    },

    getQuiz: async function(query = {}){
        let queryString = new URLSearchParams(query).toString();
        if (queryString) {
          queryString = "?" + queryString;
        }
        const {data } = await client.get("quizz" + queryString);
        console.log(data);
        data.forEach((value, index) =>{
            this.render(data[index].question, data[index].options)
        })
        
        
    },


    start: function(){
        Object.assign(this.query,{
            _limit: PAGE_LIMIT,
            _page: 1,
        });
        this.getQuiz(this.query);
        this.addEvent();
    }

    
}

app.start();


