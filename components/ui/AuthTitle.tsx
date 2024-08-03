import React from 'react'

type Props = {
    title: string
}

const AuthTitle = (props: Props) => {
  return (
    <div>
        <h1>{props.title} Into Book Rent</h1>
    </div>
  )
}

export default AuthTitle