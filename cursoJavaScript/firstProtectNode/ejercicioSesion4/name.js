/*
Crea un archivo JS que contenga las siguientes líneas
- Una cadena de texto con tu Nombre
- Otra cadena de texto con tu Apellido
- Una cadena de texto que se llame "estudiante" concatenando tu Nombre y tu Apellido con un espacio entre media
- Una cadena de texto que se llame "estudianteMayus" que contenga la cadena estudiante pero todo en mayúsculas
- Una cadena de texto que se llame "estudianteMinus" que contenga la cadena estudiante pero todo en minúsculas
- Una variable que contenga el número de letras de la cadena "estudiante" contando los espacios
- Una variable que contenga la primera letra del Nombre
- Otra variable que contenga la última letra del Apellido
- Una cadena de texto que elimine los espacios de la variable "estudiante"
- Una variable booleana que diga si el Nombre está contenido en la variable "estudiante"
*/

const firstName = "alexander";
const lastName = "suarez rodriguez";
const estudiante = firstName.concat(" ", lastName);
  console.log(estudiante)
const estudianteMayus= estudiante.toUpperCase();
  console.log(estudianteMayus)
const estudianteMinus= estudiante.toLowerCase();
  console.log(estudianteMinus)
const estudianteLength= estudiante.length;
  console.log(estudianteLength)
const firstWordName = firstName.charAt(0);
  console.log(firstWordName)
const endWordName = lastName.charAt(lastName.length - 1);
  console.log(endWordName)
const estudianteTrim = estudiante.trim();
  console.log(estudianteTrim)
const content = estudiante.includes(firstName);
  console.log(content)

