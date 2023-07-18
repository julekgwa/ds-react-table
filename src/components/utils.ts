const capitalize = (str: string, lower = false) =>
  str &&
  (lower ? str.toLowerCase() : str).replace(/(?:^|\s|["'([{])+\S/g, (match) =>
    match.toUpperCase()
  );

const cleanTableHeader = (header: string, searchValue = '_') => {

  if (!header || typeof header !== 'string') {

    return;

  }

  const re = new RegExp(searchValue, 'g');

  return capitalize(header.replace(re, ' '));

};

interface IHeader {
  Header: string;
  accessor: string;
}

export const createHeaders = <T>(headersData: T[]): IHeader[] => {

  if (
    !Array.isArray(headersData) ||
    (Array.isArray(headersData) && headersData.length <= 0)
  ) {

    return [];

  }

  return Object.keys(headersData[0] as Array<keyof T>).map((key) => ({
    Header: cleanTableHeader(key) || '',
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

export function addUniqueKey<T>(array: T[]) {

  return array.map((item) => ({
    ...item,
    key: generateGuid(),
  }));

}

export const compare = <T>( a: T, b: T, sortBy: string, order = 'asc' ) => {

  if ( a[sortBy as keyof T] < b[sortBy as keyof T] ){

    return order === 'asc' ? -1 : 1;

  }
  if ( a[sortBy as keyof T] > b[sortBy as keyof T] ){

    return order === 'asc' ? 1 : -1;

  }

  return 0;

}