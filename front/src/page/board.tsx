import { useEffect, useState } from 'react';
import '../style/page.css';

interface boardObject {
  boardName: string;
  boardLink: string;
  postList: { postTitle: string; postAuthor: string; postDate: string }[];
}

const dummy = {
  boardName: '자유게시판',
  boardLink: 'free',
  postList: [
    { postTitle: '게시물1', postAuthor: '작성자1', postDate: '19:30' },
    { postTitle: '게시물2', postAuthor: '작성자2', postDate: '9/25' },
  ],
};

function Board() {
  const [data, setData] = useState<boardObject>();
  const queryString = window.location.search;

  useEffect(() => {
    fetch(`http://127.0.0.1:3000/board${queryString}`)
      .then((res) => {
        return res.json();
      })
      .then((res) => {
        setData(res);
      });
  }, []);

  return (
    <div className='page'>
      <div>{data?.boardName}</div>
      <div>글쓰기 버튼</div>
      {data?.postList.map((ele, index) => {
        return (
          <div key={index}>
            <div>{ele.postTitle}</div>
            <div>{ele.postAuthor}</div>
            <div>{ele.postDate}</div>
          </div>
        );
      })}
    </div>
  );
}
export default Board;
