// import { createAsyncThunk } from "@reduxjs/toolkit"
// import { appSliceActions } from "./app-slice"
// import { eventAPI, gidsAPI, newAPI } from "../api/api"

// export const appSliceThunks = {
//   getEvents: createAsyncThunk('app/getEvents', async (_, {dispatch}) => {
//     try {
//       dispatch(appSliceActions.setEventsLoading(true))
//       const res = await eventAPI.getAll()

//       dispatch(appSliceActions.setEventsLoading(false))
      
//       return res.data
      
//     } catch (err: any) {
//       dispatch(appSliceActions.setEventsLoading(false))
//     }
//   }),

// }
