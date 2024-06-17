import { Component, EventEmitter, Input, OnInit, Output } from "@angular/core";
import { Course } from "../model/course";

@Component({
  selector: "course-card",
  // standalone: true,
  // imports: [],
  templateUrl: "./course-card.component.html",
  styleUrl: "./course-card.component.css",
})
export class CourseCardComponent {
  @Input({
    required: true,
  })
  course: Course;

  // @Input({
  //   required:true
  // })
  // count:number;

  // @Input({
  //   required:true
  // })
  // index:number

  @Output("courseSelected")
  courseEmitter = new EventEmitter<Course>();

  onCourseViewed() {
    this.courseEmitter.emit(this.course);
  }

  getCardClass() {
    return {
      beginner: this.course.category === "BEGINNER",
      otherClass: false,
    };

    // ng Class can have configuration object like this or array of strings or single string also
  }
}
