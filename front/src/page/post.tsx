const dummy = {
  postTitle: '글 제목',
  postAuthor: '작성자',
  postDate: '13:58',
  postContent: '글 내용',
  boardLink: 'free',
  reply: [
    {
      replyAuthor: '댓글작성자1',
      replyContent: '댓글내용1',
      replyDate: '댓글작성일1',
    },
    {
      replyAuthor: '댓글작성자2',
      replyContent: '댓글내용2',
      replyDate: '댓글작성일2',
    },
  ],
};
function Post() {
  return (
    <div>
      <div>{dummy.postTitle}</div>
      <div>
        {dummy.postAuthor}, {dummy.postDate}
      </div>
      <div>{dummy.postContent}</div>
      <div>돌아가기 버튼</div>
      <br />
      <br />
      <div>댓글</div>
      {dummy.reply.map((ele) => {
        return (
          <div>
            <div>{ele.replyAuthor}</div>
            <div>{ele.replyContent}</div>
            <div>{ele.replyDate}</div>
          </div>
        );
      })}
    </div>
  );
}
export default Post;
