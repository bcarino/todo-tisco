import { Injectable } from '@angular/core';
import * as firebase from 'firebase/app'
import { isDate } from 'util';


@Injectable({
  providedIn: 'root'
})
export class SharedService {

  constructor() { }

  toSaveData(data) {
    let obj:any ={}
    if(data.createDate){
      data['updateDate']=firebase.database.ServerValue.TIMESTAMP
    }else{
      data['createDate']=firebase.database.ServerValue.TIMESTAMP
    }
    Object.assign(obj,data)
    Object.entries(obj).forEach(([key, value]) => {
      if (isDate(value)) {
        obj[key] = Number(value)
      }
    });
    return obj
  }

}
