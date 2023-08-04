import './App.css';
import ExpenseMain from './components/ExpenseComponent/ExpenseMain';
import Card from './components/UIGenericComponent/Card';
function App() {
  const expensesItem =[
    {date:new Date(), description:"Sports Shop", amount:5600},
    {date:new Date(), description:"Gocery Shop", amount:600},
    {date:new Date(), description:"Extracurricular", amount:500}
  ];
  return (
    <Card className="Mainexpense">
      <ExpenseMain expense={expensesItem}></ExpenseMain>
    </Card>
  );
}

export default App;
