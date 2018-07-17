import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonicModule } from 'ionic-angular';
import { HeaderComponent } from "./header.component/header.component";
import { FooterComponent } from "./footer.component/footer.component";

@NgModule({
    imports: [CommonModule, IonicModule],
    declarations: [HeaderComponent, FooterComponent],
    exports: [HeaderComponent, FooterComponent]
})
export class SharedModule { }