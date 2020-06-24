import { Component, OnInit } from '@angular/core';

import { Item } from './../item.model';
import { ItemsService } from './../items.service';

@Component({
	selector: 'app-item-list',
	templateUrl: './item-list.component.html',
	styleUrls: ['./item-list.component.css'],
})
export class ItemListComponent implements OnInit {
	// Each element in this array is a pair of Items (an array of 2 Items)
	items: Item[][];

	constructor(private itemsService: ItemsService) { }

	ngOnInit() {
		this.items = this.itemsService.getItems();
	}
}