import { Button } from "@components/Form"
import { Markdown } from "src/interface/MarkdownEditor"
import UseToastStore from "@components/Toast/UseToastStore"
import React from "react"
import { useNavigate } from "react-router"
import isError from "src/helpers/isError"
import useUserStore from "src/stores/UseUserStore"
import { Buttons, Container } from "./styles"
import { POST_REPLY, instance } from "src/api/apiCalls"
import { useMutation } from "react-query"
import { AxiosError } from "axios"

interface Props {
  setNewReply: React.Dispatch<React.SetStateAction<IReply[] | null>>
  setIsReplying: React.Dispatch<React.SetStateAction<boolean>>
  postId: string
}

const CreateReply = ({ setNewReply, postId, setIsReplying }: Props) => {
  const { userData, isLoggedIn } = useUserStore()
  const { setToastMessage } = UseToastStore()
  const nav = useNavigate()
  const [value, setValue] = React.useState("")
  const { mutate, isLoading } = useMutation({
    mutationKey: ["reply", postId],
    mutationFn: async () => {
      if (!userData) {
        setToastMessage(
          "Erro!",
          "Você precisa estar logado para fazer isso",
          "error"
        )
        return Promise.reject("Você precisa estar logado para fazer isso")
      }
      const { options, url } = POST_REPLY(value, userData.id, postId)

      return instance
        .post(url, options.data, { headers: options.headers })
        .then((res) => res.data)
    },
    onSuccess: (data) => {
      setValue("")
      setIsReplying(false)
      setToastMessage("Sucesso!", "Resposta publicada com sucesso!", "success")
      setNewReply((prev) => (prev ? [...prev, data] : [data]))
    },
    onError: (err) => {
      if (err instanceof AxiosError) {
        setToastMessage("Algo deu errado", err.response?.data.error, "error")
      }
    },
  })

  const handleReply = async (e: React.FormEvent) => {
    e.preventDefault()
    if (!isLoggedIn || !userData) return nav("/entrar")

    if (value.length < 5) return

    mutate()
  }

  return (
    <Container>
      <Markdown value={value} onChange={(e) => setValue(e)} />
      <Buttons>
        <Button variant="outlined" onClick={() => setIsReplying(false)}>
          Cancelar
        </Button>
        <Button variant="solid" onClick={handleReply} disabled={isLoading}>
          {isLoading ? "Carregando..." : "Publicar"}
        </Button>
      </Buttons>
    </Container>
  )
}

export default CreateReply
