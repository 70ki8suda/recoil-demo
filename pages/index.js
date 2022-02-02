import Book from '../components/Book';
import Cart from '../components/Cart';
import { RecoilRoot } from 'recoil';

import booksData from '../data/booksData';

export default function Home() {
  return (
    <RecoilRoot>
      <div className='page_container'>
        <h1>
          <a href='https://www.shoeisha.co.jp/campaign/award/result/' target='_blank'>
            ITエンジニア本大賞2022
          </a>
        </h1>
        {Object.entries(booksData).map(([id, { ...data }]) => (
          <Book id={id} data={data} />
        ))}
        <Cart />
      </div>
    </RecoilRoot>
  );
}
