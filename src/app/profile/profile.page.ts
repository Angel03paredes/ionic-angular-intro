import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {HttpClient} from '@angular/common/http';
@Component({
  selector: 'app-profile',
  templateUrl: './profile.page.html',
  styleUrls: ['./profile.page.scss'],
})
export class ProfilePage implements OnInit {

  URL_API = "https://rickandmortyapi.com/api/character"
  character : any

  constructor(
    private activatedRoute:ActivatedRoute,
    private http:HttpClient
  ) { }

  ngOnInit() {
    const id = this.activatedRoute.snapshot.paramMap.get("id")
    this.http.get(this.URL_API + "/" + id).subscribe(
      res=> this.character = res,
      err=> console.error(err)
    )
  }

}
