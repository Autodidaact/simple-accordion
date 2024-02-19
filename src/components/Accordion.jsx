import { useState } from "react"
import data from "./data";
import "./styles.css"


export default function Accordion(){
    const [selected, setSelected] = useState(null);

    function handleSingleSelection(currentId){
        console.log(currentId )
        setSelected(currentId === selected ? null : currentId);
    
    }

    return( 
        <div className="wrapper">
            <div className="accordion">
                {

                    data && data.length > 0 ? (data.map((item) =>(
                        <div className="item">
                            <div className="title" onClick={()=>handleSingleSelection(item.id)}>
                                <h3>{item.question}</h3>
                                {
                                    item.id === selected ? 
                                    <span>—</span>:
                                    <span>+</span>
                                }
                                
                            </div>
                            {

                                selected === item.id ? 
                   
                                <div className="content">
                                    {item.answer}
                                </div>
                                :null
                            }
                        </div>
                    
                    ))) : <div>No data found!</div>
                }
            </div>

        </div>
    )
}