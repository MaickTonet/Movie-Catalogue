import { Button } from '@/components/ui/button'
import { Link } from 'react-router-dom'

export default function NotFound() {
  return (
    <main className={'flex h-[80%] flex-col items-center justify-center '}>
      <img
        src={
          'https://cdni.iconscout.com/illustration/premium/thumb/error-404-illustration-download-in-svg-png-gif-file-formats--not-found-page-webpage-pack-design-development-illustrations-5501655.png'
        }
        alt={'Imagem de página não encontrada'}
        draggable={false}
        className={'w-[40%] max-w-[200px]'}
      />
      <p className={'text-lg mb-4'}>Ops... Essa página não existe</p>
      <Link to={'/'}>
        <Button>Voltar para o início</Button>
      </Link>
    </main>
  )
}
