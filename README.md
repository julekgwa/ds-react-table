Dead simple react table

[![npm](https://img.shields.io/npm/v/ds-react-table.svg)](https://www.npmjs.com/package/ds-react-table) [![GitHub stars](https://img.shields.io/github/stars/julekgwa/ds-react-table.svg?style=social&label=Stars)](https://github.com/julekgwa/ds-react-table) [![gzip size](http://img.badgesize.io/https://unpkg.com/ds-react-table/dist/index.js?compression=gzip)](https://unpkg.com/ds-react-table/dist/index.js) ![Travis (.org)](https://api.travis-ci.com/julekgwa/ds-react-table.svg?branch=main) ![npm](https://img.shields.io/npm/dw/ds-react-table)

![rt](images/ds-react.png)


## Installation

```bash
$ npm install ds-react-table
```

or

```bash
$ yarn add ds-react-table
```

## Usage

```Javascript
import React from 'react';

import { Table } from 'ds-react-table';

function App() {
  return (
    <div className="App">
      <Table data={[{name: 'Jay', skill: 'Software Engineering'}]} />
    </div>
  );
}

export default App;
```

## License

MIT
