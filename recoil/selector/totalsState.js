import { selector } from 'recoil';
import { cartState } from '../atoms/cartState';
import { couponState } from '../atoms/couponState';
import booksData from '../../data/booksData';
import couponsData from '../../data/couponsData';

const totalsState = selector({
  key: 'totalsState',
  get: ({ get }) => {
    const cart = get(cartState);
    const coupon = get(couponState);
    const subtotal = Object.entries(cart).reduce((acc, [id, quantity]) => acc + booksData[id].price * quantity, 0);
    const couponDiscount = couponsData[coupon].discount;
    return {
      subtotal,
      coupon: couponsData[coupon].name,
      discount: couponDiscount,
      total: (subtotal * (100 - couponDiscount)) / 100,
    };
  },
});

export default totalsState;
