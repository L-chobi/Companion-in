const { Router } = require("express");

const router = Router();

const {
  getPosts,
  getPostDetail,
  createPost,
  deletePost,
  updatePost,
} = require("./recentPostController");

//아직 데이터 들어간게 없어서 posts로 경로 변경하여 해당 요청을 안받게 수정했습니다. 원래 경로는 '/'입니다
//어째선지 //해도 주석처리가 안되서 경로를 바꾸는걸로 실행을 막았습니다.
router.get("/abcd", getPosts);

router.get("/", (req, res) => {
  //테스트용 get처리입니다. 나중에 데이터가 추가되거나 html파일이 생기면 위의 처리로 대체합니다.
  res.render("recentPosts.html"); //
});

router.get("/:id", getPostDetail);
router.post("/", createPost);
router.delete("/:id", deletePost);
router.put("/:id", updatePost);

module.exports = router;
