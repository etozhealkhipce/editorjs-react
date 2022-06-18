export interface IParagtraph {
  id: string,
  type: "paragraph",
  data: {
    text: string,
  },
};

type TLevel = 1 | 2 | 3 | 4 | 5 | 6;

export interface IHeader {
  id: string,
  type: "header",
  data: {
    text: string,
    level: TLevel,
  },
};

export interface IList {
  id: string,
  type: "list",
  data: {
    style: "unordered" | "ordered",
    items: string[],
  },
};

export interface IDelimeter {
  id: string,
  type: 'delimiter',
  // TODO change
  data?: any,
};

export interface IImage {
  id: string,
  type: 'image',
  data: {
    file: {
      url: string,
    },
    caption?: string,
    withBorder?: boolean,
    stretched?: boolean,
    withBackground?: boolean,
  }
};

export interface ICode {
  id: string,
  type: 'code',
  data: {
    code: string,
  },
};

export interface IRawData {
  id: string,
  type: 'rawTool',
  data: {
    html: string,
  },
};

export interface IQuote {
  id: string,
  type: 'quote',
  data: {
    text: string,
    caption: string,
    alignment: 'left' | 'center' | 'right',
  }
};

export interface ITable {
  id : string,
  type: "table",
  data: {
      withHeadings? : boolean,
      content: []
  }
};

export type TBlocks = (IParagtraph | IHeader | IList | IDelimeter | IImage | ICode | IRawData | IQuote | ITable);

export interface IParser {
  time: number,
  version: string,
  blocks: TBlocks[],
};
