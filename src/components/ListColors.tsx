import { sliceLongToBytes } from "https://deno.land/std@0.94.0/io/ioutil.ts";
import { React } from "../../deps.ts";

const ListColors = ({ color }) => {
  return (
    <section key={color}>
      <li style={{ color: `${color}`,fontSize:'22px',textTransform:'capitalize'}}>
        {color}
      </li>
    </section>
  );
}
export default ListColors;