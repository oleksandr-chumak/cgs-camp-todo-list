import { PAGINATION_MARGIN, RADIUS } from '../consts/button-pagination.const';

export class Pagination {
  private readonly currentPage: number;

  private readonly totalPages: number;

  constructor(currentPage: number, totalPages: number) {
    this.currentPage = currentPage;
    this.totalPages = totalPages;
  }

  private getPagesWithinRadius(): number[] {
    const start = Math.max(1, this.currentPage - RADIUS);
    const end = Math.min(this.totalPages, this.currentPage + RADIUS);
    const length = end - start + 1;
    return Array.from({ length }, (_, index) => start + index);
  }

  private getStartPaginationItems(): number[] {
    if (this.currentPage < PAGINATION_MARGIN) {
      return Array.from({ length: PAGINATION_MARGIN }, (_, index) => index + 1);
    }
    if (
      this.currentPage >= PAGINATION_MARGIN &&
      this.totalPages - this.currentPage >= PAGINATION_MARGIN - RADIUS
    ) {
      return [1, 0, ...this.getPagesWithinRadius()];
    }
    return [1, 0];
  }

  private getEndPaginationItems(): number[] {
    if (this.totalPages - this.currentPage < PAGINATION_MARGIN - RADIUS) {
      return Array.from(
        { length: PAGINATION_MARGIN },
        (_, index) => this.totalPages - PAGINATION_MARGIN + index + 1
      );
    }
    return [0, this.totalPages];
  }

  getPaginationItems(): number[] {
    if (this.totalPages <= PAGINATION_MARGIN + 2) {
      return Array.from({ length: this.totalPages }, (_, index) => index + 1);
    }

    const startPaginationItems: number[] = this.getStartPaginationItems();

    const endPaginationItems: number[] = this.getEndPaginationItems();

    return [...startPaginationItems, ...endPaginationItems];
  }
}
