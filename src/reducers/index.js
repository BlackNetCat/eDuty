const initialSate = {
    duties: [
        // {id:1, name: 'Morning ', type: 'easy'},
        // {id:2, name: 'Day ', type: 'advance'},
        // {id:3, name: 'Night ', type: 'advance'}
    ]
};

const reducer = (state = initialSate, action) => {
    switch (action.type) {
        case 'DUTIES_LOADED' :
            return {
                duties: action.payload
            };
        default: 
        return state;
    }    
};

export default reducer;