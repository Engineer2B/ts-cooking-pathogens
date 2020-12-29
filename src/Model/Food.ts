import { Inactivation } from './Inactivation';

export type TReduction = {
	BacteriumName: string;
	Reduction: number;
};

export class Food {
	public get Inactivations(): { [index: string]: Inactivation } {
		return this.inactivations;
	}

	protected inactivations!: { [index: string]: Inactivation };

	protected constructor() {
	}

	public static New(inactivations: { [index: string]: Inactivation }): Food {
		const obj = new Food();
		obj.inactivations = inactivations;

		return obj;
	}

	public CalculateLeastReduced(temperatures: number[], times: number[]) {
		return this.reduceInactivations(temperatures, times, (currentN: number, newN: number) => newN < currentN, Number.MAX_VALUE);
	}

	public CalculateMostReduced(temperatures: number[], times: number[]) {
		return this.reduceInactivations(temperatures, times, (currentN: number, newN: number) => newN > currentN, Number.MIN_VALUE);
	}

	public CalculateReductions(temperatures: number[], times: number[]): TReduction[] {
		return Object.keys(this.Inactivations).map((keyName: string) => ({
			BacteriumName: keyName,
			Reduction: this.Inactivations[keyName].CalculateLog10Reductions(temperatures, times)
		}));
	}

	protected reduceInactivations<T>(temperatures: number[], times: number[], comperatorFn: (currentN: number, newN: number) => boolean, initialValue: number): TReduction {
		return Object.keys(this.Inactivations).reduce((minReduction: TReduction, keyName: string) => {
			const reduction = this.Inactivations[keyName].CalculateLog10Reductions(temperatures, times);

			return comperatorFn(minReduction.Reduction, reduction) ? { BacteriumName: keyName, Reduction: reduction } : minReduction;
		}, { BacteriumName: 'None', Reduction: initialValue });
	}
}