import { Inactivation } from '../Model/Inactivation';

const meanInactivations = {
	BacillusCereus: Inactivation.New(120, 12.8, -1.38),
	BacillusCereusHeat: Inactivation.New(120, 12.1, 0.53),
	Campylobacter: Inactivation.New(70, 12.3, -0.96),
	ClostridiumBotulinumProteolytic: Inactivation.New(120, 10.2, -0.78),
	ClostridiumBotulinumNonProteolytic: Inactivation.New(120, 18.6, -1.47),
	ClostridiumBotulinumProteolyticTypeG: Inactivation.New(120, 34, -0.6),
	ClostridiumPerfringensSpores: Inactivation.New(120, 16.8, -0.52),
	ClostridiumPerfringensVegatativeCells: Inactivation.New(70, 10.3, -0.42),
	EnterobacterSakazakii: Inactivation.New(70, 6.3, -1.51),
	EscherichiaColi: Inactivation.New(70, 10.6, -0.67),
	ListeriaMonocytogenes: Inactivation.New(70, 7.0, -1.06),
	ListeriaMonocytogenesSalted: Inactivation.New(70, 9.2, 0.18),
	Salmonella: Inactivation.New(70, 9.1, -0.83),
	SalmonellaChocolate: Inactivation.New(70, 20.4, 2.65),
	StaphylococcusAureus: Inactivation.New(70, 8.8, -0.59),
	StreptococcusPyogenes: Inactivation.New(70, 9.2, -1.45),
	VibrioCholeraeCrabMeat: Inactivation.New(70, 16.7, -0.25),
	VibrioCholeraePeptoneWater: Inactivation.New(70, 21.8, -0.72),
	VibrioParahaemolyticus: Inactivation.New(70, 8.5, -2.24),
	YersiniaEnterocolitica: Inactivation.New(70, 6.2, -1.80)
};

export { meanInactivations }