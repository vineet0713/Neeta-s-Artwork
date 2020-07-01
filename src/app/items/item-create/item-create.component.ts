import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';

@Component({
	selector: 'app-item-create',
	templateUrl: './item-create.component.html',
	styleUrls: ['./item-create.component.css'],
})
export class ItemCreateComponent implements OnInit {
	itemForm: FormGroup;
	imagePreview: string;

	ngOnInit() {
		this.itemForm = new FormGroup({
			'title': new FormControl(null, Validators.required),
			'image': new FormControl(null, Validators.required),
		});
	}

	onCreateItem() {
		const newItem = {
			title: this.itemForm.value['title'],
			image: this.itemForm.value['image'],
		};
		// Use ItemService to post this data to the server!
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