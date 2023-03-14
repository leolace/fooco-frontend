import React from "react"
import Skeleton from "react-loading-skeleton"
import { instance } from "src/api/apiCalls"
import SkeletonLoad from "src/helpers/Skeleton"
import UseMatchWindowSize from "src/hooks/UseWindowSize"
import ProfilePreview from "../ProfilePreview"
import Post from "../Post/Post"
import { Container, PostContainer } from "./styles"
import { useQuery } from "react-query"
import isError from "src/helpers/isError"

const Feed = () => {
  const match = UseMatchWindowSize(1000)

  const { data, isLoading } = useQuery<IUserPosts[] | IError>("posts", () =>
    instance("/post").then((res) => res.data)
  )

  if (isError(data)) {
    return <h1>{data.error}</h1>
  }
  return (
    <Container>
      <PostContainer>
        {isLoading ? (
          <LoadingPosts />
        ) : (
          data?.map((post) => <Post post={post} key={post.id} />).reverse()
        )}
      </PostContainer>
      {match ? null : <ProfilePreview />}
    </Container>
  )
}

const LoadingPosts = () => (
  <SkeletonLoad>
    <Skeleton width={"100%"} count={1} height={150} borderRadius={10} />
    <Skeleton width={"100%"} count={1} height={150} borderRadius={10} />
    <Skeleton width={"100%"} count={1} height={150} borderRadius={10} />
    <Skeleton width={"100%"} count={1} height={150} borderRadius={10} />
    <Skeleton width={"100%"} count={1} height={150} borderRadius={10} />
  </SkeletonLoad>
)

export default Feed
