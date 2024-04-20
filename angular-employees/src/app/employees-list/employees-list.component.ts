import { Component } from '@angular/core';

interface Employee {
  name: string;
}

@Component({
  selector: 'app-employees-list',
  templateUrl: './employees-list.component.html',
  styleUrls: ['./employees-list.component.css']
})

export class EmployeesListComponent {
  employees: Employee[] = [
    { name: 'John Doe' },
    { name: 'Jane Smith' },
    { name: 'Jack Williams' },
    // Add more employees as needed
  ];
  searchTerm: string = '';

  handleSearchTermChange(event: Event): void {
    const target = event.target as HTMLInputElement;
    this.searchTerm = target.value.toLowerCase();
  }

  get filteredEmployees(): Employee[] {
    return this.employees.filter(employee => 
      employee.name.toLowerCase().includes(this.searchTerm)
    );
  }
}
