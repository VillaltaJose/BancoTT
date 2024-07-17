import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FormErrorComponent } from './form-error.component';
import { FormControl, ReactiveFormsModule } from '@angular/forms';
import { By } from '@angular/platform-browser';

describe('FormErrorComponent', () => {
	let component: FormErrorComponent;
	let fixture: ComponentFixture<FormErrorComponent>;

	beforeEach(() => {
		TestBed.configureTestingModule({
			declarations: [FormErrorComponent],
			imports: [ReactiveFormsModule],
		});
		fixture = TestBed.createComponent(FormErrorComponent);
		component = fixture.componentInstance;
		fixture.detectChanges();
	});

	it('should create', () => {
		expect(component).toBeTruthy();
	});

	it('should not show error messages if is not touched or marked as dirty', () => {
		const control = new FormControl('', { validators: [] });
		component.control = control;

		component.errors = [
			{
				error: 'error1',
				message: 'Error 1',
			},
			{
				error: 'error2',
				message: 'Error 2',
			}
		];

		control.setErrors({ 'error1': true });
		fixture.detectChanges();;

		const renderedMessages = fixture.debugElement.queryAll(By.css('.form-error'));

		expect(renderedMessages.length).toBe(0);
	});

	it('should show error messages when dirty or touched', () => {
		const control = new FormControl('', { validators: [] });
		component.control = control;

		component.errors = [
			{
				error: 'error1',
				message: 'Error 1',
			},
			{
				error: 'error2',
				message: 'Error 2',
			}
		];

		control.setErrors({ 'error1': true });
		control.markAsDirty();
		fixture.detectChanges();;

		const renderedMessages = fixture.debugElement.queryAll(By.css('.form-error'))
			.map(el => el.nativeElement.textContent);

		expect(renderedMessages).toEqual(['Error 1']);
	});
});
