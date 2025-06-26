import { ComponentFixture, TestBed } from '@angular/core/testing';

import { KmteammemberComponent } from './kmteammember.component';

describe('KmteammemberComponent', () => {
  let component: KmteammemberComponent;
  let fixture: ComponentFixture<KmteammemberComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [KmteammemberComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(KmteammemberComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
