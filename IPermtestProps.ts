import * as React from 'react';
import { Textarea, Button } from '@fluentui/react-components';

const MyComponent = () => {
  const [textValue, setTextValue] = React.useState("");

  const handleClick = () => {
    console.log("Text area value:", textValue);
  };

  return (
    <>
      <Textarea
        value={textValue}
        onChange={(ev, data) => setTextValue(data.value)}
      />
      <Button onClick={handleClick}>Log Value</Button>
    </>
  );
};
