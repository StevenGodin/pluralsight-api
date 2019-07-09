import PluralsightOptions from "../PluralsightOptions";

export const createQueryString = (query?: { [key: string]: string | undefined }) => {
  if (!query) {
    return "";
  }

  return Object.keys(query)
    .filter(key => query[key] !== undefined)
    .map(key => `${key}=${query[key]}`)
    .join("&");
};

export default class PluralsightUrls {
  constructor(private options: PluralsightOptions) {}

  public getReportsUrl(endpointName: string, filter?: { [key: string]: string | undefined }) {
    const { planId, apiToken, reportsApiUrl } = this.options;
    if (!reportsApiUrl) { throw new Error("A reportsApiUrl is required"); }
    if (!planId || !apiToken) { throw new Error("A planId and apiToken are required"); }
    const queryString = createQueryString(filter);
    return `${reportsApiUrl}/${endpointName}/${planId}?token=${apiToken}${queryString ? `&${queryString}` : ""}`;
  }

  public getCourseUsageUrl(query?: { [key: string]: string | undefined }) {
    return this.getReportsUrl("course-usage", query);
  }

  public getCourseCompletionUrl(query?: { [key: string]: string | undefined }) {
    return this.getReportsUrl("course-completion", query);
  }

  public getUsersUrl() {
    return this.getReportsUrl("users");
  }

  public getCourseCatalogUrl() {
    const { coursesApiUrl } = this.options;
    if (!coursesApiUrl) { throw new Error("A coursesApiUrl is required"); }
    return `${coursesApiUrl}/courses`;
  }
}
