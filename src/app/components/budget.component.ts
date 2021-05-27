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

// Export Budget Component Functions
export class BudgetComponent implements OnInit {
    //define user initial user input and total budget
    input_budget: number = 0;
	total_budget: number = 0.00;

    constructor() { }

	ngOnInit(): void {

	}

    // handles update budget button function
    onUpdateBudget(budget: number): void {
		this.total_budget = budget;
	}
    
}