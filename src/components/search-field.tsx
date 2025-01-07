import { zodResolver } from '@hookform/resolvers/zod'
import { useForm } from 'react-hook-form'
import { z } from 'zod'

import { Form, FormControl, FormField, FormItem, FormMessage } from '@/components/ui/form'
import { Search } from 'lucide-react'
import { useNavigate } from 'react-router-dom'

const formSchema = z.object({
  search: z.string().nonempty('Digite algo para pesquisar'),
})

export default function SearchField() {
  const navigate = useNavigate()

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      search: '',
    },
  })

  function onSubmit(values: z.infer<typeof formSchema>) {
    navigate(`/buscar?search=${values.search}`)
  }

  return (
    <article className={'space-y-6 px-1 py-10'}>
      <h2 className={'text-center text-xl font-bold'}>Buscando algo em específico?</h2>
      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)} className={'mx-auto w-[90%] space-y-4'}>
          <FormField
            control={form.control}
            name='search'
            render={({ field }) => (
              <FormItem>
                <FormControl>
                  <div className={'mx-auto flex max-w-xl items-center justify-between rounded-lg bg-secondary p-3'}>
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
    </article>
  )
}
