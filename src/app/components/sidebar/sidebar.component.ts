import { Component, Input, Output } from "@angular/core";
import { SideBarTileComponent } from "./sidebar-tile/sidebar-tile.component";
import { CommonModule } from "@angular/common";
import { ModalComponent } from "../modal/modal.component";
import { GridSizeModalComponent } from "./grid-size-modal/grid-size-modal.component";
import { FillValueModalComponent } from "./fill-value-modal/fill-value-modal.component";

@Component({
    selector: 'side-bar',
    standalone: true,
    imports: [SideBarTileComponent, ModalComponent, CommonModule, FillValueModalComponent, GridSizeModalComponent],
    templateUrl: './sidebar.component.html',
    styleUrl: './sidebar.component.scss'
})
export class SideBarComponent {
    @Output() gridSizeModalVisible: boolean = false;
    @Output() fillValueModalVisible: boolean = false;

    openGridSizeModal() {
        this.gridSizeModalVisible = true;
    }

    closeGridSizeModal() {
        this.gridSizeModalVisible = false;
    }

    openFillValueModal() {
        this.fillValueModalVisible = true;
    }

    closeFillValueModal() {
        this.fillValueModalVisible = false;
    }
}