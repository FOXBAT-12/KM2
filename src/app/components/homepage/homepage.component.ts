import { CommonModule } from '@angular/common';
import { Component, OnInit, AfterViewInit, ElementRef, ViewChild } from '@angular/core';;
import { RouterLinkActive, RouterOutlet } from '@angular/router';
import { NgApexchartsModule } from 'ng-apexcharts';
import { ApexAxisChartSeries, ApexChart, ApexXAxis, ApexTitleSubtitle, ApexLegend, ApexTooltip } from 'ng-apexcharts';


@Component({
  selector: 'app-homepage',
  imports: [NgApexchartsModule , CommonModule], 
  standalone: true,
  templateUrl: './homepage.component.html',
  styleUrl: './homepage.component.css'
})
export class HomepageComponent implements OnInit, AfterViewInit {
  // Main chart data
  pieChartSeries = [10, 20, 15, 25, 30];
  pieChartLabels = ['Angular', '.NET', 'C#', 'SQL', 'Python'];

  // Level data for each skill
  skillLevelCounts: { [skill: string]: { Beginner: number, Intermediate: number, Advanced: number } } = {
    'Angular': { Beginner: 3, Intermediate: 5, Advanced: 2 },
    '.NET': { Beginner: 10, Intermediate: 7, Advanced: 3 },
    'C#': { Beginner: 4, Intermediate: 6, Advanced: 5 },
    'SQL': { Beginner: 9, Intermediate: 6, Advanced: 10 },
    'Python': { Beginner: 25, Intermediate: 2, Advanced: 3 }
  };

  // State
  showLevelChart = false;
  selectedSkill: string | null = null;
  showViewDistributionBtn = false;
  levelChartSeries: number[] = [];
  levelChartLabels: string[] = ['Beginner', 'Intermediate', 'Advanced'];

  // Chart options
  pieChartDetails: ApexChart = {
    type: 'pie',
    height: 350,
    events: {
      dataPointSelection: (event: any, chartContext: any, config: any) => {
        setTimeout(() => {
          this.onSkillClick(config.dataPointIndex);
        });
      }
    }
  };
  pieChartTitle: ApexTitleSubtitle = {
    text: 'Skill Distribution',
    align: 'center'
  };
  pieChartLegend: ApexLegend = {
    position: 'bottom'
  };
  pieChartTooltip: ApexTooltip = {
    custom: ({ series, seriesIndex, w }) => {
      const skill = this.pieChartLabels[seriesIndex];
      const levels = this.skillLevelCounts[skill];
      return `
        <div style="padding:8px 12px;">
          <strong>${skill}</strong><br>
          <span style="color:#2196f3;">Beginner</span>: ${levels.Beginner}<br>
          <span style="color:#ff9800;">Intermediate</span>: ${levels.Intermediate}<br>
          <span style="color:#43a047;">Advanced</span>: ${levels.Advanced}
        </div>
      `;
    }
  };

  // When a skill is clicked, show the level chart for that skill
  onSkillClick(index: number) {
    this.selectedSkill = this.pieChartLabels[index];
    const counts = this.skillLevelCounts[this.selectedSkill];
    this.levelChartSeries = [
      counts.Beginner,
      counts.Intermediate,
      counts.Advanced
    ];
    // Do NOT set showLevelChart here
    this.pieChartTitle = {
      text: `${this.selectedSkill} - Level Distribution`,
      align: 'center'
    };
  }

  viewDistribution() {
    if (this.selectedSkill) {
      this.showLevelChart = true;
    }
  }

  ngOnInit() {
    this.resetSkillSelection();
  }

  resetSkillSelection() {
    this.selectedSkill = null;
    this.showViewDistributionBtn = false;
    this.showLevelChart = false;
    this.pieChartTitle = {
      text: 'Skill Distribution',
      align: 'center'
    };
  }

  // Go back to main chart
  backToMainChart() {
    this.showLevelChart = false;
    this.selectedSkill = null;
    this.pieChartTitle = {
      text: 'Skill Distribution',
      align: 'center'
    };
  } 
  
  getLevelPercentage(index: number): number {
    if (!this.levelChartSeries || this.levelChartSeries.length === 0) {
      return 0;
    }
    const total = this.levelChartSeries.reduce((sum: number, val: number) => sum + val, 0);
    return total > 0 ? (this.levelChartSeries[index] / total) * 100 : 0;
  }

  onboardImgVisible = false;

  @ViewChild('onboardImg', { static: false }) onboardImg!: ElementRef<HTMLImageElement>;

  ngAfterViewInit() {
    if (this.onboardImg) {
      const observer = new IntersectionObserver(
        ([entry]) => {
          this.onboardImgVisible = entry.isIntersecting;
        },
        { threshold: 0.2 }
      );
      observer.observe(this.onboardImg.nativeElement);
    }
  }
}