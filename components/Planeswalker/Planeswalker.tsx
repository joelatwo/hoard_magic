type PlaneswalkerMessageProps = {
  turns: string[];
};

export const PlaneswalkerMessage = ({ turns }: PlaneswalkerMessageProps) => {
  return (
    <ol>
      {turns.map((turn, index) => (
        <li key={index}>{turn}</li>
      ))}
    </ol>
  );
};
