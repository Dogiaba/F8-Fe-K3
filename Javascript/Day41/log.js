import { client } from "./client.js";
import { config } from "./config.js";

client.setUrl(config.SERVER_AUTH_API);

const root = document.querySelector("#root");
const links = document.querySelectorAll(".links");
// const forms = document.querySelectorAll(".forms");
const form = document.querySelectorAll("form");
const app = {
  loginStatus: false,
//   user: {},
  render: function () {
    root.innerHTML = this.isLogin() ? this.homePage() : this.loginForm();
  },
  isLogin: function () {
    return this.loginStatus;
  },

  homePage: function () {
    return `<div class="container">
        <nav class="nav-bar">
        <div class="logo">
          <a href="#"><img src="./img/Vector.jpg" alt="imgLogo" /></a>
        </div>
        <div class="infor-navRight">
          <ul class="right-nav">
            <li><a href="#">Help</a></li>
            <li><a href="#">Contact Us</a></li>
            <li><a href="#">English</a></li>
            <li><a href="#" class="">Logout</a></li>
            <li><a href="#"><i class="fa-solid fa-house"></i></a></li>
          </ul>
        </div>

        <!-- .infor-navRight -->
      </nav>
      <div class="content ">
        <h1>Chào mừng bạn đã vào đây!</h1>
        <a href="#" class="logout">LogOut</a>
      </div>
        </div>`;
  },

  signUpForm: function () {
    return ``;
  },

  loginForm: function () {
    return `
        <div class="container">
        <nav class="nav-bar">
          <div class="logo">
            <a href="#"><img src="./img/Vector.jpg" alt="imgLogo" /></a>
          </div>
          <div class="infor-navRight">
            <ul class="right-nav">
              <li><a href="#">Help</a></li>
              <li><a href="#">Contact Us</a></li>
              <li><a href="#">English</a></li>
              <li><a href="#">Sign up</a></li>
              <li><a href="#"><i class="fa-solid fa-house"></i></a></li>
            </ul>
          </div>
          <!-- .infor-navRight -->
        </nav>
        <!-- .nav-bar -->
        <div class="content ">
          <div class="login-content forms ">
            <div class="title">
              <h1>WELCOME BACKI</h1>
            </div>
            <!-- .title -->
            <!--loginForm-->
            <form class="signInForm" action="#">
             <span class="des"
             >Don’t have a account,<span><a class="links signUp-link" href="#">Sign up</a></span>
             </span>
              <div class="inputs">  
                <label for="uname">Username</label>
                <input
                  type="text"
                  placeholder="Enter Username"
                  name="email"
                  required
                />
              </div>
  
              <div class="inputs pass">
                <label for="psw">Password</label>
                <input
                  type="password"
                  placeholder="Enter Password"
                  name="password"
                  required
                />
              </div>
  
              <div class="checkRMember">
                <div class="Rmember">
                  <input type="radio" name="radi" id="numberRadi" />
                  <label for="rad">Remeber me</label>
                </div>
                <a href="#">Forget password</a>
              </div>
              <!-- .checkRMember -->
              <button type="submit" class="btn-sign">Sign in</button>
            </form>

            <!--SignForm-->
            <form class="signUpForm" action="#">
            <span class="des"
            >Have a account,<span><a class="links signIn-link" href="#">Sign in</a></span>
            </span>
            <div class="inputs">
            <label for="uname">Username</label>
            <input
              type="text"
              placeholder="Enter Username"
              name="name"
              required
            />
          </div>

            <div class="inputs">
              <label for="uname">Enter email</label>
              <input
                type="text"
                placeholder="Enter Email"
                name="email"
                required
              />
            </div>

            <div class="inputs pass">
              <label for="psw">Password</label>
              <input
                type="password"
                placeholder="Enter Password"
                name="password"
                required
              />
            </div>

            <button type="submit" class="btn-sign btn-signUp">Sign Up</button>
          </form>

            <div class="socice">
              <a href="#" class=" btn-socice Google"><img src="./img/google.png" alt=""></a>
              <a href="#" class=" btn-socice Facebook"><img src="./img/facebook.png" alt=""></a>
              <a href="#" class=" btn-socice Apple"><img src="./img/apple.png" alt=""></a>
            </div>
            <!-- .socice -->
          </div>
          <!-- .login-content -->
          <div class="right-img">
              <img src="./img/Exlorer_Illustration 1.jpg" alt="img">
          </div>
        </div>
        <!-- .content -->
      </div>
        
        `;
  },
  addEvent: function () {
    root.addEventListener("submit", (e) => {
      e.preventDefault();
      const form = [...new FormData(e.target)];
      const data = Object.fromEntries(form);
      this.login(data, e.target);
      console.log(data);
    });

    root.addEventListener("click", (e) => {
      if (e.target.classList.contains("logout")) {
        e.preventDefault();
        this.handLogout();
      }
    });

    links.forEach((link,index) => {
      link.addEventListener("click", (e) => {
        e.preventDefault();
        form[index].classList.toggle("show-signup");
        console.log("ok");
      });
    });
  },

  handLogout: function () {
    //here
    localStorage.removeItem("login_token");
    this.loginStatus = false;
    this.render();
  },
  login: async function ({ email, password }, el) {
    const { data: tokens, response } = await client.post("/auth/login", {
      email,
      password,
    });
    // if (!response.ok) {
    //   this.showMess(el, "Login false");
    //   return;
    // }
    localStorage.setItem("login_token", JSON.stringify(tokens.data));
    this.loginStatus = true;
    this.checkAuth();
    this.render();
  },

  signUp: async function ({ email, password, name }) {
    const { data: tokens } = await client.post("/auth/register", {
      email,
      password,
      name,
    });
  },
  checkAuth: async function () {
    if (localStorage.getItem("login-token")) {
      try {
        const {accessToken } = JSON.parse(
          localStorage.getItem("login-token")
        );
        if (!accessToken) {
          throw new Error("Access TOken Not Exists");
        }
        root.innerHTML = `<div class="container">
            <h2>...</h2></div>`;
        this.loginStatus = true;
        client.setToken(accessToken);
        const { data: user, response } = await client.get("/users/profile");

        if (!response.ok) {
          this.loginStatus = false;
          return;
        }
        this.loginStatus = true;
        this.user = user;
      } catch (e) {
        throw new Error(e);
        // this.loginStatus = false;
      }
      console.log(this.loginStatus)
      this.render();
      
    }
  },

  start: function () {
    this.render();
    this.addEvent();
    this.checkAuth();
  },
};
app.start();
