import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AutocompleteEditComponent } from './autocomplete-edit.component';

describe('AutocompleteEditComponent', () => {
  let component: AutocompleteEditComponent;
  let fixture: ComponentFixture<AutocompleteEditComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AutocompleteEditComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AutocompleteEditComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
