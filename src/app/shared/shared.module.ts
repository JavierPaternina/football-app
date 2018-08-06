import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonicModule } from 'ionic-angular';
import { HeaderComponent } from "./components/header.component/header.component";
import { FooterComponent } from "./components/footer.component/footer.component";
import { MenuComponent } from "./components/menu.component/menu.component";

const SHARED_COMPONENTS = [HeaderComponent, FooterComponent, MenuComponent];
@NgModule({
    imports: [CommonModule, IonicModule],
    declarations: SHARED_COMPONENTS,
    exports: SHARED_COMPONENTS
})
export class SharedModule { }