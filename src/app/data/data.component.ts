import {Component, OnInit} from '@angular/core';
import {GivelistService} from '../givelist.service';

@Component({
  selector: 'app-data',
  templateUrl: './data.component.html',
  styleUrls: ['./data.component.scss']
})
export class DataComponent implements OnInit {

  page_current = 1;
  per_page = 15;
  items_length: any;

  items: any;
  current_array: any;
  table_title = [
    {
      title: 'Event Id',
      class: 'x1'
    },
    {
      title: 'Event Name',
      class: 'x3'
    },
    {
      title: 'Section',
      class: 'x2'
    },
    {
      title: 'Venue',
      class: 'x1'
    },
    {
      title: 'Price',
      class: 'x1'
    },
    {
      title: 'Nominal Price',
      class: 'x2'
    },
    {
      title: 'Currency',
      class: 'x1'
    },
    {
      title: 'Date',
      class: 'x1'
    },
    {
      title: 'Available',
      class: 'x1'
    },
    {
      title: 'Published',
      class: 'x1'
    },
    {
      title: 'Start',
      class: 'x1'
    },
    {
      title: 'Notif.',
      class: 'x1'
    },
    {
      title: 'All Sectors',
      class: 'x1'
    },
    {
      title: 'Targeting by venue area',
      class: 'x3'
    },
    {
      title: 'Ignore Notes',
      class: 'x1'
    },
    {
      title: 'Min Price',
      class: 'x1'
    },
    {
      title: 'Max Price',
      class: 'x1'
    },
    {
      title: 'Index',
      class: 'x1'
    },
    {
      title: 'Min tickets',
      class: 'x1'
    },
  ];

  constructor(private service: GivelistService) {
  }

  ngOnInit() {

    this.service.getData().subscribe((res: any) => {
      console.log(res);

      this.items_length = res.result.length;
      this.items = res.result;
      this.listViewCreate(this.page_current, this.per_page);
    });

  }

  listViewCreate(begin: number, end: number) {
    this.current_array = this.items.slice(begin - 1, end);
    console.log(this.current_array);
  }
}

