import React, { useState } from "react";

const useGetUserRole = () => {
  const [role, setRole] = useState("black");
  return role;
};

export default useGetUserRole;
