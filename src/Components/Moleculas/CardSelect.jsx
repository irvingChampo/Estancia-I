import "./cardSelect.css"
import Button from "../Atomos/Button"

// eslint-disable-next-line react/prop-types
const  CardSelect = ({textRol, text1, text2, text3}) => {
    return ( 
        <>
            <div className="container-card">
                <h1 className="Roltext">{textRol}</h1>
                <ul>
                    <li>{text1}</li>
                    <li>{text2}</li>
                    <li>{text3}</li>
                </ul>
                <Button text={"login"} width={"60%"} color={"transparent"}/>
            </div>
        </>
     );
}

export default CardSelect;