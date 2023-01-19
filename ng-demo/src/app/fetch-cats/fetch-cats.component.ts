import { Component, OnDestroy, OnInit } from '@angular/core';
import {apikey} from 'src/api-key';
import {HttpClient} from '@angular/common/http'
import { CatApiService } from '../cat-api.service';
import { voteDTO } from '../models/voteDTO';
import { Router } from '@angular/router';

@Component({
  selector: 'app-fetch-cats',
  templateUrl: './fetch-cats.component.html',
  styleUrls: ['./fetch-cats.component.css']
})
export class FetchCatsComponent implements OnInit, OnDestroy {
  //Dependency injection
  //Instead of the component class iteself instantiating the
  //HttpClient class, we ask the framework to inject an instance of HttpClient
  // its a design pattern for loose coupling
  // By setting HttpClient private, we only allow this class to have access to it
  //If I were to set it to public, the html page will also have access to that.
  constructor(private catapi : CatApiService, private router: Router) {}

  numCats : number = 0;
  catpics : any[] = [];
  now : number | Date = Date.now();
  validation = {
    required: true,
    min : 1,
    max : 25
  }


  
vote(args : voteDTO) : void {
  this.catapi.vote(args).subscribe({
    next: (res) => {
      console.log(res)
    },
    error: (err) => {
      console.error(err)
    }
  })
}
incrementCats() : void {
  this.numCats++;
}

reset() : void {
  this.numCats = 0;
}

getCats(form : any) : void {
  if(form.valid) {
  // send an http call to fetch cats
    this.catapi.getCats(this.numCats).subscribe((data : any) => {
      this.catpics = data;
    })
  }
}

  // A lifecycle hook
  // when this component mounts/renders for the first time, run whatever code is in here
  // Great place to run any setup code you may have for this component
  ngOnInit() : void {
    console.log(apikey);
  }

  //Runs on unmount
  //Great place to do any clean ups
  ngOnDestroy(): void {
      
  }

  backToHome() : void {
    // cats/search/1
    // this.router.navigate(['cats', 'search', 1])
    this.router.navigate(['']);

  

  }

}
