const Game = ({ onFinish }) => {
  return (
    <>
      <p>Game page</p>
      <button onClick={onFinish}>Finish and see results</button>
    </>
  );
};

export default Game;
