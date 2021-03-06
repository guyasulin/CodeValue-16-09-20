import { Pipe, PipeTransform } from '@angular/core';
import { Product } from '../model/product';

enum SortType {
  price = 1,
  name = 2
}

@Pipe({
  name: 'sortProducts'
})
export class SortPipe implements PipeTransform {

  transform(products: Product[], sortType: SortType): Product[] {
    if (!products || !sortType) {
        return products;
    }
    else if (sortType == SortType.price) {
        return products.sort((x, y) => {
            if (x.price > y.price) {
                return 1;
            } else if (x.price < y.price) {
                return -1
            }else {
                return 0;
            }
        });
    }
    else if (sortType == SortType.name) {
        return products.sort((x, y) => x.name.toString().localeCompare(y.name.toString()));
    }
}

}
