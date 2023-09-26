import { notFound } from "next/navigation";
import React from "react";

const UserDetailPage = (props) => {
  const { id } = props.params;
  if (id > 10) notFound();
  return <div>UserDetailPage {id}</div>;
};

export default UserDetailPage;
