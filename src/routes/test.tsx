import { createFileRoute } from '@tanstack/react-router'

export const Route = createFileRoute('/test')({
  component: RouteComponent,
  validateSearch: (search) => {
    if (search.query && typeof search.query !== 'string') {
      return { query: 'query must be a string' }
    }
    return {}
  }
})

function RouteComponent() {
  const { query } = Route.useSearch()
  return <div>Test { query }</div>
}
