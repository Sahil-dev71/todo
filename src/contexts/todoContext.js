import { createContext, useContext } from "react";

export const TodoContext=createContext(
  {  todos:[{
        id:1,
        todo:"Any Msg",
        completed:false,
    }],
    addTodo:()=>{},
    updateTodo:()=>{},
    deleteTodo:()=>{},
   toggleComplete:()=>{},
  }
                               )
export const TodoProvider=TodoContext.Provider;
export function useTodo(){
    return useContext(TodoContext);
}
