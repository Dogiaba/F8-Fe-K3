import { useCallback, useEffect, useState } from 'react';
import { Handle, Position, useReactFlow } from 'reactflow';
import "./node.modele.css"
const handleStyle = { left: 10 };

function TextUpdaterNode({ data, isConnectable, id,type }) {
  const {setNodes, getNodes}= useReactFlow();
  const nodes =getNodes();
  const [name, setName] = useState(data.label);
    const onChange = useCallback((e) => {
        setName(e.target.value);
    }, []);


  useEffect(() => {
    if (type === "textUpdater") {
        window.addEventListener("click", (e) => {
            if (
                !e.target.getAttribute("id") ||
                !e.target.getAttribute("id") === "text-update"
            ) {
                setNodes((nodes) => {
                    return nodes.map((node) => {
                        if (node.id === id) {
                            return {
                                ...node,
                                data: {
                                    label: name,
                                },
                                type: `${id === "0" ? "input" : ""}`,
                            };
                        }
                        return node;
                    });
                });
            }
        });
    }
});


  return (
    <div className="text-updater-node">
      <Handle type="target" position={Position.Top} isConnectable={isConnectable} />
      <div id="text-update">
        <input id="text-update"  value={name} name="text" onChange={onChange}  className="nodrag " />
      </div>
      {/* <Handle
        type="source"
        position={Position.Bottom}
        id="a"
        style={handleStyle}
        isConnectable={isConnectable}
      /> */}
      <Handle type="source" position={Position.Bottom} id="b" isConnectable={isConnectable} />
    </div>
  );
}

export default TextUpdaterNode;
