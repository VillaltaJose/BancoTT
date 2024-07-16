import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ListarProductosComponent } from './listar-productos.component';
import { RouterModule } from '@angular/router';
import { TableModule } from 'src/app/shared/components/table/table.module';
import { FormsModule } from '@angular/forms';
import { SearchPipeModule } from 'src/app/shared/pipes/search-pipe/search-pipe.module';

@NgModule({
	declarations: [ListarProductosComponent],
	imports: [
		CommonModule,
		RouterModule.forChild([{ path: '', component: ListarProductosComponent }]),
		TableModule,
		FormsModule,
		SearchPipeModule,
	],
})
export class ListarProductosModule {}
