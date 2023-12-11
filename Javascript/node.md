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

        <h1>DAY 1</h1>
            <a href="https://dogiaba.github.io/F8-Fe-K3/Day1/">Home work day 1</a>
        <h1>DAY 2</h1>
          <a href="#">Update...</a>
        <h1>DAY 3</h1>
            <a href="https://dogiaba.github.io/F8-Fe-K3/Day3/CallToAction/">Call To Action</a>
            <a href="https://dogiaba.github.io/F8-Fe-K3/Day3/ContactMap/">Contact map</a>
            <a href="https://dogiaba.github.io/F8-Fe-K3/Day3/FormAccessManager/">Form Access Manager</a>
            <a href="https://dogiaba.github.io/F8-Fe-K3/Day3/FormContact/">Form Contact</a>
            <a href="https://dogiaba.github.io/F8-Fe-K3/Day3/CustomerReviews/">Customer Reviews</a>
        <h1>DAY 4</h1>
            <a href="https://dogiaba.github.io/F8-Fe-K3/Day4/BestSeller/">Best Seller</a>
            <a href="https://dogiaba.github.io/F8-Fe-K3/Day4/BookTableForm/">Book Table Form</a>
            <a href="https://dogiaba.github.io/F8-Fe-K3/Day4/FormSubscribe/">Form Subscribe</a>
        <h1>DAY 5</h1>
            <a href="https://dogiaba.github.io/F8-Fe-K3/Day5/AnswerReveal/">Answer Reveal</a>
            <a href="https://dogiaba.github.io/F8-Fe-K3/Day5/FormSubmit/">Form Submit</a>
            <a href="https://dogiaba.github.io/F8-Fe-K3/Day5/TakeServices/">Take Services</a>
        <h1>DAY 6</h1>
            <a href="https://dogiaba.github.io/F8-Fe-K3/Day6/FormLogin/">FormLogin</a>
            <a href="https://dogiaba.github.io/F8-Fe-K3/Day6/MenuDropdown/">MenuDropdown</a>
            <a href="https://dogiaba.github.io/F8-Fe-K3/Day6/ServiceLayout/">ServiceLayout</a>
        <h1>DAY 7</h1>
            <a href="https://dogiaba.github.io/F8-Fe-K3/Day7/Lesson1/">Project Banner</a>
            <a href="https://dogiaba.github.io/F8-Fe-K3/Day7/Lesson2/">Investor Profile</a>
            <a href="https://dogiaba.github.io/F8-Fe-K3/Day7/Lesson3/">Khu vực bất động sản</a>
        <h1>DAY 8</h1>
            <a href="https://dogiaba.github.io/F8-Fe-K3/Day8/MegaMenu/">Mega Menu</a>
            <a href="https://dogiaba.github.io/F8-Fe-K3/Day8/ShoppingCart/">Shopping Cart Mini</a>
            <a href="https://dogiaba.github.io/F8-Fe-K3/Day8/ServiceLayout/">Service Layout</a>
        <h1>DAY 9</h1>
            <a href="https://dogiaba.github.io/F8-Fe-K3/Day9/Lesson1/">Lesson1</a>
            <a href="https://dogiaba.github.io/F8-Fe-K3/Day9/Lesson2/">Lesson2</a>
            <a href="https://dogiaba.github.io/F8-Fe-K3/Day9/Lesson3/">Lesson3</a>
        <h1>DAY 10</h1>
            <a href="https://dogiaba.github.io/F8-Fe-K3/Day10/Lesson1/">Lesson1</a>
            <a href="https://dogiaba.github.io/F8-Fe-K3/Day10/Lesson2/">Lesson2</a>
            <a href="https://dogiaba.github.io/F8-Fe-K3/Day10/Lesson3/">Lesson3</a>
        <h1>DAY 11</h1>
            <a href="https://dogiaba.github.io/F8-Fe-K3/Day11/">Lesson1</a>
        <h1>DAY 12</h1>
            <a href="https://dogiaba.github.io/F8-Fe-K3/Day12/">Lesson1</a>
        <h1>DAY 13</h1>
            <a href="https://dogiaba.github.io/F8-Fe-K3/Day13/">Lesson1</a>
        <h1>DAY 15</h1>
          <a href="https://dogiaba.github.io/F8-Fe-K3/">Lesson1</a>
        <h2>Day23</h2>
            <a
              href="https://dogiaba.github.io/F8-Fe-K3/Javascript/Day23/Lesson1/">Lesson1</a>
            <a
              href="https://dogiaba.github.io/F8-Fe-K3/Javascript/Day23/Lesson2/">Lesson2</a>
            <a
              href="https://dogiaba.github.io/F8-Fe-K3/Javascript/Day23/Lesson3/">Lesson3</a>
            <a
              href="https://dogiaba.github.io/F8-Fe-K3/Javascript/Day23/Lesson4/">Lesson4</a>
            <a
              href="https://dogiaba.github.io/F8-Fe-K3/Javascript/Day23/Lesson5/">Lesson5</a>


        <h2>Day24</h2>
            <a
              href="https://dogiaba.github.io/F8-Fe-K3/Javascript/Day24/Lesson1/"
              >Lesson1</a
            >

            <a
              href="https://dogiaba.github.io/F8-Fe-K3/Javascript/Day24/Lesson2/"
              >Lesson2</a>

            <a href="https://dogiaba.github.io/F8-Fe-K3/Javascript/Day24/Lesson3/">Lesson3</a>


        <h2>Day25</h2>
            <a href="https://dogiaba.github.io/F8-Fe-K3/Javascript/Day25/">Chưa hoàn thành</a>
        <h2>Day26</h2>
          <a href="https://dogiaba.github.io/F8-Fe-K3/Javascript/Day26/">todoapp</a>
        <h2>Day27</h2>
          <a href="https://dogiaba.github.io/F8-Fe-K3/Javascript/Day27/">slide Show</a>
        <h2>Day28</h2>
          <a href="https://dogiaba.github.io/F8-Fe-K3/Javascript/Day28/">Music Play</a>
        <h2>Day29</h2>
            <a href="https://dogiaba.github.io/F8-Fe-K3/Javascript/Day29/">Shopping Cart</a>
        <h2>Day31</h2>
          <a href="https://dogiaba.github.io/F8-Fe-K3/Javascript/Day31/">Drag & Drop Sortable List</a>
        <h2>Day32</h2>
            <a href="https://dogiaba.github.io/F8-Fe-K3/Javascript/Day32/">Doc Editor</a>
        <h2>Day33</h2>
            <a href="https://dogiaba.github.io/F8-Fe-K3/Javascript/Day33/">Get Link</a>
        <h2>Day34</h2>
          <a href="https://dogiaba.github.io/F8-Fe-K3/Javascript/Day34/">Zoom image</a>
        <h2>Day35</h2>
          <a href="https://dogiaba.github.io/F8-Fe-K3/Javascript/Day35/">voice search</a >
      </div>

      <h2>Day37</h2>
          <a href="https://dogiaba.github.io/F8-Fe-K3/Javascript/Day37/">Skeleton Loading</a>
      <h2>Day39</h2>
          <a href="https://dogiaba.github.io/F8-Fe-K3/Javascript/Day39/">Infinity Scroll</a>
      <h2>Day40</h2>
          <a href="https://dogiaba.github.io/F8-Fe-K3/Javascript/Day40/">Quiz App</a>
      <h2>Day41</h2>
          <a href="https://dogiaba.github.io/F8-Fe-K3/Javascript/Day41/">Login Form</a>
      <h2>Day42</h2>
          <a href="https://dogiaba.github.io/F8-Fe-K3/Javascript/Day42/">Login Form Blog</a>