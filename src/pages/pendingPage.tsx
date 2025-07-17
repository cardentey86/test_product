import { useEffect, useState } from "react"
import { GetProducts, type ProductModel } from "../business/product/controller";
import { DataTable } from "../components/dataTable";

export const PendingPage = () => {

  const [todos, setTodos] = useState<ProductModel[]>([]);

  useEffect(() => {
    GetProducts().then((resp) => resp != null ? setTodos(resp) : setTodos([]));
  },[]);

  return (
    <>
      <DataTable title="Pending Page" data={todos}/>
    </>
  )
}
