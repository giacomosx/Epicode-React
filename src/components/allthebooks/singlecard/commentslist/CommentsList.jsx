import React, { useEffect, useState } from "react";
import Spinner from "react-bootstrap/Spinner";
import ninjaFetch from "../../../../ninjafetch";


const CommentsList = ({ idBook, isDark }) => {
  const [list, setList] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    ninjaFetch(
      `https://striveschool-api.herokuapp.com/api/books/${idBook}/comments/`
    ).then((res) => {
      setList(res);
      setLoading(!loading);
    });
  }, [idBook]);

  return (
    <div className="comment-area overflow-y-scroll pe-1 m-0 my-3 ">
      {loading && (
        <div className="d-flex justify-content-center w-100 h-100 align-items-center ">
            <Spinner animation="grow" className="color--violet"/>
        </div>
      )}

      <h6 className=" text-secondary m-0 small">Reviews:</h6>
      <ul className="p-0 m-0">
        {list.map((item, index) => (
          <li className="small p-0 mb-1 " key={`comment-${index}`}>
            <span className={ `${isDark ? 'text-white' : 'text-black '}  small`}><span className="small icon-link star-rate fill">{item.rate}<ion-icon name="star"></ion-icon></span> - {item.author}: </span>
            <p className="p-0 m-0 small text-body">{item.comment}</p>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default CommentsList;
