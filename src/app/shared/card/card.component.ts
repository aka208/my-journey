import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-card',
  imports: [CommonModule],
  templateUrl: './card.component.html',
  styleUrl: './card.component.scss',
  standalone: true,
})
export class CardComponent {
  @Input() detail: any;

  public selectedRowTitle!: string | null;

  showDetails(organization: string) {
    this.selectedRowTitle =
      this.selectedRowTitle !== organization ? organization : null;
  }
}
