export interface Category {
    id: string;
    title: string;
    icon?: React.ReactNode;
    image?: string
}
export interface Product {
    id: string
    title: string
    price: number
    image: string
    badge?: string
    discountPercent?: number
}