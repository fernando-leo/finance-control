import { InMemoryDbService } from "angular-in-memory-web-api";
import { Category } from "./pages/categories/shared/category.model";
import { Entry } from "./pages/entries/shared/entry.model";

export class InMemoryDatabase implements InMemoryDbService {
  createDb(){
    const categories: Category[] = [
      { id: 1, name: 'Moradia', description: 'Pagamentos de Contas da Casa' },
      { id: 2, name: 'Saúde', description: 'Plano de Saúde e Remédios' },
      { id: 3, name: 'Lazer', description: 'Cinema, parques, praia, etc' }
    ];

    const entries: Entry[] = [
      { id: 1, name: 'Gás de Cozinha', categoryId: categories[0].id, category: categories[0], paid: true, date: "14/10/2018", amount: "70,80", type: "expense", description: "Qualquer descrição para essa despesa" } as Entry,
      { id: 2, name: 'Salário na Empresa X', categoryId: categories[1].id, category: categories[1], paid: true, date: "15/10/2018", amount: "4405,49", type: "revenue" } as Entry,
      { id: 3, name: 'Uber', categoryId: categories[1].id, category: categories[1], paid: true, date: "17/10/2018", amount: "30,00", type: "expense" } as Entry,
      { id: 4, name: 'Aluguel', categoryId: categories[2].id, category: categories[2], paid: false, date: "23/10/2018", amount: "15,00", type: "expense" } as Entry,
      { id: 5, name: 'Pagamento Pelo Projeto XYZ', categoryId: categories[2].id, category: categories[2], paid: true, date: "25/10/2018", amount: "2980,00", type: "revenue" } as Entry
    ];

    return { categories, entries }
 }
}