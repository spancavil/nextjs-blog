"use client"
type Props = {}

const HydrationTest = (props: Props) => {
  //Will return a random number. When server tries to render this will be different from client side and will throw error
  const a = Math.random()

  //When dynamic, this component won't be rendered on server side first. So the log won't appear.
  console.log(a)

  return (
    <div>
      <h1>Hydration Test</h1>
      <span>{a}</span>
    </div>
  )
}

export default HydrationTest