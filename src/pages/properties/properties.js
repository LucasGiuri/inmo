import React, { useState, useEffect } from 'react';
import queryString from 'query-string';
import { fetchData } from '../property/property.helpers';
import { useLocation } from 'react-router';
import { useStateContext } from '../../state';
import Layout from '../../components/layout/layout';
import Grid from '../../components/grid/grid';
import Space from '../../components/space/space';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import FormControl from '@material-ui/core/FormControl';

import {
  PropertiesSection,
  IndexContainer,
  Container,
  FilterSection,
  Switchers,
  FilterInputLabel,
  FilterSelect,
  FilterTypography
} from './properties.styles';

const Properties = ({ id }) => {
  const location = useLocation();
  const [{ properties }, dispatch] = useStateContext();
  const [data, setData] = useState([]);
  const [queryParams, setQueryParams] = useState(null);
  const [isLoading, setIsLoading] = useState(false);


  useEffect(async () => {
    const qp = queryString.parse(location.search);
    const hasGarage = qp.garaje === 'true';
    setQueryParams(qp);
    setIsLoading(true);
    if (!properties.length) {
      const response = await fetchData('property');
      if (response) dispatch({ type: 'ADD', payload: response.results });
    }
    setIsLoading(false);
    if (properties && properties.length > 0) {
      const filtered = properties[0] && properties[0].filter((p) => {
        const {
          alquiler,
          venta,
          cochera,
          neighborhood,
          professional,
          ambients,
          price
        } = p.data;

        if (!qp.barrio || Object.keys(qp).length === 0 && qp.constructor === Object) {
          return (id === 'rentals' ? alquiler : venta);
        }
        return (id === 'rentals' ? alquiler : venta)
        && ( cochera === hasGarage)
        // && (qp.barrio !== 'TODOS' ? qp.barrio.toLowerCase().includes(neighborhoods.toLowerCase()) : neighborhood);

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
  }, [properties, id]);

  return (
    <Layout marginTop='100px'>
      <PropertiesSection>
        <IndexContainer>
          <FilterTypography varian='h4'>Filtros</FilterTypography>
          <FilterSection>
            <FormControl variant='outlined'>
              <FilterInputLabel>Tipo</FilterInputLabel>
              <FilterSelect
                native
                label='Tipo De Propiedad'
                inputProps={{
                  name: 'tipo',
                }}
              >
                <option aria-label='None' value='' />
                <option value={''}>DEPARTAMENTO</option>
                <option value={''}>TIPO CASA PH</option>
                <option value={''}>LOCAL</option>
                <option value={''}>OFICINA</option>
                <option value={''}>TERRENO</option>
                <option value={''}>COCHERA</option>
              </FilterSelect>
            </FormControl>
            <FormControl variant='outlined'>
              <FilterInputLabel>Ambientes</FilterInputLabel>
              <FilterSelect
                native
                label='Ambientes'
                inputProps={{
                  name: 'ambientes',
                }}
              >
                <option aria-label='None' value='' />
                <option value={1}>1 Ambiente</option>
                <option value={2}>2 Ambientes</option>
                <option value={3}>3 Ambientes</option>
                <option value={4}>4 Ambientes</option>
                <option value={5}>5 Ambientes</option>
                <option value={6}>6 Ambientes</option>
              </FilterSelect>
            </FormControl>
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
