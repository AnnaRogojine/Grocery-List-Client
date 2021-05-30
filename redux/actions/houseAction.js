export const FETCH_HOUSES = 'FETCH_HOUSES';
export const CREATE_HOUSES = 'CREATE_HOUSES';
export const DELETE_LIST= 'DELETE_LIST';
export const DELETE_ITEM= 'DELETE_ITEM';

export const fetchHouses = (CustumerID) => {
    return async dispatch => {
        
    
        // logic to fetch houses from API
        const result = await fetch(`http://192.168.1.21:3000/api/houses/ByCustumerId/${CustumerID}`);
       

        const resultData = await result.json();
        dispatch({
            type: FETCH_HOUSES,
            payload: resultData
        });
    }
}

export const createHome = ({CustumerID,ListName,items}) => {
    

    return async dispatch => {
        const response = await fetch('http://192.168.1.21:3000/api/houses', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                CustumerID,
                ListName,
                items
            })
        })

        const responseData = await response.json();

        dispatch({
            type: CREATE_HOUSES,
            payload: responseData
        })
    }

}

export const deleteList = (ListID) => {
 
    return async dispatch => {
        await fetch(`http://192.168.1.21:3000/api/houses/${ListID}`, {
            method: 'DELETE',
            
        })

        dispatch({
            type: DELETE_LIST,
            payload: {idToDelete: ListID}
        })

       
    }

}
export const deleteProduct = (ListID,ProductID) => {
    
    return async dispatch => {
        await fetch(`http://192.168.1.21:3000/api/houses/DeleteProduct/${ListID}/${ProductID}`, {
            method: 'PUT',
            
        })

        dispatch({
            type: DELETE_ITEM,
            payload: {ListID: ListID, ProductID:ProductID}
        })
       
       
    }

}