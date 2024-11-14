import styles from './UserDrawerModal.module.scss';
import { UserSettingForm } from './UserSettingForm';


export const UserDrawerModal = ({ item, onUpdateUserList, onCloseModal }) => {
  return (
    <div className={styles.container}>
      <div>
        {item.id}
      </div>
      <div>
        {item.name}
      </div>
      <div>
        {/* ...ui tags */}
      </div>
      <UserSettingForm item={item} onUpdateUserList={onUpdateUserList} />
      <BComponent />
    </div>
  );
};
