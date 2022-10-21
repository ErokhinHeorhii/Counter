import React from 'react'
import { Navigate, Route, Routes } from 'react-router-dom'
import CounterRedax from './CounterRedax'
import SettingRedax from './Setting/SettingRedax'

export type PagesType = {
  
}

export enum EnumForRoutes {
  HOME = '/',
  COUNTER = '/counter',
  SETTINGS = '/setting'
}

function Pages(props: PagesType) {

 
  return (
    <div>
      <Routes>
        <Route path={EnumForRoutes.HOME} element={<Navigate to={EnumForRoutes.COUNTER} />} />
        <Route path={EnumForRoutes.COUNTER} element={(<CounterRedax/>)} />
        <Route path={EnumForRoutes.SETTINGS} element={<SettingRedax
          // onClickHandler={onClickHandler}
           />} />
      </Routes>
    </div>
  )
}

export default Pages
