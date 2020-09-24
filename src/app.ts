import express from "express";

class App {
  public create() {
    const app = express();

    return app;
  }
}

export const AppFactory = new App();
