import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
interface Employee{
  id:number,
  employee_name:string,
  employee_salary:number,
  employee_age:number,
  profile_image:string
}
@Component({
  selector: 'app-student',
  templateUrl: './student.component.html',
  styleUrls: ['./student.component.css']
})
export class StudentComponent implements OnInit {
  url:string ="https://jsonplaceholder.typicode.com/albums";
  constructor(private _http:HttpClient){}
employees:Employee[]= [ ]
 ;
  ngOnInit(): void {
    this._http.get<Employee[]>(this.url).subscribe(res=>{
     //this.employees.push(res)
      //console.log(res.data)
      this.employees = res;
    //this.response = JSON.stringify(res);
      //this.employees = JSON.parse(response)
      //console.log( this.students)
    })
  }
}
