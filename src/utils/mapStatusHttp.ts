export default function mapStatusHTTP(status: string): number {
  const statusHTTPMap: Record<string, number> = {
    SUCCESS: 200,
    SUCCESS_NO_CONTENT: 204,
    CREATED: 201,
    INVALID_DATA: 400,
    UNAUTHORIZED: 401,
    NOT_FOUND: 404,
    CONFLICT: 409,
    UNABLE_TO_PROCESS: 422,
  };
  return statusHTTPMap[status] ?? 500;
}