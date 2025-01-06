/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react';

interface DialerProps {
  onKeyPress: (key: string) => void;
}

const Dialer: React.FC<DialerProps> = ({ onKeyPress }) => {
  const dialerContainer = css`
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    gap: 10px;
    max-width: 200px;
    margin: 20px auto;
  `;

  const buttonStyle = css`
    background-color: #007bff;
    color: white;
    border: none;
    border-radius: 50%;
    width: 60px;
    height: 60px;
    font-size: 20px;
    font-weight: bold;
    cursor: pointer;
    display: flex;
    justify-content: center;
    align-items: center;
    transition: background-color 0.3s ease;

    &:hover {
      background-color: #0056b3;
    }

    &:active {
      background-color: #003d80;
      transform: scale(0.95);
    }
  `;

  const keys = ['1', '2', '3', '4', '5', '6', '7', '8', '9', '*', '0', '#'];

  return (
    <div css={dialerContainer}>
      {keys.map((key) => (
        <button
          key={key}
          css={buttonStyle}
          onClick={() => onKeyPress(key)}
        >
          {key}
        </button>
      ))}
    </div>
  );
};

export default Dialer;
