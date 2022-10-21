import React, { ChangeEvent } from 'react';
import SuperButton from '../../c2-SuperButton/SuperButton';
import s from "./Setting.module.css"
import { NavLink } from 'react-router-dom';
import { EnumForRoutes } from '../Pages';
import { useDispatch, useSelector } from 'react-redux';
import { addMaxValueAC, addMinValueAC } from '../../../Redax/SettingReducer';
import { AppRootStateType, store } from '../../../storeRedax';
import { addMinCountAC } from '../../../Redax/CounterReducer';
import { saveState } from '../../../LocalStorage';

type SettingType = {
  // onClickHandler: () => void
}

const SettingRedax = (props: SettingType) => {

  const maxValue = useSelector<AppRootStateType, number>(state => state.value.maxValue)
  const minValue = useSelector<AppRootStateType, number>(state => state.value.minValue)
  const dispatch = useDispatch()

  let finalyClass;

  const onChangeHandlerForMax = (e: ChangeEvent<HTMLInputElement>) => {
    const maxValue = e.currentTarget.value
    dispatch(addMaxValueAC(Number(maxValue)))
  }

  const onChangeHandlerForMin = (e: ChangeEvent<HTMLInputElement>) => {
    const minValue = e.currentTarget.value
    Number(minValue) >= 0 && dispatch(addMinValueAC(Number(minValue)))
  }

  const onClickHandler = () => {

    store.subscribe(() => {
      saveState({ maxValue, minValue })
    })

    dispatch(addMinCountAC(minValue))
  }

  if (maxValue < minValue || minValue < 0 || maxValue === minValue) {
    finalyClass = s.input + "  " + s.error
  } else {
    finalyClass = s.input
  }

  return (<>
    <div className={s.Wrapper}>
      <div>
        <label> Max Value:
          <input value={maxValue.toString()} onChange={onChangeHandlerForMax}
            className={finalyClass} type="number" ></input>
        </label>
      </div>
      <div>
        <label> Min Value:
          <input value={minValue.toString()} onChange={onChangeHandlerForMin}
            className={finalyClass} type="number" ></input>
        </label>
      </div>
    </div>
    <div className={s.WrapperButton}>
      <NavLink className="navLink" to={EnumForRoutes.COUNTER} >
        <SuperButton onClick={onClickHandler} title={"set"}
          disabled={maxValue < minValue || minValue < 0 || maxValue === minValue}
        />
      </NavLink>
    </div>
  </>
  )
}
export default SettingRedax