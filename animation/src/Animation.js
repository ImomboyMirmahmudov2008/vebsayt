import { Reorder } from "framer-motion"
import { useState } from "react"
import "./Animation.css"

function Animation() {
    const [items, setItems] = useState(["tomato", "cucumber", "cheese", "letucce"])

    const h3 = {
        listStyle: 'none',
    }

    return (
        <Reorder.Group axis="y" values={items} onReorder={setItems}>
            {items.map((item) => (
                <Reorder.Item key={item} value={item}>
                    <div className='box'>
                        <h3 className={h3}>{item}</h3>
                    </div>
                </Reorder.Item>
            ))}
        </Reorder.Group>
    )
}

export default Animation