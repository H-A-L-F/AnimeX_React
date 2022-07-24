import React from 'react'
import ReactLoading from 'react-loading';

export default function Loading() {
  return (
    <div>
        <ReactLoading type={"spin"} color={"#ffffff"} height={'100%'} width={'100%'} />
    </div>
  )
}
