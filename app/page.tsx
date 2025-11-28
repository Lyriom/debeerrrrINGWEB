import Image from 'next/image';
import ProductTable from './components/ProductTable';

export default function Home() {
  return (
    <main>
      Hello There
      <img src="https://media2.giphy.com/media/v1.Y2lkPTc5MGI3N" />
      <ProductTable />
    </main>
  );
}
