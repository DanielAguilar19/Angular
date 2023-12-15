import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  public title: string = 'Mi Primera App de Angular';

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
