import { configureStore } from "@reduxjs/toolkit"
import nameTrainer from './Slices/nameTrainer.slice'

export default configureStore({

    reducer: {
        nameTrainer
    }
})

//configure store is a property coming from @reduxjs/toolkit but I use the destructuring to access the property that I need. 

//I export the property configureStore that has a parameter with the property reducer.