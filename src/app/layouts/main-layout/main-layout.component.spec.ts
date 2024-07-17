import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MainLayoutComponent } from './main-layout.component';
import { HeaderModule } from 'src/app/shared/components/header/header.module';
import { RouterModule } from '@angular/router';

describe('MainLayoutComponent', () => {
	let component: MainLayoutComponent;
	let fixture: ComponentFixture<MainLayoutComponent>;

	beforeEach(() => {
		TestBed.configureTestingModule({
			declarations: [MainLayoutComponent],
			imports: [
				HeaderModule,
				RouterModule,
			],
		});
		fixture = TestBed.createComponent(MainLayoutComponent);
		component = fixture.componentInstance;
		fixture.detectChanges();
	});

	it('should create', () => {
		expect(component).toBeTruthy();
	});
});
