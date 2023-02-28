import { useState, useEffect } from 'react'

const useRepositories = () => {
  const [repositories, setRepository] = useState(null)

  const fetchRepositories = async () => {
    const response = await global.fetch('http://10.0.0.18:5000/api/repositories')
    const json = await response.json()
    setRepository(json)
  }

  useEffect(() => {
    fetchRepositories()
  }, [])

  const repositoriesNodes = repositories
    ? repositories.edges.map(edge => edge.node)
    : []

  return { repositories: repositoriesNodes }
}

export default useRepositories
