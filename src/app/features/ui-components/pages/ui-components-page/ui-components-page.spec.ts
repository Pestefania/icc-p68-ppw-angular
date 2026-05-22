import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UiComponentsPage } from './ui-components-page';

describe('UiComponentsPage', () => {
  let component: UiComponentsPage;
  let fixture: ComponentFixture<UiComponentsPage>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [UiComponentsPage],
    }).compileComponents();

    fixture = TestBed.createComponent(UiComponentsPage);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});