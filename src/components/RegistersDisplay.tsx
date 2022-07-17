import * as React from 'react';
import { resetAction } from '../sys/actions';
import { useSys } from '../sys/contexts';
import { RegisterDisplay } from './RegisterDisplay';

export const RegistersDisplay = () => {
  const [state, dispatch] = useSys();
  const handleResetClick = React.useCallback(
    (event: React.MouseEvent<HTMLButtonElement>) => {
      dispatch(resetAction());
    },
    [dispatch]
  );
  const { ax, bx, cx, dx, sr, pc } = state;
  return (
    <React.Fragment>
      <button onClick={handleResetClick}>Reset</button>
      <RegisterDisplay name="AX" value={ax} />
      <RegisterDisplay name="BX" value={bx} />
      <RegisterDisplay name="CX" value={cx} />
      <RegisterDisplay name="DX" value={dx} />
      <RegisterDisplay name="SR" value={sr} />
      <RegisterDisplay name="PC" value={pc} />
    </React.Fragment>
  );
};
