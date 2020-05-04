import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { peopleService } from '../people.service';
import { Observable } from 'rxjs/Observable';

@Component({
  selector: 'app-people-list',
  templateUrl: './people-list.component.html',
  styleUrls: ['./people-list.component.scss']
})
export class PeopleListComponent implements OnInit {

  @Output() selectedPeople: EventEmitter<string> = new EventEmitter<string>();
  $peopleJSON: Observable<{name: string, url: string}>;
  activeChar: string;

  constructor(private cs: PeopleService) { }

  ngOnInit() {
    this.$peopleJSON = this.cs.getPeople();
  }

  handleCharSelection(people: {name: string; url: string}) {
    this.activeChar = people.name;
    this.selectedpeople.emit(people.url);
  }

}
