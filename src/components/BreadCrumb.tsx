/** @jsxImportSource @emotion/react */
import React from 'react';
import { css } from '@emotion/react';

type BreadcrumbProps = {
  path: string[];
};

const breadcrumbStyle = css`
  display: flex;
  align-items: center;
  font-size: 1.2rem;
  margin-bottom: 20px;
`;

const stepStyle = (isSelected: boolean) => css`
  font-size: ${isSelected ? '0.9rem' : '1.2rem'};
  font-weight: ${isSelected ? 'bold' : 'normal'};
  color: ${isSelected ? 'green' : 'gray'};
  display: flex;
  align-items: center;
  margin-right: 5px;
`;

const separatorStyle = css`
  margin-right: 5px;
`;

const Breadcrumb: React.FC<BreadcrumbProps> = ({ path }) => {
  return (
    <div css={breadcrumbStyle}>
      {path.map((label, index) => {
        const isSelected = index === path.length - 1; // Check if this is the current step
        return (
          <React.Fragment key={index}>
            <span css={stepStyle(isSelected)}>
              {label} {isSelected && '✅'}
            </span>
            {index < path.length - 1 && <span css={separatorStyle}>→</span>}
          </React.Fragment>
        );
      })}
    </div>
  );
};

export default Breadcrumb;
