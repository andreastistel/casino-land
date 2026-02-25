import Highcharts from 'highcharts';
import HighchartsReact from 'highcharts-react-official';
import 'highcharts/highcharts-more';

const options = {
  chart: {
    type: 'packedbubble',
    height: '500px',
  },
  title: {
    text: 'Casino Game Popularity by Region',
  },
  tooltip: {
    useHTML: true,
    pointFormat: '<b>{point.name}:</b> {point.value} players',
  },
  plotOptions: {
    packedbubble: {
      minSize: '20%',
      maxSize: '100%',
      layoutAlgorithm: {
        gravitationalConstant: 0.05,
        splitSeries: true,
        seriesInteraction: false,
        dragBetweenSeries: true,
        parentNodeLimit: true,
      },
      dataLabels: {
        enabled: true,
        format: '{point.name}',
        style: {
          color: 'black',
          textOutline: 'none',
          fontWeight: 'normal',
        },
      },
    },
  },
  series: [
    {
      name: 'Table Games',
      data: [
        { name: 'Blackjack', value: 980 },
        { name: 'Roulette', value: 850 },
        { name: 'Baccarat', value: 620 },
        { name: 'Craps', value: 310 },
        { name: 'Poker', value: 740 },
      ],
    },
    {
      name: 'Slots',
      data: [
        { name: 'Classic Slots', value: 1200 },
        { name: 'Video Slots', value: 1550 },
        { name: 'Progressive', value: 890 },
        { name: 'Megaways', value: 670 },
      ],
    },
    {
      name: 'Live Casino',
      data: [
        { name: 'Live Blackjack', value: 720 },
        { name: 'Live Roulette', value: 810 },
        { name: 'Dream Catcher', value: 430 },
        { name: 'Lightning Dice', value: 390 },
      ],
    },
  ],
};

function PackedBubbleChart() {
  return <HighchartsReact highcharts={Highcharts} options={options} />;
}

export default PackedBubbleChart;
