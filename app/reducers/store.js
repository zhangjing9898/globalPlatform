import * as actionTypes from '../constants/store'

const initialState = [];

export default function store(state = initialState,action) {
  switch (action.type){
    case actionTypes.STORE_UPDATE:
      return action.data;
    case actionTypes.STORE_ADD:
      /*arrayObject.unshift(newelement1,newelement2,....,newelementX)
      * unshift() 方法可向数组的开头添加一个或更多元素，并返回新的长度。
      * */
      state.unshift(action.data);
      return state;
    case actionTypes.STORE_RM:
      /*
      * filter() 方法创建一个新的数组，新数组中的元素是通过检查指定数组中符合条件的所有元素。
      * */
      return state.filter(item=>{
        if(item.id!==action.data.id)
        {
          return item
        }
      })
    default:
      return state;
  }
}
