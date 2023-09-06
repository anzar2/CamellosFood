import { Router, RouterModule, Routes } from "@angular/router";
import { InicioPage } from "./inicio.page";
import { NgModule } from "@angular/core";
const routes: Routes = [
    {path: '', component: InicioPage}
]

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class InicioRouting {}