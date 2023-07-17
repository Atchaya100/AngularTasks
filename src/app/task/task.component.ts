import { Component } from '@angular/core';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { TaskService } from '../tasks/tasks.service';

@Component({
  selector: 'app-task',
  templateUrl: './task.component.html',
  styleUrls: ['./task.component.css']
})
export class TaskComponent {
  constructor(private route: ActivatedRoute,private router: Router,private service:TaskService){
  }
  id=0
  date!:string
  task!:string
 description!:string
 status!:string
  ngOnInit(): void {
   
  this.route.paramMap.subscribe((params: Params) => {
    this.id= params['get']('id');
   // console.log(this.id)
});
this.service.dfind(this.id).subscribe(
  (data:any)=>{
        // console.log(data,this.id)
         this.date=data.date
         this.task=data.task
         this.description=data.description
         this.status=data.status
         this.id=data.id

         //console.log(data)

  }
)

}
delete(){
  this.service.delete(this.id).subscribe(
   ()=>this.router.navigate(['/tasks'])
  )
}
back(){
  this.router.navigate(['/tasks'])
}
}
