//next : 들어오는 요청을 여기 줄에 있는 다음 미들웨어로 보내기 위해 호출할 수 있는 특별한 함수
function getSignup(req, res) {
  // ...
}

function getLogin(req, res) {
  // ...
}

module.exports = {
  getSignup: getSignup,
  getLogin: getLogin,
};
