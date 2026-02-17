import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { AddEmployeeComponent } from "./components/add-employee/add-employee.component";
import { EmployeeyeeListComponent } from './components/employeeyee-list/employeeyee-list.component';
import { DataBindingComponent } from './components/data-binding/data-binding.component';
import { SturcturalDirectiveComponent } from './components/directive/sturctural-directive/sturctural-directive.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet,DataBindingComponent,SturcturalDirectiveComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'angular18_tutorial';
}
