import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NuevoProductoComponent } from './nuevo-producto.component';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { FormErrorModule } from 'src/app/shared/components/form-error/form-error.module';

describe('NuevoProductoComponent', () => {
	let component: NuevoProductoComponent;
	let fixture: ComponentFixture<NuevoProductoComponent>;

	beforeEach(() => {
		TestBed.configureTestingModule({
			declarations: [NuevoProductoComponent],
			imports: [
				HttpClientTestingModule,
				FormsModule,
				ReactiveFormsModule,
				FormErrorModule,
			],
		});
		fixture = TestBed.createComponent(NuevoProductoComponent);
		component = fixture.componentInstance;
		fixture.detectChanges();
	});

	it('should create', () => {
		expect(component).toBeTruthy();
	});
});
