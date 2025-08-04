import {createRegion} from 'region-core';

const nodesRegion = createRegion<NodeListOf<HTMLElement>>();

export const getNodes = nodesRegion.getValue;

export const setNodes = nodesRegion.set;

const activeNodeKeyRegion = createRegion<string>();

export const useActiveNodeKey = activeNodeKeyRegion.useValue;

export const resetActiveNodeKey = activeNodeKeyRegion.reset;

export const activeTarget = (target: HTMLElement) => {
    const nodes = nodesRegion.getValue();
    const key = target.dataset.key;
    activeNodeKeyRegion.set(key);
    // const nextCollapsed = !target.classList.contains('collapsed');
    // let hasChildren = false;
    nodes?.forEach((node) => {
        if (node === target) {
            return;
        }
        node.classList.remove('active');
        node.classList.remove('related');
        if (node.dataset.key.startsWith(key)) {
            node.classList.add('related');
            // hasChildren = true;
            // if (nextCollapsed) {
            //     node.classList.add('hide');
            // }
            // else {
            //     node.classList.remove('hide');
            //     node.classList.remove('collapsed');
            // }
        }
    });
    target.classList.remove('related');
    target.classList.add('active');
    window.location.hash = `#${key}`;
    // if (hasChildren) {
    //     target.classList.toggle('collapsed');
    // }
};
