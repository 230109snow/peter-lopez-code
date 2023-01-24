import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {
  joke! : string;
  category! : string;

  async handleClick() {
    let res = await fetch(`https://api.chucknorris.io/jokes/random?category=${this.category}`);
    let data = await res.json();
    this.joke = data.value;
  
  }

  handleSelection(e : Event) : void {
    
    this.category = (<HTMLInputElement>e.target).value;
  }
}
