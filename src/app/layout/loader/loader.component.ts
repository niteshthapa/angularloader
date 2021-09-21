import { Component, DoCheck, OnChanges, OnDestroy, OnInit } from '@angular/core';
import { BehaviorSubject, Observable, Subscription } from 'rxjs';
import { LoaderService } from '../../service/loader.service';

@Component({
  selector: 'app-loader',
  templateUrl: './loader.component.html',
  styleUrls: ['./loader.component.css']
})
export class LoaderComponent implements OnInit, DoCheck {
  subs: Subscription;
  loader: boolean;
  constructor(public loaderService: LoaderService) { }
  ngOnInit(): void {
    this.subs = this.loaderService.isLoading.subscribe(res => {
      console.log(res);
      this.loader = res;
    })
  }
  ngDoCheck() {
    if (!this.loader) {
      this.subs.unsubscribe()
    }
  }
}
