"use client";
import React, { useState } from "react";
import {
  Modal,
  ModalContent,
  ModalHeader,
  ModalBody,
  ModalFooter,
  Button,
  useDisclosure,
  Tabs,
  Tab,
  Card,
  CardBody,
  Textarea,
} from "@nextui-org/react";

import { IoIosShareAlt } from "react-icons/io";
import { usePathname } from "next/navigation";

const ModalShare = ({ id, serverData}) => {
  const { isOpen, onOpen, onOpenChange } = useDisclosure();
  const pathname = usePathname();
  const [shareLink, setShareLink]= useState(
    `${process.env.NEXT_PUBLIC_HOST}${pathname}`
  )

 
  // const [tabs, setTabs] = useState();
  const [titleShare, setTitleShare] = useState(serverData.name);
  const [privateShare, setPrivateShare] = useState(serverData.private)
  const [imageShared, setImageShared] = useState(serverData.image);
  const [desc, setDesc] = useState(serverData.desc)
  console.log(imageShared,serverData.image, serverData)

  async function handleSubmit(e){
    e.preventDefaults();
    // console.log(`${process.env.NEXT_PUBLIC_SERVER_API}/project_mindmap/${id}`)
    if(privateShare === true){
      const response = await fetch(
        `${process.env.NEXT_PUBLIC_SERVER_API}/project_mindmap/${id}`,
        {
          method: "PATCH",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            private:privateShare,
            public:null,
            public_id:null,
          })
        }
      )

    }else{
      const response = await fetch(
        `${process.env.NEXT_PUBLIC_SERVER_API}/project_mindmap/${id}`,
        {
          method: "PATCH",
          headers: {
            "Content-Type": "application/json",
          },
          body:JSON.stringify({
            private:privateShare,
            public:{
              title,
              imageShared,
              desc,
            },
            public_id: shareLink.slice(
              shareLink.lastIndexOf("/")+1
            )
            
          })
        }
      )

    }

  } 

  return (
    <>
      <Button onPress={onOpen}>
        <IoIosShareAlt /> Chia sẻ
      </Button>
      <Modal isOpen={isOpen} onOpenChange={onOpenChange}>
        <ModalContent>
          {(onClose) => (
            <>
              <from action="" onSubmit={handleSubmit}>
                <div className="px-4 pt-5 pb-4 sm:p-6 sm:pb-4">
                  <div className="mx-auto max-w-sm text-center flex flex-wrap justify-center  gap-1 ">
                    <div className="flex items-center mr-4 mb-4 " onClick={(e)=> setPrivateShare(true)}>
                      <input name="private" type="radio" value="true" checked />
                      <label
                        className="flex items-center cursor-pointer"
                        htmlFor="private"
                      >
                        Private
                      </label>
                    </div>
                    <div className="flex items-center mr-4 mb-4" onClick={(e)=> setPrivateShare(false)}>
                      <input type="radio" name="public" value="false" />
                      <label className="flex items-center cursor-pointer">
                        Public
                      </label>
                    </div>
                  </div>
                  {privateShare ? (
                    <>
                      <div>
                        <p>
                          Nếu chọn riêng tư, chỉ có bạn mới được quyền xem
                          Mindmap này
                        </p>
                      </div>
                    </>
                  ) : (
                    <>
                      <div className="group relative">
                        <label className="block w-full pb-1 text-sm font-medium text-gray-500 transition-all duration-200 ease-in-out group-focus-within:text-blue-400">
                          Liên kết chia sẻ
                        </label>
                        <input
                          type="url"
                          className="peer h-10 w-full rounded-md bg-gray-50 px-4 drop-shadow-sm transition-all duration-200 ease-in-out focus:bg-white focus:ring-2 focus:ring-blue-400 outline-none"
                          onChange={(e) => setShareLink(e.target.value)}
                          readOnly
                          value={shareLink}
                        />
                      </div>

                      <div className="group relative mt-3">
                        <label className="block w-full pb-1 text-sm font-medium text-gray-500 transition-all duration-200 ease-in-out group-focus-within:text-blue-400">
                          Tiêu đề
                        </label>
                        <input
                          type="text"
                          className="peer h-10 w-full rounded-md bg-gray-50 px-4 drop-shadow-sm transition-all duration-200 ease-in-out focus:bg-white focus:ring-2 focus:ring-blue-400 outline-none"
                          placeholder="Mindmap không tên"
                          name="title"
                          onChange={(e) => setTitleShare(e.target.value)}
                          value={titleShare}
                        />
                      </div>

                      <div className="group relative mt-3">
                        <label className="block w-full pb-1 text-sm font-medium text-gray-500 transition-all duration-200 ease-in-out group-focus-within:text-blue-400">
                          Mô tả
                        </label>
                        <Textarea
                          type="text"
                          className="peer h-20 w-full rounded-md bg-white  px-4 drop-shadow-sm transition-all duration-200 ease-in-out focus:bg-white focus:ring-2 focus:ring-blue-400 outline-none"
                          name="description"
                          onChange={(e)=> setDesc(e.target.value)}
                          value={desc}
                        >
                       
                          Chưa có mô tả
                        </Textarea>
                      </div>

                      <div className="group relative mt-3">
                        <label className="block w-full pb-1 text-sm font-medium text-gray-500 transition-all duration-200 ease-in-out group-focus-within:text-blue-400">
                          Ảnh chia sẻ
                        </label>
                        <input
                          type="url"
                          className="peer h-10 w-full rounded-md bg-gray-50 px-4 drop-shadow-sm transition-all duration-200 ease-in-out focus:bg-white focus:ring-2 focus:ring-blue-400 outline-none"
                          name="image"
                          onChange={(e)=> setImageShared(e.target.value)}
                          value={imageShared}
                        />
                      </div>
                    </>
                  )}
                </div>
                {/* <ModalHeader className="flex flex-col gap-1">Modal Title</ModalHeader>
            <ModalBody>
              <p> 
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                Nullam pulvinar risus non risus hendrerit venenatis.
                Pellentesque sit amet hendrerit risus, sed porttitor quam.
              </p>
            </ModalBody> */}
                <ModalFooter>
                  <Button color="danger" variant="light" onPress={onClose}>
                    Close
                  </Button>
                  <Button color="primary" onPress={onClose}>
                    Save
                  </Button>
                </ModalFooter>
              </from>
            </>
          )}
        </ModalContent>
      </Modal>
    </>
  );
};

export default ModalShare;
