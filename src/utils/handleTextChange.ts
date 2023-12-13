export const handleTextChange = (
  e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
  setFunc: React.Dispatch<React.SetStateAction<string>>
) => {
  setFunc(e.target.value);
};
