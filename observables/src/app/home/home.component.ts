import { Component, OnDestroy, OnInit } from "@angular/core";
import { interval, observable, Observable, Subscription } from "rxjs";
import { map } from "rxjs/operators";
@Component({
  selector: "app-home",
  templateUrl: "./home.component.html",
  styleUrls: ["./home.component.css"],
})
export class HomeComponent implements OnInit, OnDestroy {
  constructor() {}
  private firstObserver: Subscription;
  ngOnInit() {
    // this.firstObSub = interval(1000).subscribe((count) => {
    //   console.log(count);
    // });
    const newObservable = Observable.create((observer) => {
      let count = 0;
      setInterval(() => {
        if (count == 2) {
          observer.complete();
        }
        if (count > 3) {
          observer.error(new Error("Count is greater than 3"));
        }
        observer.next(count);
        count++;
      }, 1000);
    });
    this.firstObserver = newObservable
      .pipe(
        map((data) => {
          return "Round " + data;
        })
      )
      .subscribe(
        (count) => {
          console.log(count);
        },
        (error) => {
          console.log(error);
          alert(error.message);
        },
        () => console.log("completed")
      );
  }
  ngOnDestroy(): void {
    this.firstObserver.unsubscribe();
  }
}
