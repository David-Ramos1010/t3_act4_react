/* 
  b) Un componente que reciba y muestre props.
  Los props son datos que se les envian a el componente.
*/

 function Tarjeta(props) {
  return (
    <div className="tarjeta">
      <h2>{props.nombre}</h2>
      <p>Edad: {props.edad}</p>
      <p>Carrera: {props.carrera}</p>
    </div>
  );
}

export default Tarjeta;