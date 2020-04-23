import { Reducer, combineReducers } from "redux";
import { WeightRecordState, initWeightRecordState } from "./types";
import { WeightRecordActionType, WeightRecordAction } from "./actions";
import { Selector } from "react-redux";

const weightRecords: Reducer<WeightRecordState, WeightRecordAction> = (
  state,
  action
) => {
  if (!state) {
    return initWeightRecordState;
  }
  switch (action.type) {
    case WeightRecordActionType.REGISTER:
      const newState = state.slice();
      newState.push(action.record);
      return newState;
    default:
      return state;
  }
};

const rootReducer = combineReducers({
  weightRecords,
});

export type RootState = ReturnType<typeof rootReducer>;

export default rootReducer;
