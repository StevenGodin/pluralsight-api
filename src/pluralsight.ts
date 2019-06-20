import PluralsightOptions, { defaultOptions } from "./PluralsightOptions";
import PluralsightUrls from "./utils/PluralsightUrls";
import { fetchPluralsightCsvAsJson } from "./utils/parsePluralsightCsv";
import { Course, User, CourseUsage, CourseCompletion } from "./models";

// Reference:
//  https://www.pluralsight.com/product/professional-services/white-paper/api
//  https://app.pluralsight.com/plans/api/reports/docs

type DateRangeFilter = {
  /** start date string in format YYYY-MM-DD (Midnight UTC) */
  startDate?: string;
  /** end date string in format YYYY-MM-DD (Midnight UTC) */
  endDate?: string;
};

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

  /** Returns the latest course catalog. */
  async getCourses(): Promise<Course[]> {
    return await fetchPluralsightCsvAsJson(this.urls.getCourseCatalogUrl());
  }

  /** Returns a list of users on the account. */
  async getUsers(): Promise<User[]> {
    return await fetchPluralsightCsvAsJson(this.urls.getUsersUrl());
  }

  /**
   * Returns course usage for users in the last year or the specified date range.
   * If a user viewed the same course on different days,
   * there will be one row per day.
   */
  async getCourseUsage(filter?: DateRangeFilter): Promise<CourseUsage[]> {
    return await fetchPluralsightCsvAsJson(this.urls.getCourseUsageUrl(filter));
  }

  /**
   * Returns a list of courses that users have completed in the last year or the specified date range.
   * A course is considered complete if the user has viewed all of
   * the clips in the course.
   */
  async getCourseCompletion(filter?: DateRangeFilter): Promise<CourseCompletion[]> {
    return await fetchPluralsightCsvAsJson(this.urls.getCourseCompletionUrl(filter));
  }

  /**
   * Gets a pluralsight report by the report endpoint name.
   *
   * @param reportName pluralsight report endpoint name
   * @param filter key-values of query parameters
   */
  async getReportByName(reportName: string, filter?: { [key: string]: string | undefined }) {
    return await fetchPluralsightCsvAsJson(this.urls.getReportsUrl(reportName, filter));
  }
}
