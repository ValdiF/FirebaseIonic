import { Injectable } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/compat/auth';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(public afAuth: AngularFireAuth) { }

  registerUser(email: any, password: any){
    return this.afAuth.createUserWithEmailAndPassword(email,password);
    }

  loginUser(email: any, password: any){
    return this.afAuth.signInWithEmailAndPassword(email, password);
    }
}
