import React from 'react'
import {useParams} from 'react-router-dom'

export default function RoutePostUser() {
  const {postId, userId} = useParams();

  return (
    <div>RoutePostUser</div>
  )
}
