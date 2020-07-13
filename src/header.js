import React, {useContext} from 'react';
import gtransect from './context';
import './App.css';

const Header = ()=>{
    let [transection, setT] = useContext(gtransect)
    function calc(){
        let sum = 0
        transection.forEach((element)=>{
            sum = sum+Number(element.value)
            
        })
        return sum
    }

    function calcIncome(){
        let sum = 0
        transection.forEach((element)=>{
            if(Number(element.value) > 0)sum = sum+Number(element.value)       
        })
        return sum
    }

    function calcExpense(){
        let sum = 0
        transection.forEach((element)=>{
            if(Number(element.value) < 0)sum = sum+Number(element.value)
            
        })
        return sum
    }
    return (
        <div className="rest">
            <h1 className="heading">Expense Tracker</h1>
            <div>
                <h5 className="ie">Total Amount = {calc()}</h5>
                <div className="divH">
                    <div>
                        <h5>Income <br /> {calcIncome()}</h5>
                    </div>
                    <div>
                        <h5 className="ie">Expense <br /> {calcExpense()}</h5>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Header