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
    m2,
    orientation,
    price,
    professional,
    title,
    tipo_de_cochera,
    street,
    rooms,
  } = obj;

  console.log('b', obj)

  const newTitle = title[0].text;
  const newImg = (img) => ({ ...img, src: img.url });
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
    details: {
      ambients,
      antiquity,
      apartmentsPerFloor: apartments_per_floor,
      expenses,
      elevators,
      floor,
      floors,
      free_backyard,
      heating,
      garageType: tipo_de_cochera
    },
    photos: [newImg(img1), newImg(img2), newImg(img3), newImg(img4), newImg(img5), newImg(img6), newImg(img7)],
    baths: bath,
    street,
    rooms,
  }
};
