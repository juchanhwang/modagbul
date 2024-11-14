import { useModal } from 'hooks';

import { DrawerModalLayout } from 'components';

import { UserDrawerModal } from '../_components/UserDrawerModal';
import { useUserDelete } from './useUserDelete';

export const useUserDrawerModal = (
  {
    list,
    refetchUserListPagination,
  }
) => {
  const { openModal, closeModal } = useModal();

  const { deleteUser } = useUserDelete({
    onComplete: async () => {
      await refetchUserListPagination();
    },
  });

  const openUserDrawerModal = () => {
    openModal(DrawerModalLayout, {
      title: '회원 상세 정보',
      moreOptionsButton: [
        {
          label: '회원 삭제',
          onClick: () => deleteUser(id),
        },
        {
          label: '비밀번호 재설정',
          // ...
        }
      ],
      children: (
        <UserDrawerModal
          item={item}
          onUpdateUserList={async () => {
            closeModal(UserDrawerModal);
            refetchUserListPagination();
          }}
        />
      )
    });
  };

  return {
    handleOpenUserDrawerModal: openUserDrawerModal,
  };
};
