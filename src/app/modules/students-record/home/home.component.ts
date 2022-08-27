import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { StudentService } from 'src/app/services/student.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  myForm:FormGroup = new FormGroup({
    name:new FormControl(),
    email:new FormControl(),
    mobile:new FormControl(),
    address:new FormControl()
  })

  constructor(private service : StudentService) { }

  ngOnInit(): void {

  }

  onSubmit(){
   this.service.postData(this.myForm.value).subscribe((e)=>{
    console.log(e);
    this.myForm.reset();
   },(err)=>{
    console.log(err);
   })
  }

}
