export interface Response<T = any> {
  data: T;
}

export interface ResponseWithPagination<T = any> {
  data: T;
  pagination_meta: PaginationResponse;
}

export interface PaginationResponse {
  page: number;
  per_page: number;
  total_page: number;
}
