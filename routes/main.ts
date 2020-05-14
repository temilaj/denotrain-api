import { Router } from 'https://deno.land/x/denotrain@v0.2.0/mod.ts';
const router = new Router();

router.get('/', (ctx) => {
  // Returning a string, JSON, Reader or Uint8Array automatically sets
  // Content-Type header and no further router will match
  return new Promise((resolve) => resolve('This is the admin interface!'));
});

router.get('/edit', async (ctx) => {
  return 'This is an edit mode!';
});

export default router;
