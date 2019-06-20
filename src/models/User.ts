export default interface User {
  /** Unique identifer for the user */
  UserId?: string;

  FirstName?: string;

  LastName?: string;

  Email?: string;

  /** A user's assigned team, if applicable (can be empty) */
  TeamName?: string;

  /** A custom note (can be empty) */
  Note?: string;

  /** Date that a user joined the account (can be empty if the user was added through a legacy bulk upload feature) */
  StartDate?: string;
}
