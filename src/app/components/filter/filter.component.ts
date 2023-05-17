import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';

@Component({
  selector: 'filter',
  templateUrl: './filter.component.html',
  styleUrls: ['./filter.component.scss'],
})
export class FilterComponent implements OnInit {
  filterForm!: FormGroup;
  constructor(private fb: FormBuilder) {}

  ngOnInit(): void {
    this.initForm();
  }

  private initForm(): void {
    this.filterForm = this.fb.nonNullable.group({
      searchText: '',
      searchSpec: 'burgers',
    });
  }

  onChangeForm(): void {
    console.log(this.filterForm.value);
  }
}
