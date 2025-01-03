import { Link } from 'react-router-dom'

export default function NotFound() {
  return (
    <main className={'flex h-[80%] flex-col items-center justify-center gap-2'}>
      <img
        src={'https://cdn-icons-png.flaticon.com/512/4923/4923785.png'}
        alt={'Imagem de página não encontrada'}
        draggable={false}
        className={'w-[40%] max-w-[200px]'}
      />
      <h2 className={'text-xl font-bold'}>Ops... Essa página não existe</h2>
      <Link to={'/'} className={'p-2 text-lg font-semibold text-muted-foreground hover:underline'}>
        Retornar para o início
      </Link>
    </main>
  )
}
