"use client"

import { light } from "@/data/dishes";
import { lodash } from "lodash";
import { useState } from "react";

const dishes = lodash.sampleSize(light, 4);

export default function Light() {
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