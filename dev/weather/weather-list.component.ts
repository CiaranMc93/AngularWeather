import {Component, OnInit} from 'angular2/core';
import {WeatherItemComponent} from './weather-item.component';
import {WeatherItem} from './weather-item';
import {WEATHER_ITEMS} from './weather.data';
import {WeatherService} from './weather.service';


@Component({
	selector: 'weather-list',
	template: `
		<section class="weather-list">
			<!-- For each value we need a weather-item -->
			<weather-item *ngFor="#weatherItem of weatherItems" [item]="weatherItem">

			</weather-item>
		</section>
	`,
	directives: [WeatherItemComponent],
	//providers are the types of the obejects i want to inject
	providers: [WeatherService]
})

//above we see a lot of weather items, we have the for loop to loop through each weatherItems and place them in the local
//variable that is weatherItem. Then in the square brackets we have the data bound weatherItem equalling the local variable weatherItem.

export class WeatherListComponent implements OnInit {
	weatherItems: WeatherItem[];

	constructor(private _weatherService: WeatherService){

	}

	//this will be called as we have implemented the OnInit
	ngOnInit():any{
		this.weatherItems = this._weatherService.getWeatherItems();
	}

}