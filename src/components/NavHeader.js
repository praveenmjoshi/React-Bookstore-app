import React from 'react'

export default function NavHeader({actionHandler, searchHandler}) {
    let actions = [
        {'name':'All Books','value':'all'},
        {'name':'Most Recent','value':'recent'},
        {'name':'Most Popular','value':'popular'}
    ]
    const handleAction = (action) =>{
        console.log(action)
        actionHandler(action)
    }
    const keyPressEvent = (event) =>{
        if(event.charCode === 13){
            searchHandler(event.target.value)
        }
    }
    return (
        <div className="body-header">
            <h1>Browse Available books</h1>
            <div className="row">
                <div className="d-flex">
                    {
                        actions.map((action) => {
                            return <button key={action.value} onClick={()=> handleAction(action.value)}>{action.name}</button>
                        })
                    }
                </div>
                <div className="search-container">
                <input placeholder="Search Book" type="text"
                onKeyPress={keyPressEvent}></input>
                </div>
            </div>
        </div>
    )
}
