# pluralsight-api

Pluralsight API NodeJS library with full support of all the Pluralsight API services.

## Installation

```
npm install pluralsight
```

## Usage

### Without an API token

```js
const Pluralsight = require("pluralsight");

const api = new Pluralsight();
api.getAllCourses().then(courses => {
  console.log(courses);
});
```

### With an API token

```js
const Pluralsight = require("pluralsight");

const api = new Pluralsight({
  planId: "<your-plan-id>",
  apiToken: "<your-api-token>"
});

api.getAllUsers().then(users => {
  console.log(users);
});
```