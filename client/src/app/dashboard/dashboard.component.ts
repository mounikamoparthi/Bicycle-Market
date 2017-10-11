import { Component, OnInit } from '@angular/core';
import { Bicycle } from './../bicycle';
import { User } from './../user';
import { BicycleService } from './../bicycle.service';
import { Router } from '@angular/router';


@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {
  current_user: User;
  list_bikes: Array<Bicycle>;
  contact = { name: '', email: '' };
  searchStr: string = '';
  constructor(private _api: BicycleService, private _router: Router) { }

  ngOnInit() {

    this._api.getCurrentUser()
    .then((data) => {
      if(data){
        this.current_user = data
        this.get_all_bikes();
      } else {
        this._router.navigate(["/login"])
      }
    })
  }
  get_all_bikes(){
    this._api.listBikes()
    .then((data) => {
      if(data){
        this.list_bikes = data;
      }
    })
    .catch((err) => {console.log(err)});
  }
  DelBike(bike){
    let del = confirm(`Are you sure you want to remove ${bike.title}`);
      if(del){
        this._api.destroy_bike(bike)
        .then(() => {
          this.get_all_bikes();
         })
          .catch((err) => {console.log(err)});
      }
  }
  contactUser(bike){
    this._api.contactInfo(bike)
    .then((data) => {
      if(data){
        console.log(data);
        this.contact.name = data.first_name +' '+ data.last_name;
        this.contact.email = data.email;
        confirm(` Name: ${this.contact.name} email: ${this.contact.email}`);
      }
    })
    .catch((err) => {console.log(err)});
  }

}
