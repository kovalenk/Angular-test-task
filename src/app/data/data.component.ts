import { Component, OnInit } from '@angular/core';
import {GivelistService} from '../givelist.service';

@Component({
  selector: 'app-data',
  templateUrl: './data.component.html',
  styleUrls: ['./data.component.scss']
})
export class DataComponent implements OnInit {

  constructor( private service: GivelistService,) { }

  ngOnInit() {

    this.service.getData().subscribe((res: any[]) => {
      console.log(res);

    });

    // this.service.listViewCreate().then(data => {
    //   // console.log(data);
    // });
  }

}
