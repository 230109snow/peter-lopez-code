import { Injectable, ViewContainerRef } from '@angular/core';
import { HttpClient} from '@angular/common/http';
import { Observable } from 'rxjs';
import { apikey, apiroot } from 'src/api-key';
import { voteDTO } from 'src/models/voteDTO';
import { getLocaleFirstDayOfWeek } from '@angular/common';
import { identifierName } from '@angular/compiler';

interface CatObj {
  id : string;
  url : string;
}

@Injectable({
  providedIn: 'root'
})
export class CatApiService {

  constructor(private http: HttpClient) {}
    
    vote(args : voteDTO) : Observable<CatObj> {
      const {id, amount} = args;

      const payload = {"image_id" : id, "value": amount}

      return this.http.post(
        `${apiroot}/votes`,
        payload,
        {
          headers: {
            'x-api-key' : apikey
          }
        }) as Observable<CatObj>;
    }

    getCats(numCats : number) : Observable<any> {
      const url = `${apiroot}/images/search?limit=${numCats}&
      has_breeds=1`
      return this.http.get(url, {
        headers: {
          'x-api-key' : apikey
        }
      })
    }

}
