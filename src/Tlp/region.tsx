import {createRegion} from 'region-core';

const nodesRegion = createRegion<NodeListOf<Element>>();

export const setNodes = nodesRegion.set;

export const activeTarget = (target: Element) => {
    const nodes = nodesRegion.getValue();
    const key = target.dataset.key;
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
    // if (hasChildren) {
    //     target.classList.toggle('collapsed');
    // }
};
