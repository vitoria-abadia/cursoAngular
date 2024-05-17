import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PocUnsubComponent } from './poc-unsub.component';

describe('PocUnsubComponent', () => {
  let component: PocUnsubComponent;
  let fixture: ComponentFixture<PocUnsubComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PocUnsubComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(PocUnsubComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
