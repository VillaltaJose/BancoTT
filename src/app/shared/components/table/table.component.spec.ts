import { ComponentFixture, TestBed } from '@angular/core/testing';
import { FormsModule } from '@angular/forms';
import { TableComponent } from './table.component';
import { By } from '@angular/platform-browser';

describe('TableComponent', () => {
	let component: TableComponent<any>;
	let fixture: ComponentFixture<TableComponent<any>>;

	beforeEach(async () => {
		await TestBed.configureTestingModule({
			declarations: [TableComponent],
			imports: [FormsModule],
		}).compileComponents();
	});

	beforeEach(() => {
		fixture = TestBed.createComponent(TableComponent);
		component = fixture.componentInstance;
		fixture.detectChanges();
	});

	it('should create', () => {
		expect(component).toBeTruthy();
	});

	it('should display the correct number of results', () => {
		component.bData = Array.from({ length: 15 }, (_, i) => `Item ${i + 1}`);
		component.pageSize = 5;
		component.ngOnChanges();
		fixture.detectChanges();

		const txtResultados = fixture.debugElement.query(
			By.css('.b-table-footer p')
		).nativeElement;

		expect(txtResultados.textContent).toContain('5 Resultados');
	});

	it('should change page and update data', () => {
		component.bData = Array.from({ length: 15 }, (_, i) => `Item ${i + 1}`);
		component.pageSize = 5;
		component.changePage(2);
		fixture.detectChanges();

		expect(component.data.length).toBe(5);
		expect(component.data).toEqual([
			'Item 6',
			'Item 7',
			'Item 8',
			'Item 9',
			'Item 10',
		]);
	});

	it('should change page size and update data', () => {
		component.bData = Array.from({ length: 15 }, (_, i) => `Item ${i + 1}`);
		component.pageSize = 5;
		component.changePageSize(10);
		fixture.detectChanges();

		expect(component.data.length).toBe(10);
		expect(component.data).toEqual([
			'Item 1',
			'Item 2',
			'Item 3',
			'Item 4',
			'Item 5',
			'Item 6',
			'Item 7',
			'Item 8',
			'Item 9',
			'Item 10',
		]);
	});

	it('should update page size from select input', async () => {
		component.bData = Array.from({ length: 15 }, (_, i) => `Item ${i + 1}`);
		fixture.detectChanges();

		const select = fixture.debugElement.query(
			By.css('select')
		).nativeElement;

		select.value = select.options[1].value; // Valor de 10 elementos por pagina
		select.dispatchEvent(new Event('change'));

		await fixture.whenStable().then(() => {
			fixture.detectChanges();

			expect(component.data.length).toBe(10);
		});
	});
});
