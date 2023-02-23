import { useState } from "react";
export enum Varian {
  Primary = "primary",
  Secondary = "secondary",
  Success = "success",
  Danger = "danger",
  Warning = "warning",
  Info = "info",
  Light = "light",
  Dark = "dark",
}

interface Message {
  variant: Varian;
  message: string;
}

function useAlertMessage() {
  const [isAlert, setIsAlert] = useState<boolean>(false);
  const [messages, setMessages] = useState<Message>();

  const alertMessage = (variant: Varian, message: string) => {
    setIsAlert(true);
    setMessages({
      variant,
      message,
    });
    setTimeout(() => {
      setIsAlert(false);
    }, 5000);
  };

  return {
    isAlert,
    messages,
    alertMessage,
  };
}

export default useAlertMessage;
