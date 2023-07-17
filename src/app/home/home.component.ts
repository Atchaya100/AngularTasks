import { Component } from '@angular/core';
import { AccountService } from '../account/account.service';
import { HttpHeaders } from '@angular/common/http';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {
  constructor(private service:AccountService){}
  ngOnInit(){
   
 
    
    
 
    }
  }

