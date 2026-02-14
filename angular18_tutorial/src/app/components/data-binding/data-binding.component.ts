import { Component, signal } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-data-binding',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './data-binding.component.html',
  styleUrl: './data-binding.component.css'
})
export class DataBindingComponent {

  //data type string number, boolean, date
  
  courseName: string = "Angular 18";
  inputType = 'checkbox';
  rollNo: number = 101;
  isIndian: boolean = true;
  currentDate: Date = new Date();
  myclasName: string = "bg-primary";
  firstName = signal("Nilesh");
  constructor(){

  }

  showAlert(message:string){
    alert(message);
  }

  changeCourseName()
  {
    this.courseName = "Angular 18 Updated";
    this.firstName.set("Nilesh Updated");
  }
}
