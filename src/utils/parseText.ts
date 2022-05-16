import parse from 'html-react-parser';

const linkRegex = /<a\s+(?:[^>]*?\s+)?href=(["'])(.*?)\1/gi

export const parseText = (text: string) => {
  const a = text.match(linkRegex)

  console.log(a)

  const parsedText = parse(text)
  return parsedText;
}