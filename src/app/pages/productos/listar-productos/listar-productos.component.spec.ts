import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListarProductosComponent } from './listar-productos.component';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { TableModule } from 'src/app/shared/components/table/table.module';
import { SearchPipeModule } from 'src/app/shared/pipes/search-pipe/search-pipe.module';
import { FormsModule } from '@angular/forms';

describe('ListarProductosComponent', () => {
	let component: ListarProductosComponent;
	let fixture: ComponentFixture<ListarProductosComponent>;

	beforeEach(() => {
		TestBed.configureTestingModule({
			declarations: [ListarProductosComponent],
			imports: [
				HttpClientTestingModule,
				FormsModule,
				TableModule,
				SearchPipeModule,
			]
		});
		fixture = TestBed.createComponent(ListarProductosComponent);
		component = fixture.componentInstance;
		fixture.detectChanges();
	});

	it('should create', () => {
		expect(component).toBeTruthy();
	});
});
