
const products = [
    {
        id: 1,
        title: 'велосипед',
        price: 4500,
        discount: 0.07,
        show: true
    },
    {
        id: 2,
        title: 'самокат',
        price: 3000,
        discount: 0.15,
        show: true
    },
    {
        id: 3,
        title: 'лыжи',
        price: 7200,
        discount: 0.50,
        show: true
    },
    {
        id: 4,
        title: 'ролики',
        price: 2000,
        show: true
    },
]

function getFinalPrice({price, discount}){
    return price - price * (discount || 0)
}


const PRODUCTS_SORT = 'PRODUCTS_SORT'
const PRODUCTS_ADD = 'PRODUCTS_ADD'
const PRODUCTS_FILTER = 'PRODUCTS_FILTER'

export const productsSortAction = (payload) => (
    {
        type: PRODUCTS_SORT,
        payload
    }
) 

export const productsAddAction = (payload) => (
    {
        type: PRODUCTS_ADD,
        payload
    }
) 

export const productsFilterAction = (payload) => (
    {
        type: PRODUCTS_FILTER,
        payload
    }
) 


export const productReducer = (state = products, {type, payload}) => {
    if(type === PRODUCTS_SORT){
        if(payload === 'price'){
            const newState = [...state.sort((a,b) => getFinalPrice(a) - getFinalPrice(b))]
            return newState
        }else{
            const newState = [...state.sort((a,b) => {
                if(a.title<b.title){
                    return -1
                }else return 1
            })]
            return newState
        }
    }

    if(type === PRODUCTS_ADD){
        return [...state, payload]
    }
    
    if(type === PRODUCTS_FILTER){
        return state.map(item => (
            {
                ...item,
                show: item.title.toLowerCase().startsWith(payload.toLowerCase())
            }
        ))
    }

    return state

}
