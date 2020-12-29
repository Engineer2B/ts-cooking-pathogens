import { Food } from './Model/Food';
import { meanInactivations } from './Data/InactivationValues';

const meanFood = Food.New(meanInactivations);
const leastReduced = meanFood.CalculateLeastReduced([70,140], [3*60,5/60]);
const mostReduced = meanFood.CalculateMostReduced([70,140], [3*60,5/60]);
const reductions = meanFood.CalculateReductions([70,140], [3*60,5/60]);

console.log(meanInactivations.Campylobacter.CalculateLog10Reductions([70,140], [3*60,5/60]));
console.log(-Math.log10(meanInactivations.BacillusCereus.CalculateReduction(1, 140, 2 / 60)));
console.log(meanInactivations.BacillusCereus.CalculateLog10Reductions([140, 60, 30], [2 / 60, 3 / 60, 40 / 60]));
console.log(Math.log10(10 ** (((meanInactivations.ClostridiumBotulinumNonProteolytic.CalculateD(140)) * 2 / 60))));