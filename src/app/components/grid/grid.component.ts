import { Component, Input, OnChanges, OnInit, Output, SimpleChanges } from "@angular/core";
import { CommonModule } from "@angular/common";
import { ModalComponent } from "../modal/modal.component";
import { GridService } from "src/app/services/gird.service";
import { Cell } from "src/app/models/cell.model";

@Component({
    selector: 'grid',
    standalone: true,
    imports: [ModalComponent, CommonModule],
    templateUrl: './grid.component.html',
    styleUrl: './grid.component.scss'
})
export class GridComponent implements OnChanges, OnInit {
    @Input() rows: number = 0;
    @Input() columns: number = 0;
    gridCells: Cell[][] = [];
    
    constructor(private gridService: GridService) {}

    ngOnInit(): void {
        this.setGridSize();
    }
    ngOnChanges(changes: SimpleChanges): void {
        this.setGridSize();
    }

    private setGridSize() {
        this.rows = this.gridService.getGridRows();
        this.columns = this.gridService.getGridColumns();
    }
}