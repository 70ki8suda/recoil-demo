import { useRecoilValue } from 'recoil';
import totalsSelector from '../recoil/selector/totalsSelector';

const Totals = () => {
  const totals = useRecoilValue(totalsSelector);
  return (
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
  );
};

export default Totals;
