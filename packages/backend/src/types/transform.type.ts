import { CustomSanitizer } from 'express-validator/filter/sanitize';

export type TransformSchema = Record<string, CustomSanitizer>;
