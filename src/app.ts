import express from "express";
import { ApolloServer } from "apollo-server-express";
import { buildGraphQLSchema } from "./resolver/resolver";
import { AppDataSource } from "./config/db";
import signale from "signale";

async function bootstrap() {
  const app = express();
  const schema = await buildGraphQLSchema();
  await AppDataSource.initialize();
  const isConnected = AppDataSource.isInitialized;
  if (!isConnected) {
    signale.error("unreachable db");
    process.exit();
  }

  const apolloServer = new ApolloServer({ schema });
  await apolloServer.start();
  apolloServer.applyMiddleware({ app });
  app.listen(4000, () =>
    console.log(
      `Server is running on http://localhost:4000${apolloServer.graphqlPath}`,
    ),
  );
}

bootstrap();
