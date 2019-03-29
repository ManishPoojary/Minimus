import { Component, OnInit } from '@angular/core';
import { UiService } from 'src/app/services/ui/ui.service';

@Component({
  selector: 'app-add-card',
  templateUrl: './add-card.component.html',
  styleUrls: ['./add-card.component.sass']
})
export class AddCardComponent implements OnInit {

  darkMode: boolean;

  constructor(public ui: UiService) {
  }

  ngOnInit() {
    this.ui.darkModeState.subscribe((isDark) => {
      this.darkMode = isDark;
    });
  }

}
