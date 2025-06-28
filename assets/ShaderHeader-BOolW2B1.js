import{__toESM as e,css as t,jsx as n,jsxs as r,require_react as i}from"./emotion-react-jsx-runtime.browser.esm-DZaAdDk0.js";function a(e,t){if(!(e instanceof t))throw TypeError(`Cannot call a class as a function`)}function o(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,`value`in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function s(e,t,n){return t&&o(e.prototype,t),n&&o(e,n),e}function c(e,t){if(typeof t!=`function`&&t!==null)throw TypeError(`Super expression must either be null or a function`);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&u(e,t)}function l(e){return l=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)},l(e)}function u(e,t){return u=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e},u(e,t)}function d(){if(typeof Reflect>`u`||!Reflect.construct||Reflect.construct.sham)return!1;if(typeof Proxy==`function`)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],function(){})),!0}catch{return!1}}function f(e,t,n){return f=d()?Reflect.construct:function(e,t,n){var r=[null];r.push.apply(r,t);var i=Function.bind.apply(e,r),a=new i;return n&&u(a,n.prototype),a},f.apply(null,arguments)}function p(e){return Function.toString.call(e).indexOf(`[native code]`)!==-1}function m(e){var t=typeof Map==`function`?new Map:void 0;return m=function(e){if(e===null||!p(e))return e;if(typeof e!=`function`)throw TypeError(`Super expression must either be null or a function`);if(t!==void 0){if(t.has(e))return t.get(e);t.set(e,n)}function n(){return f(e,arguments,l(this).constructor)}return n.prototype=Object.create(e.prototype,{constructor:{value:n,enumerable:!1,writable:!0,configurable:!0}}),u(n,e)},m(e)}function h(e){if(e===void 0)throw ReferenceError(`this hasn't been initialised - super() hasn't been called`);return e}function g(e,t){return t&&(typeof t==`object`||typeof t==`function`)?t:h(e)}var _=`
attribute vec2 position;

void main() {
  gl_Position = vec4(position, 0.0, 1.0);
}`,v=document.createElement(`template`);v.innerHTML=`
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
`;var y=/\(\s*out\s+vec4\s+(\S+)\s*,\s*in\s+vec2\s+(\S+)\s*\)/,b=function(e){c(t,e);function t(){var e;return a(this,t),e=g(this,l(t).call(this)),e.shadow=e.attachShadow({mode:`open`}),e.shadow.appendChild(v.content.cloneNode(!0)),e}return s(t,[{key:`connectedCallback`,value:function(){var e=this;this.mounted=!0,setTimeout(function(){if(!e.textContent.trim())return!1;try{e.init()}catch(t){e.textContent=``,console.error(t&&t.message||`Error in shader-doodle.`)}})}},{key:`disconnectedCallback`,value:function(){this.mounted=!1,this.canvas.removeEventListener(`mousedown`,this.mouseDown),this.canvas.removeEventListener(`mousemove`,this.mouseMove),this.canvas.removeEventListener(`mouseup`,this.mouseUp),clearAnimationFrame(this.animationFrame)}},{key:`init`,value:function(){var e=this;this.useST=this.hasAttribute(`shadertoy`);var t=this.textContent;this.uniforms={resolution:{name:this.useST?`iResolution`:`u_resolution`,type:`vec2`,value:[0,0]},time:{name:this.useST?`iTime`:`u_time`,type:`float`,value:0},delta:{name:this.useST?`iTimeDelta`:`u_delta`,type:`float`,value:0},date:{name:this.useST?`iDate`:`u_date`,type:`vec4`,value:[0,0,0,0]},frame:{name:this.useST?`iFrame`:`u_frame`,type:`int`,value:0},mouse:{name:this.useST?`iMouse`:`u_mouse`,type:this.useST?`vec4`:`vec2`,value:this.useST?[0,0,0,0]:[0,0]}},this.canvas=document.createElement(`canvas`),this.shadow.appendChild(this.canvas);var n=this.gl=this.canvas.getContext(`webgl`);if(this.updateRect(),this.useST){var r=t.match(y);t=t.replace(`mainImage`,`main`),t=t.replace(y,`()`),t=(r?`#define ${r[1]} gl_FragColor
#define ${r[2]} gl_FragCoord.xy
`:``)+t}var i=Object.values(this.uniforms).reduce(function(e,t){return e+`uniform ${t.type} ${t.name};
`},``);t=i+t,t=`precision highp float;
`+t,n.clearColor(0,0,0,0),this.vertexShader=this.makeShader(n.VERTEX_SHADER,_),this.fragmentShader=this.makeShader(n.FRAGMENT_SHADER,t),this.program=this.makeProgram(this.vertexShader,this.fragmentShader),this.vertices=new Float32Array([-1,1,1,1,1,-1,-1,1,1,-1,-1,-1]),this.buffer=n.createBuffer(),n.bindBuffer(n.ARRAY_BUFFER,this.buffer),n.bufferData(n.ARRAY_BUFFER,this.vertices,n.STATIC_DRAW),n.useProgram(this.program),this.program.position=n.getAttribLocation(this.program,`position`),n.enableVertexAttribArray(this.program.position),n.vertexAttribPointer(this.program.position,2,n.FLOAT,!1,0,0),Object.values(this.uniforms).forEach(function(t){t.location=n.getUniformLocation(e.program,t.name)}),this._bind(`mouseDown`,`mouseMove`,`mouseUp`,`render`),this.canvas.addEventListener(`mousedown`,this.mouseDown),this.canvas.addEventListener(`mousemove`,this.mouseMove),this.canvas.addEventListener(`mouseup`,this.mouseUp),this.render()}},{key:`render`,value:function(e){if(!(!this||!this.mounted||!this.gl)){var t=this.gl;this.updateTimeUniforms(e),this.updateRect(),t.clear(t.COLOR_BUFFER_BIT),Object.values(this.uniforms).forEach(function(e){var n=e.type,r=e.location,i=e.value,a=n.match(/vec/)?`${n[n.length-1]}fv`:`1${n[0]}`;t[`uniform${a}`](r,i)}),t.drawArrays(t.TRIANGLES,0,this.vertices.length/2),this.ticking=!1,this.animationFrame=requestAnimationFrame(this.render)}}},{key:`mouseDown`,value:function(e){if(this.useST){this.mousedown=!0;var t=this.rect,n=t.top,r=t.left,i=t.height;this.uniforms.mouse.value[2]=e.clientX-Math.floor(r),this.uniforms.mouse.value[3]=Math.floor(i)-(e.clientY-Math.floor(n))}}},{key:`mouseMove`,value:function(e){if(!this.ticking&&(!this.useST||this.mousedown)){var t=this.rect,n=t.top,r=t.left,i=t.height;this.uniforms.mouse.value[0]=e.clientX-Math.floor(r),this.uniforms.mouse.value[1]=Math.floor(i)-(e.clientY-Math.floor(n)),this.ticking=!0}}},{key:`mouseUp`,value:function(e){this.useST&&(this.mousedown=!1,this.uniforms.mouse.value[2]=0,this.uniforms.mouse.value[3]=0)}},{key:`updateTimeUniforms`,value:function(e){var t=this.lastTime?(e-this.lastTime)/1e3:0;this.lastTime=e,this.uniforms.time.value+=t,this.uniforms.delta.value=t,this.uniforms.frame.value++;var n=new Date;this.uniforms.date.value[0]=n.getFullYear(),this.uniforms.date.value[1]=n.getMonth()+1,this.uniforms.date.value[2]=n.getDate(),this.uniforms.date.value[3]=n.getHours()*60*60+n.getMinutes()*60+n.getSeconds()+n.getMilliseconds()*.001}},{key:`updateRect`,value:function(){this.rect=this.canvas.getBoundingClientRect();var e=this.rect,t=e.width,n=e.height,r=this.canvas.width!==t,i=this.canvas.height!==n;r&&(this.canvas.width=this.uniforms.resolution.value[0]=t),i&&(this.canvas.height=this.uniforms.resolution.value[1]=n),(r||i)&&this.gl.viewport(0,0,this.canvas.width,this.canvas.height)}},{key:`makeShader`,value:function(e,t){var n=this.gl,r=n.createShader(e);if(n.shaderSource(r,t),n.compileShader(r),!n.getShaderParameter(r,n.COMPILE_STATUS)){var i=n.getShaderInfoLog(r);n.deleteShader(r),console.warn(i,`
in shader:
`,t)}return r}},{key:`makeProgram`,value:function(){for(var e=this.gl,t=e.createProgram(),n=arguments.length,r=Array(n),i=0;i<n;i++)r[i]=arguments[i];if(r.forEach(function(n){e.attachShader(t,n)}),e.linkProgram(t),!e.getProgramParameter(t,e.LINK_STATUS)){var a=e.getProgramInfoLog(this.program);console.warn(a)}return t}},{key:`_bind`,value:function(){for(var e=this,t=arguments.length,n=Array(t),r=0;r<t;r++)n[r]=arguments[r];n.forEach(function(t){return e[t]=e[t].bind(e)})}}]),t}(m(HTMLElement));customElements.define(`shader-doodle`,b);var x=e(i());const S=t({name:`1fiuwws`,styles:`position:relative;color:#fff;text-align:center;background-color:#159957;background-image:linear-gradient(120deg, #155799, #159957);padding:80px 100px`}),C=t({name:`1yoef68`,styles:`position:absolute;top:0;right:0;bottom:0;left:0;#shader{width:100%;height:100%;opacity:0.2;}`}),w=`
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
`,T=({children:e})=>{let t=(0,x.useRef)(null);return(0,x.useLayoutEffect)(()=>{t.current&&(t.current.innerHTML=w)},[]),r(`div`,{className:S,children:[n(`div`,{className:C,ref:t}),e]})};export{T as ShaderHeader};