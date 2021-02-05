import ActionTypes from './Types'
import * as CommonRequestTypes from './CommonRequestTypes'

import CitiesResponse from '../models/CitiesResponse'
import { ErrorType } from '../managers/ErrorManager'

export interface GetCitiesActionRequestType {
    type: string
    indexPaginate?: number
}

const GetCitiesRequest = (indexPaginate?: number): GetCitiesActionRequestType => {
   return {
      type: ActionTypes.GetCitiesAction.GetCitiesRequest,
      indexPaginate: indexPaginate
   }
}

const GetCitiesInProgress = (): CommonRequestTypes.ActionInProgressType => {
   return {
      type: ActionTypes.GetCitiesAction.GetCitiesInProgress,
   }
}

const GetCitiesSuccess = (
   response: CitiesResponse,
): CommonRequestTypes.ActionSuccessResponseType<CitiesResponse> => {
   return {
      type: ActionTypes.GetCitiesAction.GetCitiesSuccess,
      response,
   }
}

const GetCitiesFailure = (
   error: ErrorType
): CommonRequestTypes.ActionFailureType => {
   return {
      type: ActionTypes.GetCitiesAction.GetCitiesFailure,
      error,
   }
}

const GetCitiesActions = {
    GetCitiesRequest,
    GetCitiesInProgress,
    GetCitiesSuccess,
    GetCitiesFailure
}

export default GetCitiesActions
