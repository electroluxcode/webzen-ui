interface baseParam {
    title: string
    description: string
    keywords: string
    // [key: string]: any
}
class tdk {
    public config: baseParam
    constructor(param: baseParam) {
        this.config = {
            title: "",
            keywords: "",
            description: "",
        }
        this.config.title = param.title
        this.config.keywords = param.keywords
        this.config.description = param.description
        this.main()
    }
    main() {
        let keywords = document.querySelector("meta[name=keywords]")
        let title = document.querySelector("title")
        let description = document.querySelector("meta[name=description]")

        if(keywords){
            keywords.setAttribute("content", this.config.keywords)
        }else{
            let temp = document.createElement("meta")
            temp.setAttribute("name", "keywords")
            temp.setAttribute("content", this.config.keywords)
            document.head.appendChild(temp)
        }

        if(title){
            title.innerHTML = this.config?.title
        }else{
            let temp = document.createElement("title")
            temp.innerHTML = this.config?.title
            document.head.appendChild(temp)
        }

        if(description){
            description.setAttribute("content", this.config.description)
        }else{
            let temp = document.createElement("meta")
            temp.setAttribute("name", "description")
            temp.setAttribute("content", this.config.description)
            document.head.appendChild(temp)
        }
        
    }
   
}

export  default tdk
/**
 new tdk({
    title:"你好",
    keywords:"",
    description:"",
 })
 */