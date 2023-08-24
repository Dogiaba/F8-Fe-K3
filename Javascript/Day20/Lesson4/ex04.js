var data = [
    {
        title : "Tiêu đề bài viết 1",
        content : "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.",
        image:"./img/sunrise-on-the-sea-275274_1280.jpg"
    
    },

    {
        title : "Tiêu đề bài viết 2",
        content : "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.",
        image:"./img/sunrise-on-the-sea-275274_1280.jpg"
    
    },
    {
        title : "Tiêu đề bài viết 3",
        content : "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.",
        image:"https://tienganhdanang.edu.vn/wp-content/uploads/2023/06/1661919417_478_tai-70-hinh-anh-bien-xanh-dep-nhat-the-gioi.jpg"
    
    },
];

const container = document.getElementById('list_item');

const imageTags =
data.map(value => `<img src="${value.title} ${value.content} ${value.image}">`);

container.innerHTML = imageTags.join('');


