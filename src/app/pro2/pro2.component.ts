import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-pro2',
  templateUrl: './pro2.component.html',
  styleUrls: ['./pro2.component.css']
})
export class Pro2Component implements OnInit {
  constructor(
    private router: Router,
    ){}
  
  ngOnInit(): void {
  }
  check:boolean=false
  toggle(){
    if(this.check==false){
      this.check=true
    }
    else{
      this.check=false
    }
  }
  view(){
    this.router.navigate(['pro1'])
  }

  
  
  
  }





  