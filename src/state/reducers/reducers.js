export const initialState = {
	searchById: null,
	properties: [],
	news: [],
	filters: {
		country: null,
		province: null,
		neighborhood: null,
		minM2: null,
		maxM2: null,
		minPrice: null,
		maxPrice: null,
    isProfessional: false,
    hasGarage: false,
    type: null,
		ambients: null
	}
};

const searchReducer = (state, action) => {
  switch (action.type) {
    case '':
      return state;
    default:
      return state;
  }
}

const propertiesReducer = (state, action) => {
  switch (action.type) {
    case 'ADD': {
      const allProperties = [...state];
      allProperties.push(action.payload);
      return allProperties;
    }
    case 'REMOVE': {
      const allProperties = [...state];
      delete allProperties.find(action.id);
      return allProperties;
    }
    case 'ERASE': {
      return [];
    }
    default:
      return state;
  }
}

const newsReducer = (state, action) => {
  switch (action.type) {
    case 'ADD_NEWS': {
      const allNews = [...state];
      allNews.push(action.payload);
      return allNews;
    }
    default:
      return state;
  }
}

const filtersReducer = (state, action) => {
  switch (action.type) {
    case 'SET_MIN_PRICE':
      return { ...state, minPrice: action.payload };
    case 'SET_MAX_PRICE':
      return { ...state, maxPrice: action.payload };
    case 'SET_PROVINCE':
      return { ...state, province: action.payload };
    case 'SET_NEIGHBORHOOD':
      return { ...state, neighborhood: action.payload };
    case 'SET_IS_PROFESSIONAL':
      return { ...state, isProfessional: action.payload };
    case 'SET_COUNTRY':
      return { ...state, country: action.payload };
    case 'SET_AMBIENTS':
      return { ...state, ambients: action.payload };
    case 'SET_MAX_M2':
      return { ...state, minM2: action.payload };
    case 'SET_MIN_M2':
      return { ...state, maxM2: action.payload };
    case 'SET_HAS_GARAGE':
      return { ...state, hasGarage: action.payload };
    case 'SET_TYPE':
      return { ...state, type: action.payload };
    case 'CLEAR_ALL':
      return initialState.filters;
    default:
      return state;
  }
}

export const reducers = ({ searchById, properties, news, filters }, action) => ({
  searchById: searchReducer(searchById, action),
  properties: propertiesReducer(properties, action),
  news: newsReducer(news, action),
  filters: filtersReducer(filters, action)
})
