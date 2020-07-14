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
	isLoadingItem = false;
	isLoadingComments = false;
	isLoadingAddComment = false;

	constructor(private itemsService: ItemsService, private route: ActivatedRoute, private authService: AuthService) { }

	ngOnInit() {
		this.commentsForm = new FormGroup({
			'comment-content': new FormControl(null),
		});
		this.route.paramMap.subscribe((paramMap: ParamMap) => {
			const itemId = paramMap.get('itemId');
			this.loadComments(itemId);
			if (this.itemsService.itemToView) {
				this.viewingItem = this.itemsService.itemToView;
			} else {
				this.loadItem(itemId);
			}
		});
	}

	loadItem(itemId: string) {
		this.isLoadingItem = true;
		this.itemsService.getItem(itemId)
			.then(response => {
				this.viewingItem = response.item;
				this.itemsService.itemToView = response.item;
				this.isLoadingItem = false;
			})
			.catch(error => {
				this.isLoadingItem = false;
				alert(error.message);
			});
	}

	loadComments(itemId: string) {
		this.isLoadingComments = true;
		this.itemsService.getComments(itemId)
			.then(response => {
				this.viewingItemComments = response.comments;
				this.isLoadingComments = false;
			})
			.catch(error => {
				this.isLoadingComments = false;
				alert(error.message);
			});
	}

	onAddComment() {
		const commentContent = this.commentsForm.value['comment-content'].trim();
		const commentCreator = this.authService.getUserId();
		this.commentsForm.reset();
		this.isLoadingAddComment = true;
		this.itemsService.postComment(commentContent, commentCreator)
			.then(response => {
				this.isLoadingAddComment = false;
				this.loadComments(this.viewingItem._id);
			})
			.catch(error => {
				this.isLoadingAddComment = false;
				alert(error.message);
			});
	}

	isAuth() { return this.authService.isAuthenticated(); }
}