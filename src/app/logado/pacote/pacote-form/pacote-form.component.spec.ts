import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PacoteFormComponent } from './pacote-form.component';

describe('PacoteFormComponent', () => {
  let component: PacoteFormComponent;
  let fixture: ComponentFixture<PacoteFormComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PacoteFormComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PacoteFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
