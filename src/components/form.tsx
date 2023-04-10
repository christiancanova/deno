// import { useState } from "https://denopkg.com/soremwar/deno_types/react/v16.13.1/react.d.ts";
import { React } from "../../deps.ts";
import { colors } from "../persistence/color.tsx";
import ListColors from "./listColors.tsx";

const Form = () => {
  const [color, setColor] = React.useState(colors);
  return (
    <div className="container mt-4">
      <div className="row">
        <div className="col-md-6 offset-md-3 mt-3">
          <h2 className="text-center">Lista según color ingresado</h2>
          <form action="/" method="post" className="form-group mt-4">
            <input
              type="text"
              id="color"
              name="color"
              className="form-control text-center"
              placeholder="Ingrese el nombre del color (inglés) "
              style={{ fontSize: "20px" }}
            />
            <button className="btn btn-primary mt-3" style={{ width: "100%" }}>
              Ingresar
            </button>
          </form>
          <h3 className="text-center mt-4 text-primary">Lista de colores</h3>
          <section style={{ backgroundColor: "#000" }}className='mt-4'>
            <ul style={{ marginLeft: "39%" }}>
              {color.map((c) => (
                <ListColors color={c} key={c} />
              ))}
            </ul>
          </section>
        </div>
      </div>
    </div>
  );
};

export default Form;