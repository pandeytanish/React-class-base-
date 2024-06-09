import React, { useEffect } from 'react'
import { useState } from 'react'

const getLocalItems = () => {
    let list = localStorage.getItem('lists');
    console.log(list)

    if(list) {
        return JSON.parse(localStorage.getItem('lists'))
    }
    else {
        return [];
    }
}
function Tast() {
    const [inputData,setInputData] = useState('')
    const [items,setItems] = useState(getLocalItems())
    const addItem = () => {
        if(!inputData) {
        }
         else {
           setItems([...items,inputData])
           setInputData('')
         }
    }
    const deleteItem = (id) => {
         const updatedData = items.filter((elem,ind)=> {
            return ind !== id ;
         }) ;
         setItems(updatedData)
    }
    const removeAll = () => {
        setItems([])
    }

    useEffect (() => {
         localStorage.setItem('lists',JSON.stringify(items))
    }, [items])
  return (
    <div>
        
         <div >
<div>
    <h1>TODO LIST</h1>
</div>

<div>
    <input value={inputData} onChange={(e) => setInputData(e.target.value)} type='text' placeholder='add todo '/> 
    <button onClick={addItem}>Add item</button>
</div>
<div>
    {/* <h3>Apple</h3> */}
</div>
<div>
    {
        items.map((elem,ind) => {
             return (
                <div key={ind}>
                    <h2>{elem}</h2>
<button onClick={() => deleteItem(ind)}>Delete</button>
                </div>
             )
        })
    }
   
</div>
</div>
<button onClick={removeAll}>Delete all</button>
    </div>
  )
}

export default Tast




// import React, { ChangeEvent } from 'react';

// interface TastState {
//     inputData: string;
//     items: string[];
// }

// class Tast extends React.Component<{}, TastState> {
//     constructor(props: {}) {
//         super(props);
//         this.state = {
//             inputData: '',
//             items: this.getLocalItems(),
//         };
//     }

//     getLocalItems = (): string[] => {
//         const list = localStorage.getItem('lists');
//         if (list) {
//             return JSON.parse(list);
//         } else {
//             return [];
//         }
//     };

//     componentDidUpdate(prevProps: {}, prevState: TastState) {
//         if (prevState.items !== this.state.items) {
//             localStorage.setItem('lists', JSON.stringify(this.state.items));
//         }
//     }

//     handleChange = (event: ChangeEvent<HTMLInputElement>) => {
//         this.setState({ inputData: event.target.value });
//     };

//     addItem = () => {
//         if (this.state.inputData) {
//             this.setState((prevState) => ({
//                 items: [...prevState.items, prevState.inputData],
//                 inputData: '',
//             }));
//         }
//     };

//     deleteItem = (id: number) => {
//         this.setState((prevState) => ({
//             items: prevState.items.filter((_, index) => index !== id),
//         }));
//     };

//     removeAll = () => {
//         this.setState({ items: [] });
//     };

//     render() {
//         return (
//             <div>
//                 <div>
//                     <div>
//                         <h1>TODO LIST</h1>
//                     </div>
//                     <div>
//                         <input
//                             value={this.state.inputData}
//                             onChange={this.handleChange}
//                             type='text'
//                             placeholder='add todo'
//                         />
//                         <button onClick={this.addItem}>Add item</button>
//                     </div>
//                     <div>
//                         {this.state.items.map((elem, ind) => (
//                             <div key={ind}>
//                                 <h2>{elem}</h2>
//                                 <button onClick={() => this.deleteItem(ind)}>Delete</button>
//                             </div>
//                         ))}
//                     </div>
//                 </div>
//                 <button onClick={this.removeAll}>Delete all</button>
//             </div>
//         );
//     }
// }

// export default Tast;
