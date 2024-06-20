import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component, EventEmitter, Input, Output } from '@angular/core';
import { Character } from '../../interfaces/character.interface';

@Component({
  selector: 'app-dbz-listado',
  templateUrl: './listado.component.html',
  styleUrl: './listado.component.css',
})
export class ListadoComponent { 
  public titulo:string ='LISTADO DE DBZ';

  @Input() 
  characterList: Character[] = [
  ]

  @Output()
  onDeletedCharacter: EventEmitter<string> = new EventEmitter();

  public emitIndex(id:string){
    this.onDeletedCharacter.emit(id);
  }

}
