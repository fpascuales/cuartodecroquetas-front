export interface HeaderLink {
    url: HeaderUrl,
    content: string;
}
export type HeaderUrl = 'admin/home' | 'admin/croqueta-list' | 'admin/order-list'