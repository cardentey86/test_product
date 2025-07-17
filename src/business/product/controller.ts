export interface ProductModel{
    id: number;
    title: string;
    completed: boolean;
}

type FilterProps = {
    pageSize: number;
    currentPage: number;
    search: string;
    order: string;    
}

const baseUrl = "https://jsonplaceholder.typicode.com";

export const GetProducts = async (): Promise<ProductModel[]> => {
    try {

        const response = await fetch(`${baseUrl}/todos`);
        if (response.ok) {
            const data = await response.json();
            return data.map((prod: ProductModel) => ({
                id: prod.id,
                title: prod.title,
                complited: prod.completed,
                
            }));
        } else {
            return [];
        }
    } catch (error) {
        console.error(error);
        return [];
    } finally {
        console.log("Fetch completed");
    }
}

export const GetProduct = async (id:number): Promise<ProductModel|null> => {
    try {

        const response = await fetch(`${baseUrl}/todos/${id}`);            
        if (response.ok) {
            const data = await response.json();
            return data.map((prod: ProductModel) => ({
                id: prod.id,
                title: prod.title,
                complited: prod.completed,
            }));
        } else {
            return null;
        }
    } catch (error) {
        console.error(error);
        return null;
    } finally {
        console.log("Fetch completed");
    }
}

export const GetPagedProduct = async (filter: FilterProps): Promise<ProductModel|null> => {
    try {

        const response = await fetch(`${baseUrl}/todos/${filter.pageSize}/${filter.currentPage}`,{
                method: 'POST', 
                headers: {'Content-Type': 'application/json'}, 
                body: JSON.stringify(filter)
            });
        if (response.ok) {
            const data = await response.json();
            return data.map((prod: ProductModel) => ({
                id: prod.id,
                title: prod.title,
                complited: prod.completed,
            }));
        } else {
            return null;
        }
    } catch (error) {
        console.error(error);
        return null;
    } finally {
        console.log("Fetch completed");
    }
}
      
