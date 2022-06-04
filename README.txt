//Requerimientos
// RUTAS:
1. /abracadabra/usuarios: Se debe devolver un JSON con un arreglo de nombres alojado en el servidor.
2. /abracadabra/juego/:usuario: A través de un middleware, verificar que el usuario
escrito como parámetro existe en el arreglo alojado en el servidor.
3. /abracadabra/conejo/:n: Basado en un número aleatorio del 1 al 4, devolver la foto del conejo en caso de coincidir 
con el número recibido como parámetro ó devolver la foto de Voldemort en caso de no coincidir.