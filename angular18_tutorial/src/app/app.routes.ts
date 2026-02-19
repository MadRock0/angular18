import { Routes } from '@angular/router';
import { AttributeDirectiveComponent } from './components/directive/attribute-directive/attribute-directive.component';
import { SturcturalDirectiveComponent } from './components/directive/sturctural-directive/sturctural-directive.component';
import { AddEmployeeComponent } from './components/add-employee/add-employee.component';
import { DataBindingComponent } from './components/data-binding/data-binding.component';
import { EmployeeyeeListComponent } from './components/employeeyee-list/employeeyee-list.component';

export const routes: Routes = [
{path: 'attribute-directive',component: AttributeDirectiveComponent},
{path: 'structural-directive', component: SturcturalDirectiveComponent},
{path: 'add-emp', component: AddEmployeeComponent},
{path: 'data-binding', component: DataBindingComponent},
{path: 'employee-list', component: EmployeeyeeListComponent},

];
