// removeNode(button);



class myDiv extends HTMLElement {
    // 监听
    static get observedAttributes(){
        return ["option"]
    }

    constructor() {
        super();
        // 这样我们才能够去追加元素
        this.attachShadow({ mode: 'open' })
        this.shouldUpdate= {
           
        }
    }

    // 重要：生命周期方法 开始
    connectedCallback() {

        console.log("connectedCallback生命周期")

        // 获取元素
        // console.log(this.shadowRoot.querySelector(".content"))
        // 获取属性
        // console.log( this.getAttribute("data-option"))
       this.render({
            option:this.getAttribute("option")
       })
        document.addEventListener("click",(e)=>{
            // 重要：冒泡的顺序，通过这个可以判断有没有在鼠标内部进行点击
            if(e.composedPath().includes(this)){
                console.log("点击了里面")
            }
        })

        // this.shadowRoot.querySelector(".content").addEventListener(("click"),()=>{
        //     // window.dispatchEvent
        // })
    }

    // 重要：生命周期方法 重新渲染 .甚至还是第一次进行渲染，比connect还快
    // 会重新渲染 connectCallback
    attributeChangedCallback(attr,oldValue,newValue){
        
        if(oldValue){
            switch (attr){
                case "option":
                    // 同步数据，异步数据
                    this.shadowRoot.querySelector(".title") ? this.shadowRoot.querySelector(".title").textContent = newValue : ""
                    this.shouldUpdate[".title"] = newValue

                    
            }
        }
        console.log("arrributeChangeCallback",attr,oldValue,newValue)
        
    }

    borderAdd(){
        console.log("borderadd")
        this.shadowRoot.querySelector(".content").style.border="3px solid green"
    }

    render(data) {
        let { option } = data
        
        // console.log()
        let nodeTemplate = document.createElement("template")
        nodeTemplate.innerHTML = `
            <div class="content" >
                <div class="title">${option} </div> 
                <slot name="container"></slot>
            </div>
        `

        let nodeStyles = document.createElement("style")
        // shadow dom 的样式绝对隔离
        // 重要： :host选择器可以选中根也就是my-div的样式。外面的选择器样式要高于这个

        nodeStyles.innerHTML = `
            *{
                color:white
            }
            :host(.active) .content{
                
                margin-top:20px;
                background:rgba(0,0,0,30%);
            }
            :host{
                display:block
            }
            .content{
                width:100px;
                height:100px;
                background:rgba(0,0,0,20%)
            }
           
            ::slotted([slot="container"]){
                display:none
            }

            ::slotted(.active){
                display:block
            }
        `
        
        

        console.log(` this.shouldUpdate[".title"]:`, this.shouldUpdate)
        


        setTimeout(()=>{
            // 获取异步数据
            if(this.shouldUpdate &&  this.shouldUpdate[".title"]){
                console.log(nodeTemplate.content.querySelector(".title"),this.shouldUpdate[".title"])
                nodeTemplate.content.querySelector(".title").textContent = this.shouldUpdate[".title"]
            }
            this.shadowRoot.appendChild(nodeTemplate.content)
            this.shadowRoot.appendChild(nodeStyles)
        },1500)

        // 同步直接拿出来就好了
        // if(this.shouldUpdate &&  this.shouldUpdate[".title"]){
        //     console.log(nodeTemplate.content.querySelector(".title"),this.shouldUpdate[".title"])
        //     nodeTemplate.content.querySelector(".title").textContent = this.shouldUpdate[".title"]
        // }
        // this.shadowRoot.appendChild(nodeTemplate.content)
        // this.shadowRoot.appendChild(nodeStyles)
        
    }
}


// 名字必须小写 必须有横线
customElements.define("my-div", myDiv)

// exports.customElements =  customElements
