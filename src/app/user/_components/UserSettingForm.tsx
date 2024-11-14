export const UserSettingForm = ({ item, onUpdateUserList }) => {
  const [updateUser] = useUpdateUserMutation();

  await updateUser({
    onCompleted: () => {
      onUpdateUserList?.();
    },
  });

  return (
    <div>UserSettingForm</div>
  );
};