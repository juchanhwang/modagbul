import { Sort } from 'types/graphql-types';

import { useEffect, useState } from 'react';

import { useErrorHandling } from 'hooks';

import { useFilterParams } from './useFilterParams';
import { SEARCH_TYPE } from '../_utils/constant';
import { useUserListPaginationQuery } from '../user.generated';

import type { SearchType } from '../_utils/constant';

export const useUserListPagination = ({
  searchQuery,
  searchType = SEARCH_TYPE.NAME,
}: {
  searchQuery?: string;
  searchType: SearchType;
}) => {
  // some codes
  return {
    refetch,
    data,
    loading: loading || refetchLoading,
  };
};
