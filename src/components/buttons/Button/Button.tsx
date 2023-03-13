import { classnames } from '@/utils/helpers';

export interface ButtonProps extends ReactTagProps<'button'> {
  /**
   * button label
   */
  children: React.ReactNode;
  /**
   * lloading status
   */
  loading?: boolean;
}

export const BUTTON_TEST_IDS = {
  CONTAINER: 'button-container',
  LABEL: 'button-label',
  LOADER: 'button-loader'
};

/**
 * Button component
 */
export const Button: React.FC<ButtonProps> = ({ children, loading }) => {
  const className = classnames('flex w-full rounded-xl', { loading });

  return (
    <button className={className} data-testid={BUTTON_TEST_IDS.CONTAINER}>
      <span data-testid={BUTTON_TEST_IDS.LABEL}>{children}</span>
      {loading && <span data-testid={BUTTON_TEST_IDS.LOADER} />}
    </button>
  );
};

// write unit test for component button, using jest and react-testing-library and use extisting data test ids const
