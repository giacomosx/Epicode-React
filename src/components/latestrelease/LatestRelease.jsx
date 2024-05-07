import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { latestReleaseBooks, deleteLatestRelease } from "../../redux/latestReleaseSlice";
import { actualTheme } from "../../redux/themeSlice";
import IconButton from "../iconbutton/IconButton";

const LatestRelease = () => {
  const latestReleasBooksState = useSelector(latestReleaseBooks);
  const isDark = useSelector(actualTheme);

  const dispatch = useDispatch()

  return (
    <div className="latest-release-section my-3 py-3 px-2">
      {latestReleasBooksState.length > 0 && (
        <>
          <h3 className={`h4 pt-2 mt-2 mb-3 ${isDark ? "text-white " : ""}`}>
            Latest release:
          </h3>
          <ul className="p-0">
            {latestReleasBooksState.map((book, indx) => (
              <li className=" list-group-item mb-3" key={"latestBook-" + indx}>
                <div className={`card flex-row border-0 rounded-3  shadow-sm ${isDark ? 'bg-dark ' : ''}`}>
                  <div className="row g-0">
                    <div className="col-4">
                      <img
                        src={book.img}
                        alt={book.title}
                        className="w-100 h-100 rounded-start-3"
                      />
                    </div>
                    <div className="col-8 px-2 d-flex flex-column justify-content-between">
                      <span className={`small ${isDark ? 'text-bg-dark ' : 'text-white'}`}>{book.title}</span>
                      <div className={`buttons text-end border-top ${isDark ? 'border-secondary' : ''}`}>
                        <IconButton iconName={"trash-outline"} onClick={() => dispatch(deleteLatestRelease(book.asin))}/>
                      </div>
                    </div>
                  </div>
                </div>
              </li>
            ))}
          </ul>
        </>
      )}
    </div>
  );
};

export default LatestRelease;
