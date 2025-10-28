'use client';

import React, {useState} from "react";
import styles from '../ui/page.module.css';

export default function Home() {
    const [count, setCount] = useState(0);

    function increment() {
        setCount(count + 1);
    }

    return (
        <div>
            <p>O valor do contador é:: {count}</p>
            <button onClick={increment}>Incrementar</button>
        </div>
    );
}