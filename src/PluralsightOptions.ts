export default interface PluralsightOptions {
  reportsApiUrl?: string;
  coursesApiUrl?: string;
  planId?: string;
  apiToken?: string;
}

export const defaultOptions: PluralsightOptions = {
  reportsApiUrl: "https://app.pluralsight.com/plans/api/reports/v1",
  coursesApiUrl: "http://api.pluralsight.com/api-v0.9",
};
