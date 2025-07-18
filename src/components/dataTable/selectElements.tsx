import React, { useRef } from 'react'

type SelectElementsProps = {
  elements: number[];  
  onChange?: (value: number) => void;
}

export const SelectElements = ({elements, onChange}:SelectElementsProps) => {

  const [element, setElement] = React.useState<number>(10);

  const selectRef =  useRef<HTMLSelectElement>(null);

  const handleChange = () => {
    const value = Number(selectRef.current!.value);
    setElement(value);
     if (onChange) {
        onChange(value);
      }
  }  

  return (
    <div className='mt-2'>Elementos 
      <select className="border border-gray-300 p-2 mb-4 mx-2 rounded-2xl place-self-end w-auto" value={element} ref={selectRef} onChange={() => handleChange()}>
        {elements.map((el, index) => (
        <option key={index} value={el}>{el}</option>
      ))}
      </select>
      por página</div>
    
  )
}
