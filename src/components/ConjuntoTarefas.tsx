import React, { useEffect, useState } from 'react';
import styles from '../styles/BlocoTarefa.module.css'

interface Tarefa {
    id: number,
    materia: string,
    local: string,
    descricao: string,
    data: string,
}

interface PropsTarefa{
    tarefa: Tarefa[]
}

const ConjuntoTarefas: React.FC<PropsTarefa> = (props) => {

    const [Tps, setTps] = useState<Tarefa[]>()

    useEffect(() => {
        setTps(props.tarefa)
    }, [])

    return (
        <>
            {
                Tps?.map((tp) => {
                    return (
                        <div className={styles.tarefaContainer}>
                            <div className={styles.left}>
                                <div><strong>Matéria: </strong>{tp.materia}</div>
                                <div><strong>Atividade: </strong>{tp.descricao}</div>
                                <div>
                                    <span><strong>Local de envio: </strong>{tp.local}</span>
                                    <span className={styles.data}><div><strong>Data de Entrega: </strong>{tp.data}</div></span>
                                </div>
                            </div>
                            <div>
                                <input type="checkbox" id={`cbx ${tp.id}`} className={styles.cbx} />
                                <label htmlFor={`cbx ${tp.id}`} className={styles.check}>
                                <svg width="18px" height="18px" viewBox="0 0 18 18">
                                    <path d="M1,9 L1,3.5 C1,2 2,1 3.5,1 L14.5,1 C16,1 17,2 17,3.5 L17,14.5 C17,16 16,17 14.5,17 L3.5,17 C2,17 1,16 1,14.5 L1,9 Z"></path>
                                    <polyline points="1 9 7 14 15 4"></polyline>
                                </svg>
                                </label>
                            </div>
                        </div>
                    )
                })
            }
        </>
    );
}

export default ConjuntoTarefas