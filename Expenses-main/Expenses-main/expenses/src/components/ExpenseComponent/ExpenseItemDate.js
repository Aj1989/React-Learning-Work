import './ExpenseItemDate.css'
export default function ExpenseItemDate(props){
    return(
        <div className="expense-date">
            <div className="expense-date__year">
                {props.data.getFullYear()}
            </div>
            <div className="expense-date__month">
                {props.data.toLocaleString('en-US', { month: 'short' })}
            </div>
            <div className="expense-date__day">
                {props.data.toLocaleString('en-US', { day: '2-digit' })}
            </div>
        </div>
    );
}