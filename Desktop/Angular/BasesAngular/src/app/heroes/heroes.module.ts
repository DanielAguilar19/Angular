import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
//Se necesita hacer import de common module ya que en los componentes se utilizan directivas de angular
import { HeroComponentComponent } from './hero/hero-component/hero-component.component';
import { ListComponentComponent } from './list/list-component/list-component.component';


@NgModule({
    declarations:[
        HeroComponentComponent,
        ListComponentComponent
    ],
    exports:[
        HeroComponentComponent,
        ListComponentComponent
    ],
    imports:[
        CommonModule
    ]
})
export class HeroesModule {}