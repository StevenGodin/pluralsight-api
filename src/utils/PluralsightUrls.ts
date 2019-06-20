import PluralsightOptions from "../PluralsightOptions";

const createQueryString = (query?: { [key: string]: string | undefined }) => {
  if (!query) return undefined;

  return Object.keys(query)
    .filter(key => query[key] !== undefined)
    .map(key => `${key}=${query[key]}`)
    .join("&");
};

export default class PluralsightUrls {
  constructor(private options: PluralsightOptions) {}

  getReportsUrl(endpointName: string, filter?: { [key: string]: string | undefined }) {
    const { planId, apiToken, reportsApiUrl } = this.options;
    if (!reportsApiUrl) throw "A reportsApiUrl is required";
    if (!planId || !apiToken) throw "A planId and apiToken are required";
    const queryString = createQueryString(filter);
    return `${reportsApiUrl}/${endpointName}/${planId}?token=${apiToken}${
      queryString ? `&${queryString}` : ""
    }`;
  }

  getCourseUsageUrl(query?: { [key: string]: string | undefined }) {
    return this.getReportsUrl("course-usage", query);
  }

  getCourseCompletionUrl(query?: { [key: string]: string | undefined }) {
    return this.getReportsUrl("course-completion", query);
  }

  getUsersUrl() {
    return this.getReportsUrl("users");
  }

  getCourseCatalogUrl() {
    const { coursesApiUrl } = this.options;
    if (!coursesApiUrl) throw "A coursesApiUrl is required";
    return `${coursesApiUrl}/courses`;
  }
}
