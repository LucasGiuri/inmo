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
    case 'CHANGE_MIN_PRICE':
      return { ...state, minPrice: action.minPrice };
    case 'CHANGE_MAX_PRICE':
      return { ...state, maxPrice: action.maxPrice };
    case 'CHANGE_PROVINCE':
      return { ...state, province: action.province };
    case 'CHANGE_NEIGHBORHOOD':
      return { ...state, neighborhood: action.neighborhood };
    case 'CHANGE_COUNTRY':
      return { ...state, country: action.country };
    case 'CHANGE_BEDROOMS':
      return { ...state, bedrooms: action.bedrooms };
    case 'CHANGE_BATHROOMS':
      return { ...state, bathrooms: action.bathrooms };
    case 'CHANGE_M2':
      return { ...state, m2: action.m2 };
    default:
      return state;
  }
}

const reducers = ({ searchById, properties, news, filters }, action) => ({
  searchById: searchReducer(searchById, action),
  properties: propertiesReducer(properties, action),
  news: newsReducer(news, action),
  filters: filtersReducer(filters, action)
})

export default reducers;