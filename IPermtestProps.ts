const textareaRef = React.useRef<HTMLTextAreaElement>(null);

const handleClick = () => {
  const value = textareaRef.current?.value;
  console.log("Text area value:", value);
};

return (
  <>
    <Textarea ref={textareaRef} />
    <Button onClick={handleClick}>Log Value</Button>
  </>
);
