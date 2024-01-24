"use server"
import { v4 as uuidv4 } from 'uuid';
import { revalidatePath } from "next/cache";

export const handleAdd = async function(add){
    const response = await fetch(
        `${process.env.SERVER_API}/project_mindmap`,
        {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },  
            body: JSON.stringify({
                id: uuidv4(),
                name: "Không có tên",
                user_id: add,
                private: true,
                dataNodes: [
                    {
                        id: "0",
                        position: {
                            x: 0,
                            y: 0,
                        },
                        data: {
                            label: "1",
                        },
                        type: "input",
                        deletable: false,
                    },
                ],
                dataEdges: [],
            })

        }
    );
    if(response.ok){
        revalidatePath("/mindmaps")
    }
}

export const handleRemove = async ( id) => {
    const response = await fetch(
        `${process.env.SERVER_API}/project_mindmap/${id}`,
        {
            method: "DELETE",
            headers: {
                "Content-Type": "application/json",
            },
        }
    );

    if (response.ok) {
        revalidatePath("/mindmaps");
    }
};
