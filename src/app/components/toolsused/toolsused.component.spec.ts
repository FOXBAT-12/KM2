import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ToolsusedComponent } from './toolsused.component';

describe('ToolsusedComponent', () => {
  let component: ToolsusedComponent;
  let fixture: ComponentFixture<ToolsusedComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ToolsusedComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ToolsusedComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
