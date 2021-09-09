import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, useHistory } from "react-router-dom";
import queryString from 'query-string';
import { fetchData } from '../property/property.helpers';
import { useLocation } from 'react-router';
import { useStateContext } from '../../state';
import Layout from '../../components/layout/layout';
import Grid from '../../components/grid/grid';
import { buildUrl, typeOfProperty } from '../../constants';
import Filters from '../../components/filters/filters';

import {
  PropertiesSection, IndexContainer, Container, FilterTypography
} from './properties.styles';

const Properties = ({ id }) => {
  const history = useHistory();
  const location = useLocation();
  const [{ properties, filters }, dispatch] = useStateContext();
  const [data, setData] = useState([]);
  const [queryParams, setQueryParams] = useState(null);
  const [applyiongFIlters, setApplyingFiltering] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [amountOfAmbients, setAmountOfAmbientes] = useState("TODOS");

  const handleChange = (event) => {
    setAmountOfAmbientes(event.target.value);
  };

  const clearAll = () => {
    dispatch({ type: 'CLEAR_ALL' });
  };


  useEffect(() => {
    setApplyingFiltering(false);
    clearAll();
  }, []);

  useEffect(() => {
    console.log('filters', filters)
  }, [filters]);

  useEffect(() => {
    if (applyiongFIlters) {
      const url = buildUrl(filters);
      history.push({
        pathname: `/${id}`,
        search: url
      });
    }
  }, [applyiongFIlters]);
  
    useEffect(() => {
      const url = !filters.neighborhood || !applyiongFIlters ? location.search : buildUrl(filters);
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
          <Filters />
        </IndexContainer>
        <Container>
          <Grid numRowsLg={4} data={data} />
        </Container>
      </PropertiesSection>
    </Layout>
  );
};

export default Properties;
