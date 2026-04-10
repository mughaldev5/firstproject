import React from 'react'
const todokey = "reactTodo";

   export const getLocalStorageTodoData = () => {
      // is method se hum localstorage ma data ko store krty h ta k wo browser refresh hony k bad bhe na jay
   const rawTodo = localStorage.getItem(todokey);
   //is method se hum btaty h k agr data h to pass kr do wrna emty array hi return kr do ya is liy h k return JSON.parse(rawTodo) is method jb kon data ni milta to na rawtodo k bjay null ya undefine value get kr leta h to humary task to undefine ho gya too msla bn jay ga is liy hum ne is method ko use kiya 
   if(!rawTodo) return [];
   //const rawTodo = localStorage.getItem(todokey); is method se humain data string forment ma mily ga lakin humara initial data to ak array h to us method se hum data array forment ma mily ga 
   return JSON.parse(rawTodo)
  };
   export const setLocalStorageTodoData = (task) => {
      // localstorage ma data ko add krny k liy jo method istmal krty h or yahan jo setitem or getItem h ya localstorage ma data ko get krny k liy istmal hota h  or yahan jo todokey h us hum key k toor par istmal kr rhy h jo k ak string h or yahan json.stringify ya method ap k array ya object data ko string value ma tabdeel krta h q k yahan pe task ak array object h or yahan setItem btata h k mujh ma argoments pass krny k liy string value chahiy hoti h wo bs string value hi manta h 
   return localStorage.setItem(todokey, JSON.stringify(task))
  };



