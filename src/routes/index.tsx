import { createFileRoute } from '@tanstack/react-router'

export const Route = createFileRoute('/')({ component: Home })

function Home() {
  return (
    <div className="p-8">
      <h1 className="text-4xl font-bold">Welcome to KISSENA Baked Goods</h1>
     <h2 className="text-2xl font-bold">Financial Statements</h2>
    </div>
  )
}
