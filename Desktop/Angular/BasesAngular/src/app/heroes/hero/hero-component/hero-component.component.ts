import { Component } from '@angular/core';

@Component({
  selector: 'app-hero-component',
  templateUrl: './hero-component.component.html',
  styleUrl: './hero-component.component.css'
})
export class HeroComponentComponent {
  public name: string = 'ironman';
  public age: number = 45;

  get capitalizeName():String{
    return this.name.toUpperCase();
  }

  public getHeroDescription():string{
    return `${this.name} - ${this.age}`;
  }

  changeHero():void{
    this.name='Batman';
  }

  changeAge():void{
    this.age=35;
  }
  resetForm():void{
    this.name='ironman';
    this.age=45;
    document.querySelector('h1')!.innerHTML='<h1>Restablecido Desde Angular</h1>'
  }
}
