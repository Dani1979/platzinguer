import { Injectable } from '@angular/core';
import { User } from '../interfaces/user';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  friends: User[];
  constructor() {

    this.friends = [
      {nick: 'Eduardo', subnick: 'Mi mensaje personal', status: 'online', age: 28, email: 'eduardo@platzi.com', friend: true, uid: 1},
      {nick: 'Yuliana', subnick: 'Mi mensaje personal', status: 'busy', age: 25, email: 'yuliana@platzi.com', friend: true, uid: 2},
      {nick: 'Freddy', subnick: 'Mi mensaje personal', status: 'away', age: 28, email: 'freddy@platzi.com', friend: false, uid: 3}, 
      {nick: 'Walter', subnick: 'Mi mensaje personal', status: 'online', age: 30, email: 'walter@platzi.com', friend: false, uid: 4},
      {nick: 'Virginia', subnick: 'Mi mensaje personal', status: 'online', age: 30, email: 'virginia@platzi.com', friend: false, uid: 5}
    ]
   }

   getFriends() {
     return this.friends;
   }
}
