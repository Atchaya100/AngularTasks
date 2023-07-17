import { Component, ViewChild } from '@angular/core';
import { TaskService } from './tasks.service';
import { Tasks } from './tasks.model';
import { MatTableDataSource } from '@angular/material/table';
import { MatSort } from '@angular/material/sort';
import * as _ from 'lodash';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-tasks',
  templateUrl: './tasks.component.html',
  styleUrls: ['./tasks.component.css']
})
export class TasksComponent {
    constructor(private s:TaskService,private route: ActivatedRoute,private router: Router){}
    p!:Tasks[]
    status!:string
    id=0
    name!:string
    displayedColumns=['task','description','status','date']
    dataSource!:MatTableDataSource<any>
    data:any=[]
    @ViewChild(MatSort) matSort!:MatSort
    ngOnInit(){
      this.name=String(localStorage.getItem('name') || null)
      this.id=Number(localStorage.getItem('id') || null)
      this.s.id=Number(localStorage.getItem('id') || null)
      //console.log(this.s.id)
      this.s.get(this.s.id).subscribe(
      
        {
          next:(data:any)=>{
            this.dataSource=new MatTableDataSource(data)
            this.dataSource.sort=this.matSort
            this.p=data
            this.data=data
            //console.log(data)
          }
        }
      )
    }
    onChange($event:any){
      var filteredData=_.filter(this.data,(item)=>{
        return item.status.toLowerCase()==$event.value.toLowerCase();
      })
      this.dataSource=new MatTableDataSource(filteredData)
      this.dataSource.sort=this.matSort
      if($event.value=="none"){
        this.dataSource=new MatTableDataSource(this.data)
        this.dataSource.sort=this.matSort
      }
    }
    logout(){
      localStorage.removeItem("token")
      localStorage.removeItem("id")
      localStorage.removeItem("mail")
      localStorage.removeItem("name")
      this.router.navigate(['/'])
    }
}
