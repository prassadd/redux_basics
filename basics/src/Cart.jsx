import {useSelector,useDispatch} from 'react-redux'
import {add,getData} from './slice'
import { useEffect } from 'react'
const Cart = () => {
    const data = useSelector((state) => state.cart)
    console.log(data)
    const dispatch = useDispatch()
    useEffect(()=>{
        dispatch(getData())
    },[])
  return (
    <div onClick={()=>dispatch(add({name:'raj',id:2}))}>
      hhj
    </div>
  )
}

export default Cart
