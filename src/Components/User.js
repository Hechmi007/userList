import React from 'react'
import Card from 'react-bootstrap/Card';

const User = ({user}) => {
  return (
    <Card style={{ width: '18rem' }}>
      <Card.Body>
        <Card.Title>{user.username}</Card.Title>
        <Card.Subtitle className="mb-2 text-muted">{user.name}</Card.Subtitle>
        <Card.Text>
          Some quick example text to build on the card title and make up the
          bulk of the card's content.
        </Card.Text>
        <Card.Link href="#">{user.email}</Card.Link>
        
      </Card.Body>
    </Card>
  )
}

export default User