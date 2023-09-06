import { FormsModule } from "@angular/forms";
import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { IonicModule } from "@ionic/angular";

import { InicioPage } from "./inicio.page";
import { InicioRouting } from "./inicio.routing";

@NgModule({
    imports: [
        CommonModule,
        FormsModule,
        IonicModule,
        InicioRouting
    ],
    declarations:[InicioPage]
})
export class InicioModule {}