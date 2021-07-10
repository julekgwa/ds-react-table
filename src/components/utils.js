const capitalize = (str, lower = false) =>
  str &&
  (lower ? str.toLowerCase() : str).replace(/(?:^|\s|["'([{])+\S/g, (match) =>
    match.toUpperCase()
  );

const cleanTableHeader = (header, searchValue = '_') => {

  if (!header || typeof header !== 'string') {

    return;

  }

  const re = new RegExp(searchValue, 'g');

  return capitalize(header.replace(re, ' '));

};

export const createHeaders = (headersData) => {

  if (
    !Array.isArray(headersData) ||
    (Array.isArray(headersData) && headersData.length <= 0)
  ) {

    return [];

  }

  return Object.keys(headersData[0]).map((key) => ({
    Header: cleanTableHeader(key),
    accessor: key,
  }));

};

function generateGuid() {

  let result, i, j;
  result = '';
  for(j=0; j<32; j++) {

    if( j == 8 || j == 12 || j == 16 || j == 20)
      result = result + '-';
    i = Math.floor(Math.random()*16).toString(16)
      .toUpperCase();
    result = result + i;

  }

  return result;

}

export function addUniqueKey(array) {

  return array.map((item) => ({
    ...item,
    key: generateGuid(),
  }));

}

export const compare = ( a, b, sortBy, order = 'asc' ) => {

  if ( a[sortBy] < b[sortBy] ){

    return order === 'asc' ? -1 : 1;

  }
  if ( a[sortBy] > b[sortBy] ){

    return order === 'asc' ? 1 : -1;

  }

  return 0;

}