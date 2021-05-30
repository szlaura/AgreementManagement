import { Injectable } from '@angular/core';
import { AngularFirestore, CollectionReference, Query } from '@angular/fire/firestore';
import { convertTimestampsPipe } from 'convert-firebase-timestamp';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class CrudService<T extends { id?: string }> {

  constructor(private afs: AngularFirestore) { }

  get(collectionName: string): Observable<T[]> {
    return this.afs.collection(collectionName, ref => {
      let query: CollectionReference | Query = ref;
      query = query.orderBy('name', 'asc');
      return query;
    }).valueChanges() as Observable<T[]>;
  }

  getid(collectionName: string): Observable<T[]> {
    return this.afs.collection(collectionName, ref => {
      let query: CollectionReference | Query = ref;
      query = query.orderBy('description', 'desc');
      return query;
    }).valueChanges() as Observable<T[]>;
  }

  getstartatlimit(collectionName: string) {
    return this.afs.collection(collectionName,
      ref => {
        let query: CollectionReference | Query = ref;
        query = query.orderBy('name').startAt("Agreement").limit(3);
        return query;
      }).valueChanges() as Observable<T[]>;
  }


  async add(collectionName: string, data: T, id?: string): Promise<string> {
    const uid = id ? id : this.afs.createId();
    data.id = uid;
    await this.afs.collection(collectionName).doc(uid).set(data);
    return uid;
  }

  getById(collectionName: string, id: string): Observable<any> {
    return this.afs.collection(collectionName).doc(id).snapshotChanges().pipe(
      map(doc => doc.payload.data()),
      convertTimestampsPipe(),
  );
  }

  update(collectionName: string, id: string, data: T): Promise<void> {
    return this.afs.collection(collectionName).doc(id).update(data).then(
      result => { console.log(result); }, err => { console.log(err); }).finally(() => { console.log('finally'); });
  }

  delete(collectionName: string, id: string): Promise<void> {
    return this.afs.collection(collectionName).doc(id).delete();
  }

}
