const dataInicial = {
  show_modal: false,
};

const SHOW_MODAL = "SHOW_MODAL";

export default function crudReducer(state = dataInicial, action) {
  switch (action.type) {
    case SHOW_MODAL:
      return { ...state, show_modal: action.payload };
      default:
          return state
  }
}

export const showModalAction = (show) => (dispatch, getState) => {
  dispatch({
    type: SHOW_MODAL,
    payload: show,
  });
};
