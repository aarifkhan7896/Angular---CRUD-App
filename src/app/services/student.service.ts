import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';


@Injectable({
  providedIn: 'root'
})
export class StudentService {

  constructor(private http:HttpClient) {
   }
   getData(){
    return this.http.get("http://localhost:3000/student");
   }
   getDataById(id:any){
    return this.http.get("http://localhost:3000/student/"+id);
   }
   postData(data:any){
    return this.http.post("http://localhost:3000/student",data);
   }
   deleteData(id:any){
    return this.http.delete("http://localhost:3000/student/"+id)
   }
   editData(id:any,data:any){
    return this.http.put("http://localhost:3000/student/"+id,data)
   }
}
