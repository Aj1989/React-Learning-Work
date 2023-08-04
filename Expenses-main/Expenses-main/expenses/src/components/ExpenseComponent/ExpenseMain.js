import ExpenseItem from './ExpenseItem';
import './ExpenseMain.css'
export default function ExpenseMain(props){
    return (
        <div className="expenses">
            <ExpenseItem expense={props.expense[0]}></ExpenseItem>
            <ExpenseItem expense={props.expense[1]}></ExpenseItem>
            <ExpenseItem expense={props.expense[2]}></ExpenseItem>
        </div>
    );
}