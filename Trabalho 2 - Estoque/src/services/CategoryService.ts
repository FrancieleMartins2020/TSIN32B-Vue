import HttpService from './HttpService'
export interface Category {
  id?: number
  name: string
}
const URI = '/categories'
export const CategoryService = {
  getAll: async (): Promise<Category[]> => (await HttpService.get(URI)).data,
  // Mais códigos no futuro...
}
