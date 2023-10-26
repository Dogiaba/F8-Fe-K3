

class F8 extends HTMLElement{

    static component(name , callback){
        // console.log(name)
        super();
        this.innerHTML = callback.template
        // const template = Object.template;

        if(callback.data){
            Object.keys(data).forEach((key) =>{
                window[key] = data[key];
            })
        }
        
    }
}

// customElements.define("header-component",F8)


// yêu cầu tạo 1 class F8
F8.component("counter-app",{
    data:() =>{
        return{
            count:0,
            title:"Counter App",
        };
    },
    template: `
    <h2>{{title}}</h2>
    <h2>Đã đếm: {{count}} lần</h2>
    <button v-on:click="count--">-</button>
    <button v-on:click="count++">+</button>
    <button v-on:dblclick="title='heloo f88">Change Title</button>
    `,
})

F8.component("header-component",{
    template: `<h1>Header</h1>`
})


