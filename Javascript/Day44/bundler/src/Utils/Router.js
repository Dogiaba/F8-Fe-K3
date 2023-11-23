import Navigo from "navigo";
//khởi tạo
const router = new Navigo("/",{linksSelector: "a", hash: true});

 const renderPage = (content, target) =>{
    target.innerHTML = content();
}
export{renderPage , router};