import { Component, Input, OnChanges, OnInit, Output } from "@angular/core";
import { CommonModule } from "@angular/common";
import { ModalComponent } from "../../modal/modal.component";
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from "@angular/forms";
import { GridService } from "src/app/services/gird.service";

interface FillValueForm {
    fillValue: FormControl<number | null>;
}

@Component({
    selector: 'fill-value-modal',
    standalone: true,
    imports: [CommonModule, ModalComponent, ReactiveFormsModule],
    templateUrl: './fill-value-modal.component.html'
})
export class FillValueModalComponent extends ModalComponent implements OnChanges {
    form: FormGroup<FillValueForm>;

    constructor(private gridService: GridService) {
        super();
        this.form = new FormGroup({
            fillValue: new FormControl<number>(this.gridService.getFillValue(), [Validators.required, Validators.min(0)]),
        });
    }

    ngOnChanges() {
        this.form.controls.fillValue.setValue(this.gridService.getFillValue(), { emitEvent: false });
    }

    onSubmit() {
        if (this.form.invalid) {
            return;
        }

        this.gridService.setFillValue(this.form.controls.fillValue.value!);
        this.onCloseModal();
    }
}