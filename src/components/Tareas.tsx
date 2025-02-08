type TareaProps = {
    tarea: string,
    index: number,
    borrarTarea: (index: number) => void
}

export const Tareas = ({ tarea, index, borrarTarea }: TareaProps) => {
    return (
        <div className="task">
            <span>{tarea}</span>
            <button onClick={() => borrarTarea(index)}>Borrar</button>
        </div>
    )
}