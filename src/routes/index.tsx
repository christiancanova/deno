import { Router, ReactDOMServer, React, Context } from "../../deps.ts";
import Form from "../components/form.tsx";
import { Color } from "../interface/color.tsx";
import { colors } from "../persistence/color.tsx";

const router = new Router();
router.get("/", (ctx: Context) => {
  ctx.response.body = `
<!DOCTYPE html>
<html lang="es">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap@4.3.1/dist/css/bootstrap.min.css" integrity="sha384-ggOyR0iXCbMQv3Xipma34MD+dH/1fQ784/j6cY/iJTQUOhcWr7x9JvoRxT2MZw1T" crossorigin="anonymous">
    <title>React - Deno</title>
</head>
<body >
    <div id="root">${ReactDOMServer.renderToString(<Form />)}
    </div>
</body>
</html>`;
});

router.post("/", async (ctx: Context) => {
  const data = await ctx.request.body().value;
  // console.log(data)
  const params = new URLSearchParams(data);
  const newColor: Color = params.get("color");
  if (!newColor || newColor.trim() === "") {
    return ctx.response.redirect("/");
  }
  colors.push(newColor);
  ctx.response.redirect("/");
});

export default router;