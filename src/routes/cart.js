import {Table} from 'react-bootstrap'
import { useDispatch, useSelector } from 'react-redux';
import {increase, removeItem} from './../store.js'

function Cart(){

  let state = useSelector((state)=> state)
  let dispatch = useDispatch()
    return(
      
<Table>
  <thead>
    <tr>
      <th>#</th>
      <th>상품명</th>
      <th>수량</th>
      <th>추가</th>
      <th>삭제</th>
    </tr>
  </thead>
  <tbody>
   { 
   state.cart.map(function(item, i){
      return(
    <tr key={i}>
      <td>{state.cart[i].id}</td>
      <td>{state.cart[i].name}</td>
      <td>{state.cart[i].count}</td>
      <td>
        <button onClick={()=>{
          dispatch(increase(state.cart[i].id))
        }}>+</button>
      </td>
      <td>
        <button onClick={()=>{
          dispatch(removeItem(state.cart[i].id))
        }}>-</button>
      </td>
    </tr>
   )} )}
  </tbody>
</Table> )}

export default Cart;