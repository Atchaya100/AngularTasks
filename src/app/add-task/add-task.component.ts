import { Component } from '@angular/core';
import { TaskService } from '../tasks/tasks.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-add-task',
  templateUrl: './add-task.component.html',
  styleUrls: ['./add-task.component.css']
})
export class AddTaskComponent {
date!:string
task!:string
description!:string
status!:string
id=0
stat=["Finished","Created","Ongoing"]
constructor( private service:TaskService,private router:Router,private route:ActivatedRoute){}
ngOnInit(){
  

  this.service.dfind(this.route.snapshot.params['id']).subscribe((data:any)=>{
  
    if(this.route.snapshot.params['id']!=undefined){
    this.date=data.date
    this.task=data.task
    this.description=data.description
    this.status=data.status
    this.id=data.id
    }
 })
 
}
add(formValue:any){
  //console.log(formValue)
  if(this.id==0){
    const did=Number(localStorage.getItem('id'))
  this.service.create(formValue,did).subscribe(
    (data:any)=>this.router.navigate(['/tasks'])
  )
  }
  if(this.id!=0){
   // console.log(this.id,"up")
    this.service.update(this.id,formValue).subscribe(
      (data:any)=>this.router.navigate(['/tasks'])
    )
  }
}
}
