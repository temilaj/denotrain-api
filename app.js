import { Application, Router } from 'https://deno.land/x/denotrain@v0.2.0/mod.ts';

const app = new Application({ port: 3001 });
// Optional: Generate router and hook routes to it
const router = new Router();

router.get('/', (ctx) => {
  // Returning a string, JSON, Reader or Uint8Array automatically sets
  // Content-Type header and no further router will match
  return new Promise((resolve) => resolve('This is the admin interface!'));
});
router.get('/edit', async (ctx) => {
  return 'This is an edit mode!';
});

app.get('/', (ctx) => {
  // Returning a json
  return { hello: 'world' };
});

// Hook up the router on "/admin". The routes are now
app.use('/admin', router);
app.get('/:id', (ctx) => {
  return 'Hello World with ID: ' + ctx.req.param.id;
});

await app.run();
