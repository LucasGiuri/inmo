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
  { id: 10000, value: 10000 }
];

export const onSalePrices = [
  { id: 'TODOS', value: 'TODOS' },
  { id: 10000, value: 10000 }
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
