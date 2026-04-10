import React, { useState } from 'react'

const TodoForm = ({onAddTodo}) => {
//   User kya type kr rha h us ka data to humain chahiy is k liy hum state ko use kr rhy h ta k user jo be type kry wo humain mily or ya string value k liy h  
   //const [inputvalue, setInputvalue] = useState('')
   //ya Object k liy h jo object user pass kry ga 
   const [inputvalue, setInputvalue] = useState({})

     const handleInputChange = (value) => {
        // is se humain user jo bhe type kry ga too nechy jo hum ne onchange function targat kiya h us se ya emty useState String ko call kry ga is or pher emty setInputvalue ma value ko call kry ga too jo value hum ne type ki h wo humain mil jay gi
   //setInputvalue(value)   
  
   // yahan pe jo user object pass kr rha h us ka data h jo ma pass kiya h assal ma mujy object pass ni krna h mujy content pass krna h jo meri inputvalue k ander h or is content ma mera data h jo mujhy object ki sort ma mil rha h or jo value mil rhi h us ki id kya h or chacked jo property h wo true h ya false ya dekha giya h
   setInputvalue({id:value, content:value, checked:false})
  };

  
  const handleFormSubmit =(event) => {
    // ya method is liy h k jo hum form ma inpute form ka default behaviar h k jb bhe hum form ko submit krty hi form us input  ko automatic refresh kr deta h yaani input ko ghaib kr deta h too ya method usy default behaviar ko rukta h or is ki madad se hum us input ko one by one display krwa skty h q k ya method us input ko refresh ni hony dy ga
    event.preventDefault();

    // actual jis k ander hum data ko add kr rhy h humary array ma wo ya function h jo humary parent ma define h 
      onAddTodo(inputvalue)
      //ya method is liy h k user ne ak bar jo bhe value update kr di yaani add kr di too us ko formbar se htao usy khatm kr or ya bhe kam krta h k jo value ak bar add ho di usy dobara add na kroo or usy formbar se khatm kro ta k koi or value add ho sky 
      // it's use for singal value
      //setInputvalue("");

      //it is use for object
      setInputvalue({id:"", content:"", checked:false});
  }
  return (
    <section className='relative flex flex-row overflow-hidden'>

    {/* ya onSubmit hum pass kr rhy h wo is liy h k jb hum form ko submit krty h to hum ko sa event ko fire kr rhy h or is ka function uper define kiya howa h  */}
            <form onSubmit={handleFormSubmit} className='flex overflow-hidden' >
              <div className=' h-15 w-70 bg-blue-300 rounded-l-2xl '>
          <input type="text" className='flex items-center justify-center h-15 w-73 rounded-2xl outline-none '
          autoComplete='off'
          autoFocus='on' 
          // it's use for singal value 
          //value={inputvalue}

          // ya content k liy h or is ko add krny k liy jb hum form ko submit krty h to hum jo event fire kr rhy h wo uper h
          value={inputvalue.content}
          onChange={(e) => handleInputChange(e.target.value)}
           />
        </div>
        <div className='flex justify-center items-center h-15 w-20 bg-red-300 rounded-r-2xl '>
          <button type='submit'>Add Task</button>
        </div>
            </form>
          </section>
  )
}

export default TodoForm
