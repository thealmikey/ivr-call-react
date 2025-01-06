/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react';

interface PreviewPanelProps {
  responses: Record<string, string>;
  onEdit: (key: string, response: string) => void;
  onDelete: (key: string) => void;
}

const PreviewPanel: React.FC<PreviewPanelProps> = ({ responses, onEdit, onDelete }) => {
  const containerStyle = css`
    margin: 20px auto;
    padding: 20px;
    max-width: 500px;
    border: 1px solid #ddd;
    border-radius: 8px;
    box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);
    background-color: #f9f9f9;
    text-align: left;
  `;

  const listStyle = css`
    list-style-type: none;
    padding: 0;
    margin: 0;
  `;

  const listItemStyle = css`
    margin-bottom: 8px;
    padding: 10px;
    background-color: #fff;
    border: 1px solid #ddd;
    border-radius: 4px;
    box-shadow: 0 1px 4px rgba(0, 0, 0, 0.1);
    font-size: 14px;
    color: #333;
    display: flex;
    justify-content: space-between;
    align-items: center;
  `;

  const buttonStyle = css`
    margin-left: 10px;
    padding: 5px 10px;
    border: none;
    border-radius: 4px;
    cursor: pointer;
    font-size: 12px;
    font-weight: bold;
    transition: background-color 0.2s;

    &:hover {
      background-color: #007bff;
      color: white;
    }
  `;

  const editButtonStyle = css`
    ${buttonStyle};
    background-color: #ffc107;
    &:hover {
      background-color: #e0a800;
    }
  `;

  const deleteButtonStyle = css`
    ${buttonStyle};
    background-color: #dc3545;
    &:hover {
      background-color: #c82333;
    }
  `;

  return (
    <div css={containerStyle}>
      <h2>Preview IVR Responses</h2>
      {Object.keys(responses).length === 0 ? (
        <div>No responses added yet. Start by selecting a key and adding a response!</div>
      ) : (
        <ul css={listStyle}>
          {Object.entries(responses).map(([key, response]) => (
            <li key={key} css={listItemStyle}>
              <span>
                <strong>{key}: </strong>
                {response}
              </span>
              <div>
                <button
                  css={editButtonStyle}
                  onClick={() => onEdit(key, response)}
                >
                  Edit
                </button>
                <button
                  css={deleteButtonStyle}
                  onClick={() => onDelete(key)}
                >
                  Delete
                </button>
              </div>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default PreviewPanel;
