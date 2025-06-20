import styled from '@emotion/styled';
import {useCallback, useEffect} from 'react';
import {useShortKey} from 'use-short-key';
import {content} from './content';
import {Paragraph} from './Paragraph';
import {activeTarget, setNodes} from './region';
import {Header} from './Header';

const PageContainer = styled.div`
    position: relative;
    padding: 10px;
    font-size: 16px;
    line-height: 2;
    white-space: pre-line;
`;

export const Tlp = () => {
    useShortKey({
        code: 'ArrowUp',
        keydown: (e) => {
            e.preventDefault();
            const target = document.querySelector('.active');
            if (!target) {
                return;
            }
            const prev = target.previousElementSibling;
            if (prev && prev.dataset.key) {
                activeTarget(prev);
                prev.scrollIntoView({behavior: 'smooth', block: 'center'});
            }
        },
    });
    useShortKey({
        code: 'ArrowDown',
        keydown: (e) => {
            e.preventDefault();
            const target = document.querySelector('.active');
            if (!target) {
                return;
            }
            const next = target.nextElementSibling;
            if (next && next.dataset.key) {
                activeTarget(next);
                next.scrollIntoView({behavior: 'smooth', block: 'center'});
            }
        },
    });

    useEffect(
        () => {
            const nodes = document.querySelectorAll('[data-key]');
            setNodes(nodes);
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
        <PageContainer onClick={handleClick}>
            <Header />
            {content.map((item, index) => {
                return <Paragraph key={index} item={item} />;
            })}
        </PageContainer>
    );
};
