export default interface CourseUsage {
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

  /** Date that the user viewed the course, in format YYYY-MM-DD (Midnight UTC) */
  ViewDate?: string;

  UsageInSeconds?: number;
}
