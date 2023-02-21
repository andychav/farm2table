import React, { useState } from 'react';

function Button({onClick, children}) {
    return (
        <button onClick={onClick}>
            {children}
        </button>
    )
}

function AddButton({onAddItem}) {
    return (
        <Button onClick={onAddItem}>
            Add a plant
        </Button>
    )
}

function SubmitButton({onSubmit}) {
    return (
        <Button onClick={onSubmit}>
            Submit
        </Button>
    )
}


export default function GardenForm() {
    const [plantName, setPlantName] = useState('');
    const [gardenPlants, setGardenPlants] = useState([]);

    const onChange = e => setPlantName(e.target.value)
    const onAddItem = () => {
        setPlantName(''); 
        setGardenPlants([...gardenPlants, {id: plantName, name: plantName}])
    }

    const onSubmit = () => alert('Submited');

    const gardenPlantsList = gardenPlants.map(item => <li key={item.id}>{item.name}</li>)

    return (
        <div>
            <h1>What do you want to grow?</h1>
            <input 
                placeholder="Plant" 
                type="text"
                value={plantName}
                onChange={onChange}
                onKeyDown={e => e.key==="Enter" && onAddItem()}
            />
            <AddButton onAddItem={onAddItem}/>
            <SubmitButton onSubmit={onSubmit}/>
            <ul>
                {gardenPlantsList}
            </ul>
        </div>
    )
}