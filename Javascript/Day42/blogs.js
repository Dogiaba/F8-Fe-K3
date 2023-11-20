import { client } from "./client.js";
import { config } from "./config.js";
const { PAGE_LIMIT } = config;

client.setUrl(config.SERVER_AUTH_API);

const root = document.querySelector("#root");

const app = {
  loginStatus: false,
  register: false,
  user: {},
  query: {},
  totalPage: 0,

  render: function () {
    root.innerHTML = this.isLogin()
      ? this.homePage()
      :( this.register
      ? this.signUp()
      : this.loginForm());
    // root.innerHTML = this.loginForm();
    // root.innerHTML = this.signUp();
  },

  isLogin: function () {
    return this.loginStatus;
  },

  hederLog: function () {
    const headerLog = `
    <div class="header-log">
        <h2>Blogger</h2>
        <button class="btn-log">Login</button>
    </div>`;
    // root.innerHTML += headerLog.join("");
    return headerLog;
  },

  listBlog: function (blogs) {
    const inHtml = blogs.map(
      ({ userId, title, content,timeUP }) =>{
        const phoneRegex = /^(0|\+84)(?:\d{9})$/;
        content = content.replace(phoneRegex,`<a href="tel:$1" target="_blank" title="Gọi tới số:$1" data-start="$2">$1</a>`);
    
        const mailRegex = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
        content = content.replace(mailRegex,`<a href="tel:$1" target="_blank" title="email: $1" data-start="$2">$1</a>`);
    
        const youTuRegex = /^(?:https?:\/\/)?(?:www\.)?(?:youtu\.be\/|youtube\.com\/(?:embed\/|v\/|watch\?v=|watch\?.+&v=))((\w|-){11})(?:\S+)?$/
        content = content.replace(youTuRegex,`<a href="tel:$1" target="_blank" title="link: $1" data-start="$2">$1</a>`);
      return`
            <div class="container">
            <div class="cards tag">
              <div class="item_card">
              <div class="title_card">
                <div>
                <h2>${title}</h2>
                <span class="name">${userId.name}</span>
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
          </div>
        `}
    );
    const listBlogs = document.createElement("div");
    listBlogs.classList.add("boxBlogs");

    listBlogs.innerHTML += this.hederLog() + inHtml.join("");
    root.appendChild(listBlogs);
  },

  homePage: function () {
    return `<div class="container py-3">
      <h2>chào mừng bạn</h2>
        <ul class="list-unstyled d-flex gap-2 profile">
        <li>Hello:<span> Loading... </span></li>
        <li><a href="#" class="logout">Dang xuat</a></li>
        </ul>
        <form class="postBlogForm">
            <div class="mb-3">
                <label for="">Enter your title</label>
                <input
                type="text"
                name="name"
                class="form-control"
                placeholder="Please enter the title..."
              />
            </div>
            <div class="mb-3">
                <label for="exampleFormControlTextarea1" class="form-label">Example textarea</label>
            <textarea class="form-control" name="content" id="exampleFormControlTextarea1" rows="3"></textarea>
            <p> test</p>
            </div>
            <div class="mb-3">
                  <input type="date" placeholder="MM/DD/YYYY">
            </div>

            <button type="submit" class="btn btn-primary btn-post">Post</button>

        </form>
        </div>`;
  },

  loginForm: function () {
    return `<div class="container py-3 form1">
        <div class="row justify-content-center">
          <div class="col-7">
            <h2 class="text-center">Login</h2>
            <form class="form-signIn" action="">
              <div class="mb-3">
                <label for="">Email</label>
                <input
                  type="email"
                  name="email"
                  class="form-control"
                  placeholder="Email..."
                />
              </div>
              <div class="mb-3">
                <label for="">Password</label>
                <input
                  type="password"
                  name="password"
                  class="form-control"
                  placeholder="Password..."
                />
              </div>
              <div class="d-grid">
                <button class="btn btn-primary converIn">Đăng nhập</button>
              </div>

              <div class="msg text-danger text-center"></div>
            </form>
          </div>
          <div class="d-grid mb-3 btn-sigU">
          <button class=" btn btn-primary btn-signUp converUp">Đăng kí</button>
          </div>
        </div>
      </div>`;
  },

  signUp: function () {
    return `
    <div class="container py-3 sign-up form2">
    <div class="row justify-content-center">
      <div class="col-7">
        <h2 class="text-center">Sign Up</h2>
        <form class="form-signUp" action="">
    
        <div class="mb-3">
          <label for="">Name</label>
          <input
          type="text"
          name="name"
          class="form-control"
          placeholder="name..."
        />
          </div>
    
          <div class="mb-3">
            <label for="">Email</label>
            <input
              type="email"
              name="email"
              class="form-control"
              placeholder="Email..."
            />
          </div>
    
          <div class="mb-3">
            <label for="">Password</label>
            <input
              type="password"
              name="password"
              class="form-control"
              placeholder="Password..."
            />
          </div>

          <div class="d-grid ">
            <button class=" btn btn-primary btn-signUp converUp">Đăng ký</button>
          </div>
    
        </form>
        <div class="d-grid btn-sigI">
            <button class="btn btn-primary converIn">Đăng nhập</button>
        </div>
      </div>
    </div>
    </div>
    `;
  },
  postBlog: async function({title, content}, el){
    const {data:tokens, response} = await client.post("/blogs",{
      title, content,
    });
    if(!response.ok){
      this.showMess(el,"Post lỗi")
      return;
    }
    console.log("post ok", tokens);
    this.getBlog()
  },


  getBlog: async function (query = {}) {
    let queryString = new URLSearchParams(query).toString();
    if (queryString) {
      queryString = "?" + queryString;
    }

    const { data: blogs } = await client.get("/blogs" + queryString);
    this.blogs = blogs.data;
    // console.log(blogs);
    this.listBlog(blogs.data);
    // console.log(blogs.data);
  },

  addEvent: function () {
    root.addEventListener("submit", (e) => {
      e.preventDefault();
      //get data when login
      const form = [...new FormData(e.target)];
      const data = Object.fromEntries(form);
      // console.log(e.target);
      if (e.target.classList.contains("form-signIn")) {
        this.login(data, e.target);
      }
      if(e.target.classList.contains("postBlogForm")){
        e.preventDefault();
        this.postBlog(data, e.target)
        // const  headerLog = document.querySelector(".header-log");
        // headerLog.style.display = "none";
      }

      if (e.target.classList.contains("form-signUp")) {
        this.register(data, e.target);
        // console.log("okk" + data);
      }
    });

    root.addEventListener("click", (e) => {
      if (e.target.classList.contains("logout")) {
        e.preventDefault();
        this.handLogout();
      }
    });

    root.addEventListener("click", (e) => {
      const form1 = document.querySelector(".form1");
      const boxBlogs = document.querySelector(".boxBlogs");
      if (e.target.classList.contains("btn-log")) {
        e.preventDefault();
        // console.log(form1);
        form1.style.display = "block";
        boxBlogs.style.display = "none";
      }

    });

    // const btn = document.querySelector(".btn-signUp");
    root.addEventListener("click", (e) => {
      if (e.target.classList.contains("converIn")) {
        // this.signUp();
        if (this.register !== false) {
          this.register = false;
          this.render();
        }
      } else if (e.target.classList.contains("converUp")) {
        if (this.register !== true) {
          this.register = true;
          this.render();
        }
      }



    });

    root.addEventListener("click",(e) =>{
      const postBlogForm = document.querySelector(".postBlogForm")
      if(e.target.classList.contains("btn-post")){
        e.preventDefault();
        console.log("ok");
        const title = postBlogForm.querySelector('[name = "name"]').value;
        const content = postBlogForm.querySelector("#exampleFormControlTextarea1").value;


        const data ={
          title: title,
          content: content,
        }
        this.postBlog(data, postBlogForm);
        console.log("form data:", data);

      }
    });
  },
  // regexLink: function(content){
  //   // const contents = postBlogForm.querySelector("#exampleFormControlTextarea1");
  //   // let partten = /((0|\+84)(?:\d{9}))|(^[a-zA-Z0-9+.-_]+\.[a-zA-Z]{2,3})$/g;
  //   const phoneRegex = /^(0|\+84)(?:\d{9})$/;
  //   content = content.replace(phoneRegex,`<a href="tel:$1" target="_blank" title="Gọi tới số:$1" data-start="$2">$1</a>`);

  //   const mailRegex = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
  //   content = content.replace(mailRegex,`<a href="tel:$1" target="_blank" title="email: $1" data-start="$2">$1</a>`);

  //   const youTuRegex = /^(?:https?:\/\/)?(?:www\.)?(?:youtu\.be\/|youtube\.com\/(?:embed\/|v\/|watch\?v=|watch\?.+&v=))((\w|-){11})(?:\S+)?$/
  //   content = content.replace(youTuRegex,`<a href="tel:$1" target="_blank" title="link: $1" data-start="$2">$1</a>`);

  //   return content;

  // },

  handLogout: function () {
    localStorage.removeItem("login_token");
    this.loginStatus = false;
    //call Api / logout
    this.render();
    const form1 = document.querySelector(".form1");
    console.log(root.innerHTML);
    form1.style.display = "block";
  },
  showMess: function (el, msg) {
    el.querySelector(".msg").innerText = "";
    el.querySelector(".msg").innerText = msg;
  },

  login: async function ({ email, password }, el) {
    const { data: tokens, response } = await client.post("/auth/login", {
      email,
      password,
    });
    this.loading(el, false);
    if (!response.ok) {
      this.showMess(el, "Email hoac mat khau ko chinh xac");
      return;
    }
    // localStorage.setItem("login_token", JSON.stringify(tokens.data));
    localStorage.setItem("login_token", JSON.stringify(tokens.data));
    // localStorage.setItem("access_Token", JSON.stringify(tokens.accessToken));
    // localStorage.setItem("refresh_Token", JSON.stringify(tokens.refreshToken));
    console.log(localStorage);
    this.loginStatus = true;
    this.checkAuth();
    this.render();
  },

  // register: async function ({ name, email, password }) {
  //   const { data, response } = await client.post("/auth/register", {
  //     name,
  //     email,
  //     password,
  //   });
  //   if (!response.ok) {
  //     this.showMess(el, "Dang ky khong thanh cong!!");
  //     return;
  //   }
  //   await this.login({ email, password }, el);
  // },

  loading: function (el, startus = true) {
    const btn = el.querySelector(".btn");
    btn.innerHTML = startus
      ? `<span class="spinner-border spinner-border-sm" aria-hindden="true">
    </span>Loading `
      : `Dang nhap`;
    btn.disabled = startus;
  },

  showProfile: async function () {
    const profile = root.querySelector(".profile span");
    const { data: user } = await client.get("/users/profile");
    profile.innerText = this.user.name;
  },

  checkAuth: async function () {
    // if (localStorage.getItem("login-token")) 
    if (localStorage.getItem("login_token")) {
      try {
        const {accessToken:access_Token} = JSON.parse(localStorage.getItem("login_token"));
        if (!access_Token) {
          throw new Error("Access TOken Not Exists");
        }

        root.innerHTML = `<div class="container">
            <h2>...</h2></div>`;
        this.loginStatus = true;

        client.setToken(access_Token);
        const { data: user, response } = await client.get("/users/profile");

        if (!response.ok) {
          this.loginStatus = false;
          return;
        }
        this.loginStatus = true;
        this.user = user;
      } catch (e) {
        // throw new Error(e);
        console.log(e);
        this.loginStatus = false;
      }
      // console.log(this.loginStatus);
      this.render();
    }
  },

  start: function () {
    Object.assign(this.query, {
      _limit: PAGE_LIMIT,
      _page: 1,
    });
    this.getBlog(this.query);
    this.render();
    this.addEvent();
    this.checkAuth();
  },
};

app.start();
