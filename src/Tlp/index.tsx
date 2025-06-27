import styled from '@emotion/styled';
import {useCallback, useEffect} from 'react';
import {injectGlobal} from '@emotion/css';
import {ResizeLayout} from '@/components/ResizeLayout';
import {content} from './content';
import {Paragraph} from './Paragraph';
import {activeTarget, setNodes, useActiveNodeKey} from './region';
import {Header} from './Header';
import {useShortKeys} from './useShortKeys';
import {Stream} from './Stream';

injectGlobal`
    [data-panel-group],
    [data-panel]{
        overflow: unset !important;
    }
`;

const ContentContainer = styled.div`
    position: relative;
    padding: 40px 20px;
    font-size: 16px;
    line-height: 2;
    white-space: pre-line;
`;

export const Tlp = () => {
    const activeNodeKey = useActiveNodeKey();

    useShortKeys();

    useEffect(
        () => {
            const nodes = document.querySelectorAll('[data-key]');
            setNodes(nodes);
            if (window.location.hash) {
                const key = window.location.hash.slice(1);
                const target = document.querySelector(`[data-key="${key}"]`);
                if (target) {
                    activeTarget(target as Element);
                    target.scrollIntoView({behavior: 'smooth', block: 'center'});
                }
            }
        },
        [],
    );

    const handleClick = useCallback(
        (event: MouseEvent) => {
            const clickedElement = event.target as HTMLElement;
            const target = clickedElement.closest('[data-key]');
            if (!target) {
                return;
            }
            activeTarget(target);
        },
        [],
    );

    return (
        <ResizeLayout
            left={(
                <>
                    <Header />
                    <ContentContainer onClick={handleClick}>
                        {content.map((item, index) => {
                            return <Paragraph key={index} item={item} />;
                        })}
                    </ContentContainer>
                </>
            )}
            right={activeNodeKey && <Stream />}
            rightProps={{
                defaultSize: 40,
            }}
        />
    );
};
