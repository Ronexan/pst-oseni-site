import { Outlet, createRootRoute, HeadContent } from '@tanstack/react-router'
import { TanStackRouterDevtools } from '@tanstack/react-router-devtools'
import Header from '@/ui/Header/Header'
import Footer from '@/ui/Footer'
import NotFound from '@/ui/NotFound/NotFound'

export const Route = createRootRoute({
  component: () => (
    <>
      <HeadContent />
      <Header />
      <Outlet />
      <Footer />
      <TanStackRouterDevtools />
    </>
  ),
  notFoundComponent: NotFound,
})
