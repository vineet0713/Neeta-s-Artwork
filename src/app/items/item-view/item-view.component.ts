import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, ParamMap } from '@angular/router';
import { FormGroup, FormControl, Validators } from '@angular/forms';

import { Item } from './../item.model';
import { Comment } from './../comment.model';
import { ItemsService } from './../items.service';
import { AuthService } from './../../auth/auth.service';

@Component({
	selector: 'app-item-view',
	templateUrl: './item-view.component.html',
	styleUrls: ['./item-view.component.css'],
})
export class ItemViewComponent implements OnInit {
	viewingItem: Item;
	viewingItemComments: Comment[];
	commentsForm: FormGroup;
	isLoadingComments = false;
	isLoadingAddComment = false;

	constructor(private itemsService: ItemsService, private route: ActivatedRoute, private authService: AuthService) { }

	ngOnInit() {
		this.commentsForm = new FormGroup({
			'comment-content': new FormControl(null),
		});
		this.route.paramMap.subscribe((paramMap: ParamMap) => {
			const itemId = paramMap.get('itemId');
			this.isLoadingComments = true;
			setTimeout(() => {
				this.viewingItemComments = this.itemsService.getComments(itemId);
				this.isLoadingComments = false;
			}, 2000);
			if (this.itemsService.itemToView) {
				this.viewingItem = this.itemsService.itemToView;
				return;
			}
			this.viewingItem = this.itemsService.getItem(itemId);
		});
	}

	onAddComment() {
		const commentContent = this.commentsForm.value['comment-content'];
		console.log(commentContent);
		this.commentsForm.reset();
		this.isLoadingAddComment = true;
		setTimeout(() => this.isLoadingAddComment = false, 2000);
	}

	isAuth() { return this.authService.isAuthenticated(); }
}