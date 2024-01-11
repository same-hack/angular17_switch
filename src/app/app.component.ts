import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, RouterOutlet],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent {
  // 信号の色
  signalColor: string = '';

  /**信号の色を設定する関数 */
  setSignalColor(color: string) {
    this.signalColor = color;
  }
}
