import { Application, Router } from "../deps.ts";
import routerApp from "./routes/index.tsx";
const router = new Router();

const app = new Application();
const PORT = 8080;

app.use(routerApp.routes());
app.use(router.allowedMethods());

console.log(`server is running on port: ${PORT}`);
await app.listen({ port: PORT });