import type { AppState } from "@appsmith/reducers";

export const getIsFetchingApplications = (state: AppState): boolean =>
  state.ui.selectedWorkspace.loadingStates.isFetchingApplications;

export const getApplicationsOfWorkspace = (state: AppState) => {
  return state.ui.selectedWorkspace.applications;
};

export const getAllUsersOfWorkspace = (state: AppState) =>
  state.ui.selectedWorkspace.users;

export const isFetchingUsersOfWorkspace = (state: AppState): boolean =>
  state.ui.selectedWorkspace.loadingStates.isFetchingAllUsers;

export const selectedWorkspaceLoadingStates = (state: AppState) => {
  return {
    isFetchingApplications:
      state.ui.selectedWorkspace.loadingStates.isFetchingApplications,
    isFetchingAllUsers:
      state.ui.selectedWorkspace.loadingStates.isFetchingAllUsers,
    deletingUserInfo: state.ui.selectedWorkspace.users.filter(
      (el) => el.isDeleting,
    )[0],
    roleChangingUserInfo: state.ui.selectedWorkspace.users.filter(
      (el) => el.isChangingRole,
    )[0],
  };
};