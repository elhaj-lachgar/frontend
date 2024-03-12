import { useState } from "react"
import { ConversationStateContext } from "./ConverstionStateContext"
function ConverstionStateProvider({ children }: { children: React.ReactNode }) {
  const [ state , setState ] = useState(false);
  return (
    <ConversationStateContext.Provider value={{setState , state}}>
      {children}
    </ConversationStateContext.Provider>
  )
}

export default ConverstionStateProvider
