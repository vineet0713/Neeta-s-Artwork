import { NgModule } from '@angular/core';

import {
	MatToolbarModule,
	MatCardModule,
	MatGridListModule,
	MatButtonModule,
	MatInputModule,
	MatProgressSpinnerModule,
	MatPaginatorModule,
} from '@angular/material';

@NgModule({
	exports: [
		MatToolbarModule,
		MatCardModule,
		MatGridListModule,
		MatButtonModule,
		MatInputModule,
		MatProgressSpinnerModule,
		MatPaginatorModule,
	],
})
export class AngularMaterialModule { }