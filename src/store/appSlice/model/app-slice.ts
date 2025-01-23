import { 
  createSlice, 
  // PayloadAction 
} from "@reduxjs/toolkit"
import { appInitContent, AppSliceType } from "../types/app-types"

const appSlice = createSlice({
    name: 'app-slice',
    initialState: appInitContent as AppSliceType,
    reducers: {
      // setEventsLoading: (state: AppSliceType, action: PayloadAction<boolean>) => {
      //   state.isEventsLoading = action.payload
      // },
            
    },

    extraReducers: builder => {

      // builder.addCase(appSliceThunks.getEvents.fulfilled, 
      //   (state: AppSliceType, action: PayloadAction<GetAllEventThunkResType[]>) => {
          
      //   if (action.payload && action.payload.length > 0) {
      //     state.events = [...action.payload]
      //       .sort((a,b) => a.date < b.date ? 1 : -1)
      //       .map(el => {
      //         return {...el, photo: el.ePreviewPhoto}
      //       })
      //   }
        
      // }),

    }
    
  })

export const appSliceActions = appSlice.actions
export const appSliceReducer = appSlice.reducer
