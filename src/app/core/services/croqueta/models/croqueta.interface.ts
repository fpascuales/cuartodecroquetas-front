export interface ApiCroquetaI {
    _id: string,
    createAt?: string,
    name: string,
    image: string,
    description: string,
    price: number,
    units: number,
    category: CroquetaCategory,
    allergens: CroquetaAllergensI[],
}
export interface CroquetaI {
    _id: string,
    name: string,
    image: string,
    description: string,
    price: number,
    units: number,
    category: CroquetaCategory,
    allergens: CroquetaAllergensI[],
}
export interface CroquetaAllergensI {
    id: number,
    type: CroquetaAllergensType
}
export interface CroquetaTopI{
    image: string,
    name: string,
    quantity: number
}
export interface CroquetaRequestBody {
    name: string,
    image: string,
    description: string,
    price: number,
    units: number,
    category: CroquetaCategory,
    allergens: CroquetaAllergensI[]
}
export type CroquetaCategory = 'Pescado'
| 'Carne'
| 'Verdura'
| 'Queso';
export type CroquetaAllergensType = 'Gluten' 
| 'Crustáceos'
| 'Moluscos' 
| 'Pescado'
| 'Huevo'
| 'Altramuces'
| 'Mostaza'    
| 'Cacahuetes'
| 'Frutos Secos'
| 'Soja'
| 'Sésamo'
| 'Apio'
| 'Leche'
| 'Anhídrido Sulfuroso';