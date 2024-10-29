import { configureStore } from "@reduxjs/toolkit";
import fiveDaysDatareducer from "./fiveDaysWeather"

const store= configureStore({
    reducer: {
    fiveDaysData:fiveDaysDatareducer}
})

export default store;