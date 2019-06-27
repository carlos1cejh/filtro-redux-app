import { Component, OnInit, Input, ViewChild, ElementRef } from '@angular/core';
import { Todo } from '../model/todo.model';
import { FormControl, Validators } from '@angular/forms';
import { Store } from '@ngrx/store';
import { AppState } from 'src/app/app.reducers';
import * as fromTodo from '../todo.actions';


@Component({
  selector: 'app-todo-item',
  templateUrl: './todo-item.component.html',
  styles: []
})
export class TodoItemComponent implements OnInit {

  @Input() todo: Todo;
  @ViewChild('txtInputFisico', {static: false}) txtInputFisico: ElementRef;

  chkField: FormControl;
  txtInput: FormControl;
  editando: boolean;

  constructor( private store: Store<AppState>) { }

  ngOnInit() {
    this.chkField = new FormControl(this.todo.completado);
    this.txtInput = new FormControl(this.todo.texto, Validators.required);

    this.chkField.valueChanges.subscribe( () => {
      this.store.dispatch(new fromTodo.ToggleTodoAction(this.todo.id));
    });
  }

  editar() {
    this.editando = true;
    setTimeout( () =>{
      this.txtInputFisico.nativeElement.focus();
    }, 1);

  }

  terminarEdicion() {
    this.editando = false;

    if (this.txtInput.invalid) {
      return;
    }

    if (this.txtInput.value === this.todo.texto){
      return;
    }

    this.store.dispatch(new fromTodo.EditarTodoAction({texto: this.txtInput.value, id: this.todo.id}));
  }

  borrarTodo() {
    this.store.dispatch(new fromTodo.BorrarTodoAction(this.todo.id));
  }

}
