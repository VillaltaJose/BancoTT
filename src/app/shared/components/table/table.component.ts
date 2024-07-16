import { Component, Input } from '@angular/core';

@Component({
	selector: 'app-table',
	templateUrl: './table.component.html',
	styleUrls: ['./table.component.scss'],
})
export class TableComponent<T> {
	@Input() bData: T[] = [];
	@Input() pageSize: number = 5;
	@Input() pageNumber: number = 1;

	data: T[] = [];

	ngOnChanges() {
		this.data = this.bData.slice((this.pageNumber - 1) * this.pageSize, this.pageNumber * this.pageSize);
	}

}
