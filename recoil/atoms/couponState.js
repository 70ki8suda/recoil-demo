import { atom } from 'recoil';

const couponState = atom({
  key: 'couponState',
  default: 0,
});

export { couponState };
