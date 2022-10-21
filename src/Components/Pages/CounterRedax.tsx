import React from 'react';
import SuperButton from '../c2-SuperButton/SuperButton';
import '../../App.css';
import { NavLink } from 'react-router-dom';
import { EnumForRoutes } from './Pages';
import { addCountAC, resetCountAC } from '../../Redax/CounterReducer';
import { useSelector } from 'react-redux';
import { useDispatch } from 'react-redux';
import { AppRootStateType } from '../../storeRedax';


const CounterRedax = () => {

  const maxCount = useSelector<AppRootStateType, number>(state => state.value.maxValue)
  const startValue = useSelector<AppRootStateType, number>(state => state.value.minValue)
  const counter = useSelector<AppRootStateType, number>(state => state.counter.counter)
  const dispatch = useDispatch()

  console.log("startValue", startValue)
  console.log("counter", counter)

  const addCount = (maxCount: number) => {
    dispatch(addCountAC(maxCount))
  }

  const resetCounter = (startValue:number) => {
    dispatch(resetCountAC(startValue))
  }
  const wrapper = "wrapper-counter";
  const fullWrapper = "full"
  const classForWrapper = counter < maxCount ? wrapper : fullWrapper + " " + wrapper

  return (<>
    <div className={classForWrapper}>
      <div className="counter">
        {counter}
      </div>
    </div>
    <div className="wrapper-button">
      <SuperButton onClick={() => addCount(maxCount)} title={"add"}
        disabled={counter >= maxCount} >
      </SuperButton>
      <SuperButton onClick={()=>resetCounter(startValue)} title={"reset"}
        disabled={counter === startValue} >
      </SuperButton>
      <NavLink className="navLink" to={EnumForRoutes.SETTINGS} >
        <SuperButton title={"setting"} />
      </NavLink>
    </div>
  </>
  )
}
export default CounterRedax



// import React from 'react';
// import SuperButton from '../c2-SuperButton/SuperButton';
// import '../../App.css';
// import { NavLink } from 'react-router-dom';
// import { EnumForRoutes } from './Pages';
// import { StateType } from '../../Redax/CounterReducer';

// type CounterType = {
//   addCount: (maxCount: number) => void
//   counter: StateType
//   resetCounter: (startValue: number) => void
//   maxCount: number
//   startValue: number
// }




// const Counter = (props: CounterType) => {
//   const { addCount,
//     counter,
//     resetCounter,
//     maxCount,
//     startValue } = props


//   const wrapper = "wrapper-counter";
//   const fullWrapper = "full"
//   const classForWrapper = counter.counter < maxCount ? wrapper : fullWrapper + " " + wrapper

//   return (<>
//     <div className={classForWrapper}>
//       <div className="counter">
//         {counter.counter}
//       </div>
//     </div>
//     <div className="wrapper-button">
//       <SuperButton onClick={()=>addCount(maxCount)} title={"add"}
//         disabled={counter.counter === maxCount} >
//       </SuperButton>
//       <SuperButton onClick={()=>resetCounter(startValue)} title={"reset"}
//         disabled={counter.counter === startValue} >
//       </SuperButton>
//       <NavLink className="navLink" to={EnumForRoutes.SETTINGS} >
//         <SuperButton title={"setting"} />
//       </NavLink>
//     </div>
//   </>
//   )
// }
// export default Counter