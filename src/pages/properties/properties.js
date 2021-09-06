import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, useHistory } from "react-router-dom";
import queryString from 'query-string';
import { fetchData } from '../property/property.helpers';
import { useLocation } from 'react-router';
import { useStateContext } from '../../state';
import Layout from '../../components/layout/layout';
import Grid from '../../components/grid/grid';
import Space from '../../components/space/space';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import { buildUrl, typeOfProperty } from '../../constants';

import {
  PropertiesSection,
  IndexContainer,
  Container,
  FilterSection,
  Switchers,
  FilterTypography,
  StyledRadio,
  PriceInput,
} from './properties.styles';
import DropdownSelector from '../../components/dropDownSelector/dropDownSelector';

const Properties = ({ id }) => {
  const history = useHistory();
  const location = useLocation();
  const [{ properties, filters }, dispatch] = useStateContext();
  const [data, setData] = useState([]);
  const [queryParams, setQueryParams] = useState(null);
  const [isLoading, setIsLoading] = useState(false);

  const setTypeSelected = (opt) => {
    dispatch({ type: 'SET_TYPE', payload: opt.id });
  };

  const onChangePrice = (e, type) => {
    const payload = e.target.value;
    if (type === 'max') dispatch({ type: 'SET_MAX_PRICE', payload });
    if (type === 'min') dispatch({ type: 'SET_MIN_PRICE', payload });
  };

  const onChangeM2 = (e, type) => {
    const payload = e.target.value;
    if (type === 'max') dispatch({ type: 'SET_MAX_M2', payload });
    if (type === 'min') dispatch({ type: 'SET_MIN_M2', payload });
  };

  
    useEffect(() => {
      const url = buildUrl(filters);
      history.push({
        pathname: `/${id}`,
        search: url
      });
      const qp = queryString.parse(url);
      const qpAmbients = qp.ambients === 'TODOS' ? 0 : parseInt(qp.ambients);
      const hasGarage = qp.garage === 'true';
      const qpIsProfessional = qp.professional === 'true';
      const qpMaxPrice = parseInt(qp.maxPrice);
      const qpMinPrice = parseInt(qp.minPrice);
      const qpMaxM2 = parseInt(qp.maxM2);
      const qpMinM2 = parseInt(qp.minM2);
    if (properties && properties.length > 0) {
      const filtered = properties[0] && properties[0].filter((p) => {
        const {
          alquiler,
          venta,
          m2,
          cochera,
          neighborhood,
          professional,
          type_of_property,
          ambients,
          price,
        } = p.data;

        if (!qp.neighborhood || (Object.keys(qp).length === 0 && qp.constructor === Object)) {
          return id === 'rentals' ? alquiler : venta;
        }

        const propertyType = typeOfProperty.find((obj) => obj.value === type_of_property);

        return (
          (id === 'rentals' ? alquiler : venta)
          && (cochera === hasGarage)
          // && (professional === qpIsProfessional)
          && (qp.neighborhood !== 'TODOS' ? qp.neighborhood.toLowerCase().includes(neighborhoods.toLowerCase()) : neighborhood)
          && (qp.type !== 'TODOS' ? qp.type === propertyType.id : propertyType.id)
          && (qpMinPrice === 0 || qpMinPrice === qpMaxPrice ? price : price < qpMaxPrice && price > qpMinPrice)
          && (qpMinM2 === 0 || qpMinM2 === qpMaxM2 ? m2 : m2 < qpMaxM2 && m2 > qpMinM2)
          && (qpAmbients !== 0 ? qpAmbients === ambients : ambients)
        );
      });
      const filteredData = filtered && filtered.map((d) => {
        const { title, hero_image, cochera } = d.data;
        return {
          ...d.data,
          id: d.id,
          img: hero_image.url,
          title: title[0].text,
          garage: cochera ? 'Si' : 'No',
        };
      });
      setData(filteredData);
    }
    }, [filters])

  useEffect(async () => {
    setIsLoading(true);
    if (!properties.length) {
      const response = await fetchData('property');
      if (response) dispatch({ type: 'ADD', payload: response.results });
    }
    setIsLoading(false);
    const qp = queryString.parse(location.search);
    const qpAmbients = qp.ambients === 'TODOS' ? 0 : parseInt(qp.ambients);
    const hasGarage = qp.garage === 'true';
    const qpIsProfessional = qp.professional === 'true';
    const qpMaxPrice = parseInt(qp.maxPrice);
    const qpMinPrice = parseInt(qp.minPrice);
    const qpMaxM2 = parseInt(qp.maxM2);
    const qpMinM2 = parseInt(qp.minM2);
    dispatch({ type: 'SET_AMBIENTS', payload: null });
    dispatch({ type: 'SET_NEIGHBORHOOD', payload: qp.neighborhood });
    dispatch({ type: 'SET_TYPE', payload: qp.type });
    dispatch({ type: 'SET_IS_PROFESSIONAL', payload: qpIsProfessional });
    dispatch({ type: 'SET_HAS_GARAGE', payload: hasGarage });
    dispatch({ type: 'SET_AMBIENTS', payload: qpAmbients });
    dispatch({ type: 'SET_MAX_M2', payload: qpMaxM2 });
    dispatch({ type: 'SET_MIN_M2', payload: qpMinM2 });
    dispatch({ type: 'SET_MAX_PRICE', payload: qpMaxPrice });
    dispatch({ type: 'SET_MIN_PRICE', payload: qpMinPrice });
    if (properties && properties.length > 0) {
      const filtered = properties[0] && properties[0].filter((p) => {
        const {
          alquiler,
          venta,
          m2,
          cochera,
          neighborhood,
          professional,
          type_of_property,
          ambients,
          price,
        } = p.data;

        if (!qp.neighborhood || (Object.keys(qp).length === 0 && qp.constructor === Object)) {
          return id === 'rentals' ? alquiler : venta;
        }

        const propertyType = typeOfProperty.find((obj) => obj.value === type_of_property);

        return (
          (id === 'rentals' ? alquiler : venta)
          && (cochera === hasGarage)
          // && (professional === qpIsProfessional)
          && (qp.neighborhood !== 'TODOS' ? qp.neighborhood.toLowerCase().includes(neighborhoods.toLowerCase()) : neighborhood)
          && (qp.type !== 'TODOS' ? qp.type === propertyType.id : propertyType.id)
          && (qpMinPrice === 0 || qpMinPrice === qpMaxPrice ? price : price < qpMaxPrice && price > qpMinPrice)
          && (qpMinM2 === 0 || qpMinM2 === qpMaxM2 ? m2 : m2 < qpMaxM2 && m2 > qpMinM2)
          && (qpAmbients !== 0 ? qpAmbients === ambients : ambients)
        );
      });
      const filteredData = filtered && filtered.map((d) => {
        const { title, hero_image, cochera } = d.data;
        return {
          ...d.data,
          id: d.id,
          img: hero_image.url,
          title: title[0].text,
          garage: cochera ? 'Si' : 'No',
        };
      });
      setData(filteredData);
    }
  }, [properties, id, queryParams]);

  return (
    <Layout marginTop='100px'>
      <PropertiesSection>
        <IndexContainer>
          <FilterTypography varian='h4'>Filtrar</FilterTypography>
          <FilterSection>
            <FilterTypography varian='h4'>Tipo de propiedad</FilterTypography>
            <DropdownSelector
              selected={filters.type}
              setSelected={setTypeSelected}
            />
            <Space vertical double />
            <FilterTypography varian='h4'>
              Precio de la propiedad
            </FilterTypography>
            <PriceInput
              type='number'
              label='Precio Mínimo'
              value={filters.minPrice || 0}
              onChange={(e) => onChangePrice(e, 'min')}
              placeholder='Precio Mínimo'
            />
            <PriceInput
              type='number'
              label='Precio Máximo'
              value={filters.maxPrice || filters.minPrice || 0}
              onChange={(e) => onChangePrice(e, 'max')}
              placeholder='Precio Máximo'
            />
            <FilterTypography varian='h4'>
              M2 de la propiedad
            </FilterTypography>
            <PriceInput
              type='number'
              label='M2 Mínimo'
              value={filters.minM2 || 0}
              onChange={(e) => onChangeM2(e, 'min')}
              placeholder='M2 Mínimo'
            />
            <PriceInput
              type='number'
              label='M2 Máximo'
              value={filters.maxM2 || filters.minM2 || 0}
              onChange={(e) => onChangeM2(e, 'max')}
              placeholder='M2 Máximo'
            />
            <Space vertical double />
            <FilterTypography varian='h4'>
              Cantidad de Ambientes
            </FilterTypography>
            <FormControlLabel
              value='two-ambients'
              checked='two-ambients'
              control={<StyledRadio color='default' />}
              label='1 Ambiente'
            />
            <FormControlLabel
              value='one-ambient'
              checked='two-ambient'
              control={<StyledRadio color='default' />}
              label='2 Ambientes'
            />
            <FormControlLabel
              value='three-ambients'
              checked='three-ambients'
              control={<StyledRadio color='default' />}
              label='3 Ambientes'
            />
            <FormControlLabel
              value='four-ambients'
              checked='four-ambients'
              control={<StyledRadio color='default' />}
              label='4 Ambientes'
            />
            <FormControlLabel
              value='five-ambients'
              checked='five-ambients'
              control={<StyledRadio color='default' />}
              label='5 Ambientes'
            />
            <FormControlLabel
              value='six-ambients'
              checked='six-ambients'
              control={<StyledRadio color='default' />}
              label='6 Ambientes'
            />
            <Space vertical double />
            <FormControlLabel control={<Switchers />} label='Cochera' />
            <FormControlLabel
              control={<Switchers />}
              label='Apto Profesional'
            />
          </FilterSection>
        </IndexContainer>
        <Container>
          <Grid numRowsLg={4} data={data} />
        </Container>
      </PropertiesSection>
    </Layout>
  );
};

export default Properties;
