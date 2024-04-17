import React, {useState} from "react";
import { Card, Button } from "react-bootstrap";
import LikeButton from "./likebutton/LikeButton";

const SingleCard = ({ img, title, price }) => {
    const [selected, setSelected] = useState(false)
    
    return (
    <Card className={`h-100 p-2 border-0 ${selected ? 'shadow-sm' : ''}`}>
      <div>
        <Card.Img
          src={img}
          alt={title}
          className="w-100 h-100 object-fit-cover img-fluid "
        />
      </div>
      <Card.Body className=" d-flex flex-column justify-content-between">
        <Card.Title className="h6 text-truncate d-none d-xl-block ">{title}</Card.Title>
      </Card.Body>
      <div className="d-flex justify-content-between ">
        <Button variant="outline-primary">$ {price}</Button>
        <LikeButton status={selected} selectcard={setSelected}/>
      </div>
    </Card>
  );
};

export default SingleCard;
