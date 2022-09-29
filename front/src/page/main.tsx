import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import '../style/page.css';

interface mainObject {
  boardName: string;
  boardLink: string;
  postList: {
    postTitle: string;
  }[];
}

function Main() {
  const [data, setData] = useState<mainObject[]>();

  useEffect(() => {
    fetch('http://127.0.0.1:3000/')
      .then((res) => {
        return res.json();
      })
      .then((res) => {
        setData(res);
      });
  }, []);

  return (
    <div className='page'>
      {data?.map((element, index) => {
        return (
          <div key={index}>
            <div>{element.boardName}</div>
            <Link to={`/board?link=${element.boardLink}`}> + </Link>
            <div>
              {element.postList.map((ele, idx) => {
                return <div key={idx}>{ele.postTitle}</div>;
              })}
            </div>
          </div>
        );
      })}
    </div>
  );
}

export default Main;
