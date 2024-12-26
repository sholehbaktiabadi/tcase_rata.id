import "reflect-metadata";
import { buildSchema } from "type-graphql";
import { UserResolver } from "../module/user/user.resolver";
import { CatalogueResolver } from "../module/catalogue/catalogue.resolver";

export async function buildGraphQLSchema() {
  return await buildSchema({
    resolvers: [UserResolver, CatalogueResolver],
    validate: true,
  });
}
