import { useState } from "react"
import data from "./data";
import "./styles.css"


export default function Accordion(){
    const [multiSelected, setMultiSelected] = useState([]);


    function handleMultiSelection(currentId){
        let copyMulti = [...multiSelected]
        const indexCurrentSelection = copyMulti.indexOf(currentId)
        if(indexCurrentSelection === -1) copyMulti.push(currentId)
        else copyMulti.splice(indexCurrentSelection, 1)
        setMultiSelected(copyMulti)
        console.log(copyMulti)

    }

    return( 
        <div className="wrapper">
            <div className="accordion">
                {

                    data && data.length > 0 ? (data.map((item) =>(
                        <div className="item">
                            <div className="title" onClick={()=>handleMultiSelection(item.id)}>
                                <h3>{item.question}</h3>
                                {
                                    multiSelected.indexOf(item.id) !== -1 ? 
                                    <span>—</span>:
                                    <span>+</span>
                                }
                                
                            </div>
                            {
                                multiSelected.indexOf(item.id) !== -1 ? 
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