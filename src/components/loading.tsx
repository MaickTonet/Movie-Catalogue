import { Fragment } from 'react/jsx-runtime'

export default function Loading() {
  return (
    <Fragment>
      <div className={'flex h-[80%] items-center justify-center'}>
        <div className={'flex w-full flex-col items-center justify-center gap-4'}>
          <div
            className={
              'flex h-20 w-20 animate-spin items-center justify-center rounded-full border-4 border-transparent border-t-primary text-4xl'
            }>
            <div
              className={
                'flex h-16 w-16 animate-spin items-center justify-center rounded-full border-4 border-transparent border-t-muted text-2xl'
              }></div>
          </div>
        </div>
      </div>
    </Fragment>
  )
}
