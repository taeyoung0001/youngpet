const SelectBar = ({ data }) => {
  console.log(data);
  return (
    <select name="시간(필수)" id="">
      {/* map쓸때 return 좀 제발 넣어라 맨날 까먹냐.. */}
      {data.map((datas) => {
        return (
          <option key={datas.value} value={datas.value}>
            {datas.title}
          </option>
        );
      })}
    </select>
  );
};

export default SelectBar;
