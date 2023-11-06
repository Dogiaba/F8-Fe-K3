import { client } from "./client.js";
import { config } from "./config.js";
const { PAGE_LIMIT } = config;

const root = document.querySelector("#root");
const loading = document.querySelector(".loader");
// let currentPage = 1;
const app = {
  query: {},
  totalPage: 0,
  // currentPage:1,
  render: function (blog) {
    const inHtml = blog.map(
      ({ name, title, content, image }) => `    
            <div class="container">
            <div class="cards tag">
              <div class="item_card">
              <div class="title_card">
                <img src="${image}" alt="img1" />
                <div>
                <h2>${title}</h2>
                <span class="name">${name}</span>
                </div>
              </div>
                <p class="content">
                    ${content}
                </p>
                <div class="icon-tag">
                  <span class="code">Front-end</span>
                  <span class="date">2 tháng trước</span>
                  <span class="read">4 phút đọc</span>
                </div>
                <a href="#">Read More</a>
              </div>
            </div>
          </div>`
    );
    const addPost = async () => {
      root.innerHTML += inHtml.join("");
    }
  addPost();

  },

  addEvent: function(){
     const showLoading = () => {
      loading.classList.add("show");
      setTimeout(()=>{
        setTimeout(() =>{
          this.query._page++;
          this.getBlog(this.query);
          // console.log(this)
          loading.classList.remove("show");
        },3000)
      },1000)
    }

    // function showLoading(){
    //   loading.classList.add("show");
    //   setTimeout(()=>{
    //     setTimeout(() =>{
    //       this.query._page++;
    //       // this.getBlog(this.query);
    //       console.log(this)
    //       loading.classList.remove("show");
    //     },3000)
    //   },1000)
    // }

    window.addEventListener("scroll",()=>{
      const {scrollTop, scrollHeight, clientHeight} = document.documentElement;
      if(scrollTop + clientHeight >= scrollHeight - 5){
        showLoading();
        console.log("ok")
      }
      // console.log(scrollTop);
      // console.log(scrollHeight)
      // console.log(clientHeight)

    })

  },

  getBlog: async function (query = {}) {
    let queryString = new URLSearchParams(query).toString();
    if (queryString) {
      queryString = "?" + queryString;
    }

    const { data: blog } = await client.get("blogs" + queryString);
    this.render(blog);

  },

  start: function () {
    Object.assign(this.query, {
      _limit: PAGE_LIMIT,
      _page: 1,
    });
    this.getBlog(this.query);
    this.addEvent();
  },
};


app.start();
