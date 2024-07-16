import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ListarProductosComponent } from './listar-productos.component';
import { RouterModule } from '@angular/router';

@NgModule({
	declarations: [ListarProductosComponent],
	imports: [
		CommonModule,
		RouterModule.forChild([{ path: '', component: ListarProductosComponent }]),
	],
})
export class ListarProductosModule {}
