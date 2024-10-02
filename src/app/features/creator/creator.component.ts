import { Component } from "@angular/core";
import { SideBarComponent } from "../../components/sidebar/sidebar.component";

@Component({
    selector: 'creator',
    standalone: true,
    templateUrl: './creator.component.html',
    styleUrl: './creator.component.scss',
    imports: [SideBarComponent]
})
export class CreatorComponent {

}