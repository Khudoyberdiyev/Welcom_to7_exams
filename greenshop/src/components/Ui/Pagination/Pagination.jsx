import React, { useEffect, useState } from "react";
import { Pagination } from "antd";
import usePlantssApi from "../../../service/Plants/usePlantsApi";
import HomeCard from "../HomeCard/HomeCard";

const PaginationAntd = () => {
  const [data, setData] = useState([]);
  const [pagination, setPagination] = useState({
    current: 1,
    pageSize: 9,
    total: 20,
  });

  useEffect(() => {
    fetchData();
  }, [pagination.current]);

  const fetchData = async () => {
    try {
      const res = await usePlantssApi.getPlants();
      setData(res.data);
    } catch (err) {
      console.log(err);
    }
  };

  const handlePaginationChange = (page, pageSize) => {
    setPagination({ ...pagination, current: page });
  };

  const paginatedData = data.slice(
    (pagination.current - 1) * pagination.pageSize,
    pagination.current * pagination.pageSize
  );

  return (
    <div className="flex flex-col justify-between h-[1220px]">
      <div className="grid grid-cols-3 gap-x-8 gap-y-16">
        {paginatedData.map((plant, index) => (
          <HomeCard props={plant} key={index} />
        ))}
      </div>
      <Pagination
        current={pagination.current}
        pageSize={pagination.pageSize}
        total={pagination.total}
        onChange={handlePaginationChange}
        style={{ marginTop: "20px", textAlign: "end", color: "#46A358",}}
      />
    </div>
  );
};

export default PaginationAntd;
