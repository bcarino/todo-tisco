import { Component, OnInit } from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'app-colors-dialog',
  templateUrl: './colors-dialog.component.html',
  styleUrls: ['./colors-dialog.component.css']
})
export class ColorsDialogComponent implements OnInit {

  colors = [
    '#FFFFFF', '#f7d794', '#f8a5c2','#b8e994', '#f3a683', '#63cdda', '#778beb', '#ea8685'
  ]
  selected = "#FFFFFF"

  constructor(
    private _dialogRef:MatDialogRef<ColorsDialogComponent>
  ) { }

  ngOnInit() {
  }

  getSelectStyle(item){
    return item == this.selected ? 'solid 2px black' : 'solid 1px gray'
  }

  selectedColor(item){
    this.selected = item
  }

  choose(){
    this._dialogRef.close(this.selected)
  }

  close(){
    this._dialogRef.close()
  }

}
