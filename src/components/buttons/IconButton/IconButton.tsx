export interface IconButtonProps extends ReactTagProps<'button'> {
  /**
   * icon
   */
  icon: React.ReactNode;
}

export const ICONBUTTON_TEST_IDS = {
  CONTAINER: 'iconButton-container',
  ICON: 'iconButton-icon'
} as const;

export const IconButton: React.FC<IconButtonProps> = ({ icon, ...props }) => (
  <button
    {...props}
    className='rounded-full p-[0.375rem] hover:bg-gray-200'
    data-testid={ICONBUTTON_TEST_IDS.CONTAINER}
  >
    {icon && <span data-testid={ICONBUTTON_TEST_IDS.ICON}>{icon}</span>}
  </button>
);
