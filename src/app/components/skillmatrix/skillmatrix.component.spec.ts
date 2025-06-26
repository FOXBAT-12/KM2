import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SkillmatrixComponent } from './skillmatrix.component';

describe('SkillmatrixComponent', () => {
  let component: SkillmatrixComponent;
  let fixture: ComponentFixture<SkillmatrixComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SkillmatrixComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SkillmatrixComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
