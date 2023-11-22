import React, { Component } from "react";
import { Col, ListGroup } from "react-bootstrap";
import axios from "axios";
import { API_URL } from "../utils/constanst";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUtensils, faCoffee, faCheese } from "@fortawesome/free-solid-svg-icons";

const Icon = ({nama}) =>{
    if(nama === "Makanan")
    return <FontAwesomeIcon icon={faUtensils} className="mr-5" />;
    if(nama === "Minuman")
    return <FontAwesomeIcon icon={faCoffee} className='mr-5' />;
    if(nama === "Cemilan")
    return <FontAwesomeIcon icon={faCheese} className='mr-5' />;

    return <FontAwesomeIcon icon={faUtensils} className="mr-5" />;
}

export default class ListCategories extends Component {
  constructor(props) {
    super(props);

    this.state = {
      categories: [],
    };
  }

  componentDidMount() {
    axios
      .get(API_URL + "categories")
      .then((res) => {
        // console.log(res)
        const categories = res.data;
        this.setState({ categories });
      })
      .catch((error) => {
        console.log(error);
      });
  }

  render() {
    // console.log("Categories: ", this.state.categories)
    const { categories } = this.state; 
    const { changeCategory, categoryYangDipilih } = this.props
    return (
      <Col md={2} mt='2'>
        <h2>
          <strong>Daftar Kategory</strong>
        </h2>
        <ListGroup>
          {categories &&
            categories.map((category) => (
              <ListGroup.Item key={category.id}
               onClick={() =>
                changeCategory(category.nama)
                }

                className={categoryYangDipilih === category.nama && "categoryActive"}
                style={{cursor: 'pointer'}}
              >
                <h5><Icon nama={category.nama}/> {category.nama}</h5>
              </ListGroup.Item>
            ))}
        </ListGroup>
      </Col>
    );
  }
}
