import { Action } from "redux";
import { WeightRecord } from "./types";

export enum WeightRecordActionType {
  REGISTER = "@weight-record/register",
}

export interface WeightRecordAction
  extends Action<typeof WeightRecordActionType.REGISTER> {
  record: WeightRecord;
}

export const register = (record: WeightRecord): WeightRecordAction => ({
  type: WeightRecordActionType.REGISTER,
  record,
});
