import {Component, Input} from 'angular2/core';
import {WeatherItem} from './weather-item';

@Component({
	selector: 'weather-item',
	template: `
		<article class="weather-element">
			<div class="col-1">
				<h3>{{ weatherItem.cityName }}</h3>
				<p class="info">{{ weatherItem.description }}</p>
			</div>
			<div class="col-2">
				<span class="temperature">{{ weatherItem.temperature }}C</span>
			</div>
		</article>
	`,
	styleUrls: ['src/css/weather-item.css'],
	//inputs: ['weatherItem: item']
})

//there can be two ways to add aliases to a property and pass data between components
//in the inputs above or below, the colon means we specify the alias item
//if we comment inputs out it wont work.
//input annotation uses @Input which allows us to add decorators and annotations

export class WeatherItemComponent {
	@Input('item') weatherItem: WeatherItem;

}