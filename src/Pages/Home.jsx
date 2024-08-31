import "./home.css"
import CardSelect from "../Components/Moleculas/CardSelect";
import Header from "../Components/Moleculas/Header";

function Home() {
    return ( 
        <>
            <section className="container-home">
                <Header/>
                <div className="section-select">
                    <CardSelect 
                        textRol={"Alumno"}
                        text1={"Ver calificaciones"}
                        text2={"Descargar sus calificaciones"}
                        text3={""}
                    />
                </div>
                <div className="section-select">
                    <CardSelect
                        textRol={"Maestro"}
                        text1={"Cargar calificaciones"}
                        text2={"Modificar calificaciones"}
                        text3={"Subir calificacines"}
                        />
                </div>
                <div className="section-select">
                    <CardSelect 
                        textRol={"Administrativo"} 
                        text1={"Agregar alumnos"}
                        text2={"Crear grupos"}
                        text3={"Asignar alumnos"}
                    />
                </div>
            </section>
        </>
     );
}

export default Home;