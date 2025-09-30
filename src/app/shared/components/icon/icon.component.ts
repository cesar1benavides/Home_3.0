import { Component, Input, ChangeDetectionStrategy } from '@angular/core';
import { IconService } from '../../services/icon.service';
import { SafeHtml } from '@angular/platform-browser';

@Component({
  selector: 'app-icon',
  template: `<span [innerHTML]="iconHtml" class="app-icon"></span>`,
  styleUrls: ['./icon.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class IconComponent {
  @Input() name!: string;
  
  get iconHtml(): SafeHtml {
    return this.iconService.getIcon(this.name);
  }

  constructor(private iconService: IconService) {}
}










