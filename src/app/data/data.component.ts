import {Component, OnInit} from '@angular/core';
import {GivelistService} from '../givelist.service';

@Component({
  selector: 'app-data',
  templateUrl: './data.component.html',
  styleUrls: ['./data.component.scss']
})
export class DataComponent implements OnInit {

  current_el = 0;
  last_el = 15;
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
      class: 'x3'
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

  summaries = ['20', '25', '30', '35', '40', '45', '50'];
  constructor(private service: GivelistService) {
  }

  ngOnInit() {

    this.service.getData().subscribe((res: any) => {
      this.items_length = res.result.length;
      this.items = res.result;
      this.listViewCreate(this.current_el, this.per_page);
    });

  }

  listViewCreate(begin: number, end: number) {
    this.current_el = begin;
    this.last_el = end;
    this.current_array = this.items.slice(begin, end);
  }

}

