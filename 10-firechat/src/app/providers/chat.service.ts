import { Injectable } from '@angular/core';
import { AngularFirestoreCollection, AngularFirestore } from '@angular/fire/firestore';
import { AngularFireAuth } from '@angular/fire/auth';
import { auth } from 'firebase/app';

import { Mensaje } from '../interface/mensaje.interface';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class ChatService {

  private itemsCollection: AngularFirestoreCollection<Mensaje>;

  public chats: Mensaje[] = [];
  public usuario: any = {};

  constructor(private afs: AngularFirestore, public afAuth: AngularFireAuth) {
    this.afAuth.authState.subscribe((user: any) => {
      if (!user) {
        return;
      }
      console.log("Usuario Auth", user);
      this.usuario.nombre = user.displayName;
      this.usuario.uid = user.uid;
      console.log(this.usuario);
    });
  }

  login(proveedor: string) {
    switch (proveedor) {
      case "google":
        this.afAuth.auth.signInWithPopup(new auth.GoogleAuthProvider());
        break;
      case "twitter":
        this.afAuth.auth.signInWithPopup(new auth.TwitterAuthProvider());
        break;
    }
  }
  logout() {
    this.usuario = {};
    this.afAuth.auth.signOut();
  }

  cargarMensajes() {

    this.itemsCollection = this.afs.collection<Mensaje>('chats', ref => ref.orderBy("fecha", "desc")
      .limit(5)
    );

    return this.itemsCollection.valueChanges()
      .pipe(
        map((mensajes: Mensaje[]) => {

          mensajes.reverse();

          this.chats = mensajes;
        })
      );
  }

  agregarMensaje(texto: string) {
    // TODO falta enviar el uid
    const mensaje: Mensaje = {
      nombre: this.usuario.nombre,
      mensaje: texto,
      fecha: new Date().getTime(),
      uid: this.usuario.uid
    };

    return this.itemsCollection.add(mensaje);
  }

}
