import { Header } from 'highsoft-ui';
import PackedBubbleChart from '../components/PackedBubbleChart';

const navItems = [
  { title: 'Home', url: '/' },
  { title: 'Charts', url: '/charts' },
  { title: 'Games', url: '/games' },
];

function Home() {
  return (
    <div>
      <Header subItems={navItems} pathname="/" />
      <PackedBubbleChart />
    </div>
  );
}

export default Home;
