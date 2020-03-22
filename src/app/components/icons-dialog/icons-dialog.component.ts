import { Component, OnInit } from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'app-icons-dialog',
  templateUrl: './icons-dialog.component.html',
  styleUrls: ['./icons-dialog.component.css']
})
export class IconsDialogComponent implements OnInit {

  icons = [
    'favorite', 'atm', 'directions_bike', 'directions_boat', 'directions_bus', 'directions_car', 'directions_railway', 'directions_run', 'directions_subway', 'directions_walk', 'ev_station',
     'fastfood', 'flight', 'hotel', 'local_bar', 'local_cafe', 'local_dining', 'computer', 'smartphone', 'cloud', 'attachment', 'mail', 'chat', 'call', 'videocam',
      'store', 'shopping_cart', 'work', 'face', 'eco', 'home', 'payment', 'print', 'settings', 'thumb_up', 'thumb_down', 'star', 'person', 'school', 'public', 'notifications',
       'cake', 'sports_esports'
  ]
  selected = 'none'

  constructor(
    private _dialogRef: MatDialogRef<IconsDialogComponent>
  ) { }

  ngOnInit() {
  }

  getSelectStyle(item) {
    return item == this.selected ? 'solid 2px black' : 'solid 1px gray'
  }

  selectedColor(item) {
    this.selected = item
  }

  choose() {
    this._dialogRef.close(this.selected)
  }

  close() {
    this._dialogRef.close()
  }
}
