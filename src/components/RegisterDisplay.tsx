import * as React from 'react';

import { FMT_32BIT, formatHex } from '../utils/formatHex';

export const RegisterDisplay = ({ name, value }) => {
  const formattedValue = React.useMemo(
    () => formatHex(value, FMT_32BIT),
    [value]
  );
  return (
    <div style={{ display: 'flex' }}>
      <div style={{ fontFamily: 'monospace' }}>{name}:</div>
      <div style={{ fontFamily: 'monospace' }}>
        {formattedValue} (DEC: {value})
      </div>
    </div>
  );
};
