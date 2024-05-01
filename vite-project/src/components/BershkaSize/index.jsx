import { useState } from 'react';
import './style.css'
import SheetComponent from '../SheetComponent';
const size = [
    { value: "S", id: 11 },
    { value: "M", id: 12 },
    { value: "L", id: 13 },
    { value: "XL", id: 14, disable: "disable" },
];

const BershkaSize = () => {
    const[activeSize, setActiveSize] = useState(null)
    console.log(activeSize)
    return (
        <div>
            <ul className="bershkaSize__list">
                {size.map((item) => (
                    <li key={item.id}>
                        <button
                            className={activeSize == item.value? "bershkaSize__btn-active" : "bershkaSize__btn"}
                            disabled={item.disable}
                            onClick={()=> setActiveSize(item.value)}
                        >
                            {item.value}
                        </button>
                    </li>
                ))}
            </ul>
            {activeSize? (<p >Ви обрали розмір: {activeSize}</p>) : ('')}
            <div className='flex items-center gap-5 mt-5 mb-10'>
                <SheetComponent />
                <p>Розмір одягу моделі: L | Зріст моделі: 185 см</p>
            </div>

        </div>
    );
};

export default BershkaSize;
