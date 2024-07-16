import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TableComponent } from './table.component';
import { FormsModule } from '@angular/forms';

@NgModule({
	declarations: [TableComponent],
	exports: [TableComponent],
	imports: [
		CommonModule,
		FormsModule,
	],
})
export class TableModule {}
