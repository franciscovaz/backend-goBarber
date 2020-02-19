// O servidor fica num ficheiro separado, pois, quando vierem os testes automáticos
// não é preciso arrancar o servidor, já vem um!

import app from './app';

app.listen(3333);
