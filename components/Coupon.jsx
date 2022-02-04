import { useRecoilState } from 'recoil';
import couponState from '../recoil/atoms/couponState';

import couponsData from '../data/couponsData';

const Coupon = ({ data }) => {
  const [coupon, setCoupon] = useRecoilState(couponState);
  const setCouponHandler = (indexNumber) => {
    setCoupon(indexNumber);
  };
  return (
    <div className='coupon_selector'>
      {couponsData.map((coupon, i) => {
        return (
          <button
            key={i}
            onClick={() => {
              setCouponHandler(i);
            }}
          >
            {coupon.name}
          </button>
        );
      })}
    </div>
  );
};

export default Coupon;
