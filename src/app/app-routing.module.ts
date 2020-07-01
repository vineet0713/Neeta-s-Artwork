import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ItemListComponent } from './items/item-list/item-list.component';
import { ItemViewComponent } from './items/item-view/item-view.component';
import { AuthComponent } from './auth/auth.component';
import { ItemCreateComponent } from './items/item-create/item-create.component';

const routes: Routes = [
	{
		path: '',
		component: ItemListComponent,
	},
	{
		path: 'view/:itemId',
		component: ItemViewComponent,
	},
	{
		path: 'login',
		component: AuthComponent,
	},
	{
		path: 'signup',
		component: AuthComponent,
	},
	{
		path: 'create',
		component: ItemCreateComponent,
	},
];

@NgModule({
	imports: [RouterModule.forRoot(routes)],
	exports: [RouterModule],
})
export class AppRoutingModule { }