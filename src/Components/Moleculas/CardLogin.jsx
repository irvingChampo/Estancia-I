import Logo from "../../../public/img/result.png"
import Input from "../Atomos/Input"
import Button from "../Atomos/Button"
import "./cardLogin.css"

function CardInput() {
    return ( 
        <section className="container-cardlogin">
            <img className="escudoLogin" src={Logo}/>
            <div className="container-inputs">
                <Input width={"80%"} height={"10%"} placeholder={"CCT"} type={"text"}/>
                <Input width={"80%"} height={"10%"} placeholder={"Password"} type={"password"}/>
                <Button width={"80%"} height={"20%"} color={"red"}/>
            </div>
        </section>
     );
}

export default CardInput;