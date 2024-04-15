import { DataSource } from "typeorm";
import { Country } from "../entities/country";

export const dataSource = new DataSource({
  type: "sqlite",
  database: "./countries.sqlite",
  entities: [Country],
  logging: true,
  synchronize: false,
  migrations: ["migrations/*.ts"],
});