import { createSlice } from "@reduxjs/toolkit";
import {hooksData} from './hooksData/hooksData';


type HookData = {
  hookName: string;
  shortDescription: string;
  description: string;
  parameters: {
    headers: string[]
    rows: string[][]
  },
  returnValues: {
     headers: string[]
    rows: string[][]
  },
  example:{
    code:string,
    language:string
  }
}



const initialState: HookData[] = hooksData;

const hookSlice = createSlice({
    name:"hooks",
    initialState,
    reducers: {
       
    }
});

export default hookSlice.reducer;