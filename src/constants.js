export const buildUrl = (props) => {
  const {
    neighborhood, type, minPrice, maxPrice, ambients, minM2, maxM2, hasGarage, isProfessional
  } = props;

  const neighborhoodSelected = `neighborhood=${neighborhood  || 'TODOS'}`;
  const typeSelected = `type=${type || 'TODOS'}`;
  const minPriceSelected = `minPrice=${minPrice || 0}`;
  const maxPriceSelected = `maxPrice=${!minPrice ? 0 : minPrice > maxPrice ? minPrice : maxPrice}`;
  const ambientsSelected = `ambients=${ambients || 'TODOS'}`;
  const minM2Selected = `minM2=${minM2 || 0}`;
  const maxM2Selected = `maxM2=${maxM2 || minM2 || 0}`;
  const garageSelected = `hasGarage=${hasGarage || 'false'}`;
  const isProfessionalSelected = `isProfessional=${isProfessional || 'false'}`
  return `?${neighborhoodSelected}&${typeSelected}&${minPriceSelected}&${maxPriceSelected}&${ambientsSelected}&${minM2Selected}&${maxM2Selected}&${isProfessionalSelected}&${garageSelected}`;
};

export const typeOfProperty = [
  { id: 'DEPARTAMENTO', value: 'DEPARTAMENTO' },
  { id: 'PH', value: 'TIPO CASA PH' },
  { id: 'LOCAL', value: 'LOCAL' },
  { id: 'OFICINA', value: 'OFICINA' },
  { id: 'TERRENO', value: 'TERRENO' },
  { id: 'COCHERA', value: 'COCHERA' },
  { id: 'TODOS', value: 'TODOS' }
];

export const rentPrices = [
  { id: 'TODOS', value: 'TODOS' },
  { id: 10000, value: 10000 },
  { id: 20000, value: 20000 },
  { id: 10000, value: 30000 },
  { id: 40000, value: 40000 },
  { id: 50000, value: 50000 },
  { id: 60000, value: 60000 },
  { id: 70000, value: 70000 },
  { id: 80000, value: 80000 },
  { id: 90000, value: 90000 },
  { id: 100000, value: 100000 },
  { id: 110000, value: 110000 },
  { id: 120000, value: 120000 },
  { id: 130000, value: 130000 },
  { id: 140000, value: 140000 },
  { id: 150000, value: 150000 },
  { id: 160000, value: 160000 },
  { id: 170000, value: 170000 },
  { id: 180000, value: 180000 },
  { id: 190000, value: 190000 },
  { id: 200000, value: 200000 },
  { id: 210000, value: 210000 },
  { id: 220000, value: 220000 },
  { id: 230000, value: 230000 },
  { id: 240000, value: 240000},
  { id: 250000, value: 250000 },
  { id: 260000, value: 260000 },
  { id: 270000, value: 270000 },
  { id: 280000, value: 280000 },
  { id: 290000, value: 290000 },
  { id: 300000, value: 300000 }
];

export const onSalePrices = [
  { id: 'TODOS', value: 'TODOS' },
  { id: 10000, value: 10000 },
  { id: 20000, value: 20000 },
  { id: 10000, value: 30000 },
  { id: 40000, value: 40000 },
  { id: 50000, value: 50000 },
  { id: 60000, value: 60000 },
  { id: 70000, value: 70000 },
  { id: 80000, value: 80000 },
  { id: 90000, value: 90000 },
  { id: 100000, value: 100000 },
  { id: 110000, value: 110000 },
  { id: 120000, value: 120000 },
  { id: 130000, value: 130000 },
  { id: 140000, value: 140000 },
  { id: 150000, value: 150000 },
  { id: 160000, value: 160000 },
  { id: 170000, value: 170000 },
  { id: 180000, value: 180000 },
  { id: 190000, value: 190000 },
  { id: 200000, value: 200000 },
  { id: 210000, value: 210000 },
  { id: 220000, value: 220000 },
  { id: 230000, value: 230000 },
  { id: 240000, value: 240000},
  { id: 250000, value: 250000 },
  { id: 260000, value: 260000 },
  { id: 270000, value: 270000 },
  { id: 280000, value: 280000 },
  { id: 290000, value: 290000 },
  { id: 300000, value: 300000 }
];

