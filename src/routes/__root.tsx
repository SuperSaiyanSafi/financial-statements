import { HeadContent, Link, Outlet, Scripts, createRootRoute } from '@tanstack/react-router'
import { TanStackRouterDevtoolsPanel } from '@tanstack/react-router-devtools'
import { TanStackDevtools } from '@tanstack/react-devtools'

import appCss from '../styles.css?url'

export const Route = createRootRoute({
  head: () => ({
    meta: [
      {
        charset: 'utf-8',
      },
      {
        name: 'viewport',
        content: 'width=device-width, initial-scale=1',
      },
      {
        title: 'Kissena Baked Goods',
      },
    ],
    links: [
      {
        rel: 'stylesheet',
        href: appCss,
      },
    ],
  }),
  shellComponent: RootDocument,
  component: RootComponent,
})

function RootDocument({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>
        <HeadContent />
      </head>
      <body className="min-h-screen bg-canvas text-ink flex flex-col justify-between">
        {children}
        <TanStackDevtools
          config={{
            position: 'bottom-right',
          }}
          plugins={[
            {
              name: 'TanStack Router',
              render: <TanStackRouterDevtoolsPanel />,
            },
          ]}
        />
        <Scripts />
      </body>
    </html>
  )
}

function RootComponent() {
  return (
    <div className="min-h-screen flex flex-col justify-between p-6 max-w-5xl mx-auto w-full">
      <header className="flex items-center justify-between border-b border-subtle pb-4 mb-6">
        <div className="text-xl font-bold">Kissena Baked Goods</div>
        <nav className="flex items-center gap-6 text-sm">
          <Link
            to="/"
            className="text-ink-soft hover:text-ink"
            activeProps={{ className: 'font-semibold underline decoration-brand underline-offset-8' }}
            activeOptions={{ exact: true }}
          >
            Home
          </Link>
          <Link
            to="/income-statement"
            className="text-ink-soft hover:text-ink"
            activeProps={{ className: 'font-semibold underline decoration-brand underline-offset-8' }}
            activeOptions={{ exact: true }}
          >
            Income Statement
          </Link>
          <Link
            to="/balance-sheet"
            className="text-ink-soft hover:text-ink"
            activeProps={{ className: 'font-semibold underline decoration-brand underline-offset-8' }}
            activeOptions={{ exact: true }}
          >
            Balance Sheet
          </Link>
          <Link
            to="/disclosures"
            className="text-ink-soft hover:text-ink"
            activeProps={{ className: 'font-semibold underline decoration-brand underline-offset-8' }}
            activeOptions={{ exact: true }}
          >
            Disclosures
          </Link>
        </nav>
      </header>

      <main className="flex-1">
        <Outlet />
      </main>

      <footer className="border-t border-subtle pt-6 mt-12 text-xs text-ink-soft space-y-1">
        <p>Kissena Baked Goods Inc., Astoria, Queens, New York</p>
        <p>&copy; 20X5 Kissena Baked Goods Inc.</p>
        <p>A fictional company used for accounting examples.</p>
      </footer>
    </div>
  )
}