type product = {
    id: number,
    name: string,
    category:{
        id:number,
        name: string,
    }
    product_details:productDetail[]
    
}

type productDetail = {
    id:number,
    product_id:number,
    in_stock: number,
    price: number,
    size: string,
    sold: number,
    colorValue: string,
    colorName: string,
    update_at: Date|null,
    images:
        {
            id: number,
            product_details_id: number,
            name: string,
        }[]
}