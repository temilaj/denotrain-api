import { Application } from 'https://deno.land/x/denotrain@v0.2.0/mod.ts';

const app = new Application({ port: 3001 });

import routes from './routes/main.ts';

app.get('/', (ctx) => {
  // Returning a json
  return { hello: 'world' };
});

app.use('/admin', routes);

app.get('/:id', (ctx) => {
  return 'Hello World with ID: ' + ctx.req.param.id;
});

await app.run();
