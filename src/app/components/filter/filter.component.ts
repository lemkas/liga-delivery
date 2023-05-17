import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { MEALTYPES } from 'src/app/interfaces/filter';

@Component({
  selector: 'filter',
  templateUrl: './filter.component.html',
  styleUrls: ['./filter.component.scss'],
})
export class FilterComponent implements OnInit {
  filterForm!: FormGroup;
  @Output() getFilter = new EventEmitter();
  constructor(private fb: FormBuilder) {}

  ngOnInit(): void {
    this.initForm();
  }

  private initForm(): void {
    this.filterForm = this.fb.nonNullable.group({
      searchText: '',
      searchSpec: MEALTYPES.BURGERS,
    });
  }

  onChangeForm(): void {
    this.getFilter.emit(this.filterForm.value);
  }
}
