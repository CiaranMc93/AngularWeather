import {Injectable} from 'angular2/core';
import {WeatherItem} from './weather-item';
import {WEATHER_ITEMS} from './weather.data';

//add an injectable
//later will fetch from internet
@Injectable()

export class WeatherService{

	getWeatherItems(){
		return WEATHER_ITEMS;
	}
}