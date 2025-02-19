import{r as p,j as g,a as s,c as f,F as H,b as U}from"./index-ucSkGlXB.js";import{g as W,m as q,r as G,u as m,a as Y,c as V}from"./genStyleUtils-CjIi_VAC.js";function X(n,r){if(!(n instanceof r))throw new TypeError("Cannot call a class as a function")}function K(n,r){for(var a=0;a<r.length;a++){var e=r[a];e.enumerable=e.enumerable||!1,e.configurable=!0,"value"in e&&(e.writable=!0),Object.defineProperty(n,e.key,e)}}function Z(n,r,a){return r&&K(n.prototype,r),n}function J(n,r){if(typeof r!="function"&&r!==null)throw new TypeError("Super expression must either be null or a function");n.prototype=Object.create(r&&r.prototype,{constructor:{value:n,writable:!0,configurable:!0}}),r&&v(n,r)}function y(n){return y=Object.setPrototypeOf?Object.getPrototypeOf:function(a){return a.__proto__||Object.getPrototypeOf(a)},y(n)}function v(n,r){return v=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e},v(n,r)}function Q(){if(typeof Reflect>"u"||!Reflect.construct||Reflect.construct.sham)return!1;if(typeof Proxy=="function")return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],function(){})),!0}catch{return!1}}function b(n,r,a){return Q()?b=Reflect.construct:b=function(t,i,o){var c=[null];c.push.apply(c,i);var l=Function.bind.apply(t,c),u=new l;return o&&v(u,o.prototype),u},b.apply(null,arguments)}function ee(n){return Function.toString.call(n).indexOf("[native code]")!==-1}function w(n){var r=typeof Map=="function"?new Map:void 0;return w=function(e){if(e===null||!ee(e))return e;if(typeof e!="function")throw new TypeError("Super expression must either be null or a function");if(typeof r<"u"){if(r.has(e))return r.get(e);r.set(e,t)}function t(){return b(e,arguments,y(this).constructor)}return t.prototype=Object.create(e.prototype,{constructor:{value:t,enumerable:!1,writable:!0,configurable:!0}}),v(t,e)},w(n)}function te(n){if(n===void 0)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return n}function ne(n,r){return r&&(typeof r=="object"||typeof r=="function")?r:te(n)}var re=`
attribute vec2 position;

void main() {
  gl_Position = vec4(position, 0.0, 1.0);
}`,P=document.createElement("template");P.innerHTML=`
<style>
  :host {
    position: relative;
    display: inline-block;
    width: 250px;
    height: 250px;
  }
  :host > canvas {
    position: absolute;
    top: 0;
    left: 0;
    height: 100%;
    width: 100%;
    border-radius: inherit;
   }
</style>
`;var k=/\(\s*out\s+vec4\s+(\S+)\s*,\s*in\s+vec2\s+(\S+)\s*\)/,ie=function(n){J(r,n);function r(){var a;return X(this,r),a=ne(this,y(r).call(this)),a.shadow=a.attachShadow({mode:"open"}),a.shadow.appendChild(P.content.cloneNode(!0)),a}return Z(r,[{key:"connectedCallback",value:function(){var e=this;this.mounted=!0,setTimeout(function(){if(!e.textContent.trim())return!1;try{e.init()}catch(t){e.textContent="",console.error(t&&t.message||"Error in shader-doodle.")}})}},{key:"disconnectedCallback",value:function(){this.mounted=!1,this.canvas.removeEventListener("mousedown",this.mouseDown),this.canvas.removeEventListener("mousemove",this.mouseMove),this.canvas.removeEventListener("mouseup",this.mouseUp),clearAnimationFrame(this.animationFrame)}},{key:"init",value:function(){var e=this;this.useST=this.hasAttribute("shadertoy");var t=this.textContent;this.uniforms={resolution:{name:this.useST?"iResolution":"u_resolution",type:"vec2",value:[0,0]},time:{name:this.useST?"iTime":"u_time",type:"float",value:0},delta:{name:this.useST?"iTimeDelta":"u_delta",type:"float",value:0},date:{name:this.useST?"iDate":"u_date",type:"vec4",value:[0,0,0,0]},frame:{name:this.useST?"iFrame":"u_frame",type:"int",value:0},mouse:{name:this.useST?"iMouse":"u_mouse",type:this.useST?"vec4":"vec2",value:this.useST?[0,0,0,0]:[0,0]}},this.canvas=document.createElement("canvas"),this.shadow.appendChild(this.canvas);var i=this.gl=this.canvas.getContext("webgl");if(this.updateRect(),this.useST){var o=t.match(k);t=t.replace("mainImage","main"),t=t.replace(k,"()"),t=(o?"#define ".concat(o[1],` gl_FragColor
#define `).concat(o[2],` gl_FragCoord.xy
`):"")+t}var c=Object.values(this.uniforms).reduce(function(l,u){return l+"uniform ".concat(u.type," ").concat(u.name,`;
`)},"");t=c+t,t=`precision highp float;
`+t,i.clearColor(0,0,0,0),this.vertexShader=this.makeShader(i.VERTEX_SHADER,re),this.fragmentShader=this.makeShader(i.FRAGMENT_SHADER,t),this.program=this.makeProgram(this.vertexShader,this.fragmentShader),this.vertices=new Float32Array([-1,1,1,1,1,-1,-1,1,1,-1,-1,-1]),this.buffer=i.createBuffer(),i.bindBuffer(i.ARRAY_BUFFER,this.buffer),i.bufferData(i.ARRAY_BUFFER,this.vertices,i.STATIC_DRAW),i.useProgram(this.program),this.program.position=i.getAttribLocation(this.program,"position"),i.enableVertexAttribArray(this.program.position),i.vertexAttribPointer(this.program.position,2,i.FLOAT,!1,0,0),Object.values(this.uniforms).forEach(function(l){l.location=i.getUniformLocation(e.program,l.name)}),this._bind("mouseDown","mouseMove","mouseUp","render"),this.canvas.addEventListener("mousedown",this.mouseDown),this.canvas.addEventListener("mousemove",this.mouseMove),this.canvas.addEventListener("mouseup",this.mouseUp),this.render()}},{key:"render",value:function(e){if(!(!this||!this.mounted||!this.gl)){var t=this.gl;this.updateTimeUniforms(e),this.updateRect(),t.clear(t.COLOR_BUFFER_BIT),Object.values(this.uniforms).forEach(function(i){var o=i.type,c=i.location,l=i.value,u=o.match(/vec/)?"".concat(o[o.length-1],"fv"):"1".concat(o[0]);t["uniform".concat(u)](c,l)}),t.drawArrays(t.TRIANGLES,0,this.vertices.length/2),this.ticking=!1,this.animationFrame=requestAnimationFrame(this.render)}}},{key:"mouseDown",value:function(e){if(this.useST){this.mousedown=!0;var t=this.rect,i=t.top,o=t.left,c=t.height;this.uniforms.mouse.value[2]=e.clientX-Math.floor(o),this.uniforms.mouse.value[3]=Math.floor(c)-(e.clientY-Math.floor(i))}}},{key:"mouseMove",value:function(e){if(!this.ticking&&(!this.useST||this.mousedown)){var t=this.rect,i=t.top,o=t.left,c=t.height;this.uniforms.mouse.value[0]=e.clientX-Math.floor(o),this.uniforms.mouse.value[1]=Math.floor(c)-(e.clientY-Math.floor(i)),this.ticking=!0}}},{key:"mouseUp",value:function(e){this.useST&&(this.mousedown=!1,this.uniforms.mouse.value[2]=0,this.uniforms.mouse.value[3]=0)}},{key:"updateTimeUniforms",value:function(e){var t=this.lastTime?(e-this.lastTime)/1e3:0;this.lastTime=e,this.uniforms.time.value+=t,this.uniforms.delta.value=t,this.uniforms.frame.value++;var i=new Date;this.uniforms.date.value[0]=i.getFullYear(),this.uniforms.date.value[1]=i.getMonth()+1,this.uniforms.date.value[2]=i.getDate(),this.uniforms.date.value[3]=i.getHours()*60*60+i.getMinutes()*60+i.getSeconds()+i.getMilliseconds()*.001}},{key:"updateRect",value:function(){this.rect=this.canvas.getBoundingClientRect();var e=this.rect,t=e.width,i=e.height,o=this.canvas.width!==t,c=this.canvas.height!==i;o&&(this.canvas.width=this.uniforms.resolution.value[0]=t),c&&(this.canvas.height=this.uniforms.resolution.value[1]=i),(o||c)&&this.gl.viewport(0,0,this.canvas.width,this.canvas.height)}},{key:"makeShader",value:function(e,t){var i=this.gl,o=i.createShader(e);if(i.shaderSource(o,t),i.compileShader(o),!i.getShaderParameter(o,i.COMPILE_STATUS)){var c=i.getShaderInfoLog(o);i.deleteShader(o),console.warn(c,`
in shader:
`,t)}return o}},{key:"makeProgram",value:function(){for(var e=this.gl,t=e.createProgram(),i=arguments.length,o=new Array(i),c=0;c<i;c++)o[c]=arguments[c];if(o.forEach(function(u){e.attachShader(t,u)}),e.linkProgram(t),!e.getProgramParameter(t,e.LINK_STATUS)){var l=e.getProgramInfoLog(this.program);console.warn(l)}return t}},{key:"_bind",value:function(){for(var e=this,t=arguments.length,i=new Array(t),o=0;o<t;o++)i[o]=arguments[o];i.forEach(function(c){return e[c]=e[c].bind(e)})}}]),r}(w(HTMLElement));customElements.define("shader-doodle",ie);const oe=n=>{const{componentCls:r,sizePaddingEdgeHorizontal:a,colorSplit:e,lineWidth:t,textPaddingInline:i,orientationMargin:o,verticalMarginInline:c}=n;return{[r]:Object.assign(Object.assign({},G(n)),{borderBlockStart:`${m(t)} solid ${e}`,"&-vertical":{position:"relative",top:"-0.06em",display:"inline-block",height:"0.9em",marginInline:c,marginBlock:0,verticalAlign:"middle",borderTop:0,borderInlineStart:`${m(t)} solid ${e}`},"&-horizontal":{display:"flex",clear:"both",width:"100%",minWidth:"100%",margin:`${m(n.dividerHorizontalGutterMargin)} 0`},[`&-horizontal${r}-with-text`]:{display:"flex",alignItems:"center",margin:`${m(n.dividerHorizontalWithTextGutterMargin)} 0`,color:n.colorTextHeading,fontWeight:500,fontSize:n.fontSizeLG,whiteSpace:"nowrap",textAlign:"center",borderBlockStart:`0 ${e}`,"&::before, &::after":{position:"relative",width:"50%",borderBlockStart:`${m(t)} solid transparent`,borderBlockStartColor:"inherit",borderBlockEnd:0,transform:"translateY(50%)",content:"''"}},[`&-horizontal${r}-with-text-start`]:{"&::before":{width:`calc(${o} * 100%)`},"&::after":{width:`calc(100% - ${o} * 100%)`}},[`&-horizontal${r}-with-text-end`]:{"&::before":{width:`calc(100% - ${o} * 100%)`},"&::after":{width:`calc(${o} * 100%)`}},[`${r}-inner-text`]:{display:"inline-block",paddingBlock:0,paddingInline:i},"&-dashed":{background:"none",borderColor:e,borderStyle:"dashed",borderWidth:`${m(t)} 0 0`},[`&-horizontal${r}-with-text${r}-dashed`]:{"&::before, &::after":{borderStyle:"dashed none none"}},[`&-vertical${r}-dashed`]:{borderInlineStartWidth:t,borderInlineEnd:0,borderBlockStart:0,borderBlockEnd:0},"&-dotted":{background:"none",borderColor:e,borderStyle:"dotted",borderWidth:`${m(t)} 0 0`},[`&-horizontal${r}-with-text${r}-dotted`]:{"&::before, &::after":{borderStyle:"dotted none none"}},[`&-vertical${r}-dotted`]:{borderInlineStartWidth:t,borderInlineEnd:0,borderBlockStart:0,borderBlockEnd:0},[`&-plain${r}-with-text`]:{color:n.colorText,fontWeight:"normal",fontSize:n.fontSize},[`&-horizontal${r}-with-text-start${r}-no-default-orientation-margin-start`]:{"&::before":{width:0},"&::after":{width:"100%"},[`${r}-inner-text`]:{paddingInlineStart:a}},[`&-horizontal${r}-with-text-end${r}-no-default-orientation-margin-end`]:{"&::before":{width:"100%"},"&::after":{width:0},[`${r}-inner-text`]:{paddingInlineEnd:a}}})}},ae=n=>({textPaddingInline:"1em",orientationMargin:.05,verticalMarginInline:n.marginXS}),se=W("Divider",n=>{const r=q(n,{dividerHorizontalWithTextGutterMargin:n.margin,dividerHorizontalGutterMargin:n.marginLG,sizePaddingEdgeHorizontal:0});return[oe(r)]},ae,{unitless:{orientationMargin:!0}});var ce=function(n,r){var a={};for(var e in n)Object.prototype.hasOwnProperty.call(n,e)&&r.indexOf(e)<0&&(a[e]=n[e]);if(n!=null&&typeof Object.getOwnPropertySymbols=="function")for(var t=0,e=Object.getOwnPropertySymbols(n);t<e.length;t++)r.indexOf(e[t])<0&&Object.prototype.propertyIsEnumerable.call(n,e[t])&&(a[e[t]]=n[e[t]]);return a};const le=n=>{const{getPrefixCls:r,direction:a,className:e,style:t}=Y("divider"),{prefixCls:i,type:o="horizontal",orientation:c="center",orientationMargin:l,className:u,rootClassName:z,children:x,dashed:R,variant:T="solid",plain:A,style:I}=n,j=ce(n,["prefixCls","type","orientation","orientationMargin","className","rootClassName","children","dashed","variant","plain","style"]),h=r("divider",i),[N,F,L]=se(h),E=!!x,S=p.useMemo(()=>c==="left"?a==="rtl"?"end":"start":c==="right"?a==="rtl"?"start":"end":c,[a,c]),_=S==="start"&&l!=null,O=S==="end"&&l!=null,D=V(h,e,F,L,`${h}-${o}`,{[`${h}-with-text`]:E,[`${h}-with-text-${S}`]:E,[`${h}-dashed`]:!!R,[`${h}-${T}`]:T!=="solid",[`${h}-plain`]:!!A,[`${h}-rtl`]:a==="rtl",[`${h}-no-default-orientation-margin-start`]:_,[`${h}-no-default-orientation-margin-end`]:O},u,z),$=p.useMemo(()=>typeof l=="number"?l:/^\d+$/.test(l)?Number(l):l,[l]),B={marginInlineStart:_?$:void 0,marginInlineEnd:O?$:void 0};return N(p.createElement("div",Object.assign({className:D,style:Object.assign(Object.assign({},t),I)},j,{role:"separator"}),x&&o!=="vertical"&&p.createElement("span",{className:`${h}-inner-text`,style:B},x)))},de=f({name:"2bpwsd",styles:"position:relative;color:#fff;text-align:center;background-color:#159957;background-image:linear-gradient(120deg, #155799, #159957);padding:80px 100px 120px 100px"}),he=f({name:"1fx5xze",styles:"font-size:20px;opacity:0.7;color:unset;text-decoration:unset"}),ue=f({name:"h3anzh",styles:"position:relative;font-size:50px;font-weight:bold"}),fe=f({name:"1ksolcl",styles:"position:relative;margin-top:20px"}),me=f({name:"1yoef68",styles:"position:absolute;top:0;right:0;bottom:0;left:0;#shader{width:100%;height:100%;opacity:0.2;}"}),pe=`
<shader-doodle id="shader">
    <script type="x-shader/x-fragment">

        float r (in vec2 st) {
        return fract(sin(dot(st.xy,vec2(13.,78.)))*43756.);
    }

        float noise (in vec2 st) {
        vec2 i=floor(st);
        vec2 f=fract(st);
        float a=r(i);
        float b=r(i+vec2(1.,0.));
        float c=r(i+vec2(0.,1.));
        float d=r(i+vec2(1.,1.));
        vec2 u=f*f*(3.-2.*f);
        return mix(a,b,u.x)+(c-a)* u.y*(1.-u.x)+(d-b)*u.x*u.y;
    }

        float g (in vec2 st) {
        float v=0.;
        float a=.5;
        for (int i=0; i<6; i++) {
        v += a*noise(st);
        st *= 2.;
        a *= .5;
    }
        return v;
    }

        float f (in vec2 st) {
        return g(st+g(st+g(st+u_time*.1)));
    }

        float pattern(in vec2 p,out vec2 q,out vec2 r) {
        p += +u_time * .1;
        q.x=f(p+vec2(0.,0.));
        q.y=f(p+vec2(5.,1.));
        r.x=f(p+4.*q+vec2(1.,9.));
        r.y=f(p+4.*q+vec2(8.,2.));
        return f(p+4.*r);
    }

        void main() {
        vec2 u=u_resolution;
        vec2 st=gl_FragCoord.xy/u.xy;
        st.x *= u.x/u.y;
        vec2 o,n;
        float f=pattern(st,o,n);
        vec3 c=vec3(1.);
        c=mix(c,vec3(1.),f);
        c=mix(c,vec3(0.1,0.4,0.7),0.8*dot(n,n));
        c=mix(c,vec3(0.1,0.7,0.4),0.5*o.y*o.y);
        c*=f*2.5;
        c=c*c;
        gl_FragColor=vec4(c,1.);
    }
    <\/script>
</shader-doodle>
`,ve=()=>{const n=p.useRef(null);return p.useLayoutEffect(()=>{n.current&&(n.current.innerHTML=pe)},[]),g("div",{className:de,children:[s("div",{className:me,ref:n}),s("div",{className:ue,children:"张振衣"}),s("div",{className:fe,children:s("a",{className:he,href:"https://www.zhihu.com/people/dancerphil",children:"zhihu.com/people/dancerphil"})})]})},ge=f({name:"13qx8f4",styles:"max-width:1000px;margin:0 auto;padding:60px 0;a{color:#1e6bb8;text-decoration:none;:hover{text-decoration:underline;}}"}),be=f({name:"1azakc",styles:"text-align:center"}),ye=f({name:"rj9gtv",styles:"margin-bottom:16px;font-size:20px;font-weight:500;color:#159957"}),C=({children:n})=>s("div",{className:ye,children:n}),d=({href:n,children:r})=>s("div",{children:s("a",{target:"_blank",href:n,children:r})}),xe=f({name:"wk4k1s",styles:"margin-top:4px;margin-bottom:16px;color:rgba(0, 0, 0, 0.45)"}),M=({children:n})=>s("div",{className:xe,children:n}),Se=()=>g(H,{children:[s(ve,{}),g("div",{className:ge,children:[s(C,{children:"目前正在维护的库"}),s(d,{href:"https://github.com/regionjs/region-core",children:"region-core"}),s(M,{children:"react 状态管理"}),s(C,{children:"玩具箱页面导航"}),s(d,{href:"./coder",children:"coder"}),s(M,{children:"一个基于 localStorage 的在线的编辑器"}),s(d,{href:"./10/once.html",children:"10 随机迷宫"}),s(d,{href:"./b",children:"base64 背景图"}),s(d,{href:"https://codepen.io/dancerphil/pen/POdeWy",children:"纯 css 动画：bees"}),s(d,{href:"https://codepen.io/dissimulate/pen/eZxEBO",children:"窗帘动画 from codepen"}),s(d,{href:"./d",children:"任务管理"}),s(d,{href:"https://codepen.io/dancerphil/pen/dRmLza",children:"自动旋转的画图工具"}),s("a",{children:s("del",{children:"恋与制作人卡牌收集计算"})}),s(d,{href:"./l",children:"逻辑哲学论-维特根斯坦"}),s(d,{href:"./lrc-generator",children:s("del",{children:"歌词生成工具"})}),s(d,{href:"./m",children:"material-design v0 颜色分析"}),s(d,{href:"https://vincentgarreau.com/particles.js/",children:"particles 动画"}),s(d,{href:"./qrcode-generator",children:"二维码生成"}),s(d,{href:"./react-children-type",children:"React Children Type"}),s(d,{href:"https://seenjs.io/demo-2048.html",children:"3d 2048 游戏"}),s(d,{href:"./spiral-path",children:"单词向量游戏"}),s(d,{href:"./t",children:"网页天气插件"}),s(d,{href:"./w",children:"纯 css 动画"}),s(le,{}),g("div",{className:be,children:["With Love. ",s("a",{target:"_blank",href:"https://github.com/dancerphil",children:"Dancerphil"})]})]})]}),we=U.createRoot(document.body);we.render(s(Se,{}));
