export interface InputProps extends ReactTagProps<'input'> {
  /**
   * icon
   */
  icon?: React.ReactNode;
}

export const INPUT_TEST_IDS = {
  CONTAINER: 'input-container',
  ICON: 'input-icon'
};

/**
 * Input component
 */
export const Input: React.FC<InputProps> = ({ icon, ...props }) => (
  <div>
    {icon && <button data-testid={INPUT_TEST_IDS.ICON}>{icon}</button>}
    <input {...props} />;
  </div>
);
