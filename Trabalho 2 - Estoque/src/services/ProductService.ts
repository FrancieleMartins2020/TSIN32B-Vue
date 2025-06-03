import type { Category } from './CategoryService'
import HttpService from './HttpService'

export interface Product {
  id?: string
  name: string
  supplier: string
  categoryId: string
  category?: Category
}

const URI = '/products'

export const ProductService = {
  getAll: async (): Promise<Product[]> =>
  (await HttpService.get(URI+"?_embed=category")).data,

  get: async (id:string): Promise<Product> =>
    (await HttpService.get(URI + "/" + id)).data,

  update: async (Product: Product): Promise<Product> =>
    (await HttpService.put(URI + "/" + Product.id, Product)).data,

  create: async (product: Product): Promise<Product> =>
    (await HttpService.post(URI, product)).data,

  delete: async (id:any) => (await HttpService.delete(`${URI}/${id}`)),
}
