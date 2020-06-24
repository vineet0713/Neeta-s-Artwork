import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, ParamMap } from '@angular/router';

import { Item } from './../item.model';
import { ItemsService } from './../items.service';

@Component({
	selector: 'app-item-view',
	templateUrl: './item-view.component.html',
	styleUrls: ['./item-view.component.css'],
})
export class ItemViewComponent implements OnInit {
	viewingItem: Item;

	constructor(private itemsService: ItemsService, private route: ActivatedRoute) { }

	ngOnInit() {
		this.route.paramMap.subscribe((paramMap: ParamMap) => {
			const itemId = paramMap.get('itemId');
			this.viewingItem = this.itemsService.getItem(itemId);
		});
	}
}