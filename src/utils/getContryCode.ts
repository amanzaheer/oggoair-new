import countryData from "country-data";

export const getCountryCallingCode = (countryName: string) => {
  const country = countryData.countries.all.find(
    (c) => c.name.toLowerCase() === countryName.toLowerCase()
  );
  return country ? country.countryCallingCodes[0] : null;
};
