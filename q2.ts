// const axios = require("axios");
import axios from "axios";

//660612158 ศตคุณ นนทา 


/* assign interface/type to the function definition properly */
const getTodo = async (todoId: number) => {
  try{

    const res = await axios.get(`https://jsonplaceholder.typicode.com/todos/${todoId}`);
    const ress = await axios.get(`https://jsonplaceholder.typicode.com//users/${res.data.userId}`);

      return {

          owner: ress.data.name,
          title: res.data.title,
          completed: res.data.completed
      }

  }catch(err){

    return "INVALID TODO ID";

  }

};

//test case
const input1 = 15;
const input2 = 60;
const input3 = 250;

//run
getTodo(input1).then((result) => console.log(result));
getTodo(input2).then((result) => console.log(result));
getTodo(input3).then((result) => console.log(result));

export default getTodo;
