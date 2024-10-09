import { Component } from "@angular/core";
import { SideBarComponent } from "../../components/sidebar/sidebar.component";
import { GridComponent } from "../../components/grid/grid.component";

@Component({
    selector: 'creator',
    standalone: true,
    templateUrl: './creator.component.html',
    styleUrl: './creator.component.scss',
    imports: [SideBarComponent, GridComponent]
})
export class CreatorComponent {
    
}