import { Component, OnInit } from '@angular/core';
import { StudentService } from 'src/app/services/student.service';

@Component({
  selector: 'app-view',
  templateUrl: './view.component.html',
  styleUrls: ['./view.component.scss']
})
export class ViewComponent implements OnInit {

  constructor(private service: StudentService) { }

  render(){
    this.service.getData().subscribe((e)=>{
      console.log(e);
      this.data=e;
    },(err)=>{
      console.log(err);
    })
  }

  data:any;
  ngOnInit(): void {
    this.render();
  }
  deleteFun(id:any){
    this.service.deleteData(id).subscribe((e)=>{
      console.log(e);
      this.render();
    },(err)=>{
      console.log(err);
    })
  }

}
