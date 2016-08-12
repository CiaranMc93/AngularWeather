import {Component} from "angular2/core";
import {ControlGroup} from "angular2/common";
import {WeatherService} from "./weather.service";
import {WeatherItem} from './weather-item';

@Component({
	selector: 'weather-search',
	template: ` 
		<section class="weather-search">
			<form (ngSubmit)="onSubmit(f)" #f="ngForm">
				<label for="city"></label>
				<input ngControl="location" type="text" id="city" required>
				<button type="submit">Add City</button>
			</form>
			<div>
				<span class="info">City Found: </span> City Name
			</div>
		</section>

	`,
	providers: [WeatherService]
})

//form tag within the angular 2 template directive automatically does a lot of stuff
//auto detects it as a form
//#f is the local variable that will act as the form
//#f="ngForm" means we want the local variable to be of type ngForm rather than the usual form


export class WeatherSearchComponent
{

	constructor(private _weatherService: WeatherService){

	}

	onSubmit(form: ControlGroup){
		this._weatherService.searchWeatherData(form.value.location)
		.subscribe(
			//create a new item and add it to the dummy data array
			data => {
				const weatherItem = new WeatherItem(data.name,data.weather[0].main,data.main.temp);
				this._weatherService.addWeatherItem(weatherItem);
			}
		);
	}
}