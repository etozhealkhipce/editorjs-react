import React, { FC } from 'react';
import { parseText } from '../../utils/parseText';
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
          <thead className={Styles.tr}>
            <tr>
              {heading[0]?.map((text, index) => (
                <th
                  key={`${text}-${index}`}
                  className={
                    index === 0 || index === heading[0].length - 1
                      ? Styles.tdBorderless
                      : Styles.td
                  }
                >
                  {parseText(text)}
                </th>
              ))}
            </tr>
          </thead>
        )}
        <tbody>
          {_content.map((row, index) => (
            <tr key={`row-${index}`} className={Styles.tr}>
              {row.map((text, index) => (
                <td
                  key={`${text}-${index}`}
                  className={
                    index === 0 || index === row.length - 1
                      ? Styles.tdBorderless
                      : Styles.td
                  }
                >
                  {parseText(text)}
                </td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};
