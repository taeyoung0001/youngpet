import classes from "./page.module.scss";
import GetReserve from "@/components/common/getReserve";

const ReserveCategoryPage = ({ params }) => {
  return (
    <>
      <GetReserve params={params} collection="walk" />
    </>
  );
};

export default ReserveCategoryPage;
