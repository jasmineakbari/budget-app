import { Component, OnInit } from '@angular/core';

// define expenses model
interface Expenses {
	id: number,
	expense: string;
	cost: number;
	priority: string;
	desired: number;
	actual: number;
}

@Component({
	selector: 'app-budget',
	templateUrl: './budget.component.html',
	styleUrls: ['./budget.component.css']
})

export class BudgetComponent implements OnInit {
    constructor() { }

	ngOnInit(): void {

	}
}