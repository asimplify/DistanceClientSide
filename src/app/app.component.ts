import { Component } from '@angular/core';
import {HttpClient, HttpResponse ,HttpHeaders} from '@angular/common/http';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Levenshtein';
  public errorList:any;
  public succesfull:any;
  
  constructor(private http:HttpClient){}
  header = new HttpHeaders().set("Authorization", 'Bearer ' + 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1bmlxdWVfbmFtZSI6IjEiLCJuYmYiOjE2MjI3MDYzMTIsImV4cCI6MTYyMzMxMTExMiwiaWF0IjoxNjIyNzA2MzEyfQ.QjCEvthVk7HHRppZh6BOPiKD_uts7OqwZbPN0mYeuys');
  
  onSubmit(data: any){
    this.http.post('http://localhost:4766/api/getdistance',data,{headers:this.header})
    .subscribe(
      data => {
        this.succesfull = data
        this.errorList='';
      },
      error =>{
        this.errorList= error.error.errors;
        this.succesfull=''
      }
      
    );
}
}
