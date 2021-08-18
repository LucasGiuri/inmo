export const convertData = (obj) => {
  const {
    ambients,
    antiquity,
    apartments_per_floor,
    bath,
    between_streets,
    building_side,
    cochera,
    covered_surface,
    expenses,
    elevators,
    floor,
    floors,
    free_backyard,
    heating,
    img1,
    img2,
    img3,
    img4,
    img5,
    img6,
    img7,
    img8,
    img9,
    img10,
    m2,
    orientation,
    price,
    professional,
    title,
    tipo_de_cochera,
    street,
    rooms,
  } = obj;

  const newTitle = title[0].text;
  const newImg = (img) => {
    if (!img || Object.keys(obj).length === 0 && obj.constructor === Object) return { src: '' };
    return { ...img, src: img.url };
  };

  const allPhotos = [
    newImg(img1),
    newImg(img2),
    newImg(img3),
    newImg(img4),
    newImg(img5),
    newImg(img6),
    newImg(img7),
    newImg(img8),
    newImg(img9),
    newImg(img10)
  ];
  const filteredPhotos = allPhotos.filter((a) => a && a.src);

  return {
    title: newTitle,
    m2,
    m2Covered: covered_surface,
    orientation,
    between_streets,
    building_side,
    cochera,
    price,
    professional,
    details: [
      { key: 'Ambientes', value: ambients },
      { key: 'Antiguedad', value: `${antiquity} años` },
      { key: 'Departamentos por piso', value: apartments_per_floor },
      { key: 'Expensas', value: `$${expenses}` },
      { key: 'Ascensores', value: elevators },
      { key: 'Piso', value: floor },
      { key: 'Pisos', value: floors },
      { key: 'Superficie descubierta', value: `${free_backyard}m2` },
      { key: 'Tipo de calefacción', value: heating },
      { key: 'Tipo de garaje', value: tipo_de_cochera }
    ],
    photos: allPhotos,
    baths: bath,
    street,
    rooms,
  }
};
