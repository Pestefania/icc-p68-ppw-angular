import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

import { GlassStatCard } from '../../components/glass-stat-card/glass-stat-card';
import { GradientCtaBanner } from '../../components/gradient-cta-banner/gradient-cta-banner';
import { FeatureChipList } from '../../components/feature-chip-list/feature-chip-list';

import { AlertBanner } from '../../components/alert-banner/alert-banner';
import { ProgressWidget } from '../../components/progress-widget/progress-widget';
import { TestimonialCard } from '../../components/testimonial-card/testimonial-card';
import { PricingCard } from '../../components/pricing-card/pricing-card';
import { StatsOverview } from '../../components/stats-overview/stats-overview';

@Component({
  selector: 'app-ui-components-page',
  standalone: true,
  imports: [
    CommonModule,
    RouterModule,

    GlassStatCard,
    GradientCtaBanner,
    FeatureChipList,

    AlertBanner,
    ProgressWidget,
    TestimonialCard,
    PricingCard,
    StatsOverview
  ],
  templateUrl: './ui-components-page.html',
  styleUrls: ['./ui-components-page.css'],
})
export class UiComponentsPage {

  readonly quickChips = [
    'Glass Surface',
    'Gradient CTA',
    'Responsive Grid',
    'Standalone Components',
    'Tailwind + DaisyUI',
  ];

}