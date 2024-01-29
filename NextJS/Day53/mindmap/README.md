This is a [Next.js](https://nextjs.org/) project bootstrapped with [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app).

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `app/page.js`. The page auto-updates as you edit the file.

This project uses [`next/font`](https://nextjs.org/docs/basic-features/font-optimization) to automatically optimize and load Inter, a custom Google Font.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js/) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/deployment) for more details.

<!-- test  -->


import React, { useState } from "react";
import { useReactFlow } from "reactflow";

function ActionBtnMindMap({ sub, id, dataOrigin }) {
    const [name, setName] = useState(dataOrigin.name);

    const reactflow = useReactFlow();
    // console.log(reactflow.getNodes());
    async function handleClickSave(e) {
        e.preventDefault();
        e.stopPropagation();
        const reactflow_pane = document.querySelector(".react-flow__pane");
        await reactflow_pane.click();
        const response = await fetch(
            `${process.env.NEXT_PUBLIC_SERVER_API}/${sub.replace(
                "|",
                "-"
            )}/${id}`,
            {
                method: "PATCH",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify({
                    dataNodes: [...reactflow.getNodes()],
                    dataEdges: [...reactflow.getEdges()],
                }),
            }
        );
    }

    const handleChange = function (e) {
        e.preventDefault();
        setName(e.target.value);
        document.title = e.target.value;
    };
    return (
        <>
            <div className="absolute top-[5px] rounded-lg px-3 py-3  left-[5px] flex gap-[15px] border-1 border-solid border-indigo-600 px-[10px]">
                <input
                    type="text"
                    style={{
                        width: "200px",
                        border: "1px solid #ccc",
                        fontSize: "16px",
                        borderRadius: "6px",
                    }}
                    value={name}
                    className="outline-none pl-3"
                    onChange={handleChange}
                />
                <div
                    onClick={handleClickSave}
                    class="border-[2px] border-solid border-green-600 rounded-lg px-3 py-2 text-green-400 text-[16px] cursor-pointer hover:bg-green-600 hover:text-green-200"
                >
                    Save
                </div>

                <div class="border-[2px] border-solid border-blue-600 rounded-lg px-3 py-2 text-blue-400 text-[16px] cursor-pointer hover:bg-blue-600 hover:text-blue-200">
                    Shared
                </div>
            </div>
        </>
    );
}

export default ActionBtnMindMap;