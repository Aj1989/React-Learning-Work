import { useState } from 'react';
import './CalculatorComponent.css';

const CalculatorComponent = function() {
    const initialStateValue = {
        'crrSavingValue': 10000,
        'expIntrest': 18,
        'yearlySaving': 6000,
        'investmentDuration': 20
    };
    
    const [inputFormFields, setInputFormFields] = useState(initialStateValue);

    const submitHandler = (event) =>{
        event.preventDefault();
    };

    function onResetClick(){
        setInputFormFields(initialStateValue);
    };

    return (
    <form onSubmit={submitHandler}> 
        <div className='CalculatorBody flex-container'>
            <div className='flex-item-left'>
                <label className="InputLabels"> Current Savings </label>
                <input type="number"></input>
                <label className="InputLabels"> Expected Intrest(%) </label>
                <input type="number"></input>
            </div>
            <div className='flex-item-right'>
                <label className="InputLabels"> Yearly Savings </label>
                <input type="number" id='yearly-saving' value={inputFormFields['yearlySaving']}></input>
                <label className="InputLabels"> Investment Duration </label>
                <input type="number"  id='invest-duration' value={inputFormFields['investmentDuration']}></input>
            </div>
            <div className='ButtonPanel'>
                <button className='Button' type="reset" onClick={onResetClick}>Reset</button>
                <button className='Button' type="submit" >Calculate</button>
            </div>
        </div>
    </form>)
}

export default CalculatorComponent;
