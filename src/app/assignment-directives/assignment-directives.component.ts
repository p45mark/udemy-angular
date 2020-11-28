import { Component } from "@angular/core";

@Component({
	selector: "app-assignment-directives",
	templateUrl: "./assignment-directives.component.html",
	styles: [
		`
			.item-blue {
				background-color: blue;
				color: white;
			}
		`
	]
})
export class AssignmentDirectivesComponent {
	showDetails = false;
	isBlue = false;
	clicks = [];

	constructor() {}

	toggleDetails() {
		this.clicks.push(new Date().getTime());
		// this.clicks.push(this.clicks.length + 1);
		this.isBlue = this.clicks.length >= 5;
		this.showDetails = !this.showDetails;
	}
}
