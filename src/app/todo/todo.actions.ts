import { Action } from '@ngrx/store';

export const AGREGAR_TODO = '[TODO] Agregar todo';
export const TOGGLE_TODO = '[TODO] Toggle todo';
export const EDITAR_TODO = '[TODO] Editar todo';
export const BORRAR_TODO = '[TODO] Borrar todo';
export const TOGGLE_ALL_TODO = '[TODO] Borrar All todo';
export const BORRAR_COMPLETADOS_TODO = '[TODO] Borrar todos los completados';

export class AgregarTodoAction implements Action {
  readonly type = AGREGAR_TODO;
  constructor( public payload: string) {}
}

export class ToggleTodoAction implements Action {
  readonly type = TOGGLE_TODO;
  constructor( public payload: number) {}
}

export class EditarTodoAction implements Action {
  readonly type = EDITAR_TODO;
  constructor( public payload: {texto: string, id: number}) {}
}

export class BorrarTodoAction implements Action {
  readonly type = BORRAR_TODO;
  constructor( public payload: number) {}
}

export class ToggleAllTodoAction implements Action {
  readonly type = TOGGLE_ALL_TODO;
  constructor( public payload: boolean) {}
}

export class BorrarAllTodoAction implements Action{
  readonly type = BORRAR_COMPLETADOS_TODO;
}

export type Acciones =  AgregarTodoAction |
                        ToggleTodoAction  |
                        EditarTodoAction  |
                        BorrarTodoAction  |
                        ToggleAllTodoAction|
                        BorrarAllTodoAction;
