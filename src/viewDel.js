import React, {useContext} from 'react';
import gtransect from './context';
import './App.css';

const Viewdel = ()=>{
    let [transection, setT] = useContext(gtransect)

    // document.querySelector('#btnclick').addEventListener('onClick',del(0));
    const del = (ind) => {
        setT(transection.filter((element)=>transection[ind]!=element))
    }

    return (
        <div>
                {transection.map((element)=>(
                <div className="divV">
                    <li key={element.id} className="vli"><span className="vsp">{element.name}</span> <span className="vspn">{element.value}</span> <button className="btnC" onClick={()=>{del(transection.indexOf(element))}}>X</button></li>
                    
                </div>

                ))}
        </div>
    );
}

export default Viewdel