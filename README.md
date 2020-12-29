# ts-node-cooking-pathogens

This package contains classes to calculate units of common pathogens present after a procedure according to the D/z model and data from (van Asselt E D & Zwietering M H, 2006).
It was created by following [this guide](https://itnext.io/step-by-step-building-and-publishing-an-npm-typescript-package-44fe7164964c).

## Installation

Install from npm:

```powershell
npm install ts-node-cooking-pathogens --save
```

## Usage

```ts
import { Inactivation } from 'node_modules/ts-node-cooking-pathogens/build/Model/Inactivation';
import { Food } from 'node_modules/ts-node-cooking-pathogens/build/Model/Food';
import { meanInactivations } from 'node_modules/ts-node-cooking-pathogens/build/Data/InactivationValues';
// tslint:disable: no-magic-numbers

const meanFood = Food.New(meanInactivations);
const leastReduced = meanFood.CalculateLeastReduced([70,140], [3*60,5/60]);
const mostReduced = meanFood.CalculateMostReduced([70,140], [3*60,5/60]);
const reductions = meanFood.CalculateReductions([70,140], [3*60,5/60]);

console.log(meanInactivations.Campylobacter.CalculateLog10Reductions([70,140], [3*60,5/60]));
console.log(-Math.log10(meanInactivations.BacillusCereus.CalculateReduction(1, 140, 2 / 60)));
console.log(meanInactivations.BacillusCereus.CalculateLog10Reductions([140, 60, 30], [2 / 60, 3 / 60, 40 / 60]));
console.log(Math.log10(10 ** (((meanInactivations.ClostridiumBotulinumNonProteolytic.CalculateD(140)) * 2 / 60))));
```

More info on how to consume this package [here](https://github.com/microsoft/TypeScript/issues/8305#issuecomment-254017287). 

Check [github](https://github.com/Engineer2B/ts-node-cooking-pathogens/tree/master/src) for available classes.

## License

The MIT License (MIT)

## References

van Asselt, E. D. and Zwietering, M., 2006. A systematic approach to determine global thermal inactivation parameters for various food pathogens. International Journal of Food Microbiology, 107(1), pp.73-82.
