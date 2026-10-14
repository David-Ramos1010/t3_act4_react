# t3_act5_react
## Configuración de mi primer proyecto en React y creación de una pequeña aplicación práctica aplicando lo aprendido.
***
#### Elaborado por: David Efraín José Ramos NL 19
## Descripción breve:
Este es la primera vez que configuro un proyecto en React y creo una pequeña aplicacion funcional con ello. Para lograr esto estuve guiandome del video titulado como "curso de React desde cero".

***
### Explicación y documentación:
#### El proyecyo como tal de React incluye los siguientes componentes:
1. **Saludo.jsx** :un componente funcional simple, solo muestra un título y un texto.
2. **TarjetaPerfil.jsx** : un componente que recibe **props** (nombre, edad, carrera) y las muestra en pantalla.
3. **Contador.jsx** : un componente que usa **useState** para llevar la cuenta de un número, con botones para sumar, restar y reiniciar.
4. **ListaTareas.jsx** : una lista de tareas donde puedo agregar y eliminar tareas. Usa `useState` para guardar el arreglo de tareas y `.map()` para pintarlas en pantalla.

---

## Preguntas

**a) ¿Qué diferencia hay entre props y state en React?**

Las props son datos que un componente recibe desde "afuera", normalmente desde el componente padre, y el componente que las recibe no las puede modificar (son de solo lectura). En cambio, el state es un dato que vive dentro del propio componente y sí se puede cambiar, por ejemplo con `useState`. En mi proyecto, `Tarjeta` usa props (el nombre, la edad y la carrera se los paso desde `App.jsx`), y `Contador` usa state (el número del contador cambia solo, dentro de ese componente).

Contador (ejemplo state):

```jsx
function Contador() {
  const [cuenta, setCuenta] = useState(0);

  return (
    <div className="Sube y Baja de Numeros">
      <h2>Contador: {cuenta}</h2>
      <button onClick={() => setCuenta(cuenta + 1)}>Sumar</button>
    </div>
  );
```
Tarjeta (ejemplo props):

```jsx
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
```
Envio de datos desde:

```jsx
<Tarjeta nombre="David Ramos" edad={20} carrera="Ingeniería en Sistemas Computacionales" />
```

**b) ¿Por qué es importante usar una key al renderizar una lista de elementos?**

Porque React usa la `key` para identificar cada elemento de la lista y saber cuál cambió, cuál se agregó o cuál se eliminó, sin tener que volver a dibujar toda la lista completa. Si no le pongo una key (o uso una mal puesta), React puede confundirse y mostrar los elementos en un orden raro o con datos mezclados, además de que en la consola marca una advertencia. En mi `Lista` uso el `index` del arreglo como key.

```jsx
{/* Renderizado de lista con map, cada elemento necesita una key unica */}
{tareas.map((tarea, index) => (
<li key={index}>
    {tarea}{" "}
    <button onClick={() => eliminarTarea(index)}>Eliminar</button>
</li>
```

**c) Explica con tus propias palabras qué hace la función useState y da un ejemplo de dónde la usaste en tu mini aplicación.**

`useState` es un Hook que sirve para que un componente pueda "recordar" un valor y que cuando ese valor cambie, la pantalla se vuelva a dibujar mostrando el valor nuevo. Se usa así: `const [valor, setValor] = useState(valorInicial)`, donde `valor` es el dato actual y `setValor` es la función que uso para cambiarlo. 

Yo lo usé en el componente `Contador`, donde `cuenta` empieza en 0 y cada vez que doy click en los botones uso `setCuenta` para incrementar el numero con el boton sumar. 

```jsx
function Contador() {
  const [cuenta, setCuenta] = useState(0);

  return (
    <div className="---">
      <h2>Contador: {cuenta}</h2>
      <button onClick={() => setCuenta(cuenta + 1)}>Sumar</button>
    </div>
  );
```

**d) Pega el enlace de tu repositorio de GitHub.**

https://github.com/David-Ramos1010/t3_act4_react


**e) Pega el enlace de tu proyecto ya desplegado en GitHub Pages.**

https://david-ramos1010.github.io/t3_act4_react/

#### Elaborado por: David Efraín José Ramos NL 19
