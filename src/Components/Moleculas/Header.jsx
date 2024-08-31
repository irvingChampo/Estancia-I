import "./header.css"
import Escudo from "../../../public/img/result.png"

// eslint-disable-next-line no-empty-pattern
const Header = ({}) =>{
    return(
        <section className="container-header">
            <div className="section-left">
                <img className="escudo" src={Escudo}/>
                <h1 className="logo">Juan Luis de Alarcón</h1>
            </div>
            <div className="section-right">

            </div>
        </section>
    );
};

export default Header;