import React from 'react'
import { useParams } from 'react-router-dom'
import useFetch from '../Hooks/useFetch'
import { PHOTO_GET } from '../Api'
import Loading from '../Components/Helper/Loading'
import Error from '../Components/Helper/Error'
import PhotoContent from './PhotoContent'
import Head from '../Components/Helper/Head'

const Photo = () => {
  const { id } = useParams()
  const { data, loading, error, request } = useFetch()

  React.useEffect(() => {
    const { url, options } = PHOTO_GET(id)
    request(url, options)

  }, [request, id])

  if (error) return <Error error={error} />
  if (loading) return <Loading />
  if (data) return (
    <section className='container mainContainer'>
      <Head title={data.photo.title} />
      <PhotoContent single={true} data={data} />
    </section>
    
  )
  
  
  else return null

}

export default Photo
