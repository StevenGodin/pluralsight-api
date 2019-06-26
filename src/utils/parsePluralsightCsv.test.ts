import { parsePluralsightCsv } from "./parsePluralsightCsv";

describe("parsePluralsightCsv", () => {
  test("parses Course Completion with CourseId", async () => {
    const data = `UserId,FirstName,LastName,Email,TeamName,Note,IsOnAccount,﻿CourseId,CourseName,FirstViewDate,CompletionDate,CompletionStatus,DurationInSeconds,UsageInSeconds
id-123,First,Last,First_Last@example.com,Team,note,False,course-id,Course Name,2018-01-11,2018-01-12,completed,60,30`;

    expect(await parsePluralsightCsv(data)).toEqual([
      {
        UserId: "id-123",
        FirstName: "First",
        LastName: "Last",
        Email: "First_Last@example.com",
        TeamName: "Team",
        Note: "note",
        IsOnAccount: false,
        CourseId: "course-id",
        "﻿CourseId": "course-id",
        CourseName: "Course Name",
        FirstViewDate: "2018-01-11",
        CompletionDate: "2018-01-12",
        CompletionStatus: "completed",
        DurationInSeconds: 60,
        UsageInSeconds: 30,
      },
    ]);
  });

  test("parses Course Completion without CourseId", async () => {
    const data = `UserId,FirstName,LastName,Email,TeamName,Note,IsOnAccount,CourseName,FirstViewDate,CompletionDate,CompletionStatus,DurationInSeconds,UsageInSeconds
id-123,First,Last,First_Last@example.com,Team,note,False,Course Name,2018-01-11,2018-01-12,completed,60,30`;

    expect(await parsePluralsightCsv(data)).toEqual([
      {
        UserId: "id-123",
        FirstName: "First",
        LastName: "Last",
        Email: "First_Last@example.com",
        TeamName: "Team",
        Note: "note",
        IsOnAccount: false,
        CourseName: "Course Name",
        FirstViewDate: "2018-01-11",
        CompletionDate: "2018-01-12",
        CompletionStatus: "completed",
        DurationInSeconds: 60,
        UsageInSeconds: 30,
      },
    ]);
  });
});
