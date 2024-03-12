import {
    Modal,
    ModalOverlay,
    ModalContent,
    ModalHeader,
    ModalBody,
    Avatar,
    useDisclosure,
    ModalCloseButton
  } from '@chakra-ui/react'

import { MessageCircle , Gift } from 'lucide-react'
import { useNavigate } from 'react-router-dom';

function UserModule() {
    const { isOpen, onOpen, onClose } = useDisclosure();
    const router = useNavigate();
    return (
      <>
        <Avatar onClick={onOpen}/>
  
        <Modal isOpen={isOpen} onClose={onClose} >
          <ModalOverlay />
          <ModalContent alignItems={"center"} >
            <ModalHeader textAlign={"center"}  color={"rgb(55 65 81)"}>الملف الشخصي</ModalHeader>
            <ModalCloseButton/>
            <ModalBody>
              <img className='mx-auto w-[150px] h-[150px]' src='/avatar.webp'/>
              <p className='text-center text-lg text-gray-600 '>الحاج لشكر</p>
              <div className='flex  flex-col border justify-between px-5 py-2 rounded-lg mt-3 gap-y-2'>
                  <div className='flex gap-x-1 items-center' onClick={()=>router('/private-chat')}>
                    <MessageCircle className='text-blue-400 cursor-pointer' />
                    محادثة في خاصة
                  </div>
                  <div className='flex gap-x-1 items-center '>
                    <Gift className='text-purple-500 cursor-pointer'/>   
                    إرسال هدية
                  </div>
              </div>
            </ModalBody>
  
          </ModalContent>
        </Modal>
      </>
    )
}

export default UserModule
