import Conversations from "../components/Conversations"
import MessageContainer from "../components/MessageContainer"
import MobileConversation from "../components/MobileConversation"

function Home() {
  return (
    <main className=" flex border  h-full w-full  rounded-md bg-white  relative">
      <Conversations/>
      <MessageContainer/>
      <MobileConversation/>
    </main>
  )
}

export default Home
