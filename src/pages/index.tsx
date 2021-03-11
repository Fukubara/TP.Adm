import ConjuntoTarefa from '../components/ConjuntoTarefas'
import Logo from '../components/Logo'

import tps from '../../public/tps.json'


export default function Home() {
  return (
    <div>
      <Logo />
      <ConjuntoTarefa tarefa={tps} />
    </div>
  )
}
