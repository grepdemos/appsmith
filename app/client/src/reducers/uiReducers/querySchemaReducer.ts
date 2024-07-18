import { createImmerReducer } from "utils/ReducerUtils";
import type { ReduxAction } from "@appsmith/constants/ReduxActionConstants";
import { ReduxActionTypes } from "@appsmith/constants/ReduxActionConstants";

export interface ColumnMeta {
  isSelected: boolean;
  binding: string;
}

export type Columns = Record<string, ColumnMeta>;

export interface QuerySchema {
  meta: Record<string, Columns>;
}

const initialState: QuerySchema = {
  meta: {},
};

const reducer = createImmerReducer(initialState, {
  [ReduxActionTypes.SET_QUERY_SCHEMA_COLUMNS]: (
    draftState: QuerySchema,
    action: ReduxAction<{ id: string; columns: Columns }>,
  ) => {
    draftState.meta[action.payload.id] = action.payload.columns;
  },
  [ReduxActionTypes.UPDATE_QUERY_SCHEMA_COLUMN]: (
    draftState: QuerySchema,
    action: ReduxAction<{ id: string; columnName: string; column: ColumnMeta }>,
  ) => {
    draftState.meta[action.payload.id][action.payload.columnName] =
      action.payload.column;
  },
});

export default reducer;