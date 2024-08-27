import { useState } from "react"
import { Avatar } from "./Avatar"
import styles from "./Comment.module.css"
import { ThumbsUp, Trash } from "phosphor-react"

interface CommentProps {
  content: string
  onDeleteComment: (comment: string) => void
}

export function Comment({ content, onDeleteComment }: CommentProps) {
  const [likeCount, setLikeCount] = useState(0)
  function handleLikeComment() {
    setLikeCount((state) => {
      return state + 1
    })
  }
  function handleDeleteComment() {
    onDeleteComment(content)
  }
  return (
    <div className={styles.comment}>
      <Avatar
        hasBorder={false}
        src="https://github.com/GabrielAlerrandro.png"
        alt=""
      />
      <div className={styles.commentBox}>
        <div className={styles.commentContent}>
          <header>
            <div className={styles.authorAndTime}>
              <strong>Autor</strong>
              <time
                title="15 de Agosto às 14:48h"
                dateTime="2024-08-15 14:48:00"
              >
                Cerca de 1h atrás
              </time>
            </div>
            <button onClick={handleDeleteComment} title="Deletar comentário">
              <Trash size={24} />
            </button>
          </header>
          <p>{content}</p>
        </div>
        <footer>
          <button onClick={handleLikeComment}>
            <ThumbsUp />
            Aplaudir <span>{likeCount}</span>
          </button>
        </footer>
      </div>
    </div>
  )
}
