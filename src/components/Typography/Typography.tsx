import { cva } from 'class-variance-authority';

export type TypographyVariant = 'title-1';
export type TypographyTag = 'h1' | 'h2' | 'span' | 'div';
export interface TypographyProps {
  /**
   * variant
   */
  variant: TypographyVariant;
  /**
   * tag
   */
  tag?: TypographyTag;
  /**
   * children
   */
  children: React.ReactNode;
}

export const TYPOGRAPHY_TEST_IDS = {
  CONTAINER: 'typography-container'
};

const classNames = cva('', {
  variants: {
    variant: {
      'title-1': 'font-nike font-[800] text-[72px]'
    }
  }
});

/**
 * Typography component
 */
export const Typography: React.FC<TypographyProps> = ({ children, variant, tag: Tag = 'div' }) => (
  <Tag className={classNames({ variant })} data-testid={TYPOGRAPHY_TEST_IDS.CONTAINER}>
    {children}
  </Tag>
);
