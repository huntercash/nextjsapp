import React from "react";
import UserTable from "./UserTable";
import Link from "next/link";
import { Suspense } from "react";

const UsersPage = async ({ searchParams: { sortOrder } }) => {
  return (
    <>
      <h1>Users</h1>
      <Link href="/users/new" className="btn">
        New User
      </Link>
      <Suspense fallback={<p>Loading...</p>}>
        <UserTable sortOrder={sortOrder} />
      </Suspense>
    </>
  );
};

export default UsersPage;
