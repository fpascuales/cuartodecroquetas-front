import { CroquetaI } from "../../croqueta/models/croqueta.interface";

export interface ApiOrderI {
    _id?: string,
    orderCroqueta: ApiOrderCroquetaI[],
    total: number,
    date: string,
    time: string,
    num: number,
    createAt?: string,
    updatedAt?: string,
    __v?: number
}
export interface ApiOrderCroquetaI {
    croqueta: string,
    quantity: number,
    subtotal: number,
    createAt?: string,
    updatedAt?: string
}
export interface OrderCroquetaI {
    croqueta: CroquetaI,
    quantity: number,
    subtotal: number
}
export interface OrderRequestCroquetaI {
    croqueta: string,
    quantity: number,
    subtotal: number
}
export interface OrderRequestBody {
    date: string,
    time: string,
    orderCroqueta: OrderRequestCroquetaI[],
    total: number
}
