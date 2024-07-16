import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
	name: 'search',
})
export class SearchPipe<T> implements PipeTransform {
	transform(values: T[], ...args: any[]): T[] {
		if (values.length == 0) return [];
		if (!args[0] || !args[1]) return values;

		const search = args[0].toLowerCase();
		const field = args[1];

		values = values.filter((value: T) => {
			const fieldValue = (value as any)[field];

			if (fieldValue) {
				return fieldValue.toLowerCase().includes(search);
			}

			return false;
		});

		return values;
	}
}
