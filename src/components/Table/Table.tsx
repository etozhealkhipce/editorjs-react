import React, { FC } from 'react';
import Styles from './Table.module.css';

export type TTable = {
  content: string[][];
  withHeadings: boolean;
};

export const Table: FC<TTable> = ({ withHeadings, content }) => {
  const _content = content.slice();
  const heading = withHeadings ? _content.splice(0, 1) : [];

  return (
    <div className={Styles.wrapper}>
      <table className={Styles.table}>
        {withHeadings && (
          <tr className={Styles.tr}>
            {heading[0]?.map((text, index) => (
              <th key={`${text}-${index}`} className={Styles.td}>
                {text}
              </th>
            ))}
          </tr>
        )}

        {_content.map((row, index) => (
          <tr key={`row-${index}`} className={Styles.tr}>
            {row.map((text, index) => (
              <td key={`${text}-${index}`} className={Styles.td}>
                {text}
              </td>
            ))}
          </tr>
        ))}
      </table>
    </div>
  );
};
