import { Food } from '../../src/Model/Food';
import { meanInactivations } from '../../src/Data/InactivationValues';
// tslint:disable: no-magic-numbers

const meanFood = Food.New(meanInactivations);
test('CalculateLeastReduced', () => {
	expect(meanFood.CalculateLeastReduced([70,140], [3*60,5/60]).BacteriumName).toBe('SalmonellaChocolate');
});

test('CalculateMostReduced', () => {
	expect(meanFood.CalculateMostReduced([70,140], [3*60,5/60]).Reduction).toBe(Number.POSITIVE_INFINITY);
});

test('CalculateReductions', () => {
	expect(meanFood.CalculateReductions([70,140], [3*60,5/60])).toHaveLength(20);
});
