import { client } from "./client.js";
import { config } from "./config.js";
const { PAGE_LIMIT } = config;

const root = document.querySelector("#root");

const app = {
  query: {},
  totalPage: 0,
  currentPage:1,
  render: function (blog) {
    const inHtml = blog.map(
      ({ name, title, content, image }) => `    
            <div class="container">
            <div class="cards tag">
              <div class="item_card">
                <img src="${image}" alt="img1" />
                <h2>${title}</h2>
                <span class="name">${name}</span>
                <p class="content">
                    ${content}
                </p>
                <a href="#">Read More</a>
              </div>
            </div>
          </div>`
    );
    root.innerHTML += inHtml.join("");
  },
  addEvent: function(){
    window.addEventListener("scroll",()=>{
      const {scrollTop, scrollHeight, clientHeight} = document.documentElement;
      if(scrollTop + clientHeight >= scrollHeight - 5 && hasMoreFacts(currentPage,totalPage,_limit)){
        this.currentPage++;
        
      }
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
    });
    this.getBlog(this.query);
  },
};

app.start();
