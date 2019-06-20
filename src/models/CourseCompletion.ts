export default interface CourseCompletion {
  /** Unique identifer for the user */
  UserId?: string;

  FirstName?: string;

  LastName?: string;

  Email?: string;

  /** A user's assigned team, if applicable (can be empty) */
  TeamName?: string;

  /** A custom note (can be empty) */
  Note?: string;

  /** true if the user is still a member of the account, false if they have been removed */
  IsOnAccount?: boolean;

  /** Unique identifier for the course */
  CourseId?: string;

  CourseName?: string;

  /** Date that the user first viewed the course (Midnight UTC) */
  FirstViewDate?: string;

  /** Date that the user completed the course (Midnight UTC) */
  CompletionDate?: string;

  /** `completed` for each row */
  CompletionStatus?: string;
}
