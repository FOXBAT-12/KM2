import { ComponentFixture, TestBed } from '@angular/core/testing';

import { KtplanComponent } from './ktplan.component';

describe('KtplanComponent', () => {
  let component: KtplanComponent;
  let fixture: ComponentFixture<KtplanComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [KtplanComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(KtplanComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
