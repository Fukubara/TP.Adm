import React, { useEffect, useState } from 'react';

import Tarefa from './Tarefa'

interface Tarefa {
    id: number,
    materia: string,
    local: string,
    descricao: string,
    data: string,
}

interface PropsTarefa{
    tarefa: Tarefa[]
    check: any
}

const ConjuntoTarefas: React.FC<PropsTarefa> = (props) => {
    const [Tps, setTps] = useState<Tarefa[]>()
    
    const checkValue = (tp) => {
        let check: any
        if (Object.keys(props.check).length === 0) {
            check = false
        } else {
            check = props.check[tp.id]
        }
        return check
    }

    useEffect(() => {
        setTps(props.tarefa)
    }, [])
    
    return (
        <>
            {
                Tps?.map((tp) => {
                    return (
                        <Tarefa key={tp.id} check={checkValue(tp)} objtp={tp} />
                    )
                })
            }
        </>
    );
}

export default ConjuntoTarefas