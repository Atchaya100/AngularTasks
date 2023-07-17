import { HttpClient, HttpHeaders } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Tasks } from "./tasks.model";
@Injectable({
    providedIn:'root'
})
export class TaskService{

   private taskUrl="http://localhost:8091/api";

   // private taskUrl="https://tasks-oape.onrender.com/api";
    auth_token = localStorage.getItem('token');
    private httpOptions={
    
        headers: new HttpHeaders({
           
            'Content-Type':'application/json',
            'Authorization': `Bearer ${this.auth_token}`
        })
    }
     
id=0;
constructor(private _http: HttpClient){}
create(formValue:any,id:Number){
    const l=`${this.taskUrl}/createTask/${id}`;
    //console.log(l)
    let p:Tasks={
        id: 0,
        task: formValue.task,
        description:formValue.description,
        status:formValue.status,
        date: formValue.date,
        login_id: Number(localStorage.getItem('id')|| null)

    }
  //  console.log("created",id)
    return this._http.post(l,p,this.httpOptions);
    
   
}
update(id:number,formValue:any){
    const l=`${this.taskUrl}/updated/${id}`;
    //console.log(l)
    let p:Tasks={
        id: id,
        task: formValue.task,
        description:formValue.description,
        status:formValue.status,
        date: formValue.date,
        login_id: Number(localStorage.getItem('id')|| null)
    }
   // console.log("updated",id)
    return this._http.put(l,p,this.httpOptions);
    
   
}
dfind(id:number){
    const l=`${this.taskUrl}/find/${id}`;
    return this._http.get(l,this.httpOptions);
}
get(id:number){
    const l=`${this.taskUrl}/viewAll/${id}`;
    return this._http.get(l,this.httpOptions);
}
delete(id:number){
    const l=`${this.taskUrl}/deleted/${id}`;
    return this._http.delete(l,this.httpOptions);
}
}