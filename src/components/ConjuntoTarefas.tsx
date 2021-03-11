import React, { useEffect, useState } from 'react';
import tps from './tps.json'
import BlocoTarefa from './Tarefa';

interface Tarefa {
    materia: string,
    local: string,
    descricao: string,
    data: string,
}

interface PropsTarefa{
    tarefa: Tarefa[]
}

const ConjuntoTarefas: React.FC<PropsTarefa> = () => {

    const [Tps, setTps] = useState<Tarefa[]>()

    useEffect(() => {
        setTps(tps)
    }, [])

    return (
        <>
            {
                Tps?.map((tp) => {
                    return (
                        <BlocoTarefa { ...tp }/>
                    )
                })
            }
        </>
    );
}

export default ConjuntoTarefas