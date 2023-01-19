import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-self-study',
  templateUrl: './self-study.component.html',
  styleUrls: ['./self-study.component.css']
})
export class SelfStudyComponent {
  constructor(private currentRoute:ActivatedRoute) {}

  ngOnInit() : void {
    this.currentRoute.params.subscribe((params) => {
      console.log(params)
    })
    this.currentRoute.url.subscribe((url)=>{
      console.log(url)
    })
    this.currentRoute.queryParams.subscribe((queryParams)=>{
      console.log(queryParams)
    })
    }
  }
  
  

