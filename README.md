# TomasPonceCPersona

Hacer un formulario html para que se pueda ingresar la CPersona que contemple las siguientes condiciones:
 Sus atributos son: Nombre, FechaNacimiento, DNI, Genero  ( tener en cuenta Decreto 476/2021 - https://www.lavoz.com.ar/ciudadanos/identidades-no-binarias-a-un-ano-del-decreto-una-persona-por-dia-solicita-el-cambio-de-dni/ ) , peso y altura.
 Por defecto, todos los atributos menos el DNI serán valores por defecto según su tipo (0 números, cadena vacía para String, etc.).
Se implantara el constructor:
 Los métodos que se implementaran son:
calcularIMC(): calculara si la persona esta en su peso ideal (peso en kg/(altura^2 en m)), si esta fórmula devuelve un valor menor que 20, la función devuelve un -1, si devuelve un número entre 20 y 25 (incluidos), significa que esta por debajo de su peso ideal la función devuelve un 0 y si devuelve un valor mayor que 25 significa que tiene sobrepeso, la función devuelve un 1.
 esMayorDeEdad(): indica si es mayor de edad, devuelve un booleano- Se contrasta con hora-día del sistema. 
ComprobarGenero(genero): comprueba que el genero introducido es correcto. Si no es correcto, sera H. Sera visible al exterior.
