import {Home} from "./Pages/Home";
import {About} from "./Pages/About";
import {ProductDetail} from"./Pages/ProductDetail";
import {Products} from "./Pages/Products";
import {DefaultLayout} from "./Layouts/Default";
export const App = () => {
    return router(
        [
            {
                path:"/",
                component:Home,
            },
            {
                path:"/gioi-thieu",
                component:About,
            },
            {
                path:"/san-pham",
                component: Products,
            },
            {
                path:"/san-pham/:id",
                component:ProductDetail,
            },
        ],
        DefaultLayout,
    );
};