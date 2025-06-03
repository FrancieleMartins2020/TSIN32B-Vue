import HttpService from './HttpService'
import type { Product } from './ProductService'

export interface Stock {
  id?: string
  price: number
  quantity: number
  added: string
  expires: string
  productId?: string
  product?: Product
  
}

const URI = '/stock'

export const StockService = {
  getAll: async (): Promise<Stock[]> =>
  (await HttpService.get(URI+'?_sort=-expires&_embed=product&quantity_gte=1')).data,

  get: async (id:string): Promise<Stock> =>
    (await HttpService.get(URI + "/" + id)).data,

  update: async (Stock: Stock): Promise<Stock> =>
    (await HttpService.put(URI + "/" + Stock.id, Stock)).data,

  create: async (product: Stock): Promise<Stock> =>
    (await HttpService.post(URI, product)).data,

  delete: async (id:any) => (await HttpService.delete(`${URI}/${id}`)),
}