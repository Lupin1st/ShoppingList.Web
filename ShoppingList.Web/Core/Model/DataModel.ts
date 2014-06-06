module ShoppingList.Model {
    export class DataModel implements IDataModel {
        public lists: Array<DataList> = Array<DataList>();

        constructor() { /* adding lists for first time use */
            var list1 = new DataList("List 1");
            list1.products.push(new DataProduct("Product 1", "1", false));
            list1.products.push(new DataProduct("Product 2", "2", true));
            list1.products.push(new DataProduct("Product 3", "3", false));

            var list2 = new DataList("List 2");
            list2.products.push(new DataProduct("Product 4", "4", true));
            list2.products.push(new DataProduct("Product 5", "5", false));
            list2.products.push(new DataProduct("Product 6", "6", true));

            this.lists.push(list1);
            this.lists.push(list2);
        }
    }
}