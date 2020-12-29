// tslint:disable: no-magic-numbers
export class Inactivation {
	/**
	 * The reference temperature [deg C]
	 */
	public TRef!: number;

	/**
	 * The logarithm of D-value at TRef [log min].
	 */

	public LogDRef!: number;

	/**
	 * The temperature increase [deg C] need to reduce the D-vaue with a factor of 10
	 */
	public Z!: number;

	public static New(tRef: number, z: number, logDRef: number): Inactivation {
		const obj = new Inactivation();
		obj.TRef = tRef;
		obj.LogDRef = logDRef;
		obj.Z = z;

		return obj;
	}

	protected constructor() {
	}

	/**
	 * Calculate the log10 D value.
	 * D equals the time taken to decrease the population by one log10 unit.
	 * @param {number} tIn The reference temperature [deg C].
	 * @returns Log10 of the time taken to decrease the population by one log10 unit.
	 */
	public CalculateLog10D(tIn: number): number {
		return this.LogDRef - (tIn - this.TRef) / this.Z;
	}

	/**
	 * Calculate the D value.
	 * The time taken to decrease the population by one log10 unit.
	 * @param {number} tIn The reference temperature [deg C].
	 * @returns The time taken to decrease the population by one log10 unit.
	 */
	public CalculateD(tIn: number): number {
		return 10 ** -(this.LogDRef - (tIn - this.TRef) / this.Z);
	}

	/**
	 * Calculate units of bacterium after
	 * applying a temperature for a time.
	 * @param {number} initialValue Initial units of bacterium.
	 * @param {number} temperature Treatment temperature [deg C].
	 * @param {number} time Treatment time [s].
	 * @returns {number} The units of bacterium after applying the treatment.
	 */
	public CalculateReduction(initialValue: number, temperature: number, time: number): number {
		return initialValue === 0 ? 0 : initialValue * 10 ** -(this.CalculateD(temperature)*time);
	}

	/**
	 * Calculate units of bacterium after
	 * applying constant temperatures for a various times.
	 * @param {number[]} temperatures Treatment temperatures [deg C].
	 * @param {number[]} times Treatment time [s].
	 * @param {number} [initialValue=1] Initial units of bacterium.
	 * @returns {number} Log10 of the units of bacterium after applying the treatment.
	 */
	public CalculateLog10Reductions(temperatures: number[], times: number[], initialValue: number = 1): number {
		return -Math.log10(temperatures.reduce((dTot: number, T: number, iT: number) => {
			return this.CalculateReduction(dTot, T, times[iT]);
		}, initialValue));
	}
}