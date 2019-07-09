# pluralsight-api

[![npm @latest](https://img.shields.io/npm/v/pluralsight.svg)](https://www.npmjs.com/package/pluralsight)
[![npm downloads](https://img.shields.io/npm/dt/pluralsight.svg)](https://www.npmjs.com/package/pluralsight)
[![dependencies Status](https://david-dm.org/StevenGodin/pluralsight-api/status.svg)](https://david-dm.org/StevenGodin/pluralsight-api)
[![devDependencies Status](https://david-dm.org/StevenGodin/pluralsight-api/dev-status.svg)](https://david-dm.org/StevenGodin/pluralsight-api?type=dev)
[![Code Style: Prettier](https://img.shields.io/badge/code%20style-prettier-ff69b4.svg)](https://img.shields.io/badge/code%20style-prettier-ff69b4.svg)
[![Install Size](https://packagephobia.now.sh/badge?p=pluralsight)](https://packagephobia.now.sh/result?p=pluralsight)
[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://github.com/StevenGodin/pluralsight-api/blob/master/LICENSE)
[![Build Status](https://img.shields.io/travis/StevenGodin/pluralsight-api/master.svg)](https://travis-ci.org/StevenGodin/pluralsight-api)
[![Greenkeeper badge](https://badges.greenkeeper.io/StevenGodin/pluralsight-api.svg)](https://greenkeeper.io/)

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
  apiToken: "<your-api-token>",
});

api
  .getCourseCompletion({
    startDate: "2018-01-01",
    endDate: "2018-12-31",
  })
  .then(records => {
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
