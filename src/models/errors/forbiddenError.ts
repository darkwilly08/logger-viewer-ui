export class ForbiddenError extends Error {
  readonly status: number;

  constructor(message: string) {
    super(message);
    this.name = 'Forbidden';
    this.status = 403;
  }
}
