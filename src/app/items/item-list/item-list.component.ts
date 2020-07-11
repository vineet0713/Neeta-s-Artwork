import { Component, OnInit, ViewChild, HostListener } from '@angular/core';
import { Router } from '@angular/router';
import { PageEvent, MatPaginator } from '@angular/material';

import { Item } from './../item.model';
import { ItemsService } from './../items.service';

@Component({
	selector: 'app-item-list',
	templateUrl: './item-list.component.html',
	styleUrls: ['./item-list.component.css'],
})
export class ItemListComponent implements OnInit {
	@ViewChild('paginator', { static: false }) paginator: MatPaginator;

	// Each element in this array is a pair of Items (an array of 2 Items)
	items: Item[][];

	isLoading = false;
	totalItems = 5;
	itemsPerPage = 2;
	currentPage = 1;
	pageOptions = [1, 2, 4, 10];

	matgridRatio = '1.3:1';

	filters: string[] = [];

	constructor(private itemsService: ItemsService, private router: Router) { }

	ngOnInit() {
		this.fetchItems();
		this.updateMatGridRatio();
	}

	fetchItems() {
		this.isLoading = true;
		this.itemsService.getItems(this.itemsPerPage, this.currentPage, this.filters)
			.then(response => {
				this.totalItems = response.totalItems;
				this.items = this.convertToPairs(response.items);
				this.isLoading = false;
			})
			.catch(error => {
				this.isLoading = false;
				alert(error.message);
			});
	}

	onItemSelected(item: Item) {
		this.itemsService.itemToView = item;
		this.router.navigate(['view', item._id]);
	}

	onChangedPage(pageData: PageEvent) {
		if (pageData.pageSize === this.itemsPerPage) {
			this.currentPage = pageData.pageIndex + 1;
		} else {
			this.itemsPerPage = pageData.pageSize;
			this.currentPage = 1;
			this.paginator.firstPage();
		}
		// Reload the posts with the updated range.
		this.fetchItems();
	}

	private convertToPairs(items: Item[]): Item[][] {
		const itemPairs: Item[][] = [];
		for (let i = 0; i < items.length; i += 2) {
			const itemPair = [ items[i] ];
			if (i + 1 < items.length) {
				itemPair.push(items[i+1]);
			}
			itemPairs.push(itemPair);
		}
		return itemPairs;
	}

	@HostListener('window:resize', ['$event'])
	onResize(event) {
		this.updateMatGridRatio();
	}

	private updateMatGridRatio() { this.matgridRatio = `${+window.innerWidth / 1440 * 1.3}:1`; }

	onFilterChange(filteredValues) {
		this.filters = filteredValues;
		this.currentPage = 1;
		this.paginator.firstPage();
		this.fetchItems();
	}
}