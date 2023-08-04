import './App.css';
import CalculatorComponent from './Component/CalculatorComponent/CalculatorComponent';
import HeaderComponent from './Component/HeaderComponent/HeaderComponent';
import InvestmentGridComponent from './Component/InvestmentGridComponent/InvestmentGridComponent';

function App() {
  let data = [];
  function AddSaving(data){
    data = data;
  };
  return (
    <>
      {/* three component needed here 1, Header 2 Body 3 Footer */}
      <HeaderComponent></HeaderComponent>
      <CalculatorComponent AddSaving={AddSaving}></CalculatorComponent>
      <InvestmentGridComponent data={data}></InvestmentGridComponent>
    </>
  );
}

export default App;
