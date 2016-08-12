import {Injectable} from 'angular2/core';
import {WeatherItem} from './weather-item';
import {WEATHER_ITEMS} from './weather.data';
import {Observable} from "rxjs/Observable";
import {Http} from "angular2/http";
//import all weather/map functions/methods
import 'rxjs/Rx';

//add an injectable
//later will fetch from internet
@Injectable()

export class WeatherService{

	constructor(private _http: Http){

	}

	getWeatherItems(){
		return WEATHER_ITEMS;
	}

	//add the new weather item into WEATHER_ITEMS
	addWeatherItem(weatherItem: WeatherItem){
		WEATHER_ITEMS.push(weatherItem);
	}

	searchWeatherData(cityName: string): Observable<any>{
		return this._http.get('http://api.openweathermap.org/data/2.5/weather?q=' + cityName + '&APPID=a21bc137c3ed492be60d8d6715396aab&units=metric')
		.map(response => response.json())
		.catch(error => { 
			console.error(error);
			return Observable.throw(error.json())
		});
	}


}