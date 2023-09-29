import { StyledTextarea } from "./style";

export default function FormArea() {
  return (
    <>
      <StyledTextarea
        aria-label="minimum height"
        minRows={14}
        placeholder="Your Answer"
      />
    </>
  );
}
