import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonicModule } from 'ionic-angular';
import { HeaderComponent } from "./components/header.component/header.component";
import { FooterComponent } from "./components/footer.component/footer.component";
import { MenuComponent } from "./components/menu.component/menu.component";

@NgModule({
    imports: [CommonModule, IonicModule],
    declarations: [HeaderComponent, FooterComponent, MenuComponent],
    exports: [HeaderComponent, FooterComponent, MenuComponent]
})
export class SharedModule { }
