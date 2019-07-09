import PluralsightUrls, { createQueryString } from "./PluralsightUrls";

describe("createQueryString", () => {
  test("returns 0 length string when no query variables", () => {
    expect(createQueryString()).toBe("");
  });

  test("returns 0 length string when only undefined values in the filter", () => {
    expect(createQueryString({ startDate: undefined, endDate: undefined })).toBe("");
  });

  test("returns query string with 1 key-value pair", () => {
    expect(createQueryString({ startDate: "2019-01-01" })).toBe("startDate=2019-01-01");
  });

  test("returns multiple key-value pairs separated by &", () => {
    expect(createQueryString({ startDate: "2019-01-01", endDate: "2019-02-01", hello: "true" })).toBe(
      "startDate=2019-01-01&endDate=2019-02-01&hello=true",
    );
  });
});

describe("PluralsightUrls", () => {
  const planId = "plan";
  const apiToken = "token";
  const reportsApiUrl = "https://app.pluralsight.com/api";
  const coursesApiUrl = "https://api.pluralsight.com";
  let urls: PluralsightUrls;
  beforeEach(() => {
    urls = new PluralsightUrls({
      planId,
      apiToken,
      reportsApiUrl,
      coursesApiUrl,
    });
  });

  test("gets reports url with endpoint name", () => {
    expect(urls.getReportsUrl("something")).toBe(`${reportsApiUrl}/something/${planId}?token=${apiToken}`);
  });

  test("get reports url throws when missing reportsApiUrl", () => {
    const errorUrls = new PluralsightUrls({});
    expect(() => {
      errorUrls.getReportsUrl("something");
    }).toThrowError("A reportsApiUrl is required");
  });

  test("get reports url throws when missing planId or apiToken", () => {
    const errorUrls = new PluralsightUrls({ reportsApiUrl });
    expect(() => {
      errorUrls.getReportsUrl("something");
    }).toThrowError("A planId and apiToken are required");
  });

  test("gets Course Usage url", () => {
    expect(urls.getCourseUsageUrl()).toBe(`${reportsApiUrl}/course-usage/${planId}?token=${apiToken}`);
  });

  test("gets Course Usage url with query", () => {
    expect(urls.getCourseUsageUrl({ startDate: "2019-01-01", endDate: "2019-02-01" })).toBe(
      `${reportsApiUrl}/course-usage/${planId}?token=${apiToken}&startDate=2019-01-01&endDate=2019-02-01`,
    );
  });

  test("gets Course Completion url", () => {
    expect(urls.getCourseCompletionUrl()).toBe(`${reportsApiUrl}/course-completion/${planId}?token=${apiToken}`);
  });

  test("gets Course Completion url with query", () => {
    expect(urls.getCourseCompletionUrl({ startDate: "2019-01-01", endDate: "2019-02-01" })).toBe(
      `${reportsApiUrl}/course-completion/${planId}?token=${apiToken}&startDate=2019-01-01&endDate=2019-02-01`,
    );
  });

  test("gets Users url", () => {
    expect(urls.getUsersUrl()).toBe(`${reportsApiUrl}/users/${planId}?token=${apiToken}`);
  });

  test("gets Course Catalog url", () => {
    expect(urls.getCourseCatalogUrl()).toBe(`${coursesApiUrl}/courses`);
  });

  test("gets Course Catalog url throws when coursesApiUrl is not set", () => {
    const errorUrls = new PluralsightUrls({});
    expect(() => {
      errorUrls.getCourseCatalogUrl();
    }).toThrowError("A coursesApiUrl is required");
  });
});
