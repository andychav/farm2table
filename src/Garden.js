import React from 'react';

function Vegetable({veggie, size}) {
    return (
        <img
            src={veggie.image}
            alt={veggie.name}
            width={size}
            height={size}
        />
    )
}

export default function Garden() {
    return (
       <>
            <Vegetable
                veggie={{
                    name: 'carrot',
                    image: './carrot.jpeg'
                }}
                size={100}
            />
            <Vegetable
                veggie={{
                    name: 'tomato',
                    image: './tomato.jpeg'
                }}
                size={100}
            />
       </>
    )
}