import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GradientCtaBanner } from './gradient-cta-banner';

describe('GradientCtaBanner', () => {
  let component: GradientCtaBanner;
  let fixture: ComponentFixture<GradientCtaBanner>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [GradientCtaBanner],
    }).compileComponents();

    fixture = TestBed.createComponent(GradientCtaBanner);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});