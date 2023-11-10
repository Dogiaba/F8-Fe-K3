//Cho trước 1 mảng số nguyên, yêu cầu tìm số lớn nhất, nhỏ nhất trong mảng và vị trí

function minElement(array) {
  //Giả định vị trí số lớn nhất là số đầu tiên của mảng.
  let min = array[0];
  let min_index = 0;
  /*So sánh từng số trong mảng với giá trị đầu tiên để tìm ra giá trị lớn nhất*/
  for (let i = 0; i < array.length; ++i) {
    if (min > array[i]) {
      //Thay đổi giá trị lớn nhất nếu tìm ra số lớn hơn
      min = array[i];
      min_index = i;
    }
  }
  console.log("min= ", min);
  console.log("min_index= ", min_index);
}

// Function to find the maximum value
function maxElement(array) {
  //Giả định vị trí số lớn nhất là số đầu tiên của mảng.
  let max = array[0];
  let max_index = 0;
  /*So sánh từng số trong mảng với giá trị đầu tiên để tìm ra giá trị lớn nhất*/
  for (let i = 0; i < array.length; ++i) {
    if (max < array[i]) {
      //Thay đổi giá trị lớn nhất nếu tìm ra số lớn hơn
      max = array[i];
      max_index = i;
    }
  }
  console.log("max= ", max);
  console.log("max_index= ", max_index);
}

let arr = [9, 2, 12, 5, 90, 3, 6];
minElement(arr);
maxElement(arr);

<!-- ===================================================================================== -->


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

