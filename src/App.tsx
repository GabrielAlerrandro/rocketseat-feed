import { Header } from "./components/Header.tsx"
import { Post } from "./components/Post.tsx"
import { Sidebar } from "./components/Sidebar.tsx"
import { PostType } from "./components/Post.tsx"

import "./global.css"

import styles from "./App.module.css"

const posts: PostType[] = [
  {
    id: 1,
    author: {
      avatarUrl: "https://github.com/GabrielAlerrandro.png",
      name: "Eu",
      role: "pobe",
    },
    content: [
      {
        type: "paragraph",
        content:
          "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Inventore,",
      },
      {
        type: "paragraph",
        content:
          "corporis explicabo laboriosam eos fugiat sapiente error facilis laborum",
      },
      { type: "paragraph", content: "debitis veritatis impedit libero," },
      { type: "link", content: "natus aliquid" },
      { type: "paragraph", content: "  a ut quis." },
    ],
    publishedAt: new Date("2024-08-17"),
  },
  {
    id: 2,
    author: {
      avatarUrl: "https://github.com/Erick-aaooii.png",
      name: "ATA",
      role: "badwa",
    },
    content: [
      {
        type: "paragraph",
        content:
          "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Inventore,",
      },
      {
        type: "paragraph",
        content:
          "corporis explicabo laboriosam eos fugiat sapiente error facilis laborum",
      },
      { type: "paragraph", content: "debitis veritatis impedit libero," },
      { type: "link", content: "natus aliquid" },
      { type: "paragraph", content: "  a ut quis." },
    ],
    publishedAt: new Date("2024-07-18"),
  },
]

function App() {
  return (
    <div>
      <Header></Header>
      <div className={styles.wrapper}>
        <Sidebar />
        <main>
          {posts.map((post) => (
            <Post key={post.id} post={post} />
          ))}
        </main>
      </div>
    </div>
  )
}

export default App
