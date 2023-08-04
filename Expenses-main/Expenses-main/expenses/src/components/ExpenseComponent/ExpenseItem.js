import "./ExpenseItem.css";
import ExpenseItemDate from "./ExpenseItemDate";
export default function ExpenseItem(props){
    return (
        <div className="expense-item">
            <ExpenseItemDate data={props.expense.date}></ExpenseItemDate>
            <div className="expense-item__description">
                <h2>{props.expense.description}</h2>
                <div className="expense-item__price">
                    {props.expense.amount}
                </div>
            </div>
        </div>
    );
}