import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, ParamMap } from '@angular/router';
import { FormGroup, FormControl, Validators } from '@angular/forms';

import { Item } from './../item.model';
import { ItemsService } from './../items.service';

@Component({
	selector: 'app-item-view',
	templateUrl: './item-view.component.html',
	styleUrls: ['./item-view.component.css'],
})
export class ItemViewComponent implements OnInit {
	viewingItem: Item;
	isAuthenticated = true;
	commentsForm: FormGroup;

	constructor(private itemsService: ItemsService, private route: ActivatedRoute) { }

	ngOnInit() {
		this.commentsForm = new FormGroup({
			'comment-content': new FormControl(null),
		});
		this.route.paramMap.subscribe((paramMap: ParamMap) => {
			const itemId = paramMap.get('itemId');
			this.viewingItem = this.itemsService.getItem(itemId);
		});
	}

	onAddComment() {
		const commentContent = this.commentsForm.value['comment-content'];
		console.log(commentContent);
		this.commentsForm.reset();
	}
}