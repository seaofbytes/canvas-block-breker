export function detectCollision(ball, gameObject) {
  //check collision with paddle
  let bottomOfBall = ball.position.y + ball.size;
  let topOfBall = ball.position.y;

  let topOfObject = gameObject.position.y;
  let leftSideOfObject = gameObject.position.x;
  let rightSideofObject = gameObject.position.x + gameObject.width;
  let bottomOfObject = gameObject.position.y + gameObject.height;

  if (
    bottomOfBall >= topOfObject &&
    topOfBall <= bottomOfObject &&
    ball.position.x >= leftSideOfObject &&
    ball.position.x + ball.size <= rightSideofObject
  ) {
    return true;
  } else {
    return false;
  }
}

// STOPPED AT 53:00
// https://www.youtube.com/watch?v=3EMxBkqC4z0
