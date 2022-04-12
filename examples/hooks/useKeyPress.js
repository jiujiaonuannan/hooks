import { useEffect, useState } from "react";

// 使用 document.body 作为默认的监听节点
const useKeyPress = (domNode = document.body) => {
  const [key, setKey] = useState(null);
  useEffect(() => {
    const handleKeyPress = (evt) => {
      setKey(evt.keyCode);
    };
    // 监听按键事件
    domNode.addEventListener("keypress", handleKeyPress);
    return () => {
      // 接触监听按键事件
      domNode.removeEventListener("keypress", handleKeyPress);
    };
  }, [domNode]);
  return key;
};