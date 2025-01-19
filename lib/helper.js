//로그인 유틸틸

const localGetItemToken = () => {
  useEffect(() => {
    const token = localStorage.getItem("token");
    if (token) {
      try {
        const decodedToken = jwtDecode(token);
        setUser(decodedToken);
        console.log(decodedToken);
      } catch (e) {
        console.log(e);
      }
    }
  }, []);
};

export { localGetItemToken };
