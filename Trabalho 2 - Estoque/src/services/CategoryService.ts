import HttpService from './HttpService'
export interface Category {
  id?: string
  name: string
}
const URI = '/categories'
export const CategoryService = {
  getAll: async (): Promise<Category[]> => (await HttpService.get(URI)).data,
  create: async (category: Category): Promise<Category> =>
   (await HttpService.post(URI, category)).data,
  get: async (id:string): Promise<Category> =>
   (await HttpService.get(URI + "/" + id)).data,
  update: async (category: Category): Promise<Category> =>
   (await HttpService.put(URI + "/" + category.id, category)).data,
  delete: async (id:any) => (await HttpService.delete(`${URI}/${id}`)),
}

