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
import EmptyState from '../../components/empty-state/empty-state';
import Loading from '../../components/loading/loading';

import {
  PropertiesSection, IndexContainer, Container, FilterTypography
} from './properties.styles';

const Properties = ({ id }) => {
  const history = useHistory();
  const location = useLocation();
  const [{ properties, filters }, dispatch] = useStateContext();
  const [data, setData] = useState(null);
  const [queryParams, setQueryParams] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const [amountOfAmbients, setAmountOfAmbients] = useState("TODOS");

  const handleChange = (event) => {
    setAmountOfAmbients(event.target.value);
  };

  useEffect(() => {
    dispatch({ type: 'CLEAR_ALL' });
  }, []);

  useEffect(() => {
    dispatch({ type: 'ERASE' });
  }, [location.pathname])

  useEffect(() => {
    window.scrollTo(0, 0);
    const url = !filters.neighborhood ? location.search : buildUrl(filters);
    history.push({
      pathname: `/${id}`,
      search: url
    });
    const qp = queryString.parse(url);
    const qpAmbients = qp.ambients === 'TODOS' ? 0 : parseInt(qp.ambients);
    const hasGarage = qp.hasGarage === 'true';
    const qpIsProfessional = qp.isProfessional === 'true';
    const qpMaxPrice = parseInt(qp.maxPrice);
    const qpMinPrice = parseInt(qp.minPrice);
    const qpMaxM2 = parseInt(qp.maxM2);
    const qpMinM2 = parseInt(qp.minM2);
    setQueryParams({
      neighborhood: qp.neighborhood,
      type: qp.type,
      minPrice: qpMinPrice,
      maxPrice: qpMaxPrice,
      minM2: qpMinM2,
      maxM2: qpMaxM2,
      ambients: qpAmbients,
      isProfessional: qpIsProfessional,
      hasGarage: hasGarage
    });
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
          rent_price
        } = p.data;

        if (!qp.neighborhood || (Object.keys(qp).length === 0 && qp.constructor === Object)) {
          return id === 'rentals' ? alquiler : venta;
        }

        const propertyType = typeOfProperty.find((obj) => obj.value === type_of_property);
        return (
          (id === 'rentals' ? alquiler : venta)
          && (hasGarage ? cochera === hasGarage : id)
          && (qpIsProfessional ? professional === qpIsProfessional : id)
          && (qp.neighborhood !== 'TODOS' ? qp.neighborhood.toLowerCase().includes(neighborhood.toLowerCase()) : neighborhood)
          && (qp.type !== 'TODOS' ? qp.type === propertyType.id : propertyType.id)
          && (qpMinPrice === 0 || qpMinPrice === qpMaxPrice ? price : (
            id === 'rentals' ? rent_price < qpMaxPrice && rent_price > qpMinPrice : price < qpMaxPrice && price > qpMinPrice
          ))
          && (qpMinM2 === 0 || qpMinM2 === qpMaxM2 ? m2 : m2 < qpMaxM2 && m2 > qpMinM2)
          && (qpAmbients === 0 ? ambients : qpAmbients > 4 ? ambients >= qpAmbients : qpAmbients === ambients)
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
  }, [filters, properties, location.search])

  useEffect(async () => {
    setIsLoading(true);
    if (!properties.length) {
      const response = await fetchData('property');
      if (response) dispatch({ type: 'ADD', payload: response.results });
    }
    setIsLoading(false);
  }, [properties, id]);

  return (
    <Layout marginTop='93px'>
      <PropertiesSection>
        <IndexContainer>
          {queryParams && (
            <>
              <FilterTypography varian='h4'>Filtrar</FilterTypography>
              <Filters
                neighborhoodProp={queryParams.neighborhood}
                typeOfPropertyProp={queryParams.type}
                minPriceProp={queryParams.minPrice}
                maxPriceProp={queryParams.maxPrice}
                minM2Prop={queryParams.minM2}
                maxM2Prop={queryParams.maxM2}
                ambientsProp={queryParams.ambients}
                hasGarageProp={queryParams.hasGarage}
                isProfessionalProp={queryParams.isProfessional}
              />
            </>
          )}
        </IndexContainer>
        {data ? (
          <Container>
            {data && data.length ? (
              <Grid numRowsXs={12} numRowsLg={4} data={data} />
            ) : <EmptyState />}
          </Container>
        ): <Loading />}
      </PropertiesSection>
    </Layout>
  );
};

export default Properties;
