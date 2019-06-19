import PluralsightOptions from "../PluralsightOptions";

export default class PluralsightUrls {
  constructor(private options: PluralsightOptions) {}

  getReportsUrl(endpointName: string) {
    const { planId, apiToken, reportsApiUrl } = this.options;
    if (!reportsApiUrl) throw "A reportsApiUrl is required";
    if (!planId || !apiToken) throw "A planId and apiToken are required";
    return `${reportsApiUrl}/${endpointName}/${planId}?token=${apiToken}`;
  }

  get courseUsageUrl() {
    return this.getReportsUrl("course-usage");
  }

  get usersUrl() {
    return this.getReportsUrl("users");
  }

  get courseCompletionUrl() {
    return this.getReportsUrl("course-completion");
  }

  get courseCatalogUrl() {
    const { coursesApiUrl } = this.options;
    if (!coursesApiUrl) throw "A coursesApiUrl is required";
    return `${coursesApiUrl}/courses`;
  }
}
