import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { CounterButtonsComponent } from "./counter-buttons/counter-buttons.component";
import { CounterOutputComponent } from "./counter-output/counter-output.component";
import { CustomCounterInputComponent } from "./custom-counter-input/custom-counter-input.component";
import { CounterComponent } from "./counter.component";
import { FormsModule } from "@angular/forms";

const routes: Routes = [
    {
        path: "",
        component: CounterComponent
    }
];

@NgModule({
    declarations: [
        CounterComponent,
        CounterOutputComponent,
        CounterButtonsComponent,
        CustomCounterInputComponent
    ],
    imports: [CommonModule,FormsModule ,RouterModule.forChild(routes)]
})
export class CounterModule {

}