import { Injectable } from '@angular/core';

import { Item } from './item.model';

@Injectable({
	providedIn: 'root',
})
export class ItemsService {
	private items: Item[][] = [
		[
			{
				id: 'a',
				title: 'Test Artwork 1',
				imagePath: 'https://vistapointe.net/images/artwork-2.jpg',
			},
			{
				id: 'b',
				title: 'Test Artwork 2',
				imagePath: 'https://i.etsystatic.com/18641759/r/il/d1d79e/1916230477/il_1588xN.1916230477_i5e7.jpg',
			},
		],
		[
			{
				id: 'c',
				title: 'Test Artwork 3',
				imagePath: 'https://cdn.hpm.io/wp-content/uploads/2019/01/18144635/2019-Marathon-Artwork-JanaviFolmsbee-AFletcher-1000x667.jpg',
			},
			{
				id: 'd',
				title: 'Test Artwork 4',
				imagePath: 'https://images.fineartamerica.com/images/artworkimages/mediumlarge/1/sunset-boat-landscape-artwork-painting-andres-ramos.jpg',
			},
		],
		[
			{
				id: 'e',
				title: 'Test Artwork 5',
				imagePath: 'https://royalthaiart.com/wp-content/uploads/2019/07/peacock-framed-art.jpg',
			},
		],
	];
	
	itemToView: Item;

	getItems() { return this.items; }

	getItem(itemId: string) {
		// This will eventually use HttpClient to get the full Item data from server!
		for (let itemPair of this.items) {
			for (let item of itemPair) {
				if (item.id === itemId) {
					return item;
				}
			}
		}
		return null;
	}
}