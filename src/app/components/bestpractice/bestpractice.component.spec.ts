import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BestpracticeComponent } from './bestpractice.component';

describe('BestpracticeComponent', () => {
  let component: BestpracticeComponent;
  let fixture: ComponentFixture<BestpracticeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [BestpracticeComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BestpracticeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
