import React, { useState } from "react";
import { Button } from "@material-ui/core";

const SearchUsers = (props) => {
  const [search, setSearch] = useState("");
  const onSubmit = (e) => {
    e.preventDefault();
    const userNames = this.props.users.find((user) => {
      return user.name === search;
    });
    console.log(userNames);
  };

  return (
    <form onSubmit={onSubmit}>
      <input
        value={search}
        placeholder="Search users here"
        onChange={(e) => setSearch(e.target.value)}
      />
      <Button type="submit">Search</Button>
    </form>
  );
};

export default SearchUsers;
