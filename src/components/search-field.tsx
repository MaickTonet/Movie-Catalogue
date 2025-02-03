import { zodResolver } from '@hookform/resolvers/zod'
import { useForm } from 'react-hook-form'
import { z } from 'zod'

import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from '@/components/ui/dialog'
import {
  Drawer,
  DrawerClose,
  DrawerContent,
  DrawerFooter,
  DrawerHeader,
  DrawerTitle,
  DrawerTrigger,
} from '@/components/ui/drawer'
import { Form, FormControl, FormField, FormItem, FormMessage } from '@/components/ui/form'
import { Search } from 'lucide-react'
import { useNavigate } from 'react-router-dom'
import { Fragment } from 'react/jsx-runtime'
import { Button } from './ui/button'
import { useState } from 'react'

const formSchema = z.object({
  search: z.string().nonempty('Digite algo para pesquisar'),
})

export default function SearchField() {
  const navigate = useNavigate()
  const [open, setOpen] = useState(false)

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      search: '',
    },
  })

  function onSubmit(values: z.infer<typeof formSchema>) {
    setOpen(false);
    navigate(`/buscar?search=${values.search}&page=1`)
  }

  return (
    <Fragment>
      {window.innerWidth < 768 ? (
        <Drawer open={open} onOpenChange={setOpen}>
          <DrawerTrigger>
            <button
              className={
                'flex items-center gap-3 rounded-2xl bg-secondary p-2 text-lg font-semibold shadow-md transition-colors hover:bg-secondary/60'
              }>
              <Search />
              Buscar Filme
            </button>
          </DrawerTrigger>
          <DrawerContent className='mx-auto mb-6 h-1/3 max-w-xl space-y-3'>
            <DrawerHeader>
              <DrawerTitle className={'text-center text-xl font-bold'}>Pesquise algo...</DrawerTitle>
            </DrawerHeader>
            <Form {...form}>
              <form onSubmit={form.handleSubmit(onSubmit)} className={'mx-auto w-[90%] space-y-4'}>
                <FormField
                  control={form.control}
                  name='search'
                  render={({ field }) => (
                    <FormItem>
                      <FormControl>
                        <div
                          className={'mx-auto flex max-w-xl items-center justify-between rounded-lg bg-secondary p-3'}>
                          <input
                            type='text'
                            className={'w-full rounded-lg bg-secondary text-lg outline-none'}
                            placeholder='Pesquise filmes e séries...'
                            {...field}
                          />
                          <button type='submit'>
                            <Search />
                          </button>
                        </div>
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
              </form>
            </Form>
            <DrawerFooter>
              <DrawerClose>
                <Button variant='ghost'>Cancelar</Button>
              </DrawerClose>
            </DrawerFooter>
          </DrawerContent>
        </Drawer>
      ) : (
        <Dialog open={open} onOpenChange={setOpen}>
          <DialogTrigger>
            <button
              className={
                'flex items-center gap-3 rounded-2xl bg-secondary p-2 text-lg font-semibold shadow-md transition-colors hover:bg-secondary/60'
              }>
              <Search />
              Buscar Filme
            </button>
          </DialogTrigger>
          <DialogContent className='space-y-3 border-none'>
            <DialogHeader>
              <DialogTitle className='text-center text-xl font-semibold'>Pesquise algo...</DialogTitle>
            </DialogHeader>
            <Form {...form}>
              <form onSubmit={form.handleSubmit(onSubmit)} className={'mx-auto w-[90%] space-y-4'}>
                <FormField
                  control={form.control}
                  name='search'
                  render={({ field }) => (
                    <FormItem>
                      <FormControl>
                        <div
                          className={'mx-auto flex max-w-xl items-center justify-between rounded-lg bg-secondary p-3'}>
                          <input
                            type='text'
                            className={'w-full rounded-lg bg-secondary text-lg outline-none'}
                            placeholder='Pesquise filmes e séries...'
                            {...field}
                          />
                          <button type='submit'>
                            <Search />
                          </button>
                        </div>
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
              </form>
            </Form>
          </DialogContent>
        </Dialog>
      )}
    </Fragment>
  )
}
