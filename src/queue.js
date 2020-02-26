import Queue from './lib/Queue';
// Fazemos isto num ficheiro À parte porque a aplicação poderá não estar a correr no mesmo servidor, serviço
// Assim a fila nunca influencia a performance.
// Tenho uma consola a correr a app, e outra consola a correr a fila
Queue.processQueue();
