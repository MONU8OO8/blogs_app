import React from "react"
import { Card } from "../../components/blog/Card"
import { Category } from "../../components/category/Category"

export const Home = () => {
  return (
    <>
      {/*  <Slider />*/}
      <Category />
      <div style={{display: "flex",justifyContent:"center"}}>
        <h1 style={{ color: "white" }}>My Blogs</h1>
      </div>
      <Card />
    </>
  )
}
