/*
    c) Un componente que use estado (useState) para cambiar algo en pantalla (ejemplo: un contador, un botón que muestre/oculte texto, etc.).
*/
import { useState } from "react";
function Contador() {
  // cuenta es la variable de estado y empieza en 0
  // setCuenta es la funcion que se usa para cambiar el valor de "cuenta"
  const [cuenta, setCuenta] = useState(0);

  return (
    <div className="Sube y Baja de Numeros">
      <h2>Contador: {cuenta}</h2>
      <button onClick={() => setCuenta(cuenta + 1)}>Sumar</button>
      {/*
      <button onClick={() => setCuenta(cuenta - 1)}>Restar</button>
      <button onClick={() => setCuenta(0)}>Reiniciar</button>
       */}
    </div>
  );
}

export default Contador;