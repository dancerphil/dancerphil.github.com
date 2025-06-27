import {ShaderHeader} from '@/components/ShaderHeader';
import {fontSize} from '@panda-design/components';

export const Header = () => {
    return (
        <ShaderHeader>
            <h3>汉译世界学术名著丛书——商务印书馆</h3>
            <h1 className={fontSize(50)}>逻辑哲学论</h1>
            <h2>〔奥〕维特根斯坦 著</h2>
            <h2>贺绍甲 译</h2>
        </ShaderHeader>
    );
};
