import { Component, inject } from '@angular/core';
import { Course, CourseService } from '../../services/course.service';
import { MatTableModule } from '@angular/material/table';
import { MatCardModule } from '@angular/material/card';
import { MatIconModule } from '@angular/material/icon';
import { RouterLink } from '@angular/router';


@Component({
  selector: 'app-courses-table',
  imports: [MatCardModule, MatIconModule, RouterLink, MatTableModule],
  templateUrl: './courses-table.component.html',
  styleUrl: './courses-table.component.css'
})
export class CoursesTableComponent {
  private service: CourseService =inject(CourseService);

  courses: Course[] = [];
  displayedColumns: string[] = ['name', 'description', 'level', 'duration', 'price'];

  ngOnInit(){
    this.service.getAllCourses().subscribe({
      next: (data) => this.courses = data,
      error: (err) => console.error('Error al obtener cursos:', err)
    });
  }

}
