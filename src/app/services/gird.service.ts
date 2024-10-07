import { Injectable } from "@angular/core";

interface Grid {
    rows: number;
    columns: number;
}

@Injectable({
    providedIn: 'root',
})
export class GridService {
    private grid: Grid = { rows: 10, columns: 10 };
    private fillValue: number = 0;

    setGridSize(rows: number, columns: number) {
        this.grid = { rows, columns };
    }

    getGridRows(): number {
        return this.grid.rows;
    }

    getGridColumns(): number {
        return this.grid.columns;
    }

    setFillValue(value: number) {
        this.fillValue = value;
    }

    getFillValue(): number {
        return this.fillValue;
    }
}