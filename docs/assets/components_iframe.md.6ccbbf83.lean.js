import{p as o,ac as l,D as e,o as p,c as t,z as r,G as c,B as i,R as D,a as y}from"./chunks/framework.bc40fd44.js";import"./chunks/index.4ed993c7.js";const F=D("",6),d={class:"wrap"},g=JSON.parse('{"title":"iframe","description":"","frontmatter":{},"headers":[],"relativePath":"components/iframe.md","filePath":"components/iframe.md","lastUpdated":1687912974000}'),_={name:"components/iframe.md"},f=Object.assign(_,{setup(m){return o(()=>{l(()=>import("./chunks/index.2b93b198.js"),["assets/chunks/index.2b93b198.js","assets/chunks/wz-base.51abbcea.js"]);let s=document.createElement("link");s.setAttribute("rel","stylesheet"),s.setAttribute("href","https://cdn.staticfile.org/font-awesome/4.7.0/css/font-awesome.css"),document.head.appendChild(s),l(()=>import("./chunks/index.bec32224.js"),["assets/chunks/index.bec32224.js","assets/chunks/wz-base.51abbcea.js"]).then(n=>{console.log(n),window.dialog=n.default,window.dialogConfirm=()=>{let a=document.createElement("div");a.innerHTML=`
        <wz-iframe title="测试" background="rgb(14, 27, 48)" color="white">
            <div class="mask_player_container">
       
         <img src="https://tse1-mm.cn.bing.net/th/id/OIP-C.vmPWowgdWTfOcPhc5fehCgHaEo?w=243&h=180&c=7&r=0&o=5&dpr=1.3&pid=1.7" class="mask_player_container_video"> </img>

        <div class="mask_player_container_tool">
          <div class="mask_player_container_tool_left">
            <i class="fa fa-pause"></i>	
            <i class="fa fa-gear"></i>	
          </div>
          <div class="mask_player_container_tool_right">
            <i class="fa fa-arrows-alt"></i>
          </div>
        </div>
      </div>

        </wz-iframe>
        <style>
           



.mask_player_container_video {
  width: 850px;
  position: relative;
  height:400px;
}

.mask_player_container_tool {
  height: 30px;
  background: rgb(48, 47, 47);
  display: flex;
  justify-content: space-between;
  font-size: 12px;
  padding: 0px 10px;
  position: relative;

bottom: 30px;
}
.mask_player_container_tool_right {
  line-height: 100%;
  align-self: center;
  margin: 10px;
}

.mask_player_container_tool_left {
  line-height: 100%;
  align-self: center;
  margin: 10px;
}
.fa{
    margin:0px  15px 0px 0px;
}
.mask_player_title_close{
    cursor: pointer;
}
        <//style>
                
                `,document.body.appendChild(a)}})}),(s,n)=>{const a=e("wz-button");return p(),t("div",null,[F,r("div",d,[c(a,{type:"primary",onclick:"dialogConfirm()"},{default:i(()=>[y("打开iframe")]),_:1})])])}}});export{g as __pageData,f as default};
