import React from 'react'
import { Card, Col } from "react-bootstrap";
import { numberWithCommas } from "../utils/utils";
const Menus = ({menu}) => {
  return (
    <Col md={4} xs={6} className='mb-4'>
      <Card className='shadow'>
        <Card.Img
          variant='top'
          src={
            "assets/images/" +
            menu.category.nama.toLowerCase() +
            "/" +
            menu.gambar
          }
        />
        <Card.Body>
          <Card.Title>
            {menu.nama} <strong>{menu.kode}</strong>
          </Card.Title>
          <Card.Text>RP. {numberWithCommas(menu.harga)}</Card.Text>
        </Card.Body>
      </Card>
    </Col>
  );
}

export default Menus
