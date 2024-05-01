// import { useState } from 'react'
// import './style.css'

// const sortValues = [
//     { size: 6.5, id: 0, count: 2 },
//     { size: 7.0, id: 1, count: 3 },
//     { size: 7.5, id: 2, count: 1 },
//     { size: 8.0, id: 3, count: 10 },
//     { size: 8.5, id: 4, count: 7 },
//     { size: 9.0, id: 5, count: 5 },
//     { size: 9.5, id: 6, count: 4 },

// ]


// const Size = () => {
// const[count, setCount] = useState('')
//     return (
//         <div className='sort'>
//                 <ul className="sort__variables-list">
//                     {sortValues.map((value, id) => (
//                         <li 
//                         key={id} 
//                         className='sort__variables-item'
//                         onClick={() => setCount(value.count)}>
//                             {value.size} UK
//                         </li>
//                     ))}
//                 </ul>
//                     {count? (<div>
//                         <p>Ви обрали розмір: </p>
//                         <p>Залишилось на складі: {count}</p>
//                     </div>) : ('')}
//         </div>
//     )
// }
// export default Size;

import { useState } from 'react'
import './style.css'

const sortValues = [
    { size: 6.5, id: 0, count: 2 },
    { size: 7.0, id: 1, count: 3 },
    { size: 7.5, id: 2, count: 1 },
    { size: 8.0, id: 3, count: 10 },
    { size: 8.5, id: 4, count: 7 },
    { size: 9.0, id: 5, count: 5 },
    { size: 9.5, id: 6, count: 4 },
]

const Size = () => {
    const [selectedSize, setSelectedSize] = useState(null);

    return (
        <div className='sort'>
            <ul className="sort__variables-list">
                {sortValues.map((value) => (
                    <li 
                        key={value.id} 
                        className={`sort__variables-item ${selectedSize === value.id ? 'active' : ''}`}
                        onClick={() => setSelectedSize(value.id)}>
                        {value.size} UK
                    </li>
                ))}
            </ul>
            {selectedSize !== null && (
                <div>
                    <p>Ви обрали розмір: {sortValues[selectedSize].size} UK</p>
                    <p>Залишилось на складі: {sortValues[selectedSize].count}</p>
                </div>
            )}
        </div>
    )
}

export default Size;
