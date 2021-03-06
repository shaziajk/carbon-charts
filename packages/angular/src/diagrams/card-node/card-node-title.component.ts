import { Component } from "@angular/core";
import settings from "carbon-components/src/globals/js/settings";

const { prefix } = settings;

@Component({
	selector: "ibm-diagram-card-node-title",
	template: `
	<xhtml:div [ngClass]="namespace">
		<ng-content></ng-content>
	</xhtml:div>
	`
})

export class CardNodeTitleComponent {
	namespace = `${prefix}--cc--card-node__title`;
}
