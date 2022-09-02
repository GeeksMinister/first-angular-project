import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InputPsKwComponent } from './input-ps-kw.component';

describe('InputPsKwComponent', () => {
  let component: InputPsKwComponent;
  let fixture: ComponentFixture<InputPsKwComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ InputPsKwComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(InputPsKwComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
