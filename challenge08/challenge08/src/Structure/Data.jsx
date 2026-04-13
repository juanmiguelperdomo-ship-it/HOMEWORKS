const transformTree = (node) => {
    if (!node) return null;

    const children = [];

    if (node.left) {
        const left = transformTree(node.left);
        if (left) children.push(left);
    }

    if (node.right) {
        const right = transformTree(node.right);
        if (right) children.push(right);
    }

    return {
        name: String(node.value),
        children: children.length ? children : undefined
    };
};


export const arbol ={
    value: 10,
    left: {
        value:5,
        left: {
            value: 2,
            left: null,
            right: null,
        },
        right: {
            value: 7,
            left: null,
            right: null
        },
    },
    right: {
        value: 15,
        left: null,
        right: {
            value: 20,
            left: null,
            right: null
        }
    }
}

export default transformTree