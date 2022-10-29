import * as React from "react"

// will cause the error
const Lazy = React.lazy(() => import('../components/lazy'))


const IndexPage = () => {
  return (
    <main>
      <React.Suspense fallback={null}>
        <Lazy />
      </React.Suspense>
    </main>
  )
}

export default IndexPage

export const Head = () => <title key="home-title">Home Page</title>
