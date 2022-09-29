import { Request, Response } from 'express';

var express = require('express');
var router = express.Router();

interface mainObject {
  boardName: string;
  boardLink: string;
  postList: {
    postTitle: string;
  }[];
}

const mainData = (req: Request, res: Response) => {
  const aa: mainObject[] = [
    {
      boardName: '자유게시판',
      boardLink: 'free',
      postList: [
        {
          postTitle: '게시물 1번',
        },
        {
          postTitle: '게시물 2번',
        },
        {
          postTitle: '게시물 3번',
        },
      ],
    },
    {
      boardName: '유자게시판',
      boardLink: 'yuzu',
      postList: [
        {
          postTitle: '테스트테스트',
        },
      ],
    },
  ];
  res.send(aa);
};

router.get('/', mainData);

router.get('/board', (req: Request, res: Response) => {
  const dummy = {
    boardName: '자유게시판',
    boardLink: 'free',
    postList: [
      { postTitle: '아아아아', postAuthor: '누구누구', postDate: '19:30' },
      { postTitle: 'ㅎㅇㅎㅇ', postAuthor: '누구냥', postDate: '9/25' },
    ],
  };
  const dummy2 = {
    boardName: '유자게시판',
    boardLink: 'yuzu',
    postList: [{ postTitle: 'yuza', postAuthor: 'hello', postDate: '19:30' }],
  };

  if (req.query.link === 'free') res.send(dummy);
  else if (req.query.link === 'yuzu') res.send(dummy2);
  //이 부분을 함수로 따로 빼서 각 일치하는 경우에 맞는 데이터 필터링해서 보내고 싶다
});

module.exports = router;
