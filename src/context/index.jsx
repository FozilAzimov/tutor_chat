import MessagesPovider from "./MessageAll";
import TelegramPovider from "./Telegram";


const RootContext = ({ children }) => {
  return (
    <MessagesPovider>
      <TelegramPovider>
        {children}
      </TelegramPovider>
    </MessagesPovider>
  )
}

export default RootContext;