export default interface Course {
  /** Unique identifier for the course */
  CourseId?: string;
  CourseTitle?: string;
  DurationInSeconds?: number;
  ReleaseDate?: Date;
  Description?: string;
  AssessmentStatus?: string;
  IsCourseRetired?: string;
}
