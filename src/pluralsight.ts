import * as neatCsv from "neat-csv";
import axios from "axios";

export const Hello = (name: string) => `Hello ${name}`;

const url = "http://api.pluralsight.com/api-v0.9/courses";

export const getCourses = async () => {
  const response = await axios.get(url);
  const data: string = response.data;
  const parsed = await parsePluralsightCsv(data);
  console.log(parsed);
  return parsed;
};

export const parsePluralsightCsv = async (csvData: string) => {
  const parsed = await neatCsv(csvData, {
    mapValues: ({ header, value }) => {
      switch (header) {
        default:
          return value;
      }
    }
  });
  return parsed;
};

getCourses();
