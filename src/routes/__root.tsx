import { Outlet, createRootRoute, HeadContent } from '@tanstack/react-router'
import { TanStackRouterDevtools } from '@tanstack/react-router-devtools'

export const Route = createRootRoute({
  head: () => ({
    title: "Oseni Site",
    meta: [
      {
        title: "Oseni Site",
      }
    ]
  }),
  component: () => (
    <>
      <HeadContent />
      <Outlet />
      <TanStackRouterDevtools />
    </>
  ),
})
