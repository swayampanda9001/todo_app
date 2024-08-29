import React from "react";

const Card = ({ heading, description, deleteTodo, editTodo }) => {
  return (
    <div className="w-[200px] bg-gray-200 p-4 rounded-lg">
      <h1 className="text-xl font-semibold">{heading}</h1>
      <p className="">{description}</p>
      <div className="mt-4 flex items-center gap-4">
        <button onClick={editTodo} className="py-2 px-4 bg-gray-500 text-white rounded-lg">Edit</button>
        <button onClick={deleteTodo} className="py-2 px-4 bg-red-500 text-white rounded-lg">Delete</button>
      </div>
    </div>
  );
};

export default Card;
