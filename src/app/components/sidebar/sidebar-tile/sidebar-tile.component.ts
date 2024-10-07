import { Component, EventEmitter, Input, Output } from "@angular/core";

@Component({
    selector: 'side-bar-tile',
    standalone: true,
    templateUrl: './sidebar-tile.component.html',
    styleUrl: './sidebar-tile.component.scss'
})
export class SideBarTileComponent {
    @Input() title!: string;
    @Input() icon!: string;
    @Output() tileClick = new EventEmitter<void>();

    onTileClick() {
        this.tileClick.emit();
    }
}