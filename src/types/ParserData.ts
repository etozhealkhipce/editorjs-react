import { TCodeData } from 'components/Code';
import { TDelimiterData } from 'components/Delimiter';
import { THeaderData } from 'components/Header';
import { TImageData } from 'components/Image';
import { TListData } from 'components/List';
import { TParagraphData } from 'components/Paragraph';
import { TQuoteData } from 'components/Quote';
import { TRawToolData } from 'components/RawTool';
import { TTableData } from 'components/Table';

import {
  CODE_KEY,
  DELIMITER_KEY,
  HEADER_KEY,
  IMAGE_KEY,
  LIST_KEY,
  PARAGRAPH_KEY,
  QUOTE_KEY,
  RAW_TOOL_KEY,
  TABLE_KEY,
} from '../utils/componentKeys';

type TCommonType<T, K> = {
  id: string;
  type: T;
  data: K;
};

type TParagraph = TCommonType<typeof PARAGRAPH_KEY, TParagraphData>;
type THeader = TCommonType<typeof HEADER_KEY, THeaderData>;
type TList = TCommonType<typeof LIST_KEY, TListData>;
type TDelimeter = TCommonType<typeof DELIMITER_KEY, TDelimiterData>;
type TImage = TCommonType<typeof IMAGE_KEY, TImageData>;
type TCode = TCommonType<typeof CODE_KEY, TCodeData>;
type TRawData = TCommonType<typeof RAW_TOOL_KEY, TRawToolData>;
type TQuote = TCommonType<typeof QUOTE_KEY, TQuoteData>;
type TTable = TCommonType<typeof TABLE_KEY, TTableData>;

type TBlock =
  | TParagraph
  | THeader
  | TList
  | TDelimeter
  | TImage
  | TCode
  | TRawData
  | TQuote
  | TTable;

export type IParser = {
  time: number;
  version: string;
  blocks: TBlock[];
};
