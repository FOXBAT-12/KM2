import { ComponentFixture, TestBed } from '@angular/core/testing';

import { KedbComponent } from './kedb.component';

describe('KedbComponent', () => {
  let component: KedbComponent;
  let fixture: ComponentFixture<KedbComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [KedbComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(KedbComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
