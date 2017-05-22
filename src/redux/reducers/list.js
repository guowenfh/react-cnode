// 管理页面的 prop 数据
import * as actions from '../actions/list';
const initialState = {
  topicList: [],
  listLoading:false,
  page:1,
  tabKey:'all',
}

export function topicList(state = initialState, action) {
    switch (action.type) {
      case actions.GET_LIST_REQUEST:
        return Object.assign({}, state, {
          listLoading: true,
          ...action.data
        });
      default:
          return state;
    }
}
