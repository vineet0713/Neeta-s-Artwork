import { Injectable } from '@angular/core';

import { Item } from './item.model';

@Injectable({
	providedIn: 'root',
})
export class ItemsService {
	private items: Item[] = [
		{
			id: 'a',
			title: 'Test Artwork 1',
			imagePath: 'https://vistapointe.net/images/artwork-2.jpg',
			comments: [
				{ creator: 'vineet0713', content: 'Comment 1 a' },
				{ creator: 'vajoshi', content: 'Comment 2 a' },
				{ creator: 'mrsneetaj', content: 'Comment 3 a' },
				{ creator: 'vineet0713', content: 'Comment 4 a' },
				{ creator: 'shreyas', content: 'Comment 5 a' },
			],
		},
		{
			id: 'b',
			title: 'Test Artwork 2',
			imagePath: 'https://i.etsystatic.com/18641759/r/il/d1d79e/1916230477/il_1588xN.1916230477_i5e7.jpg',
			comments: [
				{ creator: 'vineet0713', content: 'Bold And Brash is amazing!' },
			],
		},
		{
			id: 'c',
			title: 'Test Artwork 3',
			imagePath: 'https://cdn.hpm.io/wp-content/uploads/2019/01/18144635/2019-Marathon-Artwork-JanaviFolmsbee-AFletcher-1000x667.jpg',
			comments: [],
		},
		{
			id: 'd',
			title: 'Test Artwork 4',
			imagePath: 'https://images.fineartamerica.com/images/artworkimages/mediumlarge/1/sunset-boat-landscape-artwork-painting-andres-ramos.jpg',
			comments: [
				{ creator: 'vineet0713', content: 'Comment 1 d' },
				{ creator: 'vajoshi', content: 'Comment 2 d' },
				{ creator: 'mrsneetaj', content: 'Comment 3 d' },
				{ creator: 'vineet0713', content: 'Comment 4 d' },
				{ creator: 'shreyas', content: 'Comment 5 d' },
			],
		},
		{
			id: 'e',
			title: 'Test Artwork 5',
			imagePath: 'https://royalthaiart.com/wp-content/uploads/2019/07/peacock-framed-art.jpg',
			comments: [
				{ creator: 'vineet0713', content: 'Comment 1 e' },
				{ creator: 'vajoshi', content: 'Comment 2 e' },
				{ creator: 'mrsneetaj', content: 'Comment 3 e' },
				{ creator: 'vineet0713', content: 'Comment 4 e' },
				{ creator: 'shreyas', content: 'Comment 5 e' },
				{ creator: 'mrsneetaj', content: 'Comment 6 e' },
			],
		},
	];
	
	itemToView: Item;

	getItems(pageSize: number, page: number): Item[][] {
		const start = (page - 1) * pageSize;
		const end = start + pageSize;
		return this.convertToPairs(this.items.slice(start, end));
	}

	getItem(itemId: string) {
		// This will eventually use HttpClient to get the full Item data from server!
		for (let item of this.items) {
			if (item.id === itemId) {
				return item;
			}
		}
		return null;
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
}