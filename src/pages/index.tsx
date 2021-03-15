import ConjuntoTarefa from '../components/ConjuntoTarefas'
import Logo from '../components/Logo'
import cookie from 'next-cookies'

import tps from '../../public/tps.json'


Home.getInitialProps = ctx => {
  return {
      initialChecked: cookie(ctx) || false
  }
}

export default function Home( initialChecked: any ) { 
  let cookieobj = initialChecked.initialChecked
  
  return (
    <div>
      <Logo />
      <ConjuntoTarefa tarefa={tps} check={ cookieobj } />
    </div>
  )
}

