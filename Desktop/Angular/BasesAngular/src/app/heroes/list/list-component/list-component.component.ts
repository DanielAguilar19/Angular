import { Component } from '@angular/core';

@Component({
  selector: 'app-list-component',
  templateUrl: './list-component.component.html',
  styleUrl: './list-component.component.css'
})
export class ListComponentComponent {


  public heroNames: string[] = ['Batman', 'Thor', 'Spiderman', 'Superman','Flash'];
  public deletedHero?: string | undefined;

  removeLastHero(): void {
    this.deletedHero = this.heroNames.pop();
  }
}
