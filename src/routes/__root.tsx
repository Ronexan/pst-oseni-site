import { Outlet, createRootRoute, HeadContent } from '@tanstack/react-router'
import { TanStackRouterDevtools } from '@tanstack/react-router-devtools'
import Header from '@/ui/Header/Header'
import NotFound from '@/ui/NotFound/NotFound'

export const Route = createRootRoute({
  component: () => (
    <>
      <HeadContent />
      <Header />
      <Outlet />
      <TanStackRouterDevtools />
    </>
  ),
  notFoundComponent: NotFound,
})
