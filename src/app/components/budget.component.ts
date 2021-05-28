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
    // define initial user input and total budget on load
    input_budget: number = 100;
	total_budget: number = 100.00;

    // presets for expense form on load
    selected: Expenses = {
		id: 0,
		expense: '',
		cost: 0,
		priority: 'High',
		desired: 0,
		actual: 0
	}

    // empty array to hold expense list
    expenses: Expenses[] = [];

    constructor() { }

	ngOnInit(): void {

	}

    // handles update budget button function
    onUpdateBudget(budget: number): void {
		this.total_budget = budget;
        this.calcuateActual();
	}
    
    // calculates cost of expense actual % against total budget
    calcuateActual(): void {
		this.expenses.forEach((item: Expenses) => {
			item.actual = Math.floor(item.cost * 100 / this.total_budget);
		});
        this.onCancel();
	}

    // function to select expense row for editing
    onSelect(row: Expenses): void {
		this.selected = Object.assign({}, row);
	}

    // function to delete expense from array
    onDelete(row: Expenses): void {
		this.expenses = this.expenses.filter((item: Expenses) => item.id != row.id);
        this.onCancel();
	}

    onCreate(): void {
		// check validate
		if ( !this.selected.expense ) {
			return;
        }

		if ( this.selected.cost < 1 ) {
            return;
        }
		
		if ( this.selected.desired < 1 ) {
            return;
        }
			
        // create
		if ( this.selected.id < 1 ) {
		
			// find max id
			let max_id = 0;
			this.expenses.forEach((item: Expenses) => {
				if( item.id > max_id )
					max_id = item.id;
			});

            //assigns user input to expense model
			let model: Expenses = {
				id: max_id + 1,
				expense: this.selected.expense,
				cost: this.selected.cost,
				priority: this.selected.priority,
				desired: this.selected.desired,
				actual: 0
			};

            //pushes into expense array
			this.expenses.push(model);
            // calculate actual percentage 
			this.calcuateActual();
			
			return;
		}

        // look for an existing expense to update
		let model = this.expenses.find((item: Expenses) => this.selected.id == item.id);

		if ( !model ) {
			return;
        }

		model.expense = this.selected.expense;
		model.cost = this.selected.cost;
		model.priority = this.selected.priority;
		model.desired = this.selected.desired;

		this.calcuateActual();
	}

    // resets form data
	onCancel(): void {
		this.selected = {
			id: 0,
			expense: '',
			cost: 0,
			priority: 'High',
			desired: 0,
			actual: 0
		}
	}
}