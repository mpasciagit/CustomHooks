import { useState } from "react"

export const useForm = (initialForm = {}) => {

    const [formState, setFormState] = useState(initialForm)
   
    const onInputChange = ({ target }) => {
        const { name, value } = target
        // la funcion flecha se va a ejecutar cada vez que un input dispare el evento onChange.
        // ({target}) es la desestructuración del objeto 'event' que recibe la función.
        // El evento (por ej. de un input) es un objeto con muchas propiedades:
        //    event = { target: ...,     >> el elemento HTML que disparó el evento
        //              type: "change", timeStamp: ..., ... }
        // Acá estamos diciendo: “Dame solo la propiedad 'target' del evento”
        // Así que en el cuerpo de la función podés usar directamente target, sin escribir event.target.
        // const { name, value } = target  > Ahora hacés desestructuración del target:
        // El target es el input que cambió. Un input tiene propiedades como:
        //    target = { name: "username", value: "ana", type: "text", ... }
        // Entonces, estás diciendo: “Dame las propiedades 'name' y 'value' del input que disparó el evento”
        // De un solo paso, capturás: Qué input fue (name), y qué valor nuevo tiene (value)

        // const { variable1, variable2 } = objeto;  >> variable1 = objeto.valor1 y variable2 = objeto.valor2
        // propiedad1 = par(clave1: valor1)
        // Significa: “creá 2 variables nuevas llamadas var..1 y var..2, y asignales los valores
        // de 2 propiedades del objeto, las variables y las propiedades tienen el mismo nombre”.

        setFormState({
            ...formState,
            [name]: value

    //👉 Paréntesis: porque estamos invocando una función → setFormState(...)
    //👉 Llaves dentro de paréntesis: porque el argumento de esa función es un objeto → { ... }
    //    Ese objeto es el nuevo estado: contiene las propiedades de formState (anterior)
    //    más la propiedad modificada [name]: value.

        })
    }

    return {
        ...formState,
        onInputChange
    }
}
// Qué devuelve useForm(initialForm)? > Devuelve un objeto con esas propiedades:
// { username: "...",
//   email: "...",
//   password: "...",
//   onInputChange: función }
// Por qué return { ... } usa llaves {} ? > Porque lo que devuelve es un objeto literal.