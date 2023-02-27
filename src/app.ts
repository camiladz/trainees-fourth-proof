import express from "express";
import { graphqlHTTP } from "express-graphql";
import { makeExecutableSchema } from "@graphql-tools/schema";
import cors from "cors";
import data from "./mockData";

const typeDefs = `

  type Query {
    hello: String!
    storeRegionalization(input: SendRegionalizationInput!): Store!
  }

  type Mutation {
    addItem(input: AddItemInput): Product!
  }

  type Store{
    name: String!
    address: String!
    neighborhood: String!
    city: String!
    state: String!
    postalCode: String!
    hour: String!
    celphone: String!
    phone: String!
    products: [Product]!
  }

  type Product {
      id: String!
      image: String!
      name: String!
      listPrice: String!
      price: String!
      installments: Int!
  }

  type User {
    email: String!
  }

  input AddItemInput {
    id: String!
    state: BrazilianState!
  }

  input SendRegionalizationInput {
    email: String!
    state: BrazilianState!
  }

  enum BrazilianState {
    AC
    AL
    AP
    AM
    BA
    CE
    DF
    ES
    GO
    MA
    MT
    MS
    MG
    PA
    PB
    PR
    PE
    PI
    RJ
    RN
    RS
    RO
    RR
    SC
    SP
    SE
    TO
  }
`;

const resolvers = {
  Query: {
    storeRegionalization: (_: any, args: any) => {
      const { input } = args;

      const storeFounded = data.storeData.find((sd) => sd.state === input.state);

      if (!storeFounded) {
        throw new Error("store_not_found");
      }

      return storeFounded;
    }
  },
  Mutation: {
    addItem: (_: any, args: any) => {
      const { input } = args;

      const storeFounded = data.storeData.find((sd) => sd.state === input.state);

      if (!storeFounded) {
        throw new Error("store_not_found");
      }

      console.log({ storeFounded: storeFounded.products[0] });

      const productFound = storeFounded.products.find((pd) => pd.id === input.id);

      if (!productFound) {
        throw new Error("product_not_found");
      }

      return productFound;
    }
  }
};

export const schema = makeExecutableSchema({
  resolvers,
  typeDefs
});

const app = express();

app.use(cors());

app.use(
  "/graphql",
  graphqlHTTP({
    schema,
    graphiql: true
  })
);

app.listen(process.env.PORT || 80, () => {
  console.log("app running at http://localhost:80");
});
