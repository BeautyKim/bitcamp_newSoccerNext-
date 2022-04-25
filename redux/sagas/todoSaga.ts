import { PayloadAction } from '@reduxjs/toolkit'
import { call, put, takeEvery, takeLatest } from 'redux-saga/effects'
import { todoActions } from '../../redux/reducers/todoReducer.ts';
import { postTodo } from '../api/todoApi.ts'

interface TodoType{
    type: string;
    payload: {userid: string, task: string, completed: string}
}
interface TodoSuccessType{
    type: string;
    payload: {
        userid: string
    }
}
function* todo(user: TodoType){
    try{
        alert(' 진행3: saga내부 join 성공' + JSON.stringify(user))
        const response : TodoSuccessType = yield postTodo(user.payload)
        yield put(todoActions.todoSuccess(response))
    }catch(error){
         alert(' *** saga내부 join 실패 *** ')
         yield put(todoActions.todoFailure(error))
    }
}
export function* watchTodo(){
    yield takeLatest(todoActions.todoRequest, todo)
}