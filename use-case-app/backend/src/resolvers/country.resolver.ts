import { Arg, Args, Authorized, Ctx, Mutation, Query, Resolver } from "type-graphql";
import { Country } from "../entities/country";
import * as CountryService from "../services/country.service";
import { CreateCountryInputType } from "../types/CreateCountryInputType";
import { Context } from "apollo-server-core";

@Resolver(Country)
export class CountryResolver {

  @Query(() => [Country])
  async getCountries(): Promise<Country[]> {
    const allCountries = await CountryService.getAllCountries();
    return allCountries;
  }

  @Query(() => Country)
  getCountryByCode(@Arg("code") code: string): Promise<Country | null> {
    return CountryService.getCountryByCode(code);
  }

  @Query(() => Country)
  getCountryByCodeContinent(@Arg("codeContinent") codeContinent: string): Promise<Country | null> {
    return CountryService.getCountryByCodeContinent(codeContinent);
  }
  
  @Mutation(() => Country)
  async createCountry(@Arg("Country") CountryInput: CreateCountryInputType): Promise<Country> {
    const newCountry = await CountryService.create({
      code: CountryInput.code,
      name: CountryInput.name,
      emoji: CountryInput.emoji,
      codeContinent: CountryInput.codeContinent
    });

    return newCountry;
  }
}
