import{Fragment as e,__toESM as t,css as n,jsx as r,jsxs as i,require_client as a,require_react as o}from"./emotion-react-jsx-runtime.browser.esm-DZaAdDk0.js";import{genStyleHooks as s,merge as c,require_classnames as l,resetComponent as u,unit as d,useComponentConfig as f}from"./genStyleUtils-CNPz-LqK.js";function p(e,t){if(!(e instanceof t))throw TypeError(`Cannot call a class as a function`)}function m(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,`value`in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function h(e,t,n){return t&&m(e.prototype,t),n&&m(e,n),e}function g(e,t){if(typeof t!=`function`&&t!==null)throw TypeError(`Super expression must either be null or a function`);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&v(e,t)}function _(e){return _=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)},_(e)}function v(e,t){return v=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e},v(e,t)}function y(){if(typeof Reflect>`u`||!Reflect.construct||Reflect.construct.sham)return!1;if(typeof Proxy==`function`)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],function(){})),!0}catch{return!1}}function b(e,t,n){return b=y()?Reflect.construct:function(e,t,n){var r=[null];r.push.apply(r,t);var i=Function.bind.apply(e,r),a=new i;return n&&v(a,n.prototype),a},b.apply(null,arguments)}function x(e){return Function.toString.call(e).indexOf(`[native code]`)!==-1}function S(e){var t=typeof Map==`function`?new Map:void 0;return S=function(e){if(e===null||!x(e))return e;if(typeof e!=`function`)throw TypeError(`Super expression must either be null or a function`);if(t!==void 0){if(t.has(e))return t.get(e);t.set(e,n)}function n(){return b(e,arguments,_(this).constructor)}return n.prototype=Object.create(e.prototype,{constructor:{value:n,enumerable:!1,writable:!0,configurable:!0}}),v(n,e)},S(e)}function C(e){if(e===void 0)throw ReferenceError(`this hasn't been initialised - super() hasn't been called`);return e}function w(e,t){return t&&(typeof t==`object`||typeof t==`function`)?t:C(e)}var T=`
attribute vec2 position;

void main() {
  gl_Position = vec4(position, 0.0, 1.0);
}`,E=document.createElement(`template`);E.innerHTML=`
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
`;var D=/\(\s*out\s+vec4\s+(\S+)\s*,\s*in\s+vec2\s+(\S+)\s*\)/,O=function(e){g(t,e);function t(){var e;return p(this,t),e=w(this,_(t).call(this)),e.shadow=e.attachShadow({mode:`open`}),e.shadow.appendChild(E.content.cloneNode(!0)),e}return h(t,[{key:`connectedCallback`,value:function(){var e=this;this.mounted=!0,setTimeout(function(){if(!e.textContent.trim())return!1;try{e.init()}catch(t){e.textContent=``,console.error(t&&t.message||`Error in shader-doodle.`)}})}},{key:`disconnectedCallback`,value:function(){this.mounted=!1,this.canvas.removeEventListener(`mousedown`,this.mouseDown),this.canvas.removeEventListener(`mousemove`,this.mouseMove),this.canvas.removeEventListener(`mouseup`,this.mouseUp),clearAnimationFrame(this.animationFrame)}},{key:`init`,value:function(){var e=this;this.useST=this.hasAttribute(`shadertoy`);var t=this.textContent;this.uniforms={resolution:{name:this.useST?`iResolution`:`u_resolution`,type:`vec2`,value:[0,0]},time:{name:this.useST?`iTime`:`u_time`,type:`float`,value:0},delta:{name:this.useST?`iTimeDelta`:`u_delta`,type:`float`,value:0},date:{name:this.useST?`iDate`:`u_date`,type:`vec4`,value:[0,0,0,0]},frame:{name:this.useST?`iFrame`:`u_frame`,type:`int`,value:0},mouse:{name:this.useST?`iMouse`:`u_mouse`,type:this.useST?`vec4`:`vec2`,value:this.useST?[0,0,0,0]:[0,0]}},this.canvas=document.createElement(`canvas`),this.shadow.appendChild(this.canvas);var n=this.gl=this.canvas.getContext(`webgl`);if(this.updateRect(),this.useST){var r=t.match(D);t=t.replace(`mainImage`,`main`),t=t.replace(D,`()`),t=(r?`#define ${r[1]} gl_FragColor
#define ${r[2]} gl_FragCoord.xy
`:``)+t}var i=Object.values(this.uniforms).reduce(function(e,t){return e+`uniform ${t.type} ${t.name};
`},``);t=i+t,t=`precision highp float;
`+t,n.clearColor(0,0,0,0),this.vertexShader=this.makeShader(n.VERTEX_SHADER,T),this.fragmentShader=this.makeShader(n.FRAGMENT_SHADER,t),this.program=this.makeProgram(this.vertexShader,this.fragmentShader),this.vertices=new Float32Array([-1,1,1,1,1,-1,-1,1,1,-1,-1,-1]),this.buffer=n.createBuffer(),n.bindBuffer(n.ARRAY_BUFFER,this.buffer),n.bufferData(n.ARRAY_BUFFER,this.vertices,n.STATIC_DRAW),n.useProgram(this.program),this.program.position=n.getAttribLocation(this.program,`position`),n.enableVertexAttribArray(this.program.position),n.vertexAttribPointer(this.program.position,2,n.FLOAT,!1,0,0),Object.values(this.uniforms).forEach(function(t){t.location=n.getUniformLocation(e.program,t.name)}),this._bind(`mouseDown`,`mouseMove`,`mouseUp`,`render`),this.canvas.addEventListener(`mousedown`,this.mouseDown),this.canvas.addEventListener(`mousemove`,this.mouseMove),this.canvas.addEventListener(`mouseup`,this.mouseUp),this.render()}},{key:`render`,value:function(e){if(!(!this||!this.mounted||!this.gl)){var t=this.gl;this.updateTimeUniforms(e),this.updateRect(),t.clear(t.COLOR_BUFFER_BIT),Object.values(this.uniforms).forEach(function(e){var n=e.type,r=e.location,i=e.value,a=n.match(/vec/)?`${n[n.length-1]}fv`:`1${n[0]}`;t[`uniform${a}`](r,i)}),t.drawArrays(t.TRIANGLES,0,this.vertices.length/2),this.ticking=!1,this.animationFrame=requestAnimationFrame(this.render)}}},{key:`mouseDown`,value:function(e){if(this.useST){this.mousedown=!0;var t=this.rect,n=t.top,r=t.left,i=t.height;this.uniforms.mouse.value[2]=e.clientX-Math.floor(r),this.uniforms.mouse.value[3]=Math.floor(i)-(e.clientY-Math.floor(n))}}},{key:`mouseMove`,value:function(e){if(!this.ticking&&(!this.useST||this.mousedown)){var t=this.rect,n=t.top,r=t.left,i=t.height;this.uniforms.mouse.value[0]=e.clientX-Math.floor(r),this.uniforms.mouse.value[1]=Math.floor(i)-(e.clientY-Math.floor(n)),this.ticking=!0}}},{key:`mouseUp`,value:function(e){this.useST&&(this.mousedown=!1,this.uniforms.mouse.value[2]=0,this.uniforms.mouse.value[3]=0)}},{key:`updateTimeUniforms`,value:function(e){var t=this.lastTime?(e-this.lastTime)/1e3:0;this.lastTime=e,this.uniforms.time.value+=t,this.uniforms.delta.value=t,this.uniforms.frame.value++;var n=new Date;this.uniforms.date.value[0]=n.getFullYear(),this.uniforms.date.value[1]=n.getMonth()+1,this.uniforms.date.value[2]=n.getDate(),this.uniforms.date.value[3]=n.getHours()*60*60+n.getMinutes()*60+n.getSeconds()+n.getMilliseconds()*.001}},{key:`updateRect`,value:function(){this.rect=this.canvas.getBoundingClientRect();var e=this.rect,t=e.width,n=e.height,r=this.canvas.width!==t,i=this.canvas.height!==n;r&&(this.canvas.width=this.uniforms.resolution.value[0]=t),i&&(this.canvas.height=this.uniforms.resolution.value[1]=n),(r||i)&&this.gl.viewport(0,0,this.canvas.width,this.canvas.height)}},{key:`makeShader`,value:function(e,t){var n=this.gl,r=n.createShader(e);if(n.shaderSource(r,t),n.compileShader(r),!n.getShaderParameter(r,n.COMPILE_STATUS)){var i=n.getShaderInfoLog(r);n.deleteShader(r),console.warn(i,`
in shader:
`,t)}return r}},{key:`makeProgram`,value:function(){for(var e=this.gl,t=e.createProgram(),n=arguments.length,r=Array(n),i=0;i<n;i++)r[i]=arguments[i];if(r.forEach(function(n){e.attachShader(t,n)}),e.linkProgram(t),!e.getProgramParameter(t,e.LINK_STATUS)){var a=e.getProgramInfoLog(this.program);console.warn(a)}return t}},{key:`_bind`,value:function(){for(var e=this,t=arguments.length,n=Array(t),r=0;r<t;r++)n[r]=arguments[r];n.forEach(function(t){return e[t]=e[t].bind(e)})}}]),t}(S(HTMLElement));customElements.define(`shader-doodle`,O);const k=e=>{let{componentCls:t,sizePaddingEdgeHorizontal:n,colorSplit:r,lineWidth:i,textPaddingInline:a,orientationMargin:o,verticalMarginInline:s}=e;return{[t]:Object.assign(Object.assign({},u(e)),{borderBlockStart:`${d(i)} solid ${r}`,"&-vertical":{position:`relative`,top:`-0.06em`,display:`inline-block`,height:`0.9em`,marginInline:s,marginBlock:0,verticalAlign:`middle`,borderTop:0,borderInlineStart:`${d(i)} solid ${r}`},"&-horizontal":{display:`flex`,clear:`both`,width:`100%`,minWidth:`100%`,margin:`${d(e.dividerHorizontalGutterMargin)} 0`},[`&-horizontal${t}-with-text`]:{display:`flex`,alignItems:`center`,margin:`${d(e.dividerHorizontalWithTextGutterMargin)} 0`,color:e.colorTextHeading,fontWeight:500,fontSize:e.fontSizeLG,whiteSpace:`nowrap`,textAlign:`center`,borderBlockStart:`0 ${r}`,"&::before, &::after":{position:`relative`,width:`50%`,borderBlockStart:`${d(i)} solid transparent`,borderBlockStartColor:`inherit`,borderBlockEnd:0,transform:`translateY(50%)`,content:`''`}},[`&-horizontal${t}-with-text-start`]:{"&::before":{width:`calc(${o} * 100%)`},"&::after":{width:`calc(100% - ${o} * 100%)`}},[`&-horizontal${t}-with-text-end`]:{"&::before":{width:`calc(100% - ${o} * 100%)`},"&::after":{width:`calc(${o} * 100%)`}},[`${t}-inner-text`]:{display:`inline-block`,paddingBlock:0,paddingInline:a},"&-dashed":{background:`none`,borderColor:r,borderStyle:`dashed`,borderWidth:`${d(i)} 0 0`},[`&-horizontal${t}-with-text${t}-dashed`]:{"&::before, &::after":{borderStyle:`dashed none none`}},[`&-vertical${t}-dashed`]:{borderInlineStartWidth:i,borderInlineEnd:0,borderBlockStart:0,borderBlockEnd:0},"&-dotted":{background:`none`,borderColor:r,borderStyle:`dotted`,borderWidth:`${d(i)} 0 0`},[`&-horizontal${t}-with-text${t}-dotted`]:{"&::before, &::after":{borderStyle:`dotted none none`}},[`&-vertical${t}-dotted`]:{borderInlineStartWidth:i,borderInlineEnd:0,borderBlockStart:0,borderBlockEnd:0},[`&-plain${t}-with-text`]:{color:e.colorText,fontWeight:`normal`,fontSize:e.fontSize},[`&-horizontal${t}-with-text-start${t}-no-default-orientation-margin-start`]:{"&::before":{width:0},"&::after":{width:`100%`},[`${t}-inner-text`]:{paddingInlineStart:n}},[`&-horizontal${t}-with-text-end${t}-no-default-orientation-margin-end`]:{"&::before":{width:`100%`},"&::after":{width:0},[`${t}-inner-text`]:{paddingInlineEnd:n}}})}},A=e=>({textPaddingInline:`1em`,orientationMargin:.05,verticalMarginInline:e.marginXS});var j=s(`Divider`,e=>{let t=c(e,{dividerHorizontalWithTextGutterMargin:e.margin,dividerHorizontalGutterMargin:e.marginLG,sizePaddingEdgeHorizontal:0});return[k(t)]},A,{unitless:{orientationMargin:!0}}),M=t(o()),N=t(l()),P=function(e,t){var n={};for(var r in e)Object.prototype.hasOwnProperty.call(e,r)&&t.indexOf(r)<0&&(n[r]=e[r]);if(e!=null&&typeof Object.getOwnPropertySymbols==`function`)for(var i=0,r=Object.getOwnPropertySymbols(e);i<r.length;i++)t.indexOf(r[i])<0&&Object.prototype.propertyIsEnumerable.call(e,r[i])&&(n[r[i]]=e[r[i]]);return n};const F=e=>{let{getPrefixCls:t,direction:n,className:r,style:i}=f(`divider`),{prefixCls:a,type:o=`horizontal`,orientation:s=`center`,orientationMargin:c,className:l,rootClassName:u,children:d,dashed:p,variant:m=`solid`,plain:h,style:g}=e,_=P(e,[`prefixCls`,`type`,`orientation`,`orientationMargin`,`className`,`rootClassName`,`children`,`dashed`,`variant`,`plain`,`style`]),v=t(`divider`,a),[y,b,x]=j(v),S=!!d,C=M.useMemo(()=>s===`left`?n===`rtl`?`end`:`start`:s===`right`?n===`rtl`?`start`:`end`:s,[n,s]),w=C===`start`&&c!=null,T=C===`end`&&c!=null,E=(0,N.default)(v,r,b,x,`${v}-${o}`,{[`${v}-with-text`]:S,[`${v}-with-text-${C}`]:S,[`${v}-dashed`]:!!p,[`${v}-${m}`]:m!==`solid`,[`${v}-plain`]:!!h,[`${v}-rtl`]:n===`rtl`,[`${v}-no-default-orientation-margin-start`]:w,[`${v}-no-default-orientation-margin-end`]:T},l,u),D=M.useMemo(()=>typeof c==`number`?c:/^\d+$/.test(c)?Number(c):c,[c]),O={marginInlineStart:w?D:void 0,marginInlineEnd:T?D:void 0};return y(M.createElement(`div`,Object.assign({className:E,style:Object.assign(Object.assign({},i),g)},_,{role:`separator`}),d&&o!==`vertical`&&M.createElement(`span`,{className:`${v}-inner-text`,style:O},d)))};var I=F;const L=n({name:`2bpwsd`,styles:`position:relative;color:#fff;text-align:center;background-color:#159957;background-image:linear-gradient(120deg, #155799, #159957);padding:80px 100px 120px 100px`}),R=n({name:`1fx5xze`,styles:`font-size:20px;opacity:0.7;color:unset;text-decoration:unset`}),z=n({name:`h3anzh`,styles:`position:relative;font-size:50px;font-weight:bold`}),B=n({name:`1ksolcl`,styles:`position:relative;margin-top:20px`}),V=n({name:`1yoef68`,styles:`position:absolute;top:0;right:0;bottom:0;left:0;#shader{width:100%;height:100%;opacity:0.2;}`}),H=`
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
    </script>
</shader-doodle>
`,U=()=>{let e=(0,M.useRef)(null);return(0,M.useLayoutEffect)(()=>{e.current&&(e.current.innerHTML=H)},[]),i(`div`,{className:L,children:[r(`div`,{className:V,ref:e}),r(`div`,{className:z,children:`张振衣`}),r(`div`,{className:B,children:r(`a`,{className:R,href:`https://www.zhihu.com/people/dancerphil`,children:`zhihu.com/people/dancerphil`})})]})},W=n({name:`13qx8f4`,styles:`max-width:1000px;margin:0 auto;padding:60px 0;a{color:#1e6bb8;text-decoration:none;:hover{text-decoration:underline;}}`}),G=n({name:`1azakc`,styles:`text-align:center`}),K=n({name:`rj9gtv`,styles:`margin-bottom:16px;font-size:20px;font-weight:500;color:#159957`}),q=({children:e})=>r(`div`,{className:K,children:e}),J=({href:e,children:t})=>r(`div`,{children:r(`a`,{target:`_blank`,href:e,rel:`noreferrer`,children:t})}),Y=n({name:`wk4k1s`,styles:`margin-top:4px;margin-bottom:16px;color:rgba(0, 0, 0, 0.45)`}),X=({children:e})=>r(`div`,{className:Y,children:e}),Z=()=>i(e,{children:[r(U,{}),i(`div`,{className:W,children:[r(q,{children:`目前正在维护的库`}),r(J,{href:`https://github.com/regionjs/region-core`,children:`region-core`}),r(X,{children:`react 状态管理`}),r(q,{children:`玩具箱页面导航`}),r(J,{href:`./coder`,children:`coder`}),r(X,{children:`一个基于 localStorage 的在线的编辑器`}),r(J,{href:`./10/once.html`,children:`10 随机迷宫`}),r(J,{href:`./b`,children:`base64 背景图`}),r(J,{href:`https://codepen.io/dancerphil/pen/POdeWy`,children:`纯 css 动画：bees`}),r(J,{href:`https://codepen.io/dissimulate/pen/eZxEBO`,children:`窗帘动画 from codepen`}),r(J,{href:`./d`,children:`任务管理`}),r(J,{href:`https://codepen.io/dancerphil/pen/dRmLza`,children:`自动旋转的画图工具`}),r(`a`,{children:r(`del`,{children:`恋与制作人卡牌收集计算`})}),r(J,{href:`./l`,children:`逻辑哲学论-维特根斯坦`}),r(J,{href:`./lrc-generator`,children:r(`del`,{children:`歌词生成工具`})}),r(J,{href:`./m`,children:`material-design v0 颜色分析`}),r(J,{href:`https://vincentgarreau.com/particles.js/`,children:`particles 动画`}),r(J,{href:`./qrcode-generator`,children:`二维码生成`}),r(J,{href:`./react-children-type`,children:`React Children Type`}),r(J,{href:`https://seenjs.io/demo-2048.html`,children:`3d 2048 游戏`}),r(J,{href:`./spiral-path`,children:`单词向量游戏`}),r(J,{href:`./t`,children:`网页天气插件`}),r(J,{href:`./w`,children:`纯 css 动画`}),r(I,{}),i(`div`,{className:G,children:[`With Love. `,r(`a`,{target:`_blank`,href:`https://github.com/dancerphil`,rel:`noreferrer`,children:`Dancerphil`})]})]})]});var Q=t(a());const $=(0,Q.createRoot)(document.body);$.render(r(Z,{}));