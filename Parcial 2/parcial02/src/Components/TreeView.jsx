import "../Styles/Tree.css";

function TreeView({ node, onSelect }) {
    return (
        <div className="tree-node">
            
            <p
                className="tree-item"
                onClick={() => onSelect(node)}
            >
                {node.type === "folder" ? "📁" : "📄"} {node.name}
            </p>

            {node.children &&
                node.children.map((child) => (
                    <TreeView
                        key={child.id}
                        node={child}
                        onSelect={onSelect}
                    />
                ))}
        </div>
    );
}

export default TreeView;