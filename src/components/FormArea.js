import { StyledTextarea } from "./style";

export default function FormArea({setSubmittedAnswer}) {
  return (
    <>
      <StyledTextarea
        aria-label="minimum height"
        minRows={14}
        placeholder="Your Answer"
        onChange={(e)=>setSubmittedAnswer(e.target.value)}
      />
    </>
  );
}
