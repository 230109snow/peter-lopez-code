import { Injectable } from '@angular/core';
import { Hero } from './hero';
import { HEROES } from './mock-heroes';
import { Observable, of} from 'rxjs';
import { MessageService } from './message.service';
import { HttpClient, HttpHeaders } from '@angular/common/http';


@Injectable({
  providedIn: 'root'
})
export class HeroService {

  constructor(private http : HttpClient, private messageService: MessageService) { }
  private heroesUrl = 'api/heroes';
  getHeroes() : Observable<Hero[]> {
    return this.http.get<Hero[]>(this.heroesUrl)
  }

  private log(message: string) {
    this.messageService.add(`HeroService: ${message}`);
  }

}
