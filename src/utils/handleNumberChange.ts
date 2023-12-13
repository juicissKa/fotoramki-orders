export const handleNumberChange = (
  e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
  setFunc: React.Dispatch<React.SetStateAction<string>>
) => {
  const onlyNums = e.target.value.replace(/[^0-9]/g, "");
  setFunc(onlyNums);
};
