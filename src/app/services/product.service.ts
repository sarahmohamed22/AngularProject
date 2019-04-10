import { Injectable } from '@angular/core';

import { Product } from '../entities/product.entity';

@Injectable({providedIn:'root'})
export class ProductService {

    private products: Product[];

    constructor() {
        this.products = [
            { id: 'p1', name: 'waydior', price: 100, photo: 'perf1' },
            { id: 'p2', name: 'mac', price: 200, photo: 'per2' },
            { id: 'p3', name: 'channel2018', price: 100, photo: 'per3' },
            { id: 'p4', name: 'zara', price: 200, photo: 'per4' },
            { id: 'p5', name: 'maa el dahab', price: 900, photo: 'per5' },
            { id: 'p6', name: 'victoria', price: 290, photo: 'per6' },
            { id: 'p7', name: 'manoGirl', price: 150, photo: 'per7' },
            { id: 'p8', name: 'spring', price: 200, photo: 'per8' },
            { id: 'p9', name: 'forever', price: 230, photo: 'per9' },
                         ];
    }

    findAll(): Product[] {
        return this.products;
    }

    find(id: string): Product {
        return this.products[this.getSelectedIndex(id)];
    }

    private getSelectedIndex(id: string) {
        for (var i = 0; i < this.products.length; i++) {
            if (this.products[i].id == id) {
                return i;
            }
        }
        return -1;
    }

}
