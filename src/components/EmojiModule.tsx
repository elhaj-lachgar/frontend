import { Smile } from "lucide-react";
import {
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalBody,
  useDisclosure,
  ModalCloseButton,
} from "@chakra-ui/react";
import { Emojis } from "../lib/utils";

function EmojiModule({
  setmessage,
  message
}: {
  setmessage: React.Dispatch<React.SetStateAction<string>>;
  message:string
}) {
  const { isOpen, onOpen, onClose } = useDisclosure();
  return (
    <>
      <Smile onClick={onOpen} className="text-yellow-400" />
      <Modal isOpen={isOpen} onClose={onClose}>
        <ModalOverlay />
        <ModalContent dir="ltr" className="w-[225px] h-[400px]">
        <ModalHeader className="text-center text-blue-500">Emoji</ModalHeader>
          <ModalCloseButton />
          <ModalBody>
            <div className="flex flex-wrap gap-x-3  w-[300px] h-[300px] no-scrollbar overflow-auto mx-auto border px-3 py-2 rounded-xl">
              {Emojis.map((ele) => (
                <div
                  className="cursor-pointer"
                  id={ele}
                  onClick={(e) => setmessage(message + e.currentTarget.id)}
                >
                  {ele}
                </div>
              ))}
              {Emojis.map((ele) => (
                <div
                  className="cursor-pointer"
                  id={ele}
                  onClick={(e) => setmessage(message + e.currentTarget.id)}
                >
                  {ele}
                </div>
              ))}
              {Emojis.map((ele) => (
                <div
                  className="cursor-pointer"
                  id={ele}
                  onClick={(e) => setmessage(message + e.currentTarget.id)}
                >
                  {ele}
                </div>
              ))}
              {Emojis.map((ele) => (
                <div
                  className="cursor-pointer"
                  id={ele}
                  onClick={(e) => setmessage(message + e.currentTarget.id)}
                >
                  {ele}
                </div>
              ))}
              {Emojis.map((ele) => (
                <div
                  className="cursor-pointer"
                  id={ele}
                  onClick={(e) => setmessage(message + e.currentTarget.id)}
                >
                  {ele}
                </div>
              ))}
              {Emojis.map((ele) => (
                <div
                  className="cursor-pointer"
                  id={ele}
                  onClick={(e) => setmessage(message + e.currentTarget.id)}
                >
                  {ele}
                </div>
              ))}
              {Emojis.map((ele) => (
                <div
                  className="cursor-pointer"
                  id={ele}
                  onClick={(e) => setmessage(message + e.currentTarget.id)}
                >
                  {ele}
                </div>
              ))}
              {Emojis.map((ele) => (
                <div
                  className="cursor-pointer"
                  id={ele}
                  onClick={(e) => setmessage(message + e.currentTarget.id)}
                >
                  {ele}
                </div>
              ))}
            </div>
          </ModalBody>
        </ModalContent>
      </Modal>
    </>
  );
}

export default EmojiModule;
