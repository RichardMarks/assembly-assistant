import * as React from 'react';
import { setRegisterAction } from '../sys/actions';
import { useSys } from '../sys/contexts';
import { SysRegId } from '../sys/state';

import { isDec } from '../utils/isDec';
import { isHex } from '../utils/isHex';

export const MOVOpForm = () => {
  const [state, dispatch] = useSys();
  const [selectedRegId, setSelectedRegId] = React.useState<SysRegId>('ax');
  const [valueNum, setValueNum] = React.useState<number>(0);
  const [value, setValue] = React.useState<string>('0');
  const [valueOk, setValueOk] = React.useState<string>('ok');
  const handleRegIdChange = React.useCallback(
    (event: React.ChangeEvent<HTMLSelectElement>) => {
      setSelectedRegId(event.target.value as SysRegId);
    },
    []
  );
  const handleValueChange = React.useCallback(
    (event: React.ChangeEvent<HTMLInputElement>) => {
      setValue(event.target.value);
    },
    []
  );
  const handleCommitClick = React.useCallback(
    (event: React.MouseEvent<HTMLButtonElement>) => {
      dispatch(setRegisterAction(selectedRegId, valueNum));
      setValue('0');
    },
    [selectedRegId, valueNum, dispatch]
  );

  React.useEffect(() => {
    if (isDec(value)) {
      setValueOk('ok');
      setValueNum(Number(value));
    } else if (isHex(value)) {
      setValueOk('ok');
      setValueNum(parseInt(value, 16));
    } else {
      setValueOk('no-ok');
      setValueNum(0);
    }
  }, [value]);

  const shouldDisableCommitButton = valueOk !== 'ok';

  return (
    <React.Fragment>
      <h4>MOV Register, Value</h4>
      <div
        style={{
          display: 'flex',
          justifyContent: 'space-between',
          paddingBottom: 10,
          borderBottom: '1px solid #ddd',
        }}
      >
        <label>Register:</label>
        <div>
          <select value={selectedRegId} onChange={handleRegIdChange}>
            <option value="ax">AX</option>
            <option value="bx">BX</option>
            <option value="cx">CX</option>
            <option value="dx">DX</option>
          </select>
        </div>
        <div>
          <label>Value:</label>
          <input type="text" value={value} onChange={handleValueChange} />
        </div>
        <div>
          <button
            disabled={shouldDisableCommitButton}
            onClick={handleCommitClick}
          >
            Commit
          </button>
        </div>
      </div>
      {valueOk !== 'ok' ? (
        <div
          style={{
            color: 'red',
            textAlign: 'center',
            fontSize: 12,
          }}
        >
          * You must enter a decimal or hexadecimal number.
        </div>
      ) : null}
    </React.Fragment>
  );
};
