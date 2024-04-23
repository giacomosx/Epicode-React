import React, { useEffect, useState } from "react";
import Spinner from "react-bootstrap/Spinner";
import ninjaFetch from "../../../../ninjafetch";

const CommentsList = ({ bookId }) => {
  const [list, setList] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    ninjaFetch(
      `https://striveschool-api.herokuapp.com/api/books/${bookId}/comments/`
    ).then((res) => {
      setList(res);
      setLoading(!loading);
    });
  }, []);

  return (
    <div className="comment-area overflow-y-scroll h-100 pe-1 m-0">
      {loading && (
        <div className="d-flex justify-content-center w-100 h-100 align-items-center ">
            <Spinner animation="grow" className="color--violet"/>
        </div>
      )}

      <h6 className="small text-secondary m-0">Reviews:</h6>
      <ul className="p-0 m-0 h-100">
        {list.map((item, index) => (
          <li className="small p-0 mb-1 " key={`comment-${index}`}>
            <span className="text-black small"> {item.author}: </span>
            <p className="p-0 m-0 small text-body">{item.comment}</p>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default CommentsList;
