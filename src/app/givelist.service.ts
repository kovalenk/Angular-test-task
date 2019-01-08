import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class GivelistService {

  constructor(private http: HttpClient) {
  }

  getData() {
    return this.http.get('assets/test.json');
  }

  // listViewCreate() {
  //   return new Promise(resolve => {
  //     // make new Promise
  //     this.getData().subscribe((res: any[]) => {
  //       // get all stories id list
  //       Promise.all(res).then(items => {
  //         // waiting for 'requests' generation
  //         resolve({
  //           total: res.length, // return all stories length
  //           items: items, // return information array
  //         });
  //       });
  //     });
  //   });
  // }
}
