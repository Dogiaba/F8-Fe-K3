import './style.css'
import {DefaultLayout} from "./src/Layouts/Default.js";
import { Home } from './src/Pages/Home.js';
import {About} from "./src/Pages/About.js";
import {ProductDetail} from"./src/Pages/ProductDetail.js";
import {Products} from "./src/Pages/Products.js";
import {renderPage , router} from "./src/Utils/Router.js"
import { App } from './src/App.js';


let stringHtml = DefaultLayout();
const pattern = /{body}/;
const app = document.querySelector("#app");
app.innerHTML = stringHtml.replace(pattern,Home);
// renderPage(ProductDetail,app);
router.resolve();

