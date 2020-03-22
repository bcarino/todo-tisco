
import * as firebase from 'firebase/app'
export class Todo {

    key: string
    name: string
    date: number | Date
    color:string
    icon:string
    success:boolean

    constructor(obj:any ={}) {
        this.key = obj.key || firebase.database().ref().child('todo').push().key
        this.name = obj.name || null
        this.date = obj.date ? new Date(obj.date) : null
        this.color = obj.color || "#FFFFFF"
        this.icon = obj.icon || null
        this.success = obj.success || false
    }

    static array(arr){
        return arr.map(e => new Todo(e))
    }

}