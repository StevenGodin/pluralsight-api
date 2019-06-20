export default interface Course {
  /** Unique identifier for the course */
  CourseId?: string;
  CourseTitle?: string;
  DurationInSeconds?: number;
  ReleaseDate?: string;
  Description?: string;
  AssessmentStatus?: string;
  IsCourseRetired?: string;
}
