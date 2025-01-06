/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react';

interface ResponseEditorProps {
  currentKey: string;
  onSave: (key: string, response: string) => void;
}

const ResponseEditor: React.FC<ResponseEditorProps> = ({ currentKey, onSave }) => {
  const container = css`
    margin: 20px auto;
    padding: 20px;
    max-width: 400px;
    border: 1px solid #ddd;
    border-radius: 8px;
    box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);
  `;

  const labelStyle = css`
    display: block;
    font-size: 14px;
    margin-bottom: 8px;
    color: #333;
  `;

  const inputStyle = css`
    width: 100%;
    padding: 10px;
    border: 1px solid #ddd;
    border-radius: 4px;
    margin-bottom: 10px;
    font-size: 14px;
  `;

  const buttonStyle = css`
    background-color: #28a745;
    color: white;
    border: none;
    padding: 10px 20px;
    border-radius: 4px;
    cursor: pointer;
    font-size: 14px;
    font-weight: bold;
    transition: background-color 0.3s ease;

    &:hover {
      background-color: #218838;
    }

    &:active {
      background-color: #1e7e34;
      transform: scale(0.98);
    }
  `;

  let responseInput = '';

  return (
    <div css={container}>
      <label css={labelStyle}>Enter Response for Key: {currentKey}</label>
      <textarea
        css={inputStyle}
        rows={3}
        placeholder="Type your response here..."
        onChange={(e) => (responseInput = e.target.value)}
      />
      <button onClick={() => onSave(currentKey, responseInput)} css={buttonStyle}>
        Save Response
      </button>
    </div>
  );
};

export default ResponseEditor;