export const neighborhoods = [
  { id: 'AGRONOMÍA', value: 'AGRONOMÍA' },
  { id: 'ALMAGRO', value: 'ALMAGRO' },
  { id: 'BALVANERA', value: 'BALVANERA' },
  { id: 'BARRACAS', value: 'BARRACAS' },
  { id: 'BELGRANO', value: 'BELGRANO' },
  { id: 'BOEDO', value: 'BOEDO' },
  { id: 'CABALLITO', value: 'CABALLITO' },
  { id: 'CHACARITA', value: 'CHACARITA' },
  { id: 'COGHLAN', value: 'COGHLAN' },
  { id: 'COLEGIALES', value: 'COLEGIALES' },
  { id: 'CONSTITUCION', value: 'CONSTITUCION' },
  { id: 'FLORES', value: 'FLORES' },
  { id: 'FLORESTA', value: 'FLORESTA' },
  { id: 'LA BOCA', value: 'LA BOCA' },
  { id: 'PATERNAL', value: 'PATERNAL' },
  { id: 'LINIERS', value: 'LINIERS' },
  { id: 'MATADEROS', value: 'MATADEROS' },
  { id: 'MONTE CASTRO', value: 'MONTE CASTRO' },
  { id: 'MONSERRAT', value: 'MONSERRAT' },
  { id: 'NUEVA POMPEYA', value: 'NUEVA POMPEYA' },
  { id: 'NUÑEZ', value: 'NUÑEZ' },
  { id: 'PALERMO', value: 'PALERMO' },
  { id: 'PARQUE AVELLANEDA', value: 'PARQUE AVELLANEDA' },
  { id: 'PARQUE CHACABUCO', value: 'PARQUE CHACABUCO' },
  { id: 'PARQUE CHAS', value: 'PARQUE CHAS' },
  { id: 'PARQUE PATRICIOS', value: 'PARQUE PATRICIOS' },
  { id: 'PUERTO MADERO', value: 'PUERTO MADERO' },
  { id: 'RECOLETA', value: 'RECOLETA' },
  { id: 'RETIRO', value: 'RETIRO' },
  { id: 'SAAVEDRA', value: 'SAAVEDRA' },
  { id: 'SAN CRISTOBAL', value: 'SAN CRISTOBAL' },
  { id: 'SAN NICOLAS', value: 'SAN NICOLAS' },
  { id: 'SAN TELMO', value: 'SAN TELMO' },
  { id: 'VELEZ SARSFIELD', value: 'VELEZ SARSFIELD' },
  { id: 'VERSALLES', value: 'VERSALLES' },
  { id: 'VILLA CRESPO', value: 'VILLA CRESPO' },
  { id: 'VILLA DEL PARQUE', value: 'VILLA DEL PARQUE' },
  { id: 'VILLA GENERAL MITRE', value: 'VILLA GENERAL MITRE' },
  { id: 'VILLA DEVOTO', value: 'VILLA DEVOTO' },
  { id: 'VILLA LUGANO', value: 'VILLA LUGANO' },
  { id: 'VILLA LURO', value: 'VILLA LURO' },
  { id: 'VILLA ORTUZAR', value: 'VILLA ORTUZAR' },
  { id: 'VILLA PUEYRREDON', value: 'VILLA PUEYRREDON' },
  { id: 'VILLA REAL', value: 'VILLA REAL' },
  { id: 'VILLA RIACHUELO', value: 'VILLA RIACHUELO' },
  { id: 'VILLA SANTA RITA', value: 'VILLA SANTA RITA' },
  { id: 'VILLA URQUIZA', value: 'VILLA URQUIZA' },
  { id: 'TODOS', value: 'TODOS'}
];
