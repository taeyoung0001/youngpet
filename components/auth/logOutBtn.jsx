const LogOutBtn = () => {
  const logOutHandler = () => {
    if (localStorage.getItem("token")) {
      localStorage.removeItem("token");
    }

    window.location.href = "/";
  };
  return <button onClick={logOutHandler}>로그아웃</button>;
};

export default LogOutBtn;
