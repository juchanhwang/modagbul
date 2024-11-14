'use client';

import classNames from 'classnames';

import React from 'react';

import { Selectbox, FilterHeader } from 'components';

import { UserPageTable } from './_components/UserPageTable';
import { useUserDrawerModal } from './_hooks/useUserDrawerModal';
import { useSearchHandling } from './_hooks/useSearchHandling';
import { useUserListPagination } from './_hooks/useUserListPagination';
import {
  SEARCH_TYPE_LIST,
  USER_PAGE_SORT_LIST,
} from './_utils/constant';
import styles from './page.module.scss';


const UserPage = () => {
  // useSearchHandling hook을 사용하여 검색 관련 상태와 함수를 가져옵니다.
  const { searchQuery, searchType, handleSearchChange } = useSearchHandling();

  // useUserListPagination hook을 사용하여 사용자 목록 데이터를 가져옵니다.
  const {
    data,
    loading,
    refetch: refetchUserListPagination,
  } = useUserListPagination({
    searchQuery,
    searchType,
  });

  // useUserDrawerModal hook을 사용하여 사용자 상세 모달을 열고 닫습니다.
  const { handleOpenUserDrawerModal } = useUserDrawerModal({
      list: data?.users?.items ?? [],
      refetchUserListPagination,
    }
  );

  return (
    <div className={classNames('page', styles.container)}>
      <div className={styles.header}>
        <FilterHeader
          title="회원 관리"
          total={data?.users.total}
          loading={loading}
        >
          <FilterHeader.Filters sortFilterList={USER_PAGE_SORT_LIST}>
            <Selectbox{...register('organizationId')} />
            <Selectbox {...register('marketingAgree')} />
            <Selectbox {...register('hasMemo')} />
          </FilterHeader.Filters>
          <FilterHeader.Search
            value={searchQuery}
            searchTypeValue={searchType}
            searchTypeList={SEARCH_TYPE_LIST}
            onSearchChange={handleSearchChange}
          />
        </FilterHeader>
      </div>
      <div className={styles.table}>
        <UserPageTable
          list={data?.users?.items ?? []}
          handleOpenUserDrawerModal={handleOpenUserDrawerModal}
          loading={loading}
          refetchListData={refetchUserListPagination}
        />
      </div>
    </div>
  );
};

export default UserPage;
