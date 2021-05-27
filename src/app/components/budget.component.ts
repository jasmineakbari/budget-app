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
    input_budget: number = 100;
	total_budget: number = 0.00;

    // presets for expense form
    selected: Expenses = {
		id: 0,
		expense: '',
		cost: 0,
		priority: 'High',
		desired: 0,
		actual: 0
	}

    // starter example data on load
    expenses: Expenses[] = [
		{
			id: 1,
			expense: 'Food',
			cost: 40,
			priority: 'High',
			desired: 30,
			actual: 40
		},
		
		{
			id: 2,
			expense: 'Netflix',
			cost: 13,
			priority: 'low',
			desired: 15,
			actual: 15
		}
	];

    constructor() { }

	ngOnInit(): void {

	}

    // handles update budget button function
    onUpdateBudget(budget: number): void {
		this.total_budget = budget;
        this.calcuateActual();
	}
    
    calcuateActual(): void {
		this.expenses.forEach((item: Expenses) => {
			item.actual = item.cost * 100 / this.total_budget;
		});
	}
}