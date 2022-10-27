export interface coinResponse {
    code: string;
    codein: string;
    name: string;
    high: string;
    low: string;
    varBid: string;
    pctChange: string;
    bid: string;
    ask: string;
    timestamp: string;
    createDate: string;
}

export type IQuotationApiResponse = {
  [K in string]: coinResponse //eslint-disable-line
}
