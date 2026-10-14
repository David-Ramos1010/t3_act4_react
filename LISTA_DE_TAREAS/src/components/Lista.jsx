/*
    d) Una lista renderizada dinámicamente a partir de un arreglo (usando .map()).
*/

import { useState } from "react";

// Ocupamos un arrgelo de tareas
function ListaTareas() {
  const [tareas, setTareas] = useState([
    "Aprender componentes",
    "Aprender props",
    "Aprender useState",
    "Programacion Web",
  ]);

  const [texto, setTexto] = useState("");

  // Funcion que agrega una tarea nueva al arreglo
  function agregarTarea() {
    // si el input esta vacio no hago nada
    if (texto.trim() === "") return;

    // creo un nuevo arreglo con las tareas anteriores + la nueva
    setTareas([...tareas, texto]);
    // limpio el input
    setTexto("");
  }

  // Funcion que elimina una tarea segun su posicion (index)
  function eliminarTarea(index) {
    const nuevasTareas = tareas.filter((t, i) => i !== index);
    setTareas(nuevasTareas);
  }

  return (
    <div className="lista tareas">
      <h2> Lista de tareas</h2>

      <input
        type="text"
        placeholder="Escribe una tarea..."
        value={texto}
        onChange={(e) => setTexto(e.target.value)}
      />
      <button onClick={agregarTarea}>Agregar</button>

      {/* Renderizado condicional: si no hay tareas muestro un mensaje */}
      {tareas.length === 0 ? (
        <p>No hay tareas todavia.</p>
      ) : (
        // se pinta la pnatalla
        <ul>
          {/* Renderizado de lista con map, cada elemento necesita una key unica */}
          {tareas.map((tarea, index) => (
            <li key={index}>
              {tarea}{" "}
              <button onClick={() => eliminarTarea(index)}>Eliminar</button>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}

export default ListaTareas;