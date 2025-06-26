import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SmedirectoryComponent } from './smedirectory.component';

describe('SmedirectoryComponent', () => {
  let component: SmedirectoryComponent;
  let fixture: ComponentFixture<SmedirectoryComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SmedirectoryComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SmedirectoryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
