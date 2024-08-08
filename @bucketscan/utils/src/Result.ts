export type Result<T> = Error | T;

export type HttpResponse = {
  apiVersion: string;
  status: number;
  message: string;
  data?: any;
};

export const isError = (result: any): result is HttpResponse | Error => {
  const isHttpResponse =
    typeof result.apiVersion === "string" &&
    typeof result.status === "number" &&
    typeof result.message === "string";

  const isErrorObject = result instanceof Error;

  return isHttpResponse || isErrorObject;
};
