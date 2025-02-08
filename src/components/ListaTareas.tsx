import React from 'react';
import { Tareas } from './Tareas';

type ListaTareasProps = {
    listaTareas: string[],
    borrarTarea: (index: number) => void
}

export const ListaTareas = ({ listaTareas, borrarTarea }: ListaTareasProps) => {
    return (
        <div>
            {listaTareas.map((tarea, index) => (
                <Tareas
                    key={index}
                    tarea={tarea}
                    index={index}
                    borrarTarea={borrarTarea}
                />
            ))}
        </div>
    );
};