//Requerimientos
//1. Crear un servidor con Express en el puerto 3000.
//2. Definir la carpeta “assets” como carpeta pública del servidor.
//3. Crear en el servidor un arreglo de nombres y devolverlo en formato JSON a través de la ruta /abracadabra/usuarios.
//4. Crear un middleware con la ruta /abracadabra/juego/:usuario para validar que el usuario recibido 
//como parámetro “usuario” existe en el arreglo de nombres creado en el servidor.
//En caso de ser exitoso, permitir el paso a la ruta GET correspondiente, de lo contrario devolver la imagen “who.jpeg”.
//5. Crear una ruta /abracadabra/conejo/:n que valide si el parámetro “n” coincide con el número generado de forma aleatoria.
//En caso de ser exitoso, devolver la imagen del conejo, de lo contrario devolver la imagen de Voldemort.
//6. Crear una ruta genérica que devuelva un mensaje diciendo “Esta página no existe...” al consultar una ruta que no esté definida en el servidor.
// RUTAS:
//1. /abracadabra/usuarios: Se debe devolver un JSON con un arreglo de nombres alojado en el servidor.
//2. /abracadabra/juego/:usuario: A través de un middleware, verificar que el usuario
//escrito como parámetro existe en el arreglo alojado en el servidor.
//3. /abracadabra/conejo/:n: Basado en un número aleatorio del 1 al 4, devolver la foto del conejo en caso de coincidir 
//con el número recibido como parámetro ó devolver la foto de Voldemort en caso de no coincidir.
