import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FeatureChipList } from './feature-chip-list';

describe('FeatureChipList', () => {
  let component: FeatureChipList;
  let fixture: ComponentFixture<FeatureChipList>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [FeatureChipList],
    }).compileComponents();

    fixture = TestBed.createComponent(FeatureChipList);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});