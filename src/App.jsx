// eslint-disable-next-line no-unused-vars
import React, { useState, useRef} from "react";

function App() {
 /*En este programa sumamos dos numeros, el resultado lo posicionamos en una
 tercera caja,validamos que lo ingresado en las cajas sean numeros,
 y con un boton llamamos una funcion que nos hace esto, luego en un segundo boton
 borramos lo ingresado en las cajas y posicionamos el puntero del mouse en la
 primera caja de texto
 //code*/

    //inicializar variables

    const[numerouno, setNumerouno] = useState("");
    const[numerodos, setNumerodos] = useState("");
    const[numerotres, setNumerotres] = useState("");

   const inputRef = useRef(null); // Crear la referencia para la primera caja de texto
//funcion suma suma y actualiza el resultado
    const sumarNumeros=()=>{
        const resultado=Number(numerouno)+Number(numerodos);
        if (isNaN(numerouno) || isNaN(numerodos)) {
           alert("Debe digitar caracteres validos....");
           setNumerouno("");
           setNumerodos("")
           inputRef.current.focus();

            return;
        }

        setNumerotres(resultado);
    }
 const limpiarResultado=()=>{
     setNumerouno("");
     setNumerodos("")
     setNumerotres("")
     inputRef.current.focus();

 }

  return (
      <>
          {/* // en el value los numeros y en el evento onchange  llamar a las cajas donde estan los numeros*/}
          <input value={numerouno} onChange={(e) => setNumerouno(e.target.value)} ref={inputRef}/>
          <input value={numerodos} onChange={(e) => setNumerodos(e.target.value)}/>
          <input readOnly={true} value={numerotres}/>

          {/* //llamar funcion*/}
          <button onClick={sumarNumeros}>Calcular</button>
          <button onClick={limpiarResultado}>Limpiar</button>
      </>
  )
}

export default App
