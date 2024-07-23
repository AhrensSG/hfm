export const reducer = (state, action) => {
  switch (action.type) {
    case "SAVE_USER_CONTRACT_INFORMATION":
      return {
        ...state,
        reservationInfo: {
          ...state.reservationInfo,
          userContractInformation: action.payload,
        },
      };
    case "SAVE_USER_CONTRACT_DOCUMENTS":
      return {
        ...state,
        reservationInfo: {
          ...state.reservationInfo,
          [action.payload.id]: action.payload.files,
        },
      };

    default:
      return { ...state };
  }
};
