import { useRecoilValue } from 'recoil';

import Coupon from '../components/Coupon';
import Totals from '../components/Totals';

import { cartState } from '../recoil/atoms/cartState';
import booksData from '../data/booksData';

const Cart = ({ data }) => {
  const cart = useRecoilValue(cartState);

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
      <Totals />
    </div>
  );
};

export default Cart;
