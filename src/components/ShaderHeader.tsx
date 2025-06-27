import 'shader-doodle';
import {ReactNode, useLayoutEffect, useRef} from 'react';
import {css} from '@emotion/css';

const headerCss = css`
    position: relative;
    color: #fff;
    text-align: center;
    background-color: #159957;
    background-image: linear-gradient(120deg, #155799, #159957);
    padding: 80px 100px;
`;

const doodleContainerCss = css`
    position: absolute;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;

    #shader {
        width: 100%;
        height: 100%;
        opacity: 0.2;
    }
`;

const shader = `
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
`;

interface Props {
    children: ReactNode;
}

export const ShaderHeader = ({children}: Props) => {
    const ref = useRef<HTMLDivElement>(null);

    useLayoutEffect(
        () => {
            if (ref.current) {
                console.log(ref.current);
                ref.current.innerHTML = shader;
            }
        },
        [],
    );

    return (
        <div className={headerCss}>
            <div className={doodleContainerCss} ref={ref} />
            {children}
        </div>
    );
};
