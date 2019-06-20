import * as neatCsv from "neat-csv";
import fetch from "cross-fetch";

export const fetchPluralsightCsvAsJson = async (url: string) => {
  const response = await fetch(url);
  const csvData = await response.text();
  return await parsePluralsightCsv(csvData);
};

export const parsePluralsightCsv = async (csvData: string) => {
  const parsedData = await neatCsv(csvData, {
    mapValues: ({ header, value }) => {
      switch (header) {
        case "IsOnAccount":
          return value.toLowerCase().trim() == "true";
        case "DurationInSeconds":
        case "UsageInSeconds":
          return Number(value);
        default:
          return value;
      }
    },
  });
  return parsedData.map(d => ({ ...d }));
};
