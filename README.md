# pluralsight-api

Pluralsight API NodeJS library with full support of all the Pluralsight API services.

## Installation

```
npm install pluralsight
```

## Usage

### Without an API token

```js
const { Pluralsight } = require("pluralsight");

const api = new Pluralsight();

api.getCourses().then(courses => {
  console.log(courses);
});
```

### With an API token

```js
const { Pluralsight } = require("pluralsight");

const api = new Pluralsight({
  planId: "<your-plan-id>",
  apiToken: "<your-api-token>"
});

api.getCourseCompletion({
  startDate: "2018-01-01",
  endDate: "2018-12-31"
}).then(records => {
  console.log(records);
});
```

## Available Methods

- `getCourses()` - Returns the latest course catalog.

- `getUsers()` - Returns a list of users on the account.

- `getCourseUsage({startDate?: string; endDate?: string;})` - Returns course usage for users in the last year or the specified date range. If a user viewed the same course on different days, there will be one row per day.

- `getCourseCompletion({startDate?: string; endDate?: string;})` - Returns a list of courses that users have completed in the last year or the specified date range. A course is considered complete if the user has viewed all of the clips in the course.

## References

https://www.pluralsight.com/product/professional-services/white-paper/api
https://app.pluralsight.com/plans/api/reports/docs