import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PocTakeUntilComponent } from './poc-take-until.component';

describe('PocTakeUntilComponent', () => {
  let component: PocTakeUntilComponent;
  let fixture: ComponentFixture<PocTakeUntilComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PocTakeUntilComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(PocTakeUntilComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
