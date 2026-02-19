import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { MatProgressBarModule } from '@angular/material/progress-bar';
import { RouterLink } from '@angular/router';
@Component({
  selector: 'app-attribute-directive',
  standalone: true,
  imports: [CommonModule, FormsModule, MatProgressBarModule,RouterLink],
  templateUrl: './attribute-directive.component.html',
  styleUrl: './attribute-directive.component.css'
})
export class AttributeDirectiveComponent {

  div1Bgcolor: string = '';
  istoggled: boolean = false;
  num1: string = '';
  num2: string = '';

studentList: any[] = [
    {studId: 1, gender:'male', totleMarks:23, name: 'sachin', age: 30, city: 'pune', isActive: false},
    {studId: 2, gender:'male', totleMarks:53, name: 'rahul', age: 31, city: 'mumbai', isActive: true},
    {studId: 3, gender:'male', totleMarks:27, name: 'rajesh', age: 32, city: 'nashik', isActive: false},
    {studId: 4, gender:'male', totleMarks:93, name: 'ramesh', age: 33, city: 'nagpur', isActive: true},
    {studId: 5, gender:'male', totleMarks:83, name: 'suresh', age: 34, city: 'solapur', isActive: false}
  ]

  addRed() {
    this.div1Bgcolor = 'box--danger';
  }

  addBlue() {
    this.div1Bgcolor = 'box--primary';
  }

  toggleddiv2(){
    this.istoggled = !this.istoggled;
  }
}
