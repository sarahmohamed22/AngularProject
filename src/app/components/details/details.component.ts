import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { ProductService } from '../../services/product.service';
import { Product } from '../../entities/product.entity';
import { Item } from '../../entities/item.entity';



@Component({
	templateUrl: 'details.component.html'
})

export class DetailsComponent implements OnInit {

	private items: Item[] = [];

	constructor(
		private activatedRoute: ActivatedRoute,
		private productService: ProductService
	) { }

	ngOnInit() {
		this.activatedRoute.params.subscribe(params => {
			var id = params['id'];
			if (id) {
				var item: Item = {
					product: this.productService.find(id),
					quantity: 1
				};
				if (localStorage.getItem('details') == null) {
					let details: any = [];
					details.push(JSON.stringify(item));
					localStorage.setItem('details', JSON.stringify(details));
				} else {
					let details: any = JSON.parse(localStorage.getItem('details'));
					let index: number = -1;
					for (var i = 0; i < details.length; i++) {
						let item: Item = JSON.parse(details[i]);
						if (item.product.id == id) {
							index = i;
							break;
						}
					}
					if (index == -1) {
						details.push(JSON.stringify(item));
						localStorage.setItem('details', JSON.stringify(details));
					} else {
						let item: Item = JSON.parse(details[index]);
						item.quantity += 1;
						details[index] = JSON.stringify(item);
						localStorage.setItem("details", JSON.stringify(details));
					}
				}
				this.loadDetails();
			} else {
				this.loadDetails();
			}
		});
	}

	loadDetails(): void {
		this.items = [];
		let details = JSON.parse(localStorage.getItem('details'));
		for (var i = 0; i < details.length; i++) {
			let item = JSON.parse(details[i]);
			this.items.push({
				product: item.product,
				quantity: item.quantity
			});
		}
	}


}