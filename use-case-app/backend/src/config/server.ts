import * as dotenv from "dotenv";
import { dataSource } from "./db";
import { buildSchema } from "type-graphql";
import { CountryResolver } from "../resolvers/country.resolver";
import { GraphQLError } from 'graphql';
import { ApolloServer } from "apollo-server";

async function createServer(customContext: any = undefined): Promise<ApolloServer> {
  dotenv.config();
  await dataSource.initialize();

  const schema = await buildSchema({
    resolvers: [CountryResolver],
    validate: { forbidUnknownValues: false },
  });

  return new ApolloServer({
    schema,
    context: customContext ? customContext : ({ req }) => {
      if (
        req?.headers.authorization === undefined ||
        process.env.JWT_SECRET_KEY === undefined
      ) {
        return {};
      } else {
        try {
          const bearer = req.headers.authorization.split("Bearer ")[1];

          return { token: bearer };
        } catch (e) {
          console.log(e);
          return {};
        }
      }
    },
  });
}

export default createServer;