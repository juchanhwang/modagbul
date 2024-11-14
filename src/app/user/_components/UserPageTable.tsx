import { Table } from 'components';

import styles from './UserPageTable.module.scss';


export const UserPageTable = ({
  list,
  handleOpenUserDrawerModal,
  loading,
  refetchListData,
}) => {
  return (
    <div className={styles.container}>
      <Table>
        {list.map((item) => (
          {/* Table UI */ }
        ))}
      </Table>
    </div>
  );
};
