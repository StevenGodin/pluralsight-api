# pluralsight-api

Pluralsight API NodeJS library with full support of all the Pluralsight API services.

## Installation

```
npm install pluralsight
```

## Usage

### Without an API token

```js
const Pluralsight = require("pluralsight").default;

const api = new Pluralsight();

api.getAllCourses().then(courses => {
  console.log(courses);
});
```

### With an API token

```js
const Pluralsight = require("pluralsight").default;

const api = new Pluralsight({
  planId: "<your-plan-id>",
  apiToken: "<your-api-token>"
});

api.getAllUsers().then(users => {
  console.log(users);
});
```

## Available Methods

`getAllCourses()` - Returns the latest course catalog.

`getAllUsers()` - Returns a list of users on the account.

`getAllCourseUsage()` - Returns course usage for users in the last year. If a user viewed the same course on different days, there will be one row per day.

`getAllCourseCompletion()` - Returns a list of courses that users have completed in the last year. A course is considered complete if the user has viewed all of the clips in the course.

## References

https://www.pluralsight.com/product/professional-services/white-paper/api
https://app.pluralsight.com/plans/api/reports/docs