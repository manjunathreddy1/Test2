import * as React from "react";
import { Textarea } from "@fluentui/react-components";

export const MyComponent = () => {
  const [textValue, setTextValue] = React.useState("");

  const handleTextChange = (event: React.ChangeEvent<HTMLTextAreaElement>) => {
    setTextValue(event.target.value);
  };

  const getTextValue = () => {
    alert("Textarea value: " + textValue);
  };

  return (
    <>
      <Textarea
        value={textValue}
        onChange={handleTextChange}
        placeholder="Enter some text"
      />
      <button onClick={getTextValue}>Get Text</button>
    </>
  );
};













import * as React from 'react';
import { Button } from '@fluentui/react-components';
import { ArrowLeft16Filled, ArrowRight16Filled } from '@fluentui/react-icons';

const PaginationButtons = () => {
  const [currentPage, setCurrentPage] = React.useState(1);

  const handlePrevious = () => {
    if (currentPage > 1) {
      setCurrentPage(prev => prev - 1);
    }
  };

  const handleNext = () => {
    setCurrentPage(prev => prev + 1);
  };

  return (
    <div className="flex gap-4 items-center">
      <Button
        appearance="secondary"
        icon={<ArrowLeft16Filled />}
        onClick={handlePrevious}
        disabled={currentPage === 1}
      >
        Previous
      </Button>

      <span>Page {currentPage}</span>

      <Button
        appearance="primary"
        icon={<ArrowRight16Filled />}
        iconPosition="after"
        onClick={handleNext}
      >
        Next
      </Button>
    </div>
  );
};

export default PaginationButtons;
