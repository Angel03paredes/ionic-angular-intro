import { Component, OnInit } from '@angular/core';
import {HttpClient} from '@angular/common/http'

@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.page.html',
  styleUrls: ['./user-list.page.scss'],
})
export class UserListPage implements OnInit {

  URL_API = "https://rickandmortyapi.com/api/character"
  characters = []

  constructor( private http:HttpClient ) {

   }

  ngOnInit() {
      this.http.get<any>(this.URL_API).subscribe(
        res=> {
            this.characters = res.results
        },
        err=> console.error(err)
      );
  }

}
