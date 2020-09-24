import { AppFactory } from "./app";

const PORT = 3000;

function run() {
  const app = AppFactory.create();

  app.listen(PORT, () => {
    console.log(`[INFO::API] Listening on port ${PORT}`);
  });
}

run();
