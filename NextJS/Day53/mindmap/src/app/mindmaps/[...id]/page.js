import MapFlowContent from '@/app/components/MapFlowContent'
import React from 'react'

const page = () => {
  const getServer = async function(id){
    const respone = await fetch(
      `${process.env.SERVER_API}/project_mindmap/${id}`,
      {
        cache:"no-cache"
      }
    );
    return await respone.json()
  }
  return (
    <div>
      <MapFlowContent/>
    </div>
  )
}

export default page