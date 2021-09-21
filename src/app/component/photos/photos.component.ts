import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-photos',
  templateUrl: './photos.component.html',
  styleUrls: ['./photos.component.css']
})
export class PhotosComponent implements OnInit {

  url:string ="https://jsonplaceholder.typicode.com/photos";
  constructor(private _http:HttpClient){};
  photos:[]= [ ]
  ngOnInit(): void {
    this._http.get<any>(this.url).subscribe(res=>{
      this.photos = res;
  })
  }
}
