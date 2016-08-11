import {Component} from "angular2/core";
import {ControlGroup} from "angular2/common";

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

	`
})

//form tag within the angular 2 template directive automatically does a lot of stuff
//auto detects it as a form
//#f is the local variable that will act as the form
//#f="ngForm" means we want the local variable to be of type ngForm rather than the usual form


export class WeatherSearchComponent
{
	onSubmit(form: ControlGroup){
		console.log(form);
	}
}