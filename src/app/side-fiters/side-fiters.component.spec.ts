import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SideFitersComponent } from './side-fiters.component';

describe('SideFitersComponent', () => {
  let component: SideFitersComponent;
  let fixture: ComponentFixture<SideFitersComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SideFitersComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SideFitersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
