type ProductProps = {
    id: number;
    name: string;
    price: number;
    description: string;
}

export const GetProducts = async (): Promise<ProductProps[]> => {
    try {
        const response = await fetch("https://api.example.com/products");
        if (response.ok) {
            const data = await response.json();
            return data.products.map((prod: ProductProps) => ({
                id: prod.id,
                name: prod.name,
                price: prod.price,
                description: prod.description
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
      
