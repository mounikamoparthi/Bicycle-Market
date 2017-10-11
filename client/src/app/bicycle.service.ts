import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs';

@Injectable()
export class BicycleService {

  constructor(private _http: Http) { }
   registerUser(user) {
    return this._http.post('/register', user)
    .map(data => data.json()).toPromise();
  }

  loginUser(user) {
    return this._http.post('/login', user)
    .map(data => data.json()).toPromise();
  }
  getCurrentUser() {
    return this._http.get('/get_logged_in_user')
    .map(data => data.json()).toPromise();
  }
  getUserBikes(){
    return this._http.get('/getCurrentBikes')
    .map(data => data.json()).toPromise();
  }
  listBikes(){
    return this._http.get('/list_allBikes')
    .map(data => data.json()).toPromise();
  }
  createBike(bike) {
    return this._http.post('/createBike', bike)
    .map(data => data.json()).toPromise();
  }
  bike_Update(bike){
    return this._http.post('/updateBike', bike)
    .map(data => data.json()).toPromise();
  }
  destroy_bike(bike){
     return this._http.post('/destroyBike', bike)
    .map(data => data.json()).toPromise();
  }
  contactInfo(bike){
    console.log(bike)
    return this._http.post('/contact', bike)
    .map(data => data.json()).toPromise();
  }
  getRandomBike(){
    return this._http.get('/bikeOfTheDay').map(data => data.json()).toPromise();
  }
  logout() {
    return this._http.get('/logout')
    .map(data => data.json()).toPromise();
  }
}
