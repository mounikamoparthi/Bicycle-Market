import { Component, OnInit, AfterViewInit} from '@angular/core';
import { Bicycle } from './../bicycle';
import { User } from './../user';
import { BicycleService } from './../bicycle.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-create',
  templateUrl: './create.component.html',
  styleUrls: ['./create.component.css']
})
export class CreateComponent implements OnInit, AfterViewInit {
  newBike = new Bicycle();
  current_user: User;
  currentUserBikes : Array<Bicycle>;
  hasImage: boolean = false;
  constructor(private _api: BicycleService, private _router: Router) { }

  ngOnInit() {
    this.getCurrentUserBikes();
    this._api.getCurrentUser()
    .then((data) => {
      if(data){
        this.current_user = data
      } else {
        this._router.navigate(["/login"])
      }
    })
  }
   ngAfterViewInit()
   {
    this.getCurrentUserBikes();
   }
   getCurrentUserBikes(){
      this._api.getUserBikes()
      .then((data) => {
        if(data){
          this.currentUserBikes = data;
        }
      })
   }
  addBike(){
    this.newBike.user_id = this.current_user._id;
    console.log(this.newBike);
    this._api.createBike(this.newBike)
     .then(() => {
       this.newBike = new Bicycle();
       this.getCurrentUserBikes()})
    .catch((err) => {console.log(err)});
  }
    updateBike(bike){
      console.log(bike);
      this._api.bike_Update(bike)
      .then(() => {
      })
      .catch((err) => {console.log(err)});
    }
    deleteBike(bike){
      let del = confirm(`Are you sure you want to remove ${bike.title}`);
      if(del){
        this._api.destroy_bike(bike)
        .then(() => {
          this.getCurrentUserBikes();
         })
          .catch((err) => {console.log(err)});
      }
    }
     linkPhoto() {
      this.newBike.image = prompt("Please enter the url for your photo:");
      if (this.newBike.image != "") {
        this.hasImage = true;
    }
  }

    editPhoto(idx) {
      this.currentUserBikes[idx].image = prompt("Please enter the new url for your photo:");
  }
}





