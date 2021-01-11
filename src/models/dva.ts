import { list } from '@/services/list';

export default {
  namespace: 'dva',
  state: {
    list: [],
  },
  effects: {
    *list({payload, callback}, {put, call}) {
      const response = yield call(list, payload);
      yield put({
        type: 'listReducer',
        payload: response,
      });
      if (callback) {
        callback();
      }
    }
  },
  reducers: {
    listReducer(state, action) {
      return {
        ...state,
        list: action.payload,
      }
    }
  }
}
