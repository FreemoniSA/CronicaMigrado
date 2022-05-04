import React, { useState } from "react";

const useGetUserRole = () => {
  const [role, setRole] = useState("classic");
  return role;
};

export default useGetUserRole;
