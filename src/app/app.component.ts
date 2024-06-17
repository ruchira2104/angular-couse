import { AfterViewInit, Component, ContentChild, ElementRef, QueryList, ViewChild, ViewChildren, viewChild } from '@angular/core';
import {COURSES} from '../db-data';
import { Course } from './model/course';
import { CourseCardComponent } from './course-card/course-card.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements AfterViewInit{
  
  courses = COURSES

  // we can also refer to the template using template ref

  //if we want to query deeper into the component hierarchy we can use viewChildren decorative
  // @ViewChild('cardRef')
  @ViewChildren(CourseCardComponent)
  // @ViewChild(CourseCardComponent)
  card : QueryList<CourseCardComponent>;


  ngAfterViewInit() {
    console.log(this.card.last);
  }
  onCourseSelected(course:Course) {
    // console.log("called")
    // console.log(course);
    
  }
}
