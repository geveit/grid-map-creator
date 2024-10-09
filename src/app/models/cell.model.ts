export class Cell {
    private value: number | null = null;

    getValue(): number | null {
        return this.value;
    }

    setValue(value: number | null): void {
        this.value = value;
    }
}