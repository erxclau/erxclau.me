import { Temporal } from '@js-temporal/polyfill';

export class TemporalDate {
	#date;
	partial = false;
	constructor(year: number, month: number, day?: number) {
		this.#date = Temporal.PlainDate.from({
			year,
			month,
			day
		});
	}

	toString() {
		return this.#date.toLocaleString('en-US', {
			month: 'long',
			day: 'numeric',
			year: 'numeric'
		});
	}
}

export class TemporalPartialDate {
	#date;
	partial = true;
	constructor(year: number, month: number) {
		this.#date = Temporal.PlainYearMonth.from({
			year,
			month,
			calendar: 'gregory'
		});
	}

	toString() {
		return this.#date.toLocaleString('en-US', { month: 'long', year: 'numeric' });
	}
}
