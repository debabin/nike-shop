export const ICONBUTTON_TEST_IDS = {
  CONTAINER: 'iconButton-container',
  ICON: 'iconButton-icon'
} as const;

export interface IconButtonProps extends ReactTagProps<'button'> {
  icon: React.ReactNode;
}

export const IconButton: React.FC<IconButtonProps> = ({ icon, ...props }) => (
  <button
    {...props}
    className='rounded-full p-[8px] hover:bg-greyLight'
    data-testid={ICONBUTTON_TEST_IDS.CONTAINER}
  >
    {icon && <span data-testid={ICONBUTTON_TEST_IDS.ICON}>{icon}</span>}
  </button>
);
