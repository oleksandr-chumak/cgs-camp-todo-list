import { DetailedHTMLProps, HTMLAttributes } from 'react';

export type DetailedProps<
  Element extends HTMLElement,
  Attributes extends HTMLAttributes<Element> = HTMLAttributes<Element>
> = DetailedHTMLProps<Attributes, Element>;
