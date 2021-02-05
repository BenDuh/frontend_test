import {ErrorType} from '../managers/ErrorManager'

export interface ActionInProgressType {
   type: string
}

export interface ActionSuccessType {
   type: string
}

export interface ActionSuccessResponseType<T> {
   type: string
   response: T
}

export interface ActionFailureType {
   type: string
   error?: ErrorType
}