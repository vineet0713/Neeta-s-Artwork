import { NgModule } from '@angular/core';

import {
	MatToolbarModule,
	MatCardModule,
	MatGridListModule,
	MatButtonModule,
	MatInputModule,
	MatProgressSpinnerModule,
	MatPaginatorModule,
	MatButtonToggleModule,
	MatSelectModule,
	MatOptionModule,
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
		MatButtonToggleModule,
		MatSelectModule,
		MatOptionModule,
	],
})
export class AngularMaterialModule { }