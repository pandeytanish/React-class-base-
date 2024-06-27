import React, { useState } from 'react'
// import { useState } from 'react'

function Todo() {

    // const [inputData,setInputData] = useState ('')
    return (
        <>
            <div >

                <div>
                    <h1>TODO LIST</h1>
                </div>

                <div>
                    <h1>TODO LIST</h1>
                </div>
                <div>
                    <h1>TODO LIST</h1>
                </div>
                <div>
                    <input value={inputData} onChange={(e) => setInputData(e.target.value)} type='text' placeholder='add todo '> <button>Add item</button></input>
                </div>
                <div>
                    <h3>Apple</h3>
                </div>
                <div>
                    <button>Delete</button>
                </div>
            </div>
        </>
    )
}

export default Todo