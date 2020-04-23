/**
 * 体重管理レコード
 */
export interface WeightRecord {
  date: Date;
  weight: number;
}

export type WeightRecordState = WeightRecord[];
export const initWeightRecordState: WeightRecordState = [];
