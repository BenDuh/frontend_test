enum GetCitiesAction {
  GetCitiesRequest = "GETCITIES_REQUEST",
  GetCitiesInProgress = "GETCITIES_INPROGRESS",
  GetCitiesSuccess = "GETCITIES_SUCCESS",
  GetCitiesFailure = "GETCITIES_FAILURE",
}

enum GetCitiesSearchAction {
    GetCitiesSearchRequest = "GETCITIESSEARCH_REQUEST",
    GetCitiesSearchInProgress = "GETCITIESSEARCH_INPROGRESS",
    GetCitiesSearchSuccess = "GETCITIESSEARCH_SUCCESS",
    GetCitiesSearchFailure = "GETCITIESSEARCH_FAILURE",
  }

const ActionTypes = {
  GetCitiesAction,
  GetCitiesSearchAction
};

export default ActionTypes;
