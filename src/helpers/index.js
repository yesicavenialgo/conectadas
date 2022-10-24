export const mapToArray = (object) => {
  const array = [];

  for (const elem in object) {
    array.push({
      ...object[elem],
      id: elem,
    });
  }
  return array;
};
