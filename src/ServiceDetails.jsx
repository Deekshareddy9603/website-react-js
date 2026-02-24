import { useParams, useNavigate } from 'react-router-dom'

export default function ServiceDetails() {
  const { id } = useParams()
  const navigate = useNavigate()

  return (
    <div style={{ textAlign:'center' }}>
      <h2>Service Details</h2>

      <p>Selected Service ID: {id}</p>

      {id == 1 && <p>We create responsive websites.</p>}
      {id == 2 && <p>We build mobile applications.</p>}
      {id == 3 && <p>We design beautiful UI screens.</p>}

      <button onClick={() => navigate('/services')}>
        Go Back
      </button>
    </div>
  )
}