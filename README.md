# modagbul

## 코드베이스 설명

위 코드는 유저 목록을 보여주는 페이지입니다. 유저 목록을 보여주는 페이지는 다음과 같은 기능을 가지고 있습니다.

- 유저 목록을 보여줍니다.
- 유저 목록을 검색할 수 있습니다.
- 유저 목록을 정렬할 수 있습니다.
- 유저 목록을 필터링할 수 있습니다.
- 특정 유저를 드로어 모달에서 상세 정보를 볼 수 있습니다.
- 드로어 모달에서는 유저 정보를 수정할 수 있습니다.
- 드로어 모달에서는 모달 헤더 더보기 옵션 버튼을 클릭하여 유저를 삭제할 수 있습니다.

## 구조 설명

위 코드는 다음과 같은 구조로 이루어져 있습니다.

### 유저 페이지의 레이아웃 및 라우팅 (`app > user > *`)

- `app > user > page.tsx` : 유저 페이지 컴포넌트입니다.

### 공통 컴포넌트 (`app > _components > *`)

- `app > _components > FilterHeader` : 페이지의 목록을 필터링할 수 있는 헤더 컴포넌트입니다.
- `app > _components > Selectbox` : 필터링을 위한 셀렉트 박스 컴포넌트입니다.
- `app > _components > DrawerModalLayout` : 드로어 모달 레이아웃 컴포넌트입니다.

### 유저 페이지의 비즈니스 로직을 포함하는 컴포넌트 (`app> user > _components > *`)

- `pages > _components > UserDrawerModal` : 특정 유저를 조회하는 드로어 모달 컴포넌트입니다.
- `pages > _components > UserSettingForm` : UserDrawerModal 내에서 유저 정보 수정 폼 컴포넌트입니다.
- `pages > _components > UserPageTable` : 유저 목록을 보여주는 테이블 컴포넌트입니다.

### 유저 페이지의 비즈니스 로직을 포함하는 훅 (`app> user > _hooks > *`)

- `pages > _hooks > useUserDrawerModal` : 유저 드로어 모달을 관리하는 훅입니다.
- `pages > _hooks > useUserDelete` : 유저 삭제 api를 호출하고 관리하는 훅입니다.
- `pages > _hooks > useSearchHandling` : 유저 목록 검색을 관리하는 훅입니다.
- `pages > _hooks > useUserListPagination` : 유저 목록 페이지네이션 api를 호출하고 관리하는 훅입니다.

## 폴더 구조 및 파일 분리에 대한 고민

### 폴더 구조에 대한 고민

보편적으로 React 혹은 Next.js 프로젝트에서는 하위의 폴더 구조를 가져간다는 것을 알고있습니다.

`src > [pages/app, components, hooks, utils, ...]`
그리고, 보편적으로 page를 제외한 src 하위의 폴더들은 공통으로 쓰이는 값들로 구성하는 것으로 알고 있고요. (ex. GlobalNavigation, Footer, useModal, ...)
그렇다면, Page 하위에서 비즈니스 로직이 포함된 컴포넌트, 훅, 유틸 등은 어디에서/어떻게 관리해야 협업 또는 효율 측면에서 좋은 코드라고 생각하시는지가 궁금합니다.

개인적으로는, pages 하위에 비즈니스 로직을 포함한 파일들은

`(pages > _components > Acomponent)`

`(pages > _hooks > Ahooks)`

이러한 형태로 관리하고있습니다. 딱 맞는 정답은 없겠지만 토스에서는 어떠한 방식으로 폴더 및 파일을 관리하는지 너무너무 궁금합니다!

### 컴포넌트 및 훅의 분리에 대한 고민

개발을 하다보면, 기능이 작아서 하나의 기능 단위로 정말 아름답게 컴포넌트/훅들이 분리되는 경우가 있습니다. 하지만, 늘 아름답지만은 않은 것 같습니다.

`page > [useUserDrawerModal.tsx] > [[UserDrawerModal.tsx > UserSettingForm.tsx] , BComponent]`

`page > useUserDrawerModal.tsx > useUserDelete.tsx`

이러한 형태로 분리가 될 때가 있습니다. 기능을 작은 단위로 나눠서 분리하면 코드가 간결해지고 가독성이 높아지며, 잘 분리된 것만같은 기분이(?) 듭니다. 하지만, 단계가 깊어질 수록 내부에 있는 코드와 바깥
코드와의 컨텍스트를 이해하기가 어려워진다는 문제가 생겼습니다. 정말 심각할 경우에는(잘못짠 코드일 확률이 높겠지만) 서로가 서로를 호출하는 코드가 생길 경우도 있고요.
토스에서는 복잡한 컴포넌트들을 어떠한 방식으로 관리하는지, 혹은 어떠한 규칙으로 관리하는지가 너무너무 궁금합니다!!

### 참고사항

위 프로젝트의 코드는 복잡한 코드를 작은 부분으로 압축해 놓은 코드입니다. 저의 고민이 잘 녹아서 전달이 되었을지 모르겠습니다.
혹시나 더 자세한 설명이 필요하시다면

`ghkdwncks96@gmail.com`

으로 연락주시면 감사하겠습니다.

```