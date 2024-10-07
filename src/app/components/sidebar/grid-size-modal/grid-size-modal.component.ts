import { Component, Input, OnChanges, OnInit, Output } from "@angular/core";
import { CommonModule } from "@angular/common";
import { ModalComponent } from "../../modal/modal.component";
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from "@angular/forms";
import { GridService } from "src/app/services/gird.service";

interface GridSizeForm {
    rows: FormControl<number | null>;
    columns: FormControl<number | null>;
}

@Component({
    selector: 'grid-size-modal',
    standalone: true,
    imports: [CommonModule, ModalComponent, ReactiveFormsModule],
    templateUrl: './grid-size-modal.component.html'
})
export class GridSizeModalComponent extends ModalComponent implements OnChanges {
    form: FormGroup<GridSizeForm>;

    constructor(private gridService: GridService) {
        super();
        this.form = new FormGroup({
            rows: new FormControl<number>(this.gridService.getGridRows(), [Validators.required, Validators.min(1)]),
            columns: new FormControl<number>(this.gridService.getGridColumns(), [Validators.required, Validators.min(1)]),
        });
    }

    ngOnChanges() {
        this.form.controls.rows.setValue(this.gridService.getGridRows());
        this.form.controls.columns.setValue(this.gridService.getGridColumns());
    }

    onSubmit() {
        if (this.form.invalid) {
            return;
        }

        this.gridService.setGridSize(this.form.controls.rows.value!, this.form.controls.columns.value!);
        this.onCloseModal();
    }
}