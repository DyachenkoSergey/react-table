import { Headers } from "./Headers";
import { Row } from "./Row";
import { Input } from "./Input";
import { Button } from "../Button";
import { useState } from "react";
import { Users } from "../Users/users";

export const Table = () => {
  const [inputValue, setInputValue] = useState("");
  const [userState, setUserState] = useState(Users);

  const userItems = userState.map((user) => <Row key={user.id} {...user} />);

  const filter = () => {
    setUserState(userState.filter((user) => user.name.includes(inputValue)));
  };

  const onInputChange = (e) => {
    setInputValue(e.target.value);
  };

  return (
    <div>
      <Headers />
      <Input value={inputValue} onChange={onInputChange} />
      <Button onClick={filter} />
      {userItems}
    </div>
  );
};
