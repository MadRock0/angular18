import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatSelectModule } from '@angular/material/select';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';

@Component({
  selector: 'app-sturctural-directive',
  standalone: true,
  imports: [CommonModule,FormsModule, MatCardModule,
    MatButtonModule,
    MatFormFieldModule,
    MatInputModule,
    MatSelectModule,
    MatCheckboxModule],
  templateUrl: './sturctural-directive.component.html',
  styleUrl: './sturctural-directive.component.css'
})
export class SturcturalDirectiveComponent {

  div1hide: boolean = false;
  div2hide: boolean = false;
  num1: string = '';
  num2: string = '';
  isActive: boolean = false;
  cityArray: string [] = ['pune', 'mumbai', 'nashik', 'nagpur', 'solapur'];
  studentList: any[] = [
    {studId: 1, name: 'sachin', age: 30, city: 'pune', isActive: false},
    {studId: 2, name: 'rahul', age: 31, city: 'mumbai', isActive: true},
    {studId: 3, name: 'rajesh', age: 32, city: 'nashik', isActive: false},
    {studId: 4, name: 'ramesh', age: 33, city: 'nagpur', isActive: true},
    {studId: 5, name: 'suresh', age: 34, city: 'solapur', isActive: false}
  ]
  

  hide() { this.div1hide = false; }
  show() { this.div1hide = true; }
  toggle() { this.div2hide = !this.div2hide; }
}
