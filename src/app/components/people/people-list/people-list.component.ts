import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { CharacterService } from '../character.service';
import { Observable } from 'rxjs/Observable';

@Component({
  selector: 'app-character-list',
  templateUrl: './character-list.component.html',
  styleUrls: ['./character-list.component.scss']
})
export class CharacterListComponent implements OnInit {

  @Output() selectedCharacter: EventEmitter<string> = new EventEmitter<string>();
  $charactersJSON: Observable<{name: string, url: string}>;
  activeChar: string;

  constructor(private cs: CharacterService) { }

  ngOnInit() {
    this.$charactersJSON = this.cs.getCharacters();
  }

  handleCharSelection(character: {name: string; url: string}) {
    this.activeChar = character.name;
    this.selectedCharacter.emit(character.url);
  }

}
