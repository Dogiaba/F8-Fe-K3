import Navigo from "navigo";
 
//khởi tạo
const routerNa = new Navigo("/",{linksSelector: "a",hash: false});

//Button back productDetail
window.navigate = function(path){
    routerNa.navigate(path);
}

 const renderPage = (content, target) =>{
    target.innerHTML = content();
}
 export default function router(root, DefaultLayout = ""){
    if(typeof DefaultLayout === "function"){
        DefaultLayout = DefaultLayout();
    }
    return{root, DefaultLayout}

}
export{renderPage , routerNa};