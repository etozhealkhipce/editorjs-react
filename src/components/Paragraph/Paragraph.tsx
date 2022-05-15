import React, { FC } from 'react';

export type TParagraph = {
  text: string;
  className: any;
};

const hrefRegex = /(<a\s+(?:[^>]*?\s+)?href=(["'])(.*?)\1)/;
const a = /((["'])>(.*?))<\/a>/;

export const Paragraph: FC<TParagraph> = ({ className, text }) => {
  const getHref = text.replace(hrefRegex, '{{ link: ');
  const replaceLinks = getHref.match(a);
  const rp = getHref.replace(
    a,
    replaceLinks ? `, linkText: ${replaceLinks?.[3]} }}` : '*'
  );
  console.log(rp);

  return (() => <p className={className.paragraph}>{text}</p>)();
};
