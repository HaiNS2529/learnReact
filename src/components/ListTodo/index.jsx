import React from "react";
import { useSelector } from "react-redux";

const ListTodo = () => {
  const listTodoData = useSelector((state) => state.listTodoReducer.listTodo);
  return (
    <div className="tw-text-[24px] tw-font-bold">
      <div>Danh sách việc cần làm</div>
      <div>
          {(listTodoData || []).map((item, index) => {
            return <li key={index}>{item}</li>;
          })}
      </div>
    </div>
  );
};
export default ListTodo;
