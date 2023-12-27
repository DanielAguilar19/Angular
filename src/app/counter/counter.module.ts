import { NgModule } from "@angular/core";
import { CounterComponentComponent } from "./counter/counter-component/counter-component.component";


@NgModule({
    declarations:[
        CounterComponentComponent
    ],
    exports:[
        CounterComponentComponent
    ]
})
export class CounterModule{}