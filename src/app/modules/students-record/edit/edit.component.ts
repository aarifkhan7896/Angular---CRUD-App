import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { StudentService } from 'src/app/services/student.service';

@Component({
  selector: 'app-edit',
  templateUrl: './edit.component.html',
  styleUrls: ['./edit.component.scss']
})
export class EditComponent implements OnInit {

  myForm:FormGroup;

  id:any;
  constructor(private service : StudentService, private router: ActivatedRoute, private route: Router) { 
    this.router.paramMap.subscribe((e:any)=>{
      console.log(e.params.id);
      this.id=e.params.id;
    },(err)=>{
      console.log(err);
    })
    
    this.myForm = new FormGroup({
      name:new FormControl(),
      email:new FormControl(),
      mobile:new FormControl(),
      address:new FormControl()
    })
  }

  myData:any;
  ngOnInit(): void {
    this.service.getDataById(this.id).subscribe((e)=>{
      console.log(e);
      this.myData=e;
      this.myForm = new FormGroup({
        name:new FormControl(this.myData.name),
        email:new FormControl(this.myData.email),
        mobile:new FormControl(this.myData.mobile),
        address:new FormControl(this.myData.address)
      })
    },(err)=>{
      console.log(err);
    })
  }

  onSubmit(){
    this.service.editData(this.id,this.myForm.value).subscribe((e)=>{
      console.log(e);
      this.route.navigate(['/view']);
    },(err)=>{
      console.log(err);
    })
  }

}
