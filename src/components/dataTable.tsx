import { useEffect, useState } from "react"
import type { ProductModel } from "../business/product/controller"
import { BsSortAlphaDown, BsSortAlphaUp, BsSortNumericDown, BsSortNumericUp } from "react-icons/bs"
import { TextInput } from "./textInput"

type DataTableProps = {
    title: string
    data: ProductModel[]
}

type OrderType = {
    field: string
    type: string
};

export const DataTable = ({title, data}: DataTableProps) => {

  const [items, setItems] = useState<ProductModel[]>(data);  
  const [order, setOrder] = useState<OrderType>({field: 'id', type: 'asc'});  

  const Sort = () => {
    const sortedItems = [...items]; 
    if (order.type === 'asc') {
    if (order.field === 'id') {
        sortedItems.sort((a, b) => a.id - b.id);
    } else if (order.field === 'title') {
        sortedItems.sort((a, b) => a.title.localeCompare(b.title));
    } else if (order.field === 'completed') {
        sortedItems.sort((a, b) => (a.completed === b.completed ? 0 : a.completed ? -1 : 1));
    }
    } else {
    if (order.field === 'id') {
        sortedItems.sort((a, b) => b.id - a.id);
    } else if (order.field === 'title') {
        sortedItems.sort((a, b) => b.title.localeCompare(a.title));
    } else if (order.field === 'completed') {
        sortedItems.sort((a, b) => (a.completed === b.completed ? 0 : a.completed ? -1 : 1));
    }
    }
    setItems(sortedItems);
  };  

  useEffect(()=>{
    setItems(data);
  },[data]);

  useEffect(()=>{
    Sort();
  },[order])

  const SwitchOrder = (pField: string) => {
    setOrder(prev => ({
    field: pField,
    type: prev.field === pField && prev.type === 'asc' ? 'desc' : 'asc'
  }));
  } 

  const Search = (search: string) => {
            setItems(data.filter(item => 
                item.title.toLowerCase().includes(search) ||
                item.id.toString().includes(search) 
            ));
  }

  return (
    <div className="w-full">
        <h1 className="text-[22px] font-semibold p-2">{title}</h1>   
        <div className="flex justify-end">
            <TextInput placeholder="Search..." clearable={true} onChange={(value) => Search(value.toLowerCase())}/>
        </div>     
        
        <table className="border-collapse border border-gray-400 text-center w-full">
            <thead>
                <tr>
                    <th className="border border-gray-300 p-2">
                        <span className="flex items-center justify-center relative w-full">
                            <div className="text-center w-full cursor-pointer" onClick={()=>SwitchOrder('id')}>Id</div>
                            {
                                order.field === 'id' &&
                                order.type === 'asc' ? 
                                <BsSortNumericDown  className="absolute right-1 text-gray-500" /> : 
                                <BsSortNumericUp className="absolute right-1 text-gray-500"/>
                            }
                        </span></th>
                    <th className="border border-gray-300 p-2"><span className="flex items-center justify-center relative w-full">
                            <div className="text-center w-full cursor-pointer" onClick={()=>SwitchOrder('title')}>Title</div>
                            {
                                order.field === 'title' &&
                                order.type === 'asc' ? 
                                <BsSortAlphaDown  className="absolute right-1 text-gray-500" /> : 
                                <BsSortAlphaUp className="absolute right-1 text-gray-500"/>
                            }
                        </span></th>
                    <th className="border border-gray-300 p-2"><span className="flex items-center justify-center relative w-full">
                            <div className="text-center w-full cursor-pointer" onClick={()=>SwitchOrder('completed')}>Completed</div>
                            {
                                order.field === 'completed' &&
                                order.type === 'asc' ? 
                                <BsSortAlphaDown  className="absolute right-1 text-gray-500" /> : 
                                <BsSortAlphaUp className="absolute right-1 text-gray-500"/>
                            }
                        </span></th>
                </tr>
            </thead>
        <tbody>
            {
                items.map((elem : ProductModel) => 
                    {
                        return (
                            <tr key={elem.id}>
                                <td className="border border-gray-300 p-1">{elem.id}</td>
                                <td className="border border-gray-300 text-start p-1">{elem.title}</td>
                                <td className="border border-gray-300 p-1">{elem.completed ? 'true':'false'}</td>
                            </tr>
                        )
                    })
            }
        </tbody>
        </table>
    </div>
    
  )
}
