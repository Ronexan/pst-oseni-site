import { Outlet, createRootRoute, HeadContent } from '@tanstack/react-router'
import { TanStackRouterDevtools } from '@tanstack/react-router-devtools'

export const Route = createRootRoute({
  head: () => ({
    meta: [
      {
        title: "Pst. Olatunji Oseni",
      },
      {
        name: "description",
        content: "Official website of Pst. Olatunji Oseni, featuring sermons, events, and resources.",
      },
      {
        property: "og:title",
        content: "Pst. Olatunji Oseni",
      },
      {
        property: "og:description",
        content: "Official website of Pst. Olatunji Oseni, featuring sermons, events, and resources.",
      },
      {
        property: "og:type",
        content: "website",
      },
      {
        property: "og:image",
        content: "https://ik.imagekit.io/vwtcq2hsc/PHOTO-2025-05-24-14-06-39(1).jpg?updatedAt=1748361154858",
      },
      {
        property: "og:image:alt",
        content: "Pastor Olatunji Oseni",
      },
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
