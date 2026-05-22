import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GlassStatCard } from './glass-stat-card';

describe('GlassStatCard', () => {
  let component: GlassStatCard;
  let fixture: ComponentFixture<GlassStatCard>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [GlassStatCard],
    }).compileComponents();

    fixture = TestBed.createComponent(GlassStatCard);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});