import React, { useState } from 'react';
import PropTypes from 'prop-types';
import Space from '../space/space';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import DropdownSelector from '../dropDownSelector/dropDownSelector';
import { useStateContext } from '../../state';
import { typeOfProperty, neighborhoods } from '../../constants';

import {
  FilterSection, Switchers, FilterTypography, StyledRadio, PriceInput
} from './filters.styles';

const Filters = ({
  neighborhoodProp,
  typeOfPropertyProp,
  minPriceProp,
  maxPriceProp,
  minM2Prop,
  maxM2Prop,
  ambientsProp,
  hasGarageProp,
  isProfessionalProp
}) => {
  const [{ }, dispatch] = useStateContext();
  const [neighborhoodField, setNeighborhoodField] = useState(neighborhoodProp)
  const [typeField, setTypeField] = useState(typeOfPropertyProp);
  const [maxPriceField, setMaxPriceField] = useState(maxPriceProp);
  const [minPriceField, setMinPriceField] = useState(minPriceProp);
  const [maxM2Field, setMaxM2Field] = useState(maxM2Prop);
  const [minM2Field, setMinM2Field] = useState(minM2Prop);
  const [ambientsField, setAmbientsField] = useState(ambientsProp);
  const [hasGarageField, setHasGarageField] = useState(hasGarageProp);
  const [isProfessionalField, setIsProfessional] = useState(isProfessionalProp);

  const onSubmit = () => {
    dispatch({ type: 'SET_NEIGHBORHOOD', payload: neighborhoodField });
    dispatch({ type: 'SET_TYPE', payload: typeField });
    dispatch({ type: 'SET_MIN_PRICE', payload: minPriceField });
    dispatch({ type: 'SET_MAX_PRICE', payload: maxPriceField });
    dispatch({ type: 'SET_MIN_M2', payload: minM2Field });
    dispatch({ type: 'SET_MAX_M2', payload: maxM2Field });
    dispatch({ type: 'SET_HAS_GARAGE', payload: hasGarageField });
    dispatch({ type: 'SET_AMBIENTS', payload: ambientsField });
    dispatch({ type: 'SET_IS_PROFESSIONAL', payload: isProfessionalField });
  };

  const setNeigborhoodSelected = (n) => {
    setNeighborhoodField(n.id);
  };

  const onChangeAmbients = (num) => {
    setAmbientsField(num);
  };

  const setTypeSelected = (item) => {
    setTypeField(item.id);
  };

  const onChangeIsProfessional = () => {
    setIsProfessional(!isProfessionalField);
  };

  const onChangeGarage = () => {
    setHasGarageField(!hasGarageField);
  };

  const handleChange = (event) => {
    setAmountOfAmbientes(event.target.value);
  };

  const clearAll = () => {
    dispatch({ type: 'CLEAR_ALL' });
  };

  const onChangePrice = (e, type) => {
    const price = e.target.value;
    if (type === 'min') setMinPriceField(price);
    if (type === 'max') setMaxPriceField(max);
  };

  const onChangeM2 = (e, type) => {
    const payload = e.target.value;
    if (type === 'min') setMinM2Field(payload);
    if (type === 'max') setMaxM2Field(payload);
  };

  return (
    <FilterSection>
      <FilterTypography varian='h4'>Barrio</FilterTypography>
      <DropdownSelector
        items={neighborhoods}
        selected={neighborhoodField}
        setSelected={setNeigborhoodSelected}
      />
      <FilterTypography varian='h4'>Tipo de propiedad</FilterTypography>
      <DropdownSelector
        items={typeOfProperty}
        selected={typeField}
        setSelected={setTypeSelected}
      />
      <Space vertical double />
      <FilterTypography varian='h4'>
        Precio de la propiedad
      </FilterTypography>
      <PriceInput
        type='number'
        label='Precio Mínimo'
        value={minPriceField}
        onChange={(e) => onChangePrice(e, 'min')}
        placeholder='Precio Mínimo'
      />
      <PriceInput
        type='number'
        label='Precio Máximo'
        value={maxPriceField || minPriceField || 0}
        onChange={(e) => onChangePrice(e, 'max')}
        placeholder='Precio Máximo'
      />
      <FilterTypography varian='h4'>
        M2 de la propiedad
      </FilterTypography>
      <PriceInput
        type='number'
        label='M2 Mínimo'
        value={minM2Field}
        onChange={(e) => onChangeM2(e, 'min')}
        placeholder='M2 Mínimo'
      />
      <PriceInput
        type='number'
        label='M2 Máximo'
        value={maxM2Field || minM2Field || 0}
        onChange={(e) => onChangeM2(e, 'max')}
        placeholder='M2 Máximo'
      />
      <Space vertical double />
      <FilterTypography varian='h4'>
        Cantidad de Ambientes
      </FilterTypography>
      <FormControlLabel
        value={0}
        onChange={() => onChangeAmbients(0)}
        checked={ambientsField === 0}
        control={<StyledRadio color='default' />}
        label='TODOS'
      />
      <FormControlLabel
        value={1}
        onChange={() => onChangeAmbients(1)}
        checked={ambientsField === 1}
        control={<StyledRadio color='default' />}
        label='1 Ambiente'
      />
      <FormControlLabel
        value={2}
        onChange={() => onChangeAmbients(2)}
        checked={ambientsField === 2}
        control={<StyledRadio color='default' />}
        label='2 Ambientes'
      />
      <FormControlLabel
        value={3}
        onChange={() => onChangeAmbients(3)}
        checked={ambientsField === 3}
        control={<StyledRadio color='default' />}
        label='3 Ambientes'
      />
      <FormControlLabel
        value={4}
        onChange={() => onChangeAmbients(4)}
        checked={ambientsField === 4}
        control={<StyledRadio color='default' />}
        label='4 Ambientes'
      />
      <FormControlLabel
        value={5}
        onChange={() => onChangeAmbients(5)}
        checked={ambientsField === 5}
        control={<StyledRadio color='default' />}
        label='Más de 4 ambientes'
      />
      <Space vertical double />
      <FormControlLabel control={
        <Switchers
          checked={hasGarageField}
          value={hasGarageField}
          onChange={onChangeGarage}
        />
      }
        label='Cochera'
      />
      <FormControlLabel control={
        <Switchers
          checked={isProfessionalField}
          value={isProfessionalField}
          onChange={onChangeIsProfessional}
        />
      }
        label='Apto Profesional'
      />
      <Space vertical double />
      <Space vertical double />
      <button onClick={clearAll}>Remover filtros</button>
      <button type='submit' onClick={onSubmit}>Aplicar</button>
    </FilterSection>
  );
}

Filters.propTypes = {
  neighborhoodProp: PropTypes.string,
  typeOfPropertyProp: PropTypes.string,
  minPriceProp: PropTypes.number,
  maxPriceProp: PropTypes.number,
  minM2Prop: PropTypes.number,
  maxM2Prop: PropTypes.number,
  ambientsProp: PropTypes.number,
  hasGarageProp: PropTypes.bool,
  isProfessionalProp: PropTypes.bool
};

Filters.defaultProps = {
  neighborhoodProp: 'TODOS',
  typeOfPropertyProp: 'TODOS',
  minPriceProp: 0,
  maxPriceProp: 0,
  minM2Prop: 0,
  maxM2Prop: 0,
  ambientsProp: 0,
  hasGarageProp: false,
  isProfessionalProp: false
};

export default Filters;
