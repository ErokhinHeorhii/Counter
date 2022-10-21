import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import './App.css';
import Pages from './Components/Pages/Pages';

function AppRedax() {
  // let maxValueFromLS = localStorage.getItem("maxValue")
  // let minValueFromLS = localStorage.getItem("minValue")

  // let maxValueAfterCheck = maxValueFromLS ? JSON.parse(maxValueFromLS) : 5
  // let minValueAfterCheck = minValueFromLS ? JSON.parse(minValueFromLS) : 0

  // const [maxValue, setMaxValue] = useState<number>(maxValueAfterCheck);
  // const [value, dispatchValue] = useReducer(SettingReducer, { maxValue: 5, minValue: 0 });
  // const [counter, dispatchCounter] = useReducer(CounterReducer, { counter: value.minValue })

  // const startValue = value.minValue;
  // const maxCount = value.maxValue;

  // const onChangeHandlerForMax = (e: ChangeEvent<HTMLInputElement>) => {
  //   const maxValue = e.currentTarget.value
  //   // setMaxValue(+valueMax)
  //   dispatchValue(addMaxValueAC(+maxValue))
  // }

  // const onChangeHandlerForMin = (e: ChangeEvent<HTMLInputElement>) => {
  //   const minValue = e.currentTarget.value
  //   // setMinValue(+valueMin)
  //   dispatchValue(addMinValueAC(+minValue))
  // }

  // const onClickHandler = () => {
  //   localStorage.setItem("minValue", JSON.stringify(value.minValue))
  //   localStorage.setItem("maxValue", JSON.stringify(value.maxValue))
  //   // setCounter(minValue)
  // }

  // const addCount = (maxCount: number) => {
  //   dispatchCounter(addCountAC(maxCount))
  // }

  // const resetCounter = (startValue: number) => {
  //   dispatchCounter(resetCountAC(startValue))
  // }
  return (
    <div className="wrapper">
      <BrowserRouter>
        <Pages/>
      </BrowserRouter>
    </div>
  );
}

export default AppRedax;




// import React, { ChangeEvent, useReducer, } from 'react';
// import { BrowserRouter } from 'react-router-dom';
// import './App.css';
// import Pages from './Components/Pages/Pages';
// import { addCountAC, CounterReducer, resetCountAC } from './Redax/CounterReducer';
// import { addMaxValueAC, addMinValueAC, SettingReducer } from "./Redax/SettingReducer"

// function AppReduser() {
//   // let maxValueFromLS = localStorage.getItem("maxValue")
//   // let minValueFromLS = localStorage.getItem("minValue")

//   // let maxValueAfterCheck = maxValueFromLS ? JSON.parse(maxValueFromLS) : 5
//   // let minValueAfterCheck = minValueFromLS ? JSON.parse(minValueFromLS) : 0

//   // const [maxValue, setMaxValue] = useState<number>(maxValueAfterCheck);
//   const [value, dispatchValue] = useReducer(SettingReducer, { maxValue: 5, minValue: 0 });
//   const [counter, dispatchCounter] = useReducer(CounterReducer, { counter: value.minValue })

//   const startValue = value.minValue;
//   const maxCount = value.maxValue;

//   const onChangeHandlerForMax = (e: ChangeEvent<HTMLInputElement>) => {
//     const maxValue = e.currentTarget.value
//     // setMaxValue(+valueMax)
//     dispatchValue(addMaxValueAC(+maxValue))
//   }

//   const onChangeHandlerForMin = (e: ChangeEvent<HTMLInputElement>) => {
//     const minValue = e.currentTarget.value
//     // setMinValue(+valueMin)
//     dispatchValue(addMinValueAC(+minValue))
//   }

//   const onClickHandler = () => {
//     localStorage.setItem("minValue", JSON.stringify(value.minValue))
//     localStorage.setItem("maxValue", JSON.stringify(value.maxValue))
//     // setCounter(minValue)
//   }

//   const addCount = (maxCount: number) => {
//     dispatchCounter(addCountAC(maxCount))
//   }

//   const resetCounter = (startValue: number) => {
//     dispatchCounter(resetCountAC(startValue))
//   }
//   return (
//     <div className="wrapper">
//       <BrowserRouter>
//         <Pages
//           addCount={addCount}
//           resetCounter={resetCounter}
//           counter={counter}
//           maxCount={maxCount}
//           startValue={startValue}
//           onChangeHandlerForMax={onChangeHandlerForMax}
//           onChangeHandlerForMin={onChangeHandlerForMin}
//           onClickHandler={onClickHandler}
//           maxValue={value.maxValue}
//           minValue={value.minValue}
//         />
//       </BrowserRouter>
//     </div>
//   );
// }

// export default AppReduser;


// import React, { ChangeEvent, useReducer, useState } from 'react';
// import { BrowserRouter } from 'react-router-dom';
// import './App.css';
// import Pages from './Components/Pages/Pages';
// import { addCountAC, CounterReduser, resetCountAC } from './Redax/CounterReducer';

// function App() {
//   let maxValueFromLS = localStorage.getItem("maxValue")
//   let minValueFromLS = localStorage.getItem("minValue")

//   let maxValueAfterCheck = maxValueFromLS ? JSON.parse(maxValueFromLS) : 5
//   let minValueAfterCheck = minValueFromLS ? JSON.parse(minValueFromLS) : 0


//   const [maxValue, setMaxValue] = useState<number>(maxValueAfterCheck);
//   const [minValue, setMinValue] = useState<number>(minValueAfterCheck);
//   const [counter, dispatchCounter] = useReducer(CounterReduser, minValue)

//   const startValue = minValue;
//   const maxCount = maxValue;

//   const onChangeHandlerForMax = (e: ChangeEvent<HTMLInputElement>) => {
//     const valueMax = e.currentTarget.value
//     // if(valueMax)
//     setMaxValue(+valueMax)
//   }

//   const onChangeHandlerForMin = (e: ChangeEvent<HTMLInputElement>) => {
//     const valueMin = e.currentTarget.value
//     setMinValue(+valueMin)
//   }

//   const onClickHandler = () => {
//     localStorage.setItem("minValue", JSON.stringify(minValue))
//     localStorage.setItem("maxValue", JSON.stringify(maxValue))
//     // setCounter(minValue)
//   }

//   const addCount = (maxCount: number) => {
//     dispatchCounter(addCountAC(maxCount))
//   }

//   const resetCounter = (startValue: number) => {
//     dispatchCounter(resetCountAC(startValue))
//   }

//   return (
//     <div className="wrapper">
//       <BrowserRouter>
//         <Pages
//           // addCount={addCount}
//           // resetCounter={resetCounter}
//           counter={counter}
//           maxCount={maxCount}
//           startValue={startValue}
//           onChangeHandlerForMax={onChangeHandlerForMax}
//           onChangeHandlerForMin={onChangeHandlerForMin}
//           onClickHandler={onClickHandler}
//           maxValue={maxValue}
//           minValue={minValue}
//         />
//       </BrowserRouter>
//     </div>
//   );
// }

// export default App;

