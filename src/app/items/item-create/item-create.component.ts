import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Router } from '@angular/router';

import { Item } from './../item.model';
import { ItemsService } from './../items.service';

@Component({
	selector: 'app-item-create',
	templateUrl: './item-create.component.html',
	styleUrls: ['./item-create.component.css'],
})
export class ItemCreateComponent implements OnInit {
	itemForm: FormGroup;
	imagePreview: string;
	isLoading = false;

	constructor(private itemsService: ItemsService, private router: Router) { }

	ngOnInit() {
		this.itemForm = new FormGroup({
			'title': new FormControl(null, Validators.required),
			'description': new FormControl(null),
			'type': new FormControl(null, Validators.required),
			'image': new FormControl(null, Validators.required),
		});
	}

	onCreateItem() {
		const title = this.itemForm.value['title'].trim();
		const description = this.itemForm.value['description'];
		const type = this.itemForm.value['type'];
		const image = this.itemForm.value['image'];
		this.isLoading = true;
		this.itemsService.uploadImageFile(image, title)
			.then(response => {
				const itemToPost: Item = {
					title: title,
					type: type,
					imagePath: response.imagePath,
				};
				if (description) {
					itemToPost.description = description.trim();
				}
				return this.itemsService.postItem(itemToPost);
			})
			.then(response => {
				this.router.navigate(['']);
			})
			.catch(error => {
				this.isLoading = false;
				alert(error);
			});
	}

	onImagePicked(event: Event) {
		const file = (event.target as HTMLInputElement).files[0];
		this.itemForm.patchValue({ 'image': file });
		this.itemForm.get('image').updateValueAndValidity();
		const reader = new FileReader();
		reader.onload = () => {
			this.imagePreview = reader.result as string;			
		};
		reader.readAsDataURL(file);
	}
}