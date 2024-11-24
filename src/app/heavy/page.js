"use client"

import { heavy } from "@/data/dishes";
import { lodash } from "lodash";
import { useState } from "react";

const dishes = lodash.sampleSize(heavy, 4);

export default function Heavy() {
    const [val, setval] = useState("");

    return (
        <div>
            <ul>
                {dishes.map(item => (
                    <li key={item}>{item}</li>
                ))}
            </ul>
            <button onClick={() => setval(lodash.sample(dishes))}>
                start
            </button>
            <div>
                {val}
            </div>
        </div>
    )
}