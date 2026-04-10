import React, { useState } from "react";
import TodoForm from "./TodoForm";
import TodoCard from "./TodoCard";
import {
  getLocalStorageTodoData,
  setLocalStorageTodoData,
} from "./TodoLocalStorage";
const Practice = () => {
  //is state ko hum ne is liy use kiya h ta k jo bhe user input ma type kry wo data ko store krny k liy is liy hum ne useState ma ak emty Array rkha h
  // const [task, setTask] = useState([]);

  // Such local storage has been used to store data
  const [task, setTask] = useState(() => getLocalStorageTodoData());

  const handleFormSubmit = (inputvalue) => {
    // ya jo hum ne destructured kiya h ya is liy h k pahly hum ak string value pass kr rhy thy lakin ab hum ak object pass kr rhy h
    const { id, content, checked } = inputvalue;

    // to check if the input field is emty or not
    //if(!inputvalue) return;

    // uper string value k tha ya abject k liy h  is ka kam to check if the input field is emty or not
    if (!content) return;

    // to check if the data is already existing or not but it is only define string value means singal velue
    //if(task.includes(inputvalue)) return;

    //ya object k liy h
    const ifTodoContentMatched = task.find(
      (curTask) => curTask.content == content,
    );
    if (ifTodoContentMatched) return;

    // ya object k liy h
    setTask((prevTask) => [...prevTask, { id, content, checked }]);
    //is method se ((prevTask) yaani user ne jo bhe data pahly rkha h means prev. us ko stor krta h or dosra ...prevTask, is ka mtlb bhe ya h k prev data ko wasy hi rkhy jesy wo h or ya inputvalue any waly data k liy h yaani user jo new data add kry ga ya singal value k liy h
    //setTask((prevTask) => [...prevTask, inputvalue]);
  };

  // todo add data to localstorage
  setLocalStorageTodoData(task);

  // delete todo function
  const handleDeleteForm = (value) => {
    // ya method jo element pe hum ne click kiya tha usy delete krny k liy task akk array h filter method humain kiyan return krta h jo value true ho  curTask !== value in ma se is ma curtak jo value hum ne click kiya yaani jo bhe apple ho ya jo value ho yaani hum ne bht si value add ki hui h un ma se hum ne delete krny k liy jis value pe click kiya h or is ma value wo h jo hum ne add ki hui h yaani hum ne apple mango ahmad add kiy howy h ya wo h or ya !== is ka kam hum ne jo value add ki hui h un ko iqual ni hony dena hum ne btiya h k filter method ka kiya kam h is liy !== method ka kam jo value hum ne click kiya h usy hi delete krna agr ya method na ho ga too jis value pe hum ne delete krny k liy click kiya h usy delete ni kry ga baki joo add h un ko kr dy ga is k lgany se filter method wo hi delete krny k liy slick kry ga jis pe hum ne click kiya h
    // it's use for singal value
    //const updatedTask = task.filter((curTask) => curTask !== value);

    //it's use for object
    const updatedTask = task.filter((curTask) => curTask.content !== value);
    // is method ka kam filter se jo value humain mil k updatetask ma ati h usy delete kry
    setTask(updatedTask);
  };
  // all clear todo function
  const handleClearForm = () => {
    // is method se joo value array ma store hui h usy delete kry
    setTask([]);
  };

  //todo handleCheckedTodo functionality
  const handleCheckedTode = (value) => {
    const updatedTask = task.map((curTask) => {
      if (curTask.content == value) {
        return { ...curTask, checked: !curTask.checked };
      } else {
        return curTask;
      }
    });
    setTask(updatedTask);
  };

  return (
    <section className="relative flex flex-col justify-center items-center h-1/2 w-80 m-7 ">
      <header>
        <h1>Todo List</h1>
      </header>
      <TodoForm onAddTodo={handleFormSubmit} />
      <section>
        <div>
          {task.map((curTask) => (
            <TodoCard
              // it's use singal value
              // key={curTask.index}

              // it's use object
              key={curTask.id}
              // it's use singal value
              // data={curTask}

              // it's use object
              data={curTask.content}
              // pass checked becouse value it's true or false
              checked={curTask.checked}
              onDelete={handleDeleteForm}
              onChecked={handleCheckedTode}
            />
          ))}
        </div>
      </section>
      <section>
        <button
          className="flex justify-center items-center h-12 w-20 bg-red-500 text-white rounded-2xl mt-4"
          onClick={handleClearForm}
        >
          Clear all
        </button>
      </section>
    </section>
  );
};

export default Practice;
