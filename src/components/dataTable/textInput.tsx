import { useRef, useState } from "react";
import { IoMdClose } from "react-icons/io";
import { IoSearchOutline } from "react-icons/io5";

type TextInputProps = {
  placeholder?: string;
  value?: string;
  clearable?: boolean;
  onChange?: (value: string) => void;
}

export const TextInput = (
    { placeholder = "Enter text", clearable = false, onChange }: TextInputProps
) => {

  const [haveValue, setHaveValue] = useState<boolean>(false);
  const inputRef = useRef<HTMLInputElement>(null);

  const Clear = () => {
    inputRef.current!.value = '';
    inputRef.current!.focus();
    setHaveValue(false);
    OnChange();
  };  

  const OnChange = () => {
    if (inputRef.current) {
      const value = inputRef.current.value;
      setHaveValue(value.length > 0);
      if (onChange) {
        onChange(value);
      }
    }
  }

  return (
    <div className="relative w-50">
        <input type="text" placeholder={placeholder} ref={inputRef}
               className="border border-gray-300 p-2 mb-4 rounded-2xl place-self-end w-auto" onChange={() => OnChange()} />
        {  
            clearable && haveValue ? <span className="absolute cursor-pointer right-4 top-3" onClick={() => Clear()}><IoMdClose/></span>
            : <span className="absolute right-4 top-3"><IoSearchOutline/></span>
        }        
    </div>
  )
}
