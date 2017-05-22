/**
 * Created by Administrator on 2016/7/2.
 */
import request from 'config/fetch';

export const GET_LIST_REQUEST = 'GET_LIST_REQUEST';
export const GET_LIST_SUCCESS = 'GET_LIST_SUCCESS';
export const GET_LIST_FAILED = 'GET_LIST_FAILED';
export const CHANGE_TAB = 'CHANGE_TAB';
export function get_topics(data){
  //发送请求前
  return (dispatch)=>{
    dispatch({
      type: GET_LIST_REQUEST,
      data: data
    });
    request({
      api: 'get_topics',
      params: {
        tab : data.tab,
        page: data.page,
        limit: 10 // 每一页字数
      }
    }).then(res => {
      dispatch({
        type: GET_LIST_SUCCESS,
        data: Object.assign({},data,res)
      });
    }).catch(err => {
      dispatch({
        type: GET_LIST_FAILED,
        data: err
      });
    });
  }
}
export function changeTab(tabKey) {
  return {
    type: CHANGE_TAB,
    data: tabKey
  };
}
