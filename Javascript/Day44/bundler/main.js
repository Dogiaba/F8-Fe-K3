import './style.css'
import { Home } from './src/Pages/Home.js';

import {renderPage , routerNa} from "./src/Utils/Router.js"
import { App } from './src/App.js';

const {root:roots, DefaultLayout} = App();


function render(component, DefaultLayout, params = null){
    let stringHtml = DefaultLayout;
    const pattern = /{body}/;
    const app = document.querySelector("#app");
    if(params){
        app.innerHTML = stringHtml.replace(pattern,component(params));
    }else{
        app.innerHTML = stringHtml.replace(pattern,component());
    }
    
}
roots.forEach(({path, component}, _)=> {
    routerNa.on(path,(params)=>{
        render(component,DefaultLayout, params )
    })
});
routerNa.resolve();

