export enum ErrorType {
  generic,
  getCities,
}

export const ErrorManager = (errorType: ErrorType) => {
  switch (errorType) {
    case ErrorType.generic:
      return "Une erreur s'est produite";
    case ErrorType.getCities:
      return "Nous n'arrivons pas à afficher le resultat de votre recherche. Veuillez ressayer ulterieurement.";
  }
};
