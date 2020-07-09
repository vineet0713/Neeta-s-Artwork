import { environment } from '../../environments/environment';

import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { Item } from './item.model';
import { Comment } from './comment.model';

@Injectable({
	providedIn: 'root',
})
export class ItemsService {
	private comments: Comment[] = [
		{ itemId: 'a', creator: 'vineet0713', content: 'Comment 1 a' },
		{ itemId: 'a', creator: 'vajoshi', content: 'Comment 2 a' },
		{ itemId: 'a', creator: 'mrsneetaj', content: 'Comment 3 a' },
		{ itemId: 'a', creator: 'vineet0713', content: 'Comment 4 a' },
		{ itemId: 'a', creator: 'shreyas', content: 'Comment 5 a' },
		{ itemId: 'b', creator: 'vineet0713', content: 'Bold And Brash is amazing!' },
		{ itemId: 'd', creator: 'vineet0713', content: 'Comment 1 d' },
		{ itemId: 'd', creator: 'vajoshi', content: 'Comment 2 d' },
		{ itemId: 'd', creator: 'mrsneetaj', content: 'Comment 3 d' },
		{ itemId: 'd', creator: 'vineet0713', content: 'Comment 4 d' },
		{ itemId: 'd', creator: 'shreyas', content: 'Comment 5 d' },
		{ itemId: 'e', creator: 'vineet0713', content: 'Comment 1 e' },
		{ itemId: 'e', creator: 'vajoshi', content: 'Comment 2 e' },
		{ itemId: 'e', creator: 'mrsneetaj', content: 'Comment 3 e' },
		{ itemId: 'e', creator: 'vineet0713', content: 'Comment 4 e' },
		{ itemId: 'e', creator: 'shreyas', content: 'Comment 5 e' },
		{ itemId: 'e', creator: 'mrsneetaj', content: 'Comment 6 e' },
	];
	
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

	getComments(itemId: string): Comment[] {
		const fetchedComments: Comment[] = [];
		for (let comment of this.comments) {
			if (comment.itemId === itemId) {
				fetchedComments.push(comment);
			}
		}
		return fetchedComments;
	}
}