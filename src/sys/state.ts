export const initialSysState = {
  ax: 0,
  bx: 0,
  cx: 0,
  dx: 0,
  sr: 0,
  pc: 0,
  mem: [0],
};

export type SysState = typeof initialSysState;

export type SysRegId = 'ax' | 'bx' | 'cx' | 'dx';
export type SysReg = typeof initialSysState.ax;
export type SysMem = typeof initialSysState.mem;
