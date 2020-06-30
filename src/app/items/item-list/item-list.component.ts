import { Component, OnInit, ViewChild } from '@angular/core';
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
	totalPosts = 5;
	postsPerPage = 2;
	currentPage = 1;
	pageOptions = [1, 2, 4, 10];

	constructor(private itemsService: ItemsService) { }

	ngOnInit() {
		this.items = this.itemsService.getItems(this.postsPerPage, this.currentPage);
	}

	onChangedPage(pageData: PageEvent) {
		if (pageData.pageSize === this.postsPerPage) {
			this.currentPage = pageData.pageIndex + 1;
		} else {
			this.postsPerPage = pageData.pageSize;
			this.currentPage = 1;
			this.paginator.firstPage();
		}
		// Reload the posts with the updated range.
		this.items = this.itemsService.getItems(this.postsPerPage, this.currentPage);
	}
}