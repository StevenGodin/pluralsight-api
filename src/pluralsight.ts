import PluralsightOptions, { defaultOptions } from "./PluralsightOptions";
import PluralsightUrls from "./utils/PluralsightUrls";
import { fetchPluralsightCsvAsJson } from "./utils/parsePluralsightCsv";
import { Course, User, CourseUsage, CourseCompletion } from "./models";

// Reference:
//  https://www.pluralsight.com/product/professional-services/white-paper/api
//  https://app.pluralsight.com/plans/api/reports/docs

export default class Pluralsight {
  private options: PluralsightOptions;
  private urls: PluralsightUrls;

  constructor(options: PluralsightOptions = defaultOptions) {
    this.options = {
      ...defaultOptions,
      ...options,
    };
    this.urls = new PluralsightUrls(this.options);
  }

  async getAllCourses(): Promise<Course[]> {
    return await fetchPluralsightCsvAsJson(this.urls.courseCatalogUrl);
  }

  async getAllUsers(): Promise<User[]> {
    return await fetchPluralsightCsvAsJson(this.urls.usersUrl);
  }

  async getAllCourseUsage(): Promise<CourseUsage[]> {
    return await fetchPluralsightCsvAsJson(this.urls.courseUsageUrl);
  }

  async getAllCourseCompletion(): Promise<CourseCompletion[]> {
    return await fetchPluralsightCsvAsJson(this.urls.courseCompletionUrl);
  }
}
