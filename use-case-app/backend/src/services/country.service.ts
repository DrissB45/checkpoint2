import { Country } from "../entities/country";

export async function create(adsData: {
  code: string, 
  name: string,
  emoji: string,
  codeContinent: string
}): Promise<Country> {
  const country = new Country();

  return country.save();
}

export async function getAllCountries(): Promise<Country[]> {
  const allCountries = await Country.find();
  return allCountries;
}

export async function getCountryByCode(code: string): Promise<Country | null> {
  return Country.findOne({
    where: { code: code },
  });
}

export async function getCountryByCodeContinent(codeContinent: string): Promise<Country | null> {
  return Country.findOne({
    where: { codeContinent: codeContinent },
  });
}


