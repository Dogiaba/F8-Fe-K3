import {client} from "./client.js";
import { config } from "./config.js";

client.setUrl(config.SERVER_AUTH_API);

const root = document.querySelector("#root");

const app = {
    loginStatus: false,
    render:function(){
        root.innerHTML = this.isLogin() ?this.dashboasrd() : this.loginForm();
    },
    isLogin: function(){
        return this.loginStatus;
    },



    loginForm: function(){
        return`
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
        <div class="content">
          <div class="login-content">
            <div class="title">
              <h1>WELCOME BACKI</h1>
              <span class="des"
                >Don’t have a account,<span><a href="#">Sign up</a></span></span
              >
            </div>
            <!-- .title -->
            <form action="#">
              <div class="inputs">
                <label for="uname">Username</label>
                <input
                  type="text"
                  placeholder="Enter Username"
                  name="uname"
                  required
                />
              </div>
  
              <div class="inputs pass">
                <label for="psw">Password</label>
                <input
                  type="password"
                  placeholder="Enter Password"
                  name="psw"
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
        
        `
    },
    addEvent: function(){
        root.addEventListener("submit", (e)=>{
            e.preventDefault();
            const form = [...new FormData(e.target)];
            const data = Object.fromEntries(form);
            this.login(data, e.target);
            console.log(data);
        });


        //hear
    },

    start: function(){
        this.render();
        this.addEvent();
    }

    
}
app.start();