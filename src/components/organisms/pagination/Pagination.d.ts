export type PaginationProps = {
  totalPages: number;
  currentPage: number; // Current Page is meant to be a two-way binding from the parent component.
  onPaginateNext: VoidFunction
  onPaginatePrevious: VoidFunction
}
