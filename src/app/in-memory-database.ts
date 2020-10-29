import { InMemoryDbService } from "angular-in-memory-web-api";
import { Category } from "./pages/categories/shared/category.model";
import { Entry } from "./pages/entries/shared/entry.model";

export class InMemoryDatabase implements InMemoryDbService {
  createDb(){
    const categories: Category[] = [
      { id: 1, name: 'Saúde', description: 'Remédios e produtos de beleza' },
      { id: 2, name: 'Alimentação', description: 'Processados, frutas e verduras' },
      { id: 3, name: 'Terceiros', description: 'Otimização da empresa' }
    ];

    const entries: Entry[] = [
      { id: 1, name: 'Almoço Restaurante B', categoryId: categories[1].id, category: categories[1], paid: true, date: "28/10/2020", amount: "45,90", type: "revenue" } as Entry,
      { id: 2, name: 'Remédio A', categoryId: categories[0].id, category: categories[0], paid: true, date: "29/10/2020", amount: "15,00", type: "revenue" } as Entry,
      { id: 3, name: 'Projeto XYZ', categoryId: categories[2].id, category: categories[2], paid: false, date: "25/11/2020", amount: "2850,00", type: "expense" } as Entry
    ];

    return { categories, entries }
 }
}