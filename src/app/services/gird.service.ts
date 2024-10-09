import { Injectable } from "@angular/core";
import { Grid } from "../models/grid.model";
import { Cell } from "../models/cell.model";

@Injectable({
    providedIn: 'root',
})
export class GridService {
    private grid: Grid = new Grid();
    private fillValue: number = 0;

    setGridSize(rows: number, columns: number) {
        this.grid.setSize(rows, columns);
    }

    getGridRows(): number {
        return this.grid.getRows();
    }

    getGridColumns(): number {
        return this.grid.getColumns();
    }

    setFillValue(value: number) {
        this.fillValue = value;
    }

    getFillValue(): number {
        return this.fillValue;
    }

    fillCell(row: number, column: number, value: number) {
        this.grid.fillCell(row, column, value);
    }

    getGridCells(): Cell[][] {
        return this.grid['cells'];
    }
}