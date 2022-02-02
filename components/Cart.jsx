import { useRecoilValue } from 'recoil';

import Coupon from '../components/Coupon';

import { cartState } from '../recoil/atoms/cartState';
import totalsState from '../recoil/selector/totalsState';
import booksData from '../data/booksData';

const Cart = ({ data }) => {
  const cart = useRecoilValue(cartState);
  const totals = useRecoilValue(totalsState);
  if (Object.keys(cart).length === 0) return <p>カートは空です。</p>;
  return (
    <div className='cart_container'>
      <ul className='cart_items'>
        {Object.entries(cart).map(([id, quantity]) => (
          <li key={id}>
            {booksData[id].title} x <span className='cart_quantity'>{quantity}</span>
          </li>
        ))}
      </ul>
      <Coupon />
      <div className='totals'>
        <div className='totals_cost'>
          <p>
            小計:<span className='totals_cost_num'>{totals.subtotal}</span>
          </p>
          <p>
            クーポン:<span className='totals_cost_num'>{totals.coupon}</span>
          </p>
          <p>
            請求:<span className='totals_cost_num'>{totals.total}</span>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Cart;
