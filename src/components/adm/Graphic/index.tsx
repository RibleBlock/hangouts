import { Bar } from 'react-chartjs-2';
import 'chart.js/auto';

interface GraphicProps {
  label?: string,
  labels: string[],
  data: number[],
}
export function Graphic({ label, labels, data }: GraphicProps) {
  function numToDate(date: string) {
    const numMes = date.slice(-2);
    const calendario = [
      'Janeiro', 'Fevereiro', 'Março', 'Abril', 'Maio', 'Junho', 'Julho', 'Agosto', 'Setembro', 'Outubro', 'Novembro', 'Dezembro',
    ];
    // console.log(`O MES É: ${calendario[Number(numMes) - 1]} ${date}`);
    return `${calendario[Number(numMes) - 1]}`;
  }

  // objeto de configuracao
  const chartData = {
    labels: (labels.map((label) => numToDate(label))).slice(-6), // dados
    datasets: [
      {
        label,
        data,
        backgroundColor: [
          '#678FF3',
        ],
        borderWidth: 1,
      },
    ],
  };

  return (
    <div style={{ backgroundColor: '#fff', marginBottom: '2rem' }}>
      <Bar
        data={chartData}
        options={{
          plugins: {
            title: {
              display: true,
              text: label ? `QUANTIDADE DE VEZES QUE ${label?.toUpperCase()} FOI PEDIDO` : 'SELECIONE UM SABOR:',
            },
            legend: {
              display: false,
            },
          },
        }}
      />
    </div>
  );
}
