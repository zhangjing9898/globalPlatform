import { get } from '../get'
import { post } from  '../post'

export function getOrderListData(username) {
  const result = get('/api/orderlist/'+username);
  return result;
}

export function postComment(id,comment) {
  console.log("postComment1");
  const result = post('/api/submitComment',{
    id:id,
    comment:comment
  })
  console.log("postComment2");
  console.log(result);
  console.log("postComment3");
  return result
}
