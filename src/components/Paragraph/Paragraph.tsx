import React, { FC } from 'react';

export type TParagraph = {
  text: string;
  className: any;
};

const hrefRegex = /(<a\s+(?:[^>]*?\s+)?href=(["'])(.*?)\1)/;
const linkRegex = /((["'])>(.*?))<\/a>/;

const linkObjRegex =
  /({{link:___https?:\/\/(www\.)?[-a-zA-Z0-9@:%._\+~#=]{1,256}\.[a-zA-Z0-9()]{1,6}\b([-a-zA-Z0-9()@:%_\+.~#?&//=]*),linkText:___?.*)/;

export const Paragraph: FC<TParagraph> = ({ className, text }) => {
  const getHref = text.replace(hrefRegex, '{{link:___');
  const replaceLinks = getHref.match(linkRegex);
  const replaceSpace = replaceLinks?.[3].replace(' ', '+++');
  const rp = getHref.replace(
    linkRegex,
    replaceSpace ? `,linkText:___${replaceSpace}}}` : '*'
  );

  const rpArray = rp.split(' ');
  const findLinks = rpArray.map((fl) => {
    if (fl.match(linkObjRegex)) {
      const linkArray = fl
        .split(',')
        .map((la) => la.split('___'))
        .map((splitArray) => splitArray[1]);
      const linkObj = {
        link: linkArray[0],
        text: linkArray[1].replace('+++', ' ').replace('}}', ''),
      };
      return linkObj;
    }

    return fl;
  });

  console.log(findLinks);

  return (() => <p className={className.paragraph}>{text}</p>)();
};
