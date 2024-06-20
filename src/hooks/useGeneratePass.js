import { useEffect, useState } from "react";

const useGeneratePass = () => {
  const [password, setPassword] = useState("");
  const [length, setLength] = useState(8);
  const [numberAllowed, setNumberAllowed] = useState(false);
  const [charAllowed, setCharAllowed] = useState(false);
  const [copy, setCopy] = useState(false);
  const passwordGenerate = () => {
    setCopy(false);
    let pass = "";
    let str = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz";
    if (numberAllowed) {
      str += "0123456789";
    }
    if (charAllowed) {
      str += "!@#$%^&*-_+=[]{}~`";
    }
    for (let i = 1; i <= length; i++) {
      let char = Math.floor(Math.random() * str.length + 1);
      pass += str.charAt(char);
    }
    setPassword(pass);
  };
  useEffect(() => {
    passwordGenerate();
    setCopy(false);
  }, [length, numberAllowed, charAllowed]);
  const copyPassword = () => {
    window.navigator.clipboard.writeText(password);
    setCopy(true);
  };
  return {
    password,
    length,
    setLength,
    setNumberAllowed,
    setCharAllowed,
    copy,
    copyPassword,
    passwordGenerate,
  };
};
export default useGeneratePass;
