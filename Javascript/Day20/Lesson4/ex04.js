var data = [
  {
    title: "Tiêu đề bài viết 1",
    content:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.",
    image: "https://picsum.photos/400/300",
  },

  {
    title: "Tiêu đề bài viết 2",
    content:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.",
    image: "https://picsum.photos/400/200",
  },
  {
    title: "Tiêu đề bài viết 3",
    content:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.",
    image: "https://picsum.photos/400/300",
  },
];

const container = document.getElementById("list_item");

const imageTags = data.map(
  (value) => 
  `<div class="container">
        <img src="${value.image}"> 
        <div class="content">
            <h2>${value.title}</h2> 
            <p>${value.content}</p>
        </div>
    </div>`
);

container.innerHTML = imageTags.join("");
