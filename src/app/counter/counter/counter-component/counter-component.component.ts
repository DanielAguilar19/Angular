import { Component } from '@angular/core';

@Component({
  selector: 'app-counter-component',
  templateUrl: './counter-component.component.html',
  styleUrl: './counter-component.component.css'
})
export class CounterComponentComponent {
  public counter: number = 10;

  public increasedBy(value: number): void {
    this.counter += value;
  }

  public decreasedBy(value: number): void {
    this.counter += value;
  }

  resetButton(): void {
    this.counter=10;
    
  }
}
