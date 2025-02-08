// filepath: /c:/Users/jeanpipi/vite-jsx-ts/src/components/TodoApp.tsx
import React, { useState } from 'react';
import { ListaTareas } from './ListaTareas';

export const TodoApp = () => {
    const [newtask, setNewTask] = useState<string>('');
    const [listaTareas, setListaTareas] = useState<string[]>([]);

    const handleAddTask = () => {
        if (newtask.trim() === '') return;
        setListaTareas(tareasAnteriores => [...tareasAnteriores, newtask]);
        setNewTask('');
    }

    const handleBorrarTarea = (index: number) => {
        setListaTareas(tareas => tareas.filter((_, i) => i !== index));
    }

    return (
        <>
            <div className="app-container">
                <h1>Lista de tareas</h1>
                <div>
                    <input
                        type="text"
                        value={newtask}
                        onChange={(e) => setNewTask(e.target.value)}
                        placeholder="Nueva Tarea"
                    />
                    <div className="button-container">
                        <button onClick={handleAddTask}>Agregar Tarea</button>
                    </div>
                </div>
                <ListaTareas listaTareas={listaTareas} borrarTarea={handleBorrarTarea} />
            </div>
        </>
    );
};