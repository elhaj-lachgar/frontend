import {
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalBody,
  useDisclosure,
  ModalCloseButton,
  Button,
  Input,
} from "@chakra-ui/react";
import { Plus } from "lucide-react";

function CreateRoomModule() {
  const { isOpen, onOpen, onClose } = useDisclosure();
  return (
    <>
      <Button className="bg-blue-500 text-white w-full" onClick={onOpen}>
        <Plus /> <span>إنشاء الغرفة</span>
      </Button>

      <Modal isOpen={isOpen} onClose={onClose}>
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>
            <p className="text-center text-2xl text-gray-700"> إنشاء غرفة</p>
          </ModalHeader>
          <ModalCloseButton />
          <ModalBody>
            <form className="flex flex-col gap-y-3">
              <div className="flex flex-col gap-y-1">
                <label className="text-lg text-gray-500">عنوان الغرفة</label>
                <Input />
              </div>
              <div className="flex flex-col gap-y-1">
                <label className="text-lg text-gray-500">رسالة ترحيب</label>
                <Input />
              </div>
            
              <div className="flex flex-col gap-y-1">
                <label className="text-lg text-gray-500">صورة الغرفة</label>
                <Input type="file" />
              </div>

              <Button>
              إنشاء غرفة
              </Button>
            </form>
          </ModalBody>
        </ModalContent>
      </Modal>
    </>
  );
}

export default CreateRoomModule;
