import { ComponentFixture, TestBed } from '@angular/core/testing';

import { KtvideosComponent } from './ktvideos.component';

describe('KtvideosComponent', () => {
  let component: KtvideosComponent;
  let fixture: ComponentFixture<KtvideosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [KtvideosComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(KtvideosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
