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
    const [toggleSubmit,setToggleSubmit] = useState(true)
    const[isEditItem,setISEditItem] = useState(null)
    const addItem = () => {
        if(!inputData) {
            alert("plesee enter data")
        }
        else if (inputData && !toggleSubmit) {
            setItems (
                items.map ((elem) => {
                    if(elem.id === isEditItem){
                        return {...elem,name: inputData}
                    }
                   return  elem
                })
            )

        }

         else {
            const allInputData = {id : new Date().getTime().toString(),name : inputData}
           setItems([...items,allInputData])
           setInputData('')
         }
    }
    const deleteItem = (index) => {
         const updatedData = items.filter((elem)=> {
            return index !== elem.id ;
         }) ;
         setItems(updatedData)
    }
    const removeAll = () => {
        setItems([])
    }

    const editItem = (id) => {
        let newEditItem = items.find((elem) => {
            return elem.id === id
        });
        console.log(newEditItem)

        setToggleSubmit(false)
        setInputData(newEditItem.name)

        setISEditItem(null)
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
      {
          toggleSubmit ?   <button onClick={addItem}>Add item</button> :
          <button onClick={addItem}>Add item</button>
        
      }
</div>
<div>
    {/* <h3>Apple</h3> */}
</div>
<div>
    {
        items.map((elem) => {
             return (
                <div key={elem.id}>
                    <h2>{elem.name}</h2>
<button onClick={() => deleteItem(elem.id)}>Delete</button>
<button onClick={() => editItem(elem.id)}>edit</button>
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
