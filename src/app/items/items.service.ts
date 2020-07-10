import { environment } from '../../environments/environment';

import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { Item } from './item.model';
import { Comment } from './comment.model';

@Injectable({
	providedIn: 'root',
})
export class ItemsService {
	itemToView: Item = null;

	constructor(private httpClient: HttpClient) { }

	uploadImageFile(imageFile: File, imageTitle: string) {
		const imageData = new FormData();
		imageData.append('file', imageFile, imageTitle);
		type responseType = { imagePath: string };
		const endpoint = environment.API_URL + 'uploadimage';
		return this.httpClient.post<responseType>(endpoint, imageData).toPromise();
	}

	postItem(itemToPost: Item) {
		const endpoint = environment.API_URL + 'item';
		const itemData = {
			title: itemToPost.title,
			imagePath: itemToPost.imagePath,
		};
		return this.httpClient.post(endpoint, itemData).toPromise();
	}

	getItems(pageSize: number, page: number) {
		const queryParams = `?pageSize=${pageSize}&page=${page}`;
		const endpoint = environment.API_URL + 'items' + queryParams;
		type responseType = { message: string, items: any, totalItems: number };
		return this.httpClient.get<responseType>(endpoint).toPromise();
	}

	getItem(itemId: string) {
		const endpoint = environment.API_URL + 'item/' + itemId;
		type responseType = { message: string, item: any };
		return this.httpClient.get<responseType>(endpoint).toPromise();
	}

	postComment(contentToPost: string, commentCreator: string) {
		const endpoint = environment.API_URL + 'comment';
		const commentData: Comment = {
			content: contentToPost,
			itemId: this.itemToView._id,
			creatorId: commentCreator,
		};
		return this.httpClient.post(endpoint, commentData).toPromise();
	}

	getComments(itemId: string) {
		const endpoint = environment.API_URL + 'comments/' + itemId;
		type responseType = { message: string, comments: any };
		return this.httpClient.get<responseType>(endpoint).toPromise();
	}
}