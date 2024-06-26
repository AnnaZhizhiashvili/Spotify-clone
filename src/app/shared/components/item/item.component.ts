import { Component, Input } from '@angular/core';
import { Router } from '@angular/router';
import { NgClass } from '@angular/common';

@Component({
  selector: 'app-item',
  standalone: true,
  imports: [
    NgClass
  ],
  templateUrl: './item.component.html',
  styleUrl: './item.component.scss'
})
export class ItemComponent {
  @Input() item: any;
  @Input() type: 'artists' | 'tracks' | 'playlists' |'shows' | 'episodes' | 'audiobooks' | 'albums';
  constructor(private router: Router) {
  }
  navigateToArtist(id: string) {
    this.router.navigate([`${this.type}`, id], {state: {item: this.item}}).then()
  }


}
