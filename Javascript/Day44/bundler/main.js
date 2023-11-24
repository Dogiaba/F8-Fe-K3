import './style.css'
import {renderPage , routerNa} from "./src/Utils/Router.js"
import { App } from './src/App.js';
import {Error} from './src/Error.js'
import { ProductDetail } from './src/Pages/ProductDetail.js';

const {root:roots, DefaultLayout} = App();

const app = document.querySelector("#app");
const btnBack = document.querySelector(".btnBack");

function render(component, DefaultLayout, params = null){
    let stringHtml = DefaultLayout;
    const pattern = /{body}/;

    if(params){
        app.innerHTML = stringHtml.replace(pattern,component(params));
    }else{
        
        console.log(app.innerHTML = stringHtml.replace(pattern,component()));
    }
    
}
roots.forEach(({path, component}, _)=> {
    routerNa.on(path,(params)=>{
        render(component,DefaultLayout, params )
    })
}); 
routerNa.resolve();
routerNa.notFound(()=> {
    app.innerHTML = Error();
}).resolve();


// btnBack.onclick = function(){
//     console.log("ok")
// }


function navigate(){
    console.log("ok")
}