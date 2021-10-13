const reducer = (state, action) => {
    if (action.type === 'CLEAR_CART') {
        return {
         ...state,
        cart: []  
       } 
    }
    if (action.type === 'REMOVE') {
        return {
            ...state,
            cart: state.cart.filter(cartItem => cartItem.id !== action.payload)
        }
    }
    if (action.type === 'ADD') {
        let tempCart = state.cart.map(cartItem => {
            if (cartItem.id === action.payload) {
                return {
                    ...cartItem,
                    amount: cartItem.amount + 1
                }
            }
            return cartItem
        })
        return {
            ...state,
            cart: tempCart
        }
    }
    if (action.type === 'DECREASE') {
        let newCart = state.cart.map((cartItem) => {
            if (cartItem.id === action.payload) {
                return { ...cartItem, amount: cartItem.amount - 1 }
            }
            return cartItem
        }).filter((cartItem) => cartItem.amount !== 0)
        return {
            ...state,
            cart: newCart
        }
    }
    if (action.type === 'TOTAL') {
        // 这里的cartItem代表的的是cart中每一项的数据，代表每一个对象{}，对象里面包括所有的属性值
        //cartTotal代表着累加器
        let { total, amount } = state.cart.reduce((cartTotal, cartItem) => {
            const { price, amount } = cartItem
            const itemTotal = price * amount
            cartTotal.amount += amount
            cartTotal.total += itemTotal;
            return cartTotal
        }, { total: 0, amount: 0 })
        return {...state, total, amount}
    }

    if (action.type === 'LOADING') {
        return {...state, loading: true}
    }

    if (action.type === 'DISPLAY_ITEM') {
        return {
            ...state,
            cart: action.payload,
            loading: false
        }
    }
}

export default reducer