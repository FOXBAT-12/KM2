import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DesigndocumentsComponent } from './designdocuments.component';

describe('DesigndocumentsComponent', () => {
  let component: DesigndocumentsComponent;
  let fixture: ComponentFixture<DesigndocumentsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DesigndocumentsComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DesigndocumentsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
