import React, {useContext} from 'react';
import gtransect from './context';
import './App.css';

const Add = ()=>{
    let [transection, setT] = useContext(gtransect)

    return (
        <div className="add">
            <label for="name" className="text-form">Name</label>
            <input type="text" id="name"/><br />
            <label for="value" className="text-form">Amount</label>
            <input type="text" id="value"/><br />
            <button className="btn" onClick={()=>{
                var Name = document.getElementById('name').value;
                var Val = document.getElementById('value').value;
                document.getElementById('name').value = '';
                document.getElementById('value').value = '';
                let Id = transection.length
                setT(transection.concat({id: Id, name: Name, value: Val}))
            }
            }>Add Transection</button>
            {/* {console.log(transection)} */}
        </div>
    );
}

export default Add