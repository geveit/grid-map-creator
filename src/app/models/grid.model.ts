import { Cell } from "./cell.model";

export class Grid {
    private DEFAULT_ROWS: number = 10;
    private DEFAULT_COLUMNS: number = 10;

    private rows: number = this.DEFAULT_ROWS;
    private columns: number = this.DEFAULT_COLUMNS;

    private cells: Cell[][] = this.createGrid(this.rows, this.columns);

    private createGrid(rows: number, columns: number): Cell[][] {
        return Array.from({ length: rows }, () =>
            Array.from({ length: columns }, () => new Cell())
        );
    }

    getRows(): number {
        return this.rows;
    }

    setSize(rows: number, columns: number): void {
        const newGrid = this.createGrid(rows, columns);

        for (let r = 0; r < Math.min(rows, this.rows); r++) {
            for (let c = 0; c < Math.min(columns, this.columns); c++) {
                newGrid[r][c] = this.cells[r][c];
            }
        }

        this.rows = rows;
        this.columns = columns;
        this.cells = newGrid;
    }

    getColumns(): number {
        return this.columns;
    }

    fillCell(row: number, column: number, value: number): void {
        if (this.isOutOfBounds(row, column)) {
            console.error(`Cell (${row}, ${column}) is out of bounds`);
            return;
        }
        this.cells[row][column].setValue(value);
    }

    private isOutOfBounds(row: number, column: number): boolean {
        return row < 0 || row >= this.rows || column < 0 || column >= this.columns;
    }
}